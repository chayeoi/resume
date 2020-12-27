import { css } from '@emotion/core'

import { showOnScroll, visible } from '../constants'

const global = css`
  a {
    color: inherit;
    text-decoration: none;
  }

  ul, ol {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  i {
    font-style: normal;
  }

  main {
    display: block;
  }

  .${showOnScroll} {
    opacity: 0;
    transform: translateY(32px);
    transition:
      transform 4s .25s cubic-bezier(0,1,.3,1),
      opacity .3s .25s ease-out;
    will-change: transform, opacity;
  }

  .${showOnScroll}.${visible} {
    opacity: 1;
    transform: none;
  }
`

export default global
