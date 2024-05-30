import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://aglmyfevswjhymauqvlt.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFnbG15ZmV2c3dqaHltYXVxdmx0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTUwODAzMDIsImV4cCI6MjAzMDY1NjMwMn0.AxsY8VsDP6ZOKIcHF8H4DRHvl7kUCXyLYfcQomNDwMY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
