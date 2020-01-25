import React from 'react'
import Debug from 'debug'

import {
  withTheme
} from 'hocs'

const debug = Debug('scenes:Home')

export const Home = withTheme(({theme}) =>
  <div>
    <header>
      <h1>Gabe Marquez</h1>
    </header>
  </div>
)

debug('loaded')
