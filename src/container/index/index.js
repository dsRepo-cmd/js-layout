import {
  createElement,
  createHeader,
  createPost,
  createStatusbar,
} from '../../script/layout'

const page = document.querySelector('.page')

const statusBar = createStatusbar()

const header = createHeader()

const title = createElement('h1', 'title', 'Мій блог')

const post = createPost()

const line = createElement('div', 'footer-line')

page.append(statusBar, header, title, post, line)
