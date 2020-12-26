import { Button } from '@theme-ui/components'
import { useColorMode } from 'theme-ui'

import { ColorMode } from '../../constants'

function ThemeSwitch() {
  const [colorMode, setColorMode] = useColorMode()

  const handleClick = () => {
    setColorMode(colorMode === ColorMode.LIGHT ? ColorMode.DARK : ColorMode.LIGHT)
  }

  return (
    colorMode === ColorMode.DEFAULT
      ? null
      : (
        <Button
          type="button"
          variant="primary.weak"
          onClick={handleClick}
          sx={{ textTransform: 'uppercase' }}
        >
          {colorMode === ColorMode.LIGHT ? ColorMode.LIGHT : ColorMode.DARK}
        </Button>
      )
  )
}

export default ThemeSwitch
