import React, { FC } from 'react'
import { Drawer, IconButton, Toolbar, Divider, Typography, Box, withStyles } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'

const drawerWidth = 240

const styles = {
  toolbar: {
    minWidth: drawerWidth
  }
}

type SideDrawerPropsType = {
  classes: any
  open: boolean
  onClose: () => void
}

const SideDrawer: FC<SideDrawerPropsType> = props => {
  const { classes, onClose, open } = props
  return (
    <Drawer anchor="right" open={open} variant="temporary" onClose={onClose}>
      <Toolbar disableGutters className={classes.toolbar}>
        <Box pl={3} pr={3} display="flex" justifyContent="space-between" width="100%" alignItems="center">
          <Typography variant="h6">A Sidedrawer</Typography>
          <IconButton onClick={onClose} color="primary" aria-label="Close Sidedrawer">
            <CloseIcon />
          </IconButton>
        </Box>
      </Toolbar>
      <Divider />
    </Drawer>
  )
}

export default withStyles(styles)(SideDrawer)
