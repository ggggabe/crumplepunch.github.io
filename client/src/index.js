import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'

import './index.scss'
import {
  Home,
  //Journal,
  UntitledDaw
} from './scenes'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/untitled-daw'>
        <UntitledDaw />
      </Route>

      <Route path='/'>
        <Home />
      </Route>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
)

serviceWorker.unregister()
