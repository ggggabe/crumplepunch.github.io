import React, { useState, useEffect } from 'react'
import Debug from 'debug'

const debug = Debug('HOC:withAnimation')

export const withDevMode = Component => props => {
  return <Component dev />
}
