import React from 'react'
import Debug from 'debug'

import { JournalEntry } from '../components'
import { withTheme } from 'hocs'

const debug = Debug('scenes:Journal')

export const Journal = withTheme(() => {
  return (
    <div>
      <header className='journal'>
        Journal
      </header>
    </div>
  )
})

debug('loaded')
