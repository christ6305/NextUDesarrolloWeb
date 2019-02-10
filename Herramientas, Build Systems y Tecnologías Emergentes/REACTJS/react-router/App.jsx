import React from 'react'
import {Link} from 'react-router'

class App extends React.Component{
  render(){
    return (
      <div>
        <ul>
          <li><Link to="/home">home</Link></li>
          <li><Link to="/usuarios">usuarios</Link></li>
          <li><Link to="/lenguajes">lenguajes</Link></li>
        </ul>
        <div>{this.props.children}</div>
      </div>
    )
  }
}

export default App
