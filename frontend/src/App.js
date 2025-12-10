import logo from './logo.svg';
import './App.css';
import Login from './pages/login';
import { Routes, Route } from "react-router-dom";
import Signin from './pages/signin';

function App() {
  return (
    <Routes>
      <Route path='/' element = {<Login/>}/>
      <Route path='/signin' element={<Signin/>}/>
    </Routes>
  );
}

export default App;
