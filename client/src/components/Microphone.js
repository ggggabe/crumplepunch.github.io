import React, {
  useState,
} from 'react'
import classNames from 'classnames'
import Debug from 'debug'
import {
  Descriptor
} from '.'

import {
  withDevMode
} from 'hocs'

const debug = Debug('components:Microphone')

const MicrophoneIcon = ({
  display,
  toggleDisplay,
  changeName
}) => {
  debug({
    display,
    toggleDisplay,
    changeName,
    cn: classNames('microphone', {
      hidden: display
    })
  })

  return (
    <div className={classNames('microphone', {
      hidden: !!display
    })}>
      <div onClick={event => {
        debug({event})
        event.preventDefault()
        toggleDisplay()

      }}>ToggleDisplay</div>
      <code className={{ display }}>MIC</code>
    </div>
  )
}

export const Microphone = withDevMode(props => {
  debug({
    props
  })
  const {display, name} = props
  const [displayMic, setDisplayMic] = useState(display)
  const [displayName, setDisplayName] = useState(name)

  return (
    <div>
      <Descriptor title="Microphone Component" />
      <MicrophoneIcon
        display={displayMic}
        name={displayName}
        toggleDisplay={() => setDisplayMic(!displayMic)}
        changeName={name => setDisplayName(name)}
      />
    </div>
  )
})

debug('loaded')
