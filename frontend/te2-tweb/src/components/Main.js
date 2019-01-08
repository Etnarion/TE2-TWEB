import React from 'react'
import { Switch, Route } from 'react-router-dom'
import * as routes from '../constants/routes'
import Home from './pages/Home'

const Main = () => (
  <div>
    <Switch>
      <Route exact path={routes.HOME} component={Home} />
    </Switch>
  </div>
)

export default Main