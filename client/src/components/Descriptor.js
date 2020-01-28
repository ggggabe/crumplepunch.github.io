import React from 'react'
import Debug from 'debug'
import

const debug = Debug('components:Descriptor')

const csvLineParse = (str, del) => {
  if ( str.length ) {
    return str.split(del)
  }

  return []
}

export const Descriptor = withDevMode(props => {
  const { className, dev } = props
  const [cn, setClassName] = useState(className)

  if (dev) {
    const cnArray = csvLineParse(cn, ' ')
    cnArray.append('dev')

    setClassName(cnArray.join(' '))
  }

  return (
    <div { className }>
    </div>
  )
})
