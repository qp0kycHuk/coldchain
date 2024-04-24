import fancybox from './fancybox'
import animations from './animations'
import maps from './maps'
import phonemask from './phonemask/phonemask'
import scrollTo from './scrollTo'
import toggle from 'npm-kit-toggle'
import tab from 'npm-kit-tab'
import ripple from '@qpokychuk/ripple'
// import Swiper, { Navigation, Pagination, Scrollbar, Autoplay, Grid, Thumbs, EffectFade } from 'swiper'

import '../scss/index.scss'

// Swiper.use([Navigation, Pagination, Scrollbar, Autoplay, Grid, Thumbs, EffectFade])
// Swiper.defaults.touchStartPreventDefault = false
// window.Swiper = Swiper

// interface CustomWindow extends Window {
// Swiper: typeof Swiper
// }

// declare let window: CustomWindow

window.addEventListener('DOMContentLoaded', () => loadHandler())

function loadHandler() {
  scrollTo.init()
  toggle.init()
  tab.init()
  ripple.init()
  fancybox.init()
  animations.init()
  maps.init()
  phonemask.init('[type="tel"]')

  ripple.attach('.btn')
  ripple.attach('.waved')
  ripple.deAttach('.btn-text')

  window.addEventListener('toggleopen', toggleopenHaandler)
  window.addEventListener('toggleclose', togglecloseHaandler)
}

function toggleopenHaandler(event: any) {
  if (event.detail.target.classList.contains('menu')) {
    document.body.classList.add('menu-opened')
  }
}

function togglecloseHaandler(event: any) {
  if (event.detail.target.classList.contains('menu')) {
    document.body.classList.remove('menu-opened')
  }
}
