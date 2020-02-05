import React from 'react'
import Debug from 'debug'
import {
  Descriptor,
  Microphone
} from '../../components'
import {
  withDevMode,
  withTheme
} from 'hocs'

const debug = Debug('scenes:daw')

const DawInterface = props => {
  return <div className='daw container main-container'>
    <Descriptor {...props} title='DAW Interface' />
    <Microphone />
  </div>
}

export const UntitledDaw = withTheme(withDevMode(DawInterface))

debug('loaded')
