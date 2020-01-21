import React from 'react'
import { withHotKeys } from '../hocs'
import { JournalEntry } from './Journal'
import Debug from 'debug'
const debug = Debug('components:App')

debug({ withHotKeys })

const EscapeJournal = withHotKeys({ 27: () => { debug('u pressed escape') } })(JournalEntry)

const fakeJournalProps = {
  title: "A Test Journal Title",
  subtitle: "this is a subtitle",
  body: "This is body text"
}

export const App = () =>
  <div className='App'>
    <header className='App-header'>
      <h1>Gabe Marquez</h1>
      <EscapeJournal {...fakeJournalProps} />
    </header>
  </div>
