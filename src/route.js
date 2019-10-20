import React from 'react'
import {Route, Switch, HashRouter} from 'react-router-dom'

function Routes() {
    return (
        <HashRouter>
            <Switch>
                <Route exact path="/" />
                {/* <Route exact path="/about" component={Name} />
                <Route exact path="/members" />
                <Route exact path="/awards" />
                <Route exact path="/contact" /> */}
            </Switch>
        </HashRouter>
    )
}

export default Routes