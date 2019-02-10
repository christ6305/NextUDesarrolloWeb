import React from 'react'
import {render} from 'react-dom'
// import {Router,Route,browserHistory} from 'react-router'
import {Router,Route,hashHistory,IndexRoute} from 'react-router'
import App from './App.jsx'
import Home from './home.jsx'
import Usuarios from './usuarios.jsx'
import Lenguajes from './lenguajes.jsx'

render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute path="/home" component={Home}/>
      <Route path="/usuarios" component={Usuarios}/>
      <Route path="/lenguajes" component={Lenguajes}/>
    </Route>
  </Router>,
  document.getElementById('app')
)
