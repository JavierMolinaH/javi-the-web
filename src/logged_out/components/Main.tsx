import React, { FC, memo } from 'react'
import { withStyles, Theme, StyledComponentProps } from '@material-ui/core'

import Footer from './footer/Footer'
import Routing from './Routing'

const styles = (theme: Theme) => ({
  wrapper: {
    backgroundColor: theme.palette.common.white
    // overflowX: 'hidden'
  }
})

const Main: FC<StyledComponentProps> = props => {
  const { classes } = props
  return (
    <>
      <div className={classes?.wrapper}>
        <Routing />
        <Footer />
      </div>
    </>
  )
}

export default withStyles(styles, { withTheme: true })(memo(Main))
