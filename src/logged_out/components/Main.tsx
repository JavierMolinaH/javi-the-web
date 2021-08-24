import React, { FC, memo, useCallback, useState } from 'react'
import { withStyles, Theme, StyledComponentProps } from '@material-ui/core'

import Footer from './footer/Footer'
import Routing from './Routing'
import NavBar from './navigation/NavBar'

const styles = (theme: Theme) => ({
  wrapper: {
    backgroundColor: theme.palette.common.white
  }
})

const Main: FC<StyledComponentProps> = props => {
  const { classes } = props
  const [selectedTab, setSelectedTab] = useState('')
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false)
  const [dialogOpen, setDialogOpen] = useState('')

  const openLoginDialog = useCallback(() => {
    setDialogOpen('login')
    setIsMobileDrawerOpen(false)
  }, [setDialogOpen, setIsMobileDrawerOpen])

  const openRegisterDialog = useCallback(() => {
    setDialogOpen('register')
    setIsMobileDrawerOpen(false)
  }, [setDialogOpen, setIsMobileDrawerOpen])

  const handleMobileDrawerOpen = useCallback(() => {
    setIsMobileDrawerOpen(true)
  }, [setIsMobileDrawerOpen])

  const handleMobileDrawerClose = useCallback(() => {
    setIsMobileDrawerOpen(false)
  }, [setIsMobileDrawerOpen])

  return (
    <>
      <div className={classes?.wrapper}>
        <NavBar
          selectedTab={selectedTab}
          selectTab={setSelectedTab}
          openLoginDialog={openLoginDialog}
          openRegisterDialog={openRegisterDialog}
          mobileDrawerOpen={isMobileDrawerOpen}
          handleMobileDrawerOpen={handleMobileDrawerOpen}
          handleMobileDrawerClose={handleMobileDrawerClose}
        />
        <Routing />
        <Footer />
      </div>
    </>
  )
}

export default withStyles(styles, { withTheme: true })(memo(Main))
