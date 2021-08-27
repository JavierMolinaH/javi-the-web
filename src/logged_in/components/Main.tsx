import React, { FC, memo, useState } from 'react'
import { StyledComponentProps, Theme, withStyles } from '@material-ui/core'
import { withAuthenticator } from '@aws-amplify/ui-react'

import Routing from 'logged_in/components/Routing'
import NavBar from './navigation/NavBar'

const styles = (theme: Theme) => ({
  main: {
    marginLeft: theme.spacing(0),
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0
    }
  }
})

const Main: FC<StyledComponentProps> = props => {
  const { classes } = props
  const [selectedTab, setSelectedTab] = useState('Dashboard')

  return (
    <main className={classes?.main}>
      <NavBar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <Routing />
    </main>
  )
}

export default withAuthenticator(withStyles(styles, { withTheme: true })(memo(Main)))
