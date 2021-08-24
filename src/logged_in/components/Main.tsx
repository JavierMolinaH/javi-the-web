import React, { FC, memo, useCallback, useState } from 'react'
import { StyledComponentProps, Theme, withStyles } from '@material-ui/core'
import { AmplifySignOut, withAuthenticator } from '@aws-amplify/ui-react'

import Routing from 'logged_in/components/Routing'
import NavBar from './navigation/NavBar'

const styles = (theme: Theme) => ({
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
})

const Main: FC<StyledComponentProps> = props => {
  const { classes } = props
  const [selectedTab, setSelectedTab] = useState('')
  const [messages, setMessages] = useState([])
  const [isAddBalanceDialogOpen, setIsAddBalanceDialogOpen] = useState(false)

  const openAddBalanceDialog = useCallback(() => {
    setIsAddBalanceDialogOpen(true)
  }, [setIsAddBalanceDialogOpen])

  return (
    <main className={classes?.main}>
      <NavBar selectedTab={selectedTab} messages={messages} openAddBalanceDialog={openAddBalanceDialog} />
      <AmplifySignOut />
      <Routing />
    </main>
  )
}

export default withAuthenticator(withStyles(styles, { withTheme: true })(memo(Main)))
