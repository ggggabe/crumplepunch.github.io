import React from 'react'
import Debug from 'debug'
import {
  Descriptor
} from '.'

import {
  withDevMode
} from 'hocs'

const debug = Debug('components:Mic')

export const Microphone = withDevMode(props => {
  return (
    <div>
      <Descriptor>Microphone Component</Descriptor>
    </div>
  )
})

debug('loaded')
