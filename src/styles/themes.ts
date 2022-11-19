
import { css } from 'styled-components'

export const palette = {
  grey: '#d9d9d9',
  red: '#EF476F',
  yellow: '#FFD166',
  green: '#06D6A0'
}

export const lightTheme = {
  base: 'white',
  mc1: '#073B4C',
  mc2: '#118AB2'
}

export const shadow = () => {
  return css`
    box-shadow: #073b4c32 0px 10px 15px -3px, #073b4c14 0px 4px 6px -2px;`
}
