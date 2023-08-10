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

const navBlock = createNav()

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

  const imgHero = createElement('img', 'hero__img')
  Object.entries(HERO.img).forEach(([key, value]) => {
    imgHero[key] = value
  })

  const titleHero = createElement(
    'h2',
    'hero__title',
    HERO.title,
  )

  const infoHero = createElement(
    'p',
    'hero__info',
    HERO.info,
  )

  const buttonHero = createElement(
    'button',
    'hero__button',
    HERO.button,
  )

  hero.append(imgHero, titleHero, infoHero, buttonHero)

  return hero
}

const heroBlock = createHero()
// ===============================
const link = createElement('a', 'link', 'Blog')
link.href = '/'
// ===============================

page.append(header, title, navBlock, heroBlock, link)
