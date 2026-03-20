
-- Create job_applications table
CREATE TABLE public.job_applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  job_title text NOT NULL,
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  message text,
  cv_filename text NOT NULL,
  cv_storage_path text NOT NULL,
  created_at timestamp with time zone NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.job_applications ENABLE ROW LEVEL SECURITY;

-- Allow edge function (service role) to insert, no public access
CREATE POLICY "Service role can manage job applications"
  ON public.job_applications
  FOR ALL
  TO public
  USING (false);

-- Create storage bucket for CVs
INSERT INTO storage.buckets (id, name, public)
VALUES ('job-applications', 'job-applications', false);

-- Allow service role to upload to the bucket (no public access)
CREATE POLICY "Service role can upload CVs"
  ON storage.objects
  FOR INSERT
  TO public
  WITH CHECK (bucket_id = 'job-applications' AND false);
