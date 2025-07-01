import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ifuxaomoqaeexoqdarfs.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlmdXhhb21vcWFlZXhvcWRhcmZzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg3NTcwMzUsImV4cCI6MjA2NDMzMzAzNX0.JW2lF4BAvjf6cQngwI4hNSTA6fsOTSgLxEIvdt6mTmw";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;
