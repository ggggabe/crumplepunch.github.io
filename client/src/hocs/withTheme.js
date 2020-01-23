import React from 'react'
import Debug from 'debug'

const debug = Debug('HOC:withTheme')

export const withTheme = Component => ({ theme }) => (
  <div className={theme}>
    <Component />
  </div>
)

debug('loaded')
