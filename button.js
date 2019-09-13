function getForteButton () {
  const style = document.createElement('style')
  document.head.appendChild(style)
  style.sheet.insertRule(`
    .button {
      display: block;
      cursor: pointer;
      width: 210px;
      height: 45px;
      background: #fff;
      color: #e3010f;
      border: 1px solid #e3010f;
      font-size: 14px;
      text-decoration: none!important;
      transition: background .25s ease-in;
    }
  `, style.sheet.cssRules.length)

  style.sheet.insertRule(`
    .button__inner {
      margin: auto;
      max-width: 210px;
    }
  `, style.sheet.cssRules.length)

  style.sheet.insertRule(`
    .button__logo {
      float: left;
      width: 29px;
      height: 30px;
      margin: 7px 20px 8px 29px;
      background: url('https://cosmos-magazine.imgix.net/file/spina/photo/10822/170621-Puppy-Full.jpg?fit=clip&w=835');

      background-position: center;
      background-repeat: no-repeat;
      background-size: contain;
    }
  `, style.sheet.cssRules.length)

  style.sheet.insertRule(`
    .button__text {
      display: block;
      padding-top: 5px;
      margin-bottom: -1px;
      font-size: 13px;
    }
  `, style.sheet.cssRules.length)

  style.sheet.insertRule(`
    .button__price {
      white-space: nowrap;
    }
  `, style.sheet.cssRules.length)

  style.sheet.insertRule(`
    .button__price-sum {
      font-size: 16px;
      font-family: Roboto,Helvetica,Arial,sans-serif;
    }
  `, style.sheet.cssRules.length)

  style.sheet.insertRule(`
    .button__price-type {
      font-size: 11px;
    }
  `, style.sheet.cssRules.length)

  const button = document.createElement('a')
  button.classList.add('button')

  const buttonInner = document.createElement('div')
  buttonInner.classList.add('button__inner')

  const buttonLogo = document.createElement('div')
  buttonLogo.classList.add('button__logo')

  const buttonText = document.createElement('span')
  buttonText.classList.add('button__text')
  buttonText.innerHTML = 'Купить в кредит'

  const buttonPrice = document.createElement('div')
  buttonPrice.classList.add('button__price')

  const priceSum = document.createElement('span')
  priceSum.classList.add('button__price-sum')
  priceSum.innerHTML = '5 331 '

  const priceType = document.createElement('span')
  priceType.classList.add('button__price-type')
  priceType.innerHTML = 'x 24 мес'

  buttonInner.appendChild(buttonLogo)
  buttonInner.appendChild(buttonText)
  buttonPrice.appendChild(priceSum)
  buttonPrice.appendChild(priceType)
  button.appendChild(buttonInner)
  button.appendChild(buttonPrice)
  
  return button
}

setTimeout(run, 1000);

function run() {
    
  const div = document.getElementById('root')
  div.appendChild(getForteButton())

}
