import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './layout/Home'
import ToDo from './apps/ToDo'

import GlobalStyle from './layout/GlobalStyles'
import StyledNav from './layout/StyledNav'

const App = () => (
  <BrowserRouter>
    <GlobalStyle />
    <StyledNav />
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/to-do" component={ToDo} />
    </Switch>
      
      

  </BrowserRouter>
)

export default App;
