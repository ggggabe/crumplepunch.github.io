import React, { useState, useEffect, useCallback } from 'react'
import Debug from 'debug'

const debug = Debug('HOC:HotKeys')

/*
 * Where listeners is a object of <keycode>: <fn>
 */

const withHotKeys = listeners => Component => props => {
  const fn = useCallback(({keyCode}) => {
    return listeners[keyCode] && listeners[keyCode](), [listeners]
  })

  debug({ listeners, fn })

  useEffect(() => {
    document.addEventListener('keydown', fn)
    debug('Event Listener added')

    return () => document.removeEventListener('keydown', fn)
  }, [fn])

  return (<Component />)
}

export { withHotKeys }
