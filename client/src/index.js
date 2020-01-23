import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'

import './index.scss'
import { Home, Journal } from './scenes'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/journal'>
        <Journal theme='theme-01' />
      </Route>

      <Route path='/'>
        <Home theme='theme-01' />
      </Route>

    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
)

serviceWorker.unregister()
