import React, { memo } from 'react'
import { Switch } from 'react-router-dom'
import PropsRoute from 'shared/components/PropsRoute'
import Home from './home/Home'

const Routing = () => {
  return (
    <Switch>
      <PropsRoute path="/" component={Home} />
    </Switch>
  )
}

export default memo(Routing)
