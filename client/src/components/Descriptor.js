import React from 'react'
import Debug from 'debug'
import {
  withDevMode,
  withTheme
} from 'hocs'

const debug = Debug('components:Descriptor')

export const Descriptor = withDevMode(withTheme(({
  dev,
  title
}) => {
  debug({
    dev,
    title
  })

  return (
    <code>
      {dev && <code>dev mode: {title}</code>}
    </code>
  )
}))

debug('loaded')
