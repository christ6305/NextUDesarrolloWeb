import React from 'react';

class App extends React.Component{
  constructor(){
    super()
    this.state= { bienvenido:'bienvenido al metodo constructor'
                }
    console.log('primera fase, metodo constructor');
  }

  render(){
    console.log('tercera fase: metodo render, fase principal');
    var valor1=500;
    var valor2=450;
    var producto=valor1*valor2;
    return (
      <div>
        <h1>{this.state.bienvenido}</h1>
        <h3>el valor de la multiplicacion es: {producto}</h3>
      </div>
    )
  }

  componentWillMount(){
    console.log('bienvido a componentWillMount')
    console.log('segunda fase: metodo componentWillMount');
  }

  componentDidMount(){
    console.log('cuarta fase: metodo componentDidMount, ultima fase del ciclo de montaje');
    this.setState({bienvenido:'bienvenido al componente componentDidMount'})
  }
}

export default App;
