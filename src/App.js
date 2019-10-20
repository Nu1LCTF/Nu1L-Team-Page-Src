import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import { NavLink, Route, HashRouter, Switch } from 'react-router-dom'
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react'

import Home from './components/Home'

const getWidth = () => {
  const isSSR = typeof window === 'undefined'

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}

function App() {
  return (
    <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
      <HashRouter>

        <Segment inverted vertical
          style={{ padding: '1em 0em' }}
        >
          <Menu size='large' pointing secondary inverted>
            <Container>
              <Menu.Item inverted as={NavLink} name='home' to='/' activeClassName='active' exact> Home </Menu.Item>
              <Menu.Item inverted as={NavLink} name='about' to='/about' activeClassName='active'> About us </Menu.Item>
              <Menu.Item inverted as={NavLink} name='members' to='/members' activeClassName='active'>Members</Menu.Item>
              <Menu.Item inverted as={NavLink} name='home' to='/awards' activeClassName='active'>Awards</Menu.Item>
              <Menu.Item inverted as={NavLink} name='home' to='/contact' activeClassName='active'>Contact Us</Menu.Item>
            </Container>
          </Menu>
          
        </Segment>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" />
          <Route exact path="/members" />
          <Route exact path="/awards" />
          <Route exact path="/contact" />
        </Switch>
      </HashRouter>
    </Responsive>
  )
}

export default App
