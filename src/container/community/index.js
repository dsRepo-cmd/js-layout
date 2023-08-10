import {
  createElement,
  createHeader,
} from '../../script/layout'

const page = document.querySelector('.page')

const header = createHeader()

const title = createElement('h1', 'title', 'Коммьюніті')

// ===============================
const NAV_LIST = [
  { text: 'База знань', active: false },
  { text: 'Інформація', active: true },
]

const createNav = () => {
  const nav = createElement('nav', 'nav')

  NAV_LIST.forEach((button) => {
    const navButton = createElement(
      'button',
      button.active
        ? 'nav__button nav__button--active'
        : 'nav__button',
      button.text,
    )
    nav.append(navButton)
  })

  return nav
}

const nav = createNav()

// ===============================

const HERO = {
  img: {
    width: 343,
    height: 160,
    src: '/img/hero.png',
  },
  title: 'Що таке база знань?',
  info: `База знаний — база данных, содержащая правила вывода и информацию о человеческом опыте и
  знаниях в некоторой предметной области. В самообучающихся системах база знаний также содержит информацию,
  являющуюся результатом решения предыдущих задач.`,
  button: `Перейти до ком'юніті у Телеграм`,
}

const createHero = () => {
  const hero = createElement('main', 'hero')

  const img = createElement('img', 'hero__img')
  Object.entries(HERO.img).forEach(([key, value]) => {
    img[key] = value
  })

  const title = createElement(
    'h2',
    'hero__title',
    HERO.title,
  )

  const info = createElement('p', 'hero__info', HERO.info)

  const button = createElement(
    'button',
    'hero__button',
    HERO.button,
  )

  hero.append(img, title, info, button)

  return hero
}

const hero = createHero()
// ===============================
const link = createElement('a', 'link', 'Blog')
link.href = '/'
// ===============================

page.append(header, title, nav, hero, link)
