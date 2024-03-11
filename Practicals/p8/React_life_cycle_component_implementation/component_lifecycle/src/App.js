import React from 'react';

class App extends React.Component{
  constructor(count){
    super(count);
    this.state = {count: 0};
  };


  increment = () => {
    this.setState((prevState)=>({
      count: prevState.count + 1
    }));
      
  };

  render(){
    return(
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default App;