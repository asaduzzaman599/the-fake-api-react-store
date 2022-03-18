import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import Products from './Components/Products/Products';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0)
  console.log(count)
  const changeCount = ()  =>{
    setCount(count+1)
  }
  return (
    <div className="App">
      <Header count={count}></Header>
      <Products count={changeCount}></Products>
    </div>
  );
}

export default App;
