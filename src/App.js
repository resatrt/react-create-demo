import React, { Component } from 'react';
import './App.css';
import Button from './button/button.js';

class App extends Component {
  z(klsjadlksajdlksajdlksjlsjl) {
    console.log('外面的函数')
    console.log(klsjadlksajdlksajdlksjlsjl);
  }
  render() {
    return (
      <div className='App'>
        <Button value='按钮'  />
        <Button value='按钮' />
        <Button value='按钮' />
      </div>
    )
  }

}

export default App;
