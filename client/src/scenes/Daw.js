import React from 'react'
import Debug from 'debug'
import { Descriptor } from '../components'
import {
  withDevMode,
  withTheme
} from 'hocs'

const debug = Debug('scenes:daw')

const DawInterface = props => {
  return <div className='daw container main-container'>
    <Descriptor>Daw Interface</Descriptor>
  </div>
}

export const UntitledDaw = withTheme(withDevMode(DawInterface))

debug('loaded')
