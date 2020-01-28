import React from 'react'
import Debug from 'debug'
import {
  withDevMode,
  withTheme
} from 'hocs'

const debug = Debug('components:Descriptor')

export const Descriptor = withTheme(withDevMode(props => {
  debug(props)
  return (
    <div>
      {props.dev && <code>dev mode</code>}
    </div>
  )
}))
debug('loaded')
