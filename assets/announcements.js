async function loadFiles() {
  const { data, error } = await supabaseClient
    .from('documents')
    .select('*')
    .eq('file_type', 'document')
    .order('created_at', { ascending: false })

  if (error) {
    console.error(error)
    return
  }

  const container = document.getElementById('file-list')
  container.innerHTML = data.map(file =>
    `<div><h3>${file.title}</h3><a href="${file.file_url}" target="_blank">Download</a></div>`
  ).join('')
}

loadFiles()
