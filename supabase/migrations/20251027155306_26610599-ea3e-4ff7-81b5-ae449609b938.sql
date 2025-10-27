-- Create table for rate limiting contact form submissions
CREATE TABLE IF NOT EXISTS public.rate_limit_tracking (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  ip_address TEXT NOT NULL,
  endpoint TEXT NOT NULL DEFAULT 'contact_form',
  submission_count INTEGER NOT NULL DEFAULT 1,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.rate_limit_tracking ENABLE ROW LEVEL SECURITY;

-- Create policy to allow the service role to manage rate limits
-- No public access needed since this is only managed by edge functions
CREATE POLICY "Service role can manage rate limits"
ON public.rate_limit_tracking
FOR ALL
USING (false);

-- Create index for efficient lookups
CREATE INDEX idx_rate_limit_ip_endpoint ON public.rate_limit_tracking(ip_address, endpoint, created_at DESC);

-- Create function to clean up old rate limit records (older than 24 hours)
CREATE OR REPLACE FUNCTION public.cleanup_old_rate_limits()
RETURNS void AS $$
BEGIN
  DELETE FROM public.rate_limit_tracking
  WHERE created_at < NOW() - INTERVAL '24 hours';
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;