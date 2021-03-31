import React, { Suspense } from 'react'
import { MuiThemeProvider, CssBaseline } from '@material-ui/core'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import 'fontsource-roboto'

import Pace from './shared/components/Pace'

import theme from './theme'
import GlobalStyles from './GlobalStyles'
import './App.css'

const App = () => (
  <BrowserRouter>
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles />
      <Pace color={theme.palette.primary.light} />
      <Suspense fallback={<></>}>
        <Switch>
          <Route path="/c">
            <div>Hola</div>
          </Route>
          <Route>
            <div>Tu</div>
          </Route>
        </Switch>
      </Suspense>
      <AmplifySignOut />
    </MuiThemeProvider>
  </BrowserRouter>
)

export default withAuthenticator(App)
