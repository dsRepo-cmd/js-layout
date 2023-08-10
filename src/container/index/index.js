import {
  createElement,
  createHeader,
  createPost,
} from '../../script/layout'

const page = document.querySelector('.page')

const header = createHeader()

const title = createElement('h1', 'title', 'Мій блог')

const post = createPost()

// link ===========================
const link = createElement('a', 'link', 'Community')
link.href = '/community'
// ===============================

page.append(header, title, post, link)
