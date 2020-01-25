import React from 'react'
import Debug from 'debug'

const debug = Debug('HOC:withTheme')

export const themes = ['theme-01']
export const defaultTheme = 'theme-01'

export const withTheme = Component => ({ theme }) => (
  <div className={themes.indexOf(theme) === -1 ? defaultTheme : theme}>
    <Component />
  </div>
)

debug('loaded')
