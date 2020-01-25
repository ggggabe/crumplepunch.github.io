import React from 'react'
import Debug from 'debug'

import { withTheme } from 'hocs'

const debug = Debug('scenes:Journal')

export const Journal = withTheme(() =>
  <div>
    <header className='journal'>
      Journal
    </header>
  </div>
)

debug('loaded')
