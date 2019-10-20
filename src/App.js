import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import './App.css'
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
import MemberComponent from './components/Member'
import Contact from './components/Contact'

const getWidth = () => {
  const isSSR = typeof window === 'undefined'

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}

const Footer = () => (
  <Segment inverted vertical style={{ padding: '5em 0em' }}>
      <Container>
        <Divider inverted />
          <Grid divided inverted stackable>
              <Grid.Row>
                  <Grid.Column width={3}>
                      <Header inverted as='h4' content='About' />
                      <List link inverted>
                          <List.Item as='a'>Sitemap</List.Item>
                          <List.Item as='a'>Contact Us</List.Item>
                          <List.Item as='a'>Religious Ceremonies</List.Item>
                          <List.Item as='a'>Gazebo Plans</List.Item>
                      </List>
                  </Grid.Column>
                  <Grid.Column width={3}>
                      <Header inverted as='h4' content='Services' />
                      <List link inverted>
                          <List.Item as='a'>Banana Pre-Order</List.Item>
                          <List.Item as='a'>DNA FAQ</List.Item>
                          <List.Item as='a'>How To Access</List.Item>
                          <List.Item as='a'>Favorite X-Men</List.Item>
                      </List>
                  </Grid.Column>
                  <Grid.Column width={7}>
                      <Header as='h4' inverted>
                          Footer Header
            </Header>
                      <p>
                          // 这里想看看能不能联动小密圈把recent post加上

                          Extra space for a call to action inside the footer that could help re-engage users.
            </p>
                  </Grid.Column>
              </Grid.Row>
          </Grid>
      </Container>
  </Segment>
)

function App() {
  return (
    <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
      <HashRouter>

        <Segment inverted vertical
          style={{ padding: '1em 0em' }} inverted
        >
          <Menu size='large' pointing secondary inverted>
            <Container>
              <Menu.Item inverted as={NavLink} name='home' to='/' activeClassName='active' exact> Home </Menu.Item>
              {/* <Menu.Item inverted as={NavLink} name='about' to='/about' activeClassName='active'> About us </Menu.Item> */}
              <Menu.Item inverted as={NavLink} name='members' to='/members' activeClassName='active'>Members</Menu.Item>
              <Menu.Item inverted as={NavLink} name='home' to='/awards' activeClassName='active'>Awards</Menu.Item>
              <Menu.Item inverted as={NavLink} name='home' to='/contact' activeClassName='active'>Contact Us</Menu.Item>
            </Container>
          </Menu>
          
        </Segment>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" />
          <Route exact path="/members" component={MemberComponent} />
          <Route exact path="/awards" />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </HashRouter>
      <Footer />
    </Responsive>
  )
}

export default App
