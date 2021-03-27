import React from 'react';
import React from 'react-dom';
import './index.css';
// add the code below this line
class App extends React.Component {
  render(){
    return (
      <div className="App">
        <h1>Hello, Padawans!</h1>
      </div>
    )
  }
}
// add the following code below this line 
ReactDOM.render(<App/>, document.getElementById('root'));


