import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Debug from 'debug'
import {
  withTheme
} from 'hocs'

const debug = Debug('scenes:Home')

const HomeNav = () => (
  <Nav defaultActiveKey='/home'>
    <Nav.Item>
      <Nav.Link href='/untitled-daw' eventKey='untitled-daw'>
        Untitled Daw
      </Nav.Link>
    </Nav.Item>

    <Nav.Item>
      <Nav.Link eventKey='games'>
        sound
      </Nav.Link>
    </Nav.Item>
  </Nav>
)

export const Home = withTheme(({ theme }) =>
  <div className='home container main-container'>
    <header>
      <h1>Gabe Marquez</h1>
    </header>
    <HomeNav />
  </div>
)

debug('loaded')
