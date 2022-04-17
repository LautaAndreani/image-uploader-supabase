import { createClient } from '@supabase/supabase-js'

const supabaseUrl:string = 'https://gypthhillhspwwnxhthb.supabase.co'
const supabaseKey = import.meta.env.VITE_REACT_SUPABASE_KEY

export const supabase:any = createClient(supabaseUrl, supabaseKey)