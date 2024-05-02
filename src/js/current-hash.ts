const init = (): void => {
  const hash: string = window.location.hash.substr(1)
  const cover = document.querySelector('*[data-hash-cover]')

  if (hash && hash !== '' && cover) {
    const contents = cover.querySelectorAll('*[data-tab-content]') as NodeListOf<Element>
    let empty: number = contents.length

    contents.forEach((element: Element): void => {
      const content = element as HTMLElement
      const link = cover.querySelector(`*[data-tab-link="${content.dataset.tabContent}"]`) as HTMLElement

      if (content.querySelector(`#${hash}`)) {
        content.classList.add('tab-active')
        link.classList.add('tab-active')
      } else {
        content.classList.remove('tab-active')
        link.classList.remove('tab-active')
        empty--
      }
    })

    if (empty === 0) {
      const content = contents[0] as HTMLElement
      const link = cover.querySelector(`*[data-tab-link="${content.dataset.tabContent}"]`) as HTMLElement

      content.classList.add('tab-active')
      link.classList.add('tab-active')
    }
  }
}

export default { init }