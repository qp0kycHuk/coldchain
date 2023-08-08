function clickHandler(event: MouseEvent) {
  const target = (event.target as HTMLElement).closest('[data-scroll]')

  if (!target) return

  const href = target?.getAttribute('data-scroll')

  if (!href) return
  if (href[0] != '#' || href == '#') return

  const element = document.querySelector(href)

  if (!element) return

  event.preventDefault()
  const offset = 0
  const bodyRect = document.body.getBoundingClientRect().top
  const elementRect = element.getBoundingClientRect().top
  const elementPosition = elementRect - bodyRect
  const offsetPosition = elementPosition - offset

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth',
  })
}

const init = () => {
  document.addEventListener('click', clickHandler)
}

const destroy = () => {
  document.removeEventListener('click', clickHandler)
}

export default { init, destroy }
