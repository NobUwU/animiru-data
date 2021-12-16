import React from 'react'
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom'

import Navbar from '../components/Navbar'

import Home from '../views/Home'
import User from '../views/User'
import About from '../views/About'
import NotFound from '../views/404'

export default () => (
  <BrowserRouter basename='/animiru-data'>
    <Navbar />
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route exact path='/about'>
        <About />
      </Route>
      <Route exact path='/users/:id'>
        <User />
      </Route>
      <Route path='*' component={NotFound} />
    </Switch>
  </BrowserRouter>
)
