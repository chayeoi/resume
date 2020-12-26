const theme = {
  useColorSchemeMediaQuery: true,
  breakpoints: ['720px', '960px', '1280px'],
  // Scales
  colors: {
    text: '#37352f',
    background: 'transparent',
    primary: '#2979ff',
    secondary: '#0b6e99',
    muted: 'rgba(68, 138, 255, 0.08)',
    gray: '#9b9a97',
    hr: 'rgba(55, 53, 47, 0.09)',
    modes: {
      dark: {
        text: '#f5f6f7',
        background: '#060606',
        hr: 'rgba(255, 255, 255, 0.09)',
      },
    },
  },
  fonts: {
    body: '"Apple SD Gothic Neo", "Nanum Gothic", 나눔고딕, NanumGothic, Roboto, "Helvetica Neue", sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace',
  },
  fontSizes: [12, 14, 16, 20, 24, 30, 32, 40, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },
  space: [0, 4, 8, 16, 24, 32, 64, 128, 256, 512],
  letterSpacings: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },
  sizes: {
    container: '1280px',
    full: '100%',
    viewportWidth: '100vw',
    viewportHeight: '100vh',
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
  // Variants
  buttons: {
    primary: {
      cursor: 'pointer',
      weak: {
        display: 'block',
        width: '100%',
        height: '100%',
        minWidth: '80px',
        px: 3,
        py: 2,
        color: 'text',
        bg: 'transparent',
        fontSize: 1,
        fontWeight: 500,
        textTransform: 'uppercase',
        transition: 'color 0.2s, background-color 0.2s',
        cursor: 'pointer',
        outline: 'none',
        '&:active, &:hover, &:focus': {
          color: 'primary',
          bg: 'muted',
        },
      },
    },
  },
  links: {
    anchor: {
      textDecoration: 'underline',
      transition: 'color 0.3s',
      '&:focus, &:hover': {
        color: 'secondary',
      },
    },
  },
  text: {
    heading: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
    },
    h1: {
      mb: [5, 4],
      fontFamily: 'heading',
      fontSize: [6, 7, 7],
      fontWeight: 'heading',
      lineHeight: 'heading',
    },
    h2: {
      fontFamily: 'heading',
      fontSize: [4, 5, 5],
      fontWeight: 600,
      lineHeight: 'heading',
      color: 'secondary',
      'hr + * &': {
        mt: 4,
      },
    },
    h3: {
      mt: 4,
      fontFamily: 'heading',
      fontSize: [3, 4, 4],
      fontWeight: 600,
      lineHeight: 'heading',
    },
    p: {
      my: 2,
    },
  },
  // Styles
  styles: {
    root: {
      pb: 7,
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
      transition: 'color 0.3s, background-color 0.3s',
    },
    hr: {
      color: 'hr',
    },
  },
}

export default theme
