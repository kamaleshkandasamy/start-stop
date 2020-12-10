
import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={seconds:1000};
    this.tick =this.tick.bind(this);
    this.componentWillUnmount =this.componentWillUnmount.bind(this);
  }
  tick() {
    this.interval = setInterval(() => {
      this.setState(prevState => ({
        seconds: prevState.seconds + 1
      }));
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render(){
  return ( 
    <div className="App">
      <header className="App-header">
        <center>${this.state.seconds}</center>  

       <div className='positiona'>
       <button className='start' onClick= {this.tick}>start</button>
     
     </div>

    <div className='positionb'>
       <button className='stop' onClick= {this.componentWillUnmount}>stop</button>
     
     </div> </header>
    </div>
  )
}
}
export default App;
