import React, { FC, memo } from 'react'
import { Switch } from 'react-router-dom'
import { StyledComponentProps, Theme, withStyles } from '@material-ui/core'

import PropsRoute from 'shared/components/PropsRoute'

import Dashboard from './dashboard/Dashboard'

const styles = (theme: Theme) => ({
  wrapper: {
    margin: theme.spacing(1),
    width: 'auto',
    [theme.breakpoints.up('xs')]: {
      width: '95%',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(4)
    },
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      width: '90%',
      marginLeft: 'auto',
      marginRight: 'auto'
    },
    [theme.breakpoints.up('md')]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      width: '82.5%',
      marginLeft: 'auto',
      marginRight: 'auto'
    },
    [theme.breakpoints.up('lg')]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      width: '70%',
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  }
})

const Routing: FC<StyledComponentProps> = props => {
  const { classes } = props
  return (
    <div className={classes?.wrapper}>
      <Switch>
        <PropsRoute path="/app" component={Dashboard} />
      </Switch>
    </div>
  )
}

export default withStyles(styles, { withTheme: true })(memo(Routing))
