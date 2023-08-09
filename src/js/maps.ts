// @ts-ignore
import ymaps from 'ymaps'

let mapInited = false

function init() {
  window.addEventListener('scroll', mapsInit, { once: true })
  document.addEventListener('click', mapsInit, { once: true })
  setTimeout(mapsInit, 2000)
}

function mapsInit() {
  if (mapInited) return
  mapInited = true

  if (!document.getElementById('contact-map')) {
    return
  }

  ymaps.load('https://api-maps.yandex.ru/2.1/?lang=' + window.mapLocate).then((maps: any) => {
    const coords = window.coords
    const center = [coords[0], coords[1]]

    // const placemarkSize = screen.width < 1200 ? 64 : 48

    const map = new maps.Map(
      'contact-map',
      {
        center: center,
        zoom: 16,
        controls: ['zoomControl'],
        // behaviors: [],
      },
      {
        suppressMapOpenBlock: true,
      }
    )

    const placemark = new maps.Placemark(
      coords,
      {},
      {
        iconLayout: 'default#image',
        iconImageHref: '../img/geo.png',
        iconImageSize: [74, 85],
        iconImageOffset: [-(74 / 2), -(85 / 1)],
      }
    )

    // map.controls.remove('geolocationControl')
    // map.controls.remove('searchControl')
    // map.controls.remove('trafficControl')
    // map.controls.remove('typeSelector')
    // map.controls.remove('fullscreenControl')
    // map.controls.remove('zoomControl')
    // map.controls.remove('rulerControl')
    map.behaviors.disable(['scrollZoom'])
    map.geoObjects.add(placemark)
  })
}

interface CustomWindow extends Window {
  coords: number[]
  mapLocate: string
}
declare let window: CustomWindow

export default { init }
