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
  container.innerHTML = data.map(file => `
    <figure class="gallery-item" data-cat="campus" data-reveal>
      <button data-lightbox="${file.file_url}" data-caption="${file.title}" style="all:unset;cursor:pointer;display:block;width:100%;">
        <img src="${file.file_url}" alt="${file.title}" loading="lazy">
        <figcaption><span class="tag">${file.title}</span></figcaption>
      </button>
    </figure>
  `).join('')
}

loadFiles()
