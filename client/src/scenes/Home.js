import React from 'react'
import Debug from 'debug'

import { JournalEntry } from '../components'
import {
  withHotKeys,
  withTheme
} from 'hocs'

const debug = Debug('components:App')
const EscapeJournal = withHotKeys({ 27: () => { debug('u pressed escape') } })(JournalEntry)

export const Home = withTheme(() =>
  <header>
    <h1>Gabe Marquez</h1>
    <EscapeJournal />
  </header>
)
