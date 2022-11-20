
import { css } from 'styled-components'

export const devices = {
  mobileS: `(min-width: 320px)`,
  mobileM: `(min-width: 375px)`,
  mobileL: `(min-width: 425px)`,
  tablet: `(min-width: 768px)`,
  laptop: `(min-width: 1024px)`,
  laptopL: `(min-width: 1440px)`,
  desktop: `(min-width: 2560px)`,
}

export const styles ={
  spacing: 'clamp(0.4rem, calc(1.5vw), 2rem)',
}

export const palette = {
  grey: '#d9d9d9',
  red: '#EF476F',
  yellow: '#FFD166',
  green: '#06D6A0'
}

export const lightTheme = {
  base: 'white',
  mc1: '#073B4C',
  mc2: '#118AB2',
  acc: '#B34A00'
}

export const shadow = () => {
  return css`
    box-shadow: #073b4c32 0px 10px 15px -3px, #073b4c14 0px 4px 6px -2px;`
}

export const theme = {
  ...devices,
  ...styles,
  ...palette,
  ...lightTheme,
}