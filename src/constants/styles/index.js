const color = {
  blueDark: '#0063d6',
  blue: '#0076FF',

  grayDark: '#282828',
  gray: '#7C8A98',
  grayLight: '#BABDBF',
  grayLighter: '#F8F9FA'
}

const space = {
  sm: 10,
  md: 20,
  lg: 40,
  xl: 80,
  xxl: 160
}

const fontSize = {
  sm: '0.9em',
  md: '1em',
  lg: '1.2em',
  xl: '1.5em',
  xxl: '2em'
}

const breakPoints = {
  sm: 510,
  md: 760,
  lg: 1020,
  xl: 1200
}

const globals = `
  box-sizing: border-box;
  font-size: ${fontSize.md};
  font-family: Helvetica, Arial, sans-serif;
  color: ${color.gray};
`

export {
  color,
  space,
  fontSize,
  breakPoints,
  globals
}
