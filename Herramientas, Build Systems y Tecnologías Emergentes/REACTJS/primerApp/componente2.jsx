import React from 'react';

class Componente2 extends React.Component{
  render(){
    return (
      <div>
        <h2>{this.props.mensajeProps}
          <h3>{this.props.mensaje3}</h3>
          <div>
            <button onClick={this.props.cambioEstado}>cambiar estado</button>
          </div>
        </h2>
      </div>
    )
  }
}

Componente2.defaultProps={
  mensaje3:'props por defecto'
}

export default Componente2
