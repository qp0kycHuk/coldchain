import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

function init() {
  gsap.registerPlugin(ScrollTrigger)
  window.addEventListener('load', () => {
    document.body.classList.add('loaded')

    animationsInit()
    hover3dInit()
  })

  window.addEventListener('beforeunload', () => {
    document.body.classList.remove('loaded')
  })
}

const animations: Record<string, gsap.TweenVars> = {
  ['fade-in-up']: {
    opacity: 0,
    y: 100,
  },
  ['fade-in-left']: {
    opacity: 0,
    x: -100,
  },
  ['fade-in-right']: {
    opacity: 0,
    x: 100,
  },
}

function animationsInit() {
  gsap.from('.started-circle', {
    scale: 3,
    opacity: 1,
    duration: 2,
  })

  gsap.fromTo(
    '.started-logo',
    {
      scale: 1.5,
      opacity: 0,
    },
    {
      opacity: 1,
      scale: 1,
      duration: 2,
    }
  )

  const startedScrollTrigger = {
    trigger: '.started',
    scrub: true,
    start: 'top top',
    end: 'bottom top',
  }

  gsap.to('.started-background', {
    y: 75,
    scrollTrigger: startedScrollTrigger,
  })

  gsap.to('.started-snowflake', {
    yPercent: 50,
    rotate: 'random(-90, 90)',
    scrollTrigger: {
      ...startedScrollTrigger,
      scrub: 2,
    },
  })

  gsap.to('.started-content', {
    y: -50,
    scrollTrigger: {
      ...startedScrollTrigger,
      scrub: 2,
    },
  })

  gsap.to('.about-snowflake', {
    yPercent: 100,
    rotate: 'random(-90, 90)',
    scrollTrigger: {
      trigger: '.about',
      start: 'top bottom',
      end: 'bottom top',
      scrub: 2,
    },
  })

  gsap.fromTo(
    '.about-content',
    {
      yPercent: -8,
    },
    {
      yPercent: 8,
      scrollTrigger: {
        trigger: '.about',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 2,
      },
    }
  )

  gsap.fromTo(
    '.about-images',
    {
      yPercent: -5,
    },
    {
      yPercent: 5,
      scrollTrigger: {
        trigger: '.about',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 2,
      },
    }
  )

  gsap.to('.place-snowflake', {
    yPercent: 100,
    rotate: 'random(-90, 90)',
    scrollTrigger: {
      trigger: '.place',
      start: 'top bottom',
      end: 'bottom top',
      scrub: 2,
    },
  })

  const items = document.querySelectorAll('[data-animation]')

  items.forEach((item) => {
    const key = item.getAttribute('data-animation')

    if (!key) return

    gsap.from(item, {
      ...animations[key],
      ease: 'elastic(1,1)',
      scrollTrigger: {
        trigger: item,
        start: 'top 90%',
        end: 'bottom 10%',
      },
    })
  })
}

function hover3dInit() {
  const limits = 15.0
  const cards = document.querySelectorAll('.hover3d-wrap')

  cards.forEach((card) => {
    const item = card.querySelector('.hover3d-target')

    card.addEventListener('mousemove', (e) => {
      const event = e as MouseEvent
      const rect = (event.target as HTMLElement)?.getBoundingClientRect()
      const x = event.clientX - rect.left
      const y = event.clientY - rect.top
      const offsetX = x / rect.width
      const offsetY = y / rect.height

      const rotateY = offsetX * (limits * 2) - limits
      const rotateX = offsetY * (limits * 2) - limits

      gsap.to(item, {
        rotateX: -rotateX,
        rotateY: rotateY,
      })
    })

    card.addEventListener('mouseleave', () => {
      gsap.to(item, {
        rotateX: 0,
        rotateY: 0,
      })
    })
  })
}

export default { init }
