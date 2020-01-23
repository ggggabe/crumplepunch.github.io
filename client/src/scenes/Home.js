import React from 'react'
import Debug from 'debug'

import { JournalEntry } from '../components'
import {
  withHotKeys,
  withTheme
} from 'hocs'

const debug = Debug('scenes:Home')

export const Home = withTheme(() =>
  <div>
    <header>
      <h1>Gabe Marquez</h1>
    </header>
  </div>
)
