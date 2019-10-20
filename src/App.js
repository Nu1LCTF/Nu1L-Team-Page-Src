import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Route, HashRouter, Switch } from 'react-router-dom'
import {
  Responsive,
} from 'semantic-ui-react'

import Home from './components/Home'

import Footer from './components/partial/Footer'
import SMenu from './components/partial/Menu'

const getWidth = () => {
  const isSSR = typeof window === 'undefined'

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}

function App() {
  return (
    <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
      <HashRouter>
        <SMenu />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </HashRouter>
      <Footer />
    </Responsive>
  )
}

export default App
