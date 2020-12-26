const theme = {
  useColorSchemeMediaQuery: true,
  breakpoints: ['48em', '60em', '80em'],
  colors: {
    text: '#37352f',
    background: '#fff',
    primary: '#2979ff',
    secondary: '#0b6e99',
    muted: 'rgba(68,138,255,0.08)',
    gray: '#9b9a97',
    modes: {
      dark: {},
    },
  },
  fonts: {
    body: '"Noto Sans KR", "Apple SD Gothic Neo", "Nanum Gothic", 나눔고딕, NanumGothic, Roboto, "Helvetica Neue", sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 40, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  letterSpacings: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },
  borderWidths: {
    0: '0',
    2: '2px',
    4: '4px',
    8: '8px',
    px: '1px',
  },
  radii: {
    none: '0',
    sm: '0.125rem',
    default: '0.25rem',
    lg: '0.5rem',
    full: '9999px',
  },
  text: {
    heading: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
    },
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
    },
  },
}

export default theme
