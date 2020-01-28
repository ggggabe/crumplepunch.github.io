import React from 'react'
import Debug from 'debug'

const debug = Debug('HOC:withDevMode')

export const withDevMode = Component => props => {
  return <Component dev />
}

debug('loaded')
