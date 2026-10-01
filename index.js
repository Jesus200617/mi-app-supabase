import { createClient } from '@supabase/supabase-js'
const SUPABASE_URL = 'https://vkwzwujgxlouazmotqpe.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZrd3p3dWpneGxvdWF6bW90cXBlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODg4OTU1OTcsImV4cCI6MjEwNDQ3MTU5N30.5ySc_QRihWdHi_eI9KP3I7Y7iUT6UBtSARnL2r2iyjM';
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)


async function obtenerEstudiantes() {
 const { data, error } = await supabase
 .from('estudiantes')
 .select('*')
 if (error) {
 console.log('Error:', error)
 } else {
 console.log('Datos:', data)
 }
}
obtenerEstudiantes();
