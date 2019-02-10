import React from 'react';
import Componente2 from './componente2.jsx'

class App extends React.Component{
  constructor(){
    super()
    this.state= { mensaje:'bienvenido a reactjs con nextu',
                  mensaje2:'estamos aprendiendo props y states'
                }
  }

  render(){
    return (
      <div>
        <h1>{this.state.mensaje}</h1>
        <Componente2 mensajeProps={this.state.mensaje2} cambioEstado={this.changeState.bind(this)}/>
        // <div>
        //   <button onClick={this.changeState.bind(this)}>cambiar estado</button>
        // </div>
      </div>
    )
  }

  changeState(){
    this.setState({mensaje:'este es mi nuevo valor'})
  }
}

export default App;
