import React, { useState, useEffect } from 'react'
import Debug from 'debug'

const debug = Debug('HOC:withAnimation')

export const withAnimation = Component => ({
  startValue = 0,
  endValue = 1,
  frameRate = 1 / 60,
  loop = true,
  offset = 0,
  animatedStyle,
  property,
  aid
}) => {
  const [renderStyle, setStyle] = useState(animatedStyle)
  const stepSize = Math.abs(startValue - endValue) * frameRate
  debug({ renderStyle })
  useEffect(() => {
    const interval = setInterval(() => {
      setStyle(s => {
        const currentPos = s[property]

        const newStyle = {}

        newStyle[property] = currentPos + stepSize < endValue
          ? currentPos + stepSize
          : currentPos - stepSize
        debug({
          currentPos,
          stepSize,
          endValue,
          inc: currentPos + stepSize < endValue,

          newHeight: newStyle[property]
        })

        return newStyle
      })
    }, frameRate * 1000)

    debug(`${aid}: mounted`)

    return () => {
      debug(`${aid}: unmounted`)

      return clearInterval(interval)
    }
  }, [
    aid,
    endValue,
    frameRate,
    property,
    stepSize
  ])

  return <Component style={renderStyle} />
}
