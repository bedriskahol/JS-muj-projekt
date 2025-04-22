import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import './super.css';
// import {data} from './seznam.json'; // potom muzeme s datama pracovat 
                                    // jako s promennou branou odsud 


const Odkazy = () => {
  return (
    <ul>
      <li><a href='#'>Odkaz 1</a></li>
      <li><a href='#'>Odkaz 2</a></li>
      <li><a href='#'>Odkaz 3</a></li>
      <li><a href='#'>Odkaz 4</a></li>
      <li><a href='#'>Odkaz 5</a></li>
    </ul>
  )
}

const Footer = () => {
  return (
    <footer>
      <p>Czechitas, nová patička</p>
    </footer>
  )
}



document.querySelector('#root').innerHTML = render(
  <div className="container">
    <header>
      <div className="logo"></div>
      <h1>Webová aplikace – upravená</h1>
      <br />
      <Odkazy />
    </header>
    <main>
      <p>Startovací šablona pro webovou aplikaci v JavaScriptu s JSX. Vytvořeno pomocí <a href="https://www.npmjs.com/package/create-kodim-app">create-kodim-app</a>.</p>
    </main>
    <Footer />
    <footer>
      <p>Czechitas, Digitální akademie: Web</p>
    </footer>
  </div>
);
