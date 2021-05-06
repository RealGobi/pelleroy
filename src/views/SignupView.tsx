


import { useContext, useState } from "react";
import { AuthContext } from '../shared/provider/Auth-provider';
import { useHistory } from 'react-router-dom';
import RoutingPath from "../routes/RoutingPath";

import './login.css'

export const SignupView = () => {
const [,setAuth] = useContext(AuthContext);
const [user, setUser] = useState({name:'', password:''});
const history = useHistory();


const signupHandler = () => {
  setAuth(user.name);
  localStorage.setItem('username', user.name);
  history.push(RoutingPath.ToolsView);
};

const changeHandler = (e: { target: { name: string; value: string; }; }) => {
    const { name, value } = e.target;
    setUser(prevState => ({
        ...prevState,
        [name]: value
    }));
};

  return (
    <div className="sigup-view">
      <div className="signup-view-card">
        <div className="title">
          <h1>Registrera</h1>
        </div>
        <label htmlFor="name" className="text-name">
           Username:
        </label>
        <div className="input-name">
            <input name='name' value={user.name} type='text' onChange={changeHandler} />
        </div>
        <label htmlFor="Password" className="text-password">
          Password: 
        </label>
        <div className="input-password">
          <input name="password" value={user.password} type='password' onChange={changeHandler} />
        </div>
        <label htmlFor="code" className="text-code">
          Code: 
        </label>
        <div className="input-code">
          <input name="code" value={user.password} type='password' onChange={changeHandler} />
        </div>
        <div className="button">
          <button onClick={()=> signupHandler()}>Registrera</button>
        </div>
        <div className='to-login'>
          <p onClick={()=> history.push(RoutingPath.LoginView)} >Login?</p>
        </div>
      </div>
    </div>
  );
};
  