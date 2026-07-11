async function loadFiles() {
  const { data, error } = await supabaseClient
    .from('documents')
    .select('*')
    .eq('file_type', 'picture')
    .order('created_at', { ascending: false })

  if (error) {
    console.error(error)
    return
  }

  const container = document.getElementById('file-list')
  container.innerHTML = data.map(file =>
    `<div><h3>${file.title}</h3><img src="${file.file_url}" width="200"></div>`
  ).join('')
}

loadFiles()
