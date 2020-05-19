import React from 'react'
import Debug from 'debug'

const debug = Debug('HOC:withDevMode')

export const withDevMode = Component => props => {
  debug({ props })
  return <Component {...props} dev />
}

debug('loaded')
