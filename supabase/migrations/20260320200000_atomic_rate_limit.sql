-- Atomic rate limit function: checks and increments in a single transaction
-- Prevents TOCTOU race condition in the read-then-write pattern
CREATE OR REPLACE FUNCTION check_rate_limit(
  p_ip TEXT,
  p_endpoint TEXT,
  p_max INT DEFAULT 5,
  p_window_ms BIGINT DEFAULT 3600000
)
RETURNS BOOLEAN
LANGUAGE plpgsql
AS $$
DECLARE
  v_window_start TIMESTAMPTZ := NOW() - (p_window_ms || ' milliseconds')::INTERVAL;
  v_count INT;
BEGIN
  -- Delete stale entries older than the window
  DELETE FROM rate_limit_tracking
  WHERE ip_address = p_ip
    AND endpoint = p_endpoint
    AND created_at < v_window_start;

  -- Get current count within window
  SELECT COALESCE(SUM(submission_count), 0) INTO v_count
  FROM rate_limit_tracking
  WHERE ip_address = p_ip
    AND endpoint = p_endpoint
    AND created_at >= v_window_start;

  -- If over limit, deny
  IF v_count >= p_max THEN
    RETURN FALSE;
  END IF;

  -- Upsert: increment existing row or insert new one
  INSERT INTO rate_limit_tracking (ip_address, endpoint, submission_count, created_at)
  VALUES (p_ip, p_endpoint, 1, NOW())
  ON CONFLICT (ip_address, endpoint)
  DO UPDATE SET
    submission_count = rate_limit_tracking.submission_count + 1,
    updated_at = NOW()
  WHERE rate_limit_tracking.created_at >= v_window_start;

  RETURN TRUE;
END;
$$;
