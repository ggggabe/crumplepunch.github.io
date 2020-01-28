import React from 'react'
import Debug from 'debug'

const debug = Debug('HOC:withTheme')

export const themes = ['theme-01']
export const defaultTheme = 'theme-01'

export const withTheme = Component => props => {
  const { theme } = props

  return (
    <div className={themes.indexOf(theme) === -1 ? defaultTheme : theme}>
      <Component {...props} />
    </div>
  )
}

debug('loaded')
