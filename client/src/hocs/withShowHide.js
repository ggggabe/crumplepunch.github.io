import React from 'react'
import Debug from 'debug'
import classNames from 'classnames'

const debug = Debug('HOC:withShowHide')

export const withShowHide = Component => props => {
  debug({ props })

  const hidden = props.display
  const cn = classNames(props.classNames, { hidden })
  debug({ props })

  return (
    <div className='hoc-show-hide'>
      <div
        className='button' onClick={e => {
          e.preventDefault()
          props.showHide()
        }}
      ><code>{hidden ? 'show' : 'hide'}</code>
      </div>

      <Component {...props} className={cn} />
    </div>
  )
}
