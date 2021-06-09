import React, { FC, lazy, Suspense } from 'react'
import { MuiThemeProvider, CssBaseline } from '@material-ui/core'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { AmplifySignOut, withAuthenticator } from '@aws-amplify/ui-react'
import 'fontsource-roboto'

import Pace from './shared/components/Pace'
import theme from './theme'
import GlobalStyles from './GlobalStyles'

const LoggedOutComponent = lazy(async () => import('./logged_out/components/Main'))
const LoggedInComponent = lazy(async () => import('./logged_in/components/Main'))

const App: FC = () => (
  <BrowserRouter>
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles />
      <Pace color={theme.palette.primary.light} />
      <Suspense fallback={<></>}>
        <AmplifySignOut />
        <Switch>
          <Route path="/app">
            <LoggedInComponent />
          </Route>
          <Route>
            <LoggedOutComponent />
          </Route>
        </Switch>
      </Suspense>
    </MuiThemeProvider>
  </BrowserRouter>
)

export default withAuthenticator(App)
