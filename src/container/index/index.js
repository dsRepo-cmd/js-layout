import {
  createElement,
  createHeader,
} from '../../script/layout'

const page = document.querySelector('.page')

const header = createHeader()

const title = createElement('h1', 'title', 'Мій блог')

// ===============================

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

const createPost = () => {
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

const post = createPost()

const link = createElement('a', 'link', 'Community')
link.href = '/community'

page.append(header, title, post, link)
