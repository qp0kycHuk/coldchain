const copyLink = (event: Event): void => {
  const copy = (event.target as HTMLButtonElement).closest('[data-copy]') as HTMLElement
  const input = copy.querySelector('*[data-copy-input]') as HTMLInputElement
  const text = copy.querySelector('*[data-copy-text]') as HTMLElement

  setTimeout((): void => {
    input.select()
    document.execCommand('copy')
    copy.classList.add('pointer-events-none')
    text.classList.remove('invisible', 'opacity-0')

    setTimeout((): void => {
      copy.classList.remove('pointer-events-none')
      text.classList.add('invisible', 'opacity-0')
    }, 500)
  }, 100)
}

const init = (): void => {
  document.addEventListener('click', ((event: Event): void => {
    if ((event.target as HTMLButtonElement).closest('[data-copy-button]')) copyLink(event)
  }) as EventListener)
}

export default { init }