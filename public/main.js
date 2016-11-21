let hue = 128
let sat = 100
let light = 50
let alpha = 1
// hsla(128, 100%, 50%, 1)
const getHSL = () => {
  return `hsla(${hue}, ${sat}%, ${light}%, ${alpha})`
}

const main = () => {
  const colorsquare = document.querySelector('.colorsquare')
  const hueInput = document.querySelector('input[name=hue]')
  hueInput.addEventListener('input', () => {
    hue = hueInput.value
    colorsquare.style.backgroundColor = getHSL()
    document.querySelector('h3').textContent = getHSL()
  })
  const satInput = document.querySelector('input[name=sat]')
  satInput.addEventListener('input', () => {
    sat = satInput.value
    colorsquare.style.backgroundColor = getHSL()
    document.querySelector('h3').textContent = getHSL()
  })
  const lightInput = document.querySelector('input[name=light]')
  lightInput.addEventListener('input', () => {
    light = lightInput.value
    colorsquare.style.backgroundColor = getHSL()
    document.querySelector('h3').textContent = getHSL()
  })
  const alphaInput = document.querySelector('input[name=alpha]')
  alphaInput.addEventListener('input', () => {
    alpha = alphaInput.value
    colorsquare.style.backgroundColor = getHSL()
    document.querySelector('h3').textContent = getHSL()
  })

  document.getElementById('sat')
  document.getElementById('light')
}

document.addEventListener('DOMContentLoaded', main)
