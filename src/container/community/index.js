import {
  createElement,
  createHeader,
  createNav,
  createHero,
} from '../../script/layout'

const page = document.querySelector('.page')

const header = createHeader()

const title = createElement('h1', 'title', 'Коммьюніті')

const nav = createNav()

const hero = createHero()

// link===========================
const link = createElement('a', 'link', 'Blog')
link.href = '/'
// ===============================

page.append(header, title, nav, hero, link)
