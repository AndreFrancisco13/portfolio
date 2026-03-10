const projectImageModules = import.meta.glob('../assets/images/projects/**/*.{png,jpg,jpeg,webp,avif,svg}', {
  eager: true,
  import: 'default',
})

function normalizeProjectImagePath(path) {
  if (!path) return ''

  if (path.startsWith('src/assets/images/projects/')) {
    return `../assets/images/projects/${path.replace('src/assets/images/projects/', '')}`
  }

  if (path.startsWith('/src/assets/images/projects/')) {
    return `../assets/images/projects/${path.replace('/src/assets/images/projects/', '')}`
  }

  if (path.startsWith('/assets/images/projects/')) {
    return `../assets/images/projects/${path.replace('/assets/images/projects/', '')}`
  }

  if (path.startsWith('../assets/images/projects/')) {
    return path
  }

  return path
}

export function resolveProjectImage(path) {
  const normalized = normalizeProjectImagePath(path)
  return projectImageModules[normalized] || ''
}
