import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Debug from 'debug'

import {
  withTheme,
  withAnimation
} from 'hocs'

const debug = Debug('scenes:Home')

const Code = props => <span {...props} >code</span>

const DumbHeight = withAnimation(Code)

const HomeNav = () => (
  <Nav defaultActiveKey="/home">
    <Nav.Item>
      <Nav.Link eventKey="code" >
        <DumbHeight
          aid='code'
          startValue={12}
          endValue={40}
          property='height'
          animatedStyle={{
            height: 12
          }}>
          code
        </DumbHeight>
      </Nav.Link>
    </Nav.Item>

    <Nav.Item>
      <Nav.Link eventKey="music">
        music
      </Nav.Link>
    </Nav.Item>

    <Nav.Item>
      <Nav.Link eventKey="games">
        sound
      </Nav.Link>
    </Nav.Item>
  </Nav>
)

export const Home = withTheme(({theme}) =>
  <div className="main-container">
    <header>
      <h1>Gabe Marquez</h1>
    </header>
    <HomeNav />
  </div>
)

debug('loaded')
