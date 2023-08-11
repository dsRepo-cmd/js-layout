import {
  createElement,
  createHeader,
  createNav,
  createHero,
  createStatusbar,
} from '../../script/layout'

const page = document.querySelector('.page')

const statusBar = createStatusbar()

const header = createHeader()

const title = createElement('h1', 'title', 'Коммьюніті')

const nav = createNav()

const hero = createHero()

const line = createElement('div', 'footer-line')

page.append(statusBar, header, title, nav, hero, line)
