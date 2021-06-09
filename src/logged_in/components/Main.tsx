import React, { FC, memo } from 'react'
import { makeStyles, Theme } from '@material-ui/core'

import Routing from 'logged_in/components/Routing'

const styles = makeStyles((theme: Theme) => ({
  main: {
    marginLeft: theme.spacing(9),
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0
    }
  }
}))

const Main: FC = () => {
  const classes = styles()
  return (
    <main className={classes.main}>
      <Routing />
    </main>
  )
}

export default memo(Main)
