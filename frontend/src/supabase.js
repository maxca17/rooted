import { createClient } from '@supabase/supabase-js';

const supabaseUrl =  'https://djsdueddhqoqeqhrstln.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRqc2R1ZWRkaHFvcWVxaHJzdGxuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjUwNTIwMzMsImV4cCI6MjA0MDYyODAzM30.BpL6gFri3vJTcjbGT-3GlZyZFb3I4ejy8CoQInkN7GQ';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;
