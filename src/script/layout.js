export const createElement = (tag, className, text) => {
  const elem = document.createElement(tag)

  if (className) {
    elem.className = className
  }
  if (text) {
    elem.innerHTML = text
  }

  return elem
}

// Status bar=========================
export const createStatusbar = () => {
  const statusBar = createElement('div', 'status-bar')
  const time = createElement('img', 'status-bar__time')
  time.src = '/img/time.png'
  const group = createElement('img', 'status-bar__group')
  group.src = '/img/group.png'

  statusBar.append(time, group)

  return statusBar
}
// HEADER_BUTTON_LIST=========================

const HEADER_BUTTON_LIST = [
  {
    width: 24,
    height: 24,
    src: '/svg/header__back.svg',
  },
  {
    width: 24,
    height: 24,
    src: '/img/header__avatar.png',
  },
]

// ===============================

export const createHeader = () => {
  const header = createElement('header', 'header')

  HEADER_BUTTON_LIST.forEach((params) => {
    const button = createElement('button', 'button')
    const img = createElement('img')

    Object.entries(params).forEach(([key, value]) => {
      img[key] = value
    })

    button.append(img)
    button.insertAdjacentElement('beforeend', img)
    header.insertAdjacentElement('beforeend', button)
  })

  return header
}

// POST_LIST=========================

const POST_LIST = [
  {
    category: [
      { text: 'Важливо', id: 1 },
      { text: 'Нова', id: 2 },
    ],
    info: 'До біса планувальник, наймаємо дизайнера і готуємося до презентації, як Джобс',
    date: '25.01',
    vieved: true,
  },
  {
    category: [{ text: 'Нова', id: 2 }],
    info: 'Ми хотіли щоб у цьому чаті було близько 150 людей щоб зробити якісний пак самопрезентацій.',
    date: '15.01',
    vieved: false,
  },
  {
    category: [
      { text: 'Важливо', id: 1 },
      { text: 'Нова', id: 2 },
    ],
    info: 'До біса планувальник, наймаємо дизайнера і готуємося до презентації, як Джобс',
    date: '25.01',
    vieved: true,
  },
]

// ===============================

export const createPost = () => {
  const postList = createElement('div', 'post__list')

  POST_LIST.forEach((postData) => {
    const post = createElement(
      'div',
      postData.vieved
        ? 'post button post__viewed'
        : 'post button',
    )

    const postHeader = createElement('div', 'post__header')

    const categoryList = createElement(
      'div',
      'post__category-list',
    )

    postData.category.forEach((category) => {
      const categorySpan = createElement(
        'span',
        `post__category post__category--${category.id}`,
        category.text,
      )
      categoryList.append(categorySpan)
    })

    const dateSpan = createElement(
      'span',
      'post__date',
      postData.date,
    )

    const infoParagraph = createElement(
      'p',
      'post__info',
      postData.info,
    )

    postHeader.append(categoryList, dateSpan)
    post.append(postHeader, infoParagraph)
    postList.append(post)
  })
  return postList
}

// NAV_LIST=========================

const NAV_LIST = [
  { text: 'База знань', active: false },
  { text: 'Інформація', active: true },
]

// ===============================

export const createNav = () => {
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
// HERO===========================

const HERO = {
  img: {
    width: 348,
    height: 160,
    src: '/img/hero.png',
  },
  title: 'Що таке база знань?',
  info: `База знаний — база данных, содержащая правила вывода и информацию о человеческом опыте и
  знаниях в некоторой предметной области. В самообучающихся системах база знаний также содержит информацию,
  являющуюся результатом решения предыдущих задач.`,
  button: `Перейти до ком'юніті у Телеграм`,
}
// ===============================

export const createHero = () => {
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

// ===============================
