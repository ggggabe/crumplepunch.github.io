import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Debug from 'debug'
import Descriptor from '../components'

import {
  withTheme
} from 'hocs'

const debug = Debug('scenes:daw')

const digestConfig = props => ({
})


const DawInterface = props => {

  return <div>
    <Descriptor>Daw Interface</Descriptor>
  </div>
}


export const UntitledDaw = withThem(props => digestConfig(props))
