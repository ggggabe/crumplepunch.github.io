import React from 'react'
import Debug from 'debug'
import { Descriptor } from '../components'

import {
  withDevMode
} from 'hocs'

const debug = Debug('scenes:daw')

const DawInterface = props => {
  return <div>
    <Descriptor>Daw Interface</Descriptor>
  </div>
}

export const UntitledDaw = withDevMode(DawInterface)

debug('loaded')
