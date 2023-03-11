import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import NewAlert from '../Alert/newAlert';
import Alerts from '../Alert/Alerts';
import Alert from "../Alert/Alert";
import Navbar from './Navbar';
import Login from "../../Login";
import useToken from "./useToken";
import { useState } from "react";


function App() {
  const {token, setToken} = useToken();
  const [user, setUser] = useState('');

  if(!token) {
    return (
    <div className="app m-5 p-12"> 
      <Login setUser={setUser} setToken={setToken} />
    </div>)
  }

  return (
    <BrowserRouter>
        <Navbar />
        <div className="app m-2 p-8">
        <Routes>
          <Route path='/' element={<Alerts />} />
          <Route path='/login' element={<Login />} />
          <Route path='/new' element={<NewAlert />} />
          <Route path='/alerts/:id' element={<Alert />} />
        </Routes>
        
        
      </div>
    </BrowserRouter>

  );
}

export default App;
