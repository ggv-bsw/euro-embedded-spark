
-- Add unique constraint for ON CONFLICT to work
ALTER TABLE public.rate_limit_tracking
ADD CONSTRAINT rate_limit_tracking_ip_endpoint_unique UNIQUE (ip_address, endpoint);

-- Recreate the function (same as before, now the constraint exists)
CREATE OR REPLACE FUNCTION public.check_rate_limit(
  p_ip text,
  p_endpoint text,
  p_max integer,
  p_window_ms bigint
)
RETURNS boolean
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
DECLARE
  v_count integer;
  v_window interval;
BEGIN
  v_window := (p_window_ms || ' milliseconds')::interval;

  -- Clean up old entries outside the window
  DELETE FROM public.rate_limit_tracking
  WHERE ip_address = p_ip
    AND endpoint = p_endpoint
    AND updated_at < NOW() - v_window;

  -- Insert or increment atomically
  INSERT INTO public.rate_limit_tracking (ip_address, endpoint, submission_count, created_at, updated_at)
  VALUES (p_ip, p_endpoint, 1, NOW(), NOW())
  ON CONFLICT (ip_address, endpoint)
  DO UPDATE SET
    submission_count = CASE
      WHEN rate_limit_tracking.updated_at < NOW() - v_window THEN 1
      ELSE rate_limit_tracking.submission_count + 1
    END,
    updated_at = NOW()
  RETURNING submission_count INTO v_count;

  RETURN v_count <= p_max;
END;
$$;
