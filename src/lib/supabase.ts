
import { createClient } from '@supabase/supabase-js';

// These should be updated with your Supabase URL and anon key
// For now using placeholder values
const supabaseUrl = 'https://your-supabase-url.supabase.co';
const supabaseAnonKey = 'your-supabase-anon-key';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
