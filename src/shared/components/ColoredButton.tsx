import React, { FC, memo } from 'react'
import { Button, createMuiTheme, MuiThemeProvider } from '@material-ui/core'

type ColoredButtonType = {
  color: any
  children: any
  theme: any
}

const ColoredButton: FC<ColoredButtonType> = props => {
  const { color, children, theme } = props
  const buttonTheme = createMuiTheme({
    ...theme,
    palette: {
      primary: {
        main: color
      }
    }
  })
  return (
    <MuiThemeProvider theme={buttonTheme}>
      <Button color="primary">{children}</Button>
    </MuiThemeProvider>
  )
}

export default memo(ColoredButton)
