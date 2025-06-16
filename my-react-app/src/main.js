import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <h3 id="backend-text">Loading...</h3>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
      <div style="margin-top: 10px">
        <button id="save-btn">Save</button>
        <button id="load-btn">Load</button>
      </div>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`


setupCounter(document.querySelector('#counter'))
