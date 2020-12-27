import { Divider as ThemeUIDivider } from '@theme-ui/components'

import { customDivider } from '../../constants'

type Props = {
  className?: string
  classes?: {
    hr?: string
  }
}

function Divider({ className, classes = {}, ...otherProps }: Props) {
  return (
    <div className={`${className} ${customDivider}`} sx={{ color: 'hr' }} {...otherProps}>
      <ThemeUIDivider className={classes.hr} />
    </div>
  )
}

export default Divider
