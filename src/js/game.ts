const init = (): void => {
  const game = document.querySelector('*[data-game]') as HTMLElement

  if (!game) return

  const content = game.querySelector('*[data-game-content]') as HTMLElement
  const bottom = game.querySelector('*[data-game-bottom]') as HTMLElement
  const icon = game.querySelector('*[data-game-icon]') as HTMLImageElement
  const result = game.querySelector('*[data-game-result]') as HTMLSpanElement
  const button = game.querySelector('*[data-game-button]') as HTMLButtonElement
  const victory = String(result.dataset.victory)
  const loss = String(result.dataset.loss)
  const draw = String(result.dataset.draw)
  const cells: HTMLButtonElement[] = []
  let player = 'X'
  let over = false

  const checkWin = (player: string): boolean => {
    const combinations: number[][] = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]

    return combinations.some((combination: number[]): boolean => {
      return combination.every((index: number): boolean => cells[index].textContent === player)
    })
  }

  const checkDraw = (): boolean => {
    return cells.every((cell: HTMLButtonElement): boolean => cell.textContent !== '')
  }

  const checkCell = (cell: HTMLButtonElement): void => {
    const playerResult = cell.querySelector('span') as HTMLSpanElement

    playerResult.textContent = player
    cell.classList.add('pointer-events-none')
    cell.setAttribute('disabled', 'disabled')
  }

  const checkResult = (src: string, text: string): void => {
    bottom.classList.remove('hidden')
    bottom.classList.add('flex')
    icon.src = String(icon.dataset.gameIcon + src)
    result.innerText = text
  }

  const makeBotMove = (): void => {
    const emptyCells: HTMLButtonElement[] = cells.filter((cell: HTMLButtonElement): boolean => cell.textContent === '')

    if (emptyCells.length > 0 && player === '0') {
      const randomIndex: number = Math.floor(Math.random() * emptyCells.length)
      const cell = emptyCells[randomIndex] as HTMLButtonElement

      checkCell(cell)

      if (checkWin(player)) {
        checkResult('img/emoji.svg', loss)
        over = true
      } else if (checkDraw()) {
        checkResult('img/like.svg', draw)
        over = true
      } else {
        player = 'X'
      }
    }
  }

  for (let i = 0; i < 9; i++) {
    const cell = document.createElement('button') as HTMLButtonElement

    cell.classList.add('border', 'border-white', 'border-solid', 'bg-white', 'bg-opacity-40', 'before:content-[\'\']', 'before:block', 'before:w-full', 'before:pt-[100%]', 'cursor-pointer', 'duration-200', 'hover:bg-opacity-20', 'relative')
    cell.innerHTML = '<span class="absolute inset-0 flex items-center justify-center text-5xl md:text-6xl text-center"></span>'
    cells.push(cell)
    content.appendChild(cell)

    cell.addEventListener('click', ((): void => {
      if (cell.textContent === '' && player === 'X' && !over) {
        checkCell(cell)

        if (checkWin(player)) {
          checkResult('img/confetti.svg', victory)
          over = true
        } else if (checkDraw()) {
          checkResult('img/like.svg', draw)
          over = true
        } else {
          player = '0'
          setTimeout(makeBotMove, 500)
        }
      }
    }) as EventListener)
  }

  button.addEventListener('click', ((): void => {
    window.location.reload()
  }) as EventListener)
}

export default { init }