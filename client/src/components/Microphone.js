import React, {
  useState
} from 'react'
import classNames from 'classnames'
import Debug from 'debug'
import {
  Descriptor
} from '.'

import {
  withDevMode,
  withShowHide
} from 'hocs'

const debug = Debug('components:Microphone')

const MicrophoneIcon = ({
  display,
  toggleDisplay,
  changeName,
  className
}) => {
  debug({
    className,
    display,
    toggleDisplay,
    changeName
  })

  return (
    <div className={classNames(className, 'microphone-icon')}>
      <code>MIC</code>
    </div>
  )
}

const MicrophoneControls = withShowHide(MicrophoneIcon)

export const Microphone = withDevMode(props => {
  debug({
    props
  })
  const { display, name } = props
  const [displayMic, setDisplayMic] = useState(display)
  const [displayName, setDisplayName] = useState(name)

  const micProps = {
    name: displayName,
    editName: name => setDisplayName(name)
  }

  const showHideProps = {
    display: displayMic,
    showHide: () => setDisplayMic(!displayMic)
  }

  return (
    <div>
      <Descriptor title='Microphone Component' />
      <MicrophoneControls {...micProps} {...showHideProps} />
    </div>
  )
})

debug('loaded')
