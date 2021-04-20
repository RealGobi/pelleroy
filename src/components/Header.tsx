import { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import RoutingPath from '../routes/RoutingPath';
import { AuthContext } from '../shared/provider/Auth-provider';

import logo from '../shared/images/logo.png';
import './header.css';

export const Header = () => {
  const history = useHistory();
  const [auth, setAuth ] = useContext(AuthContext);
  
  const logOut = () => {
    setAuth(null);
    localStorage.clear();
    history.push(RoutingPath.LoginView);
  };  

  return (
    <div className="header">
      <div className="logo-title">
        <img onClick={()=> history.push(RoutingPath.ToolsView)} src={logo} alt="Logga" />
        <h1>Pelleroy's verktyg</h1>
      </div>
      <div className="user">
        {auth && <span className="greeting" ><h4>Välkommen</h4><h3>{auth}</h3><p onClick={()=>logOut()} style={{fontSize:".8rem", margin:"2px", cursor:"pointer"}}>Logga ut</p></span>}
      </div>
      <nav className="nav">
        <ul>
          <li onClick={()=> history.push(RoutingPath.ToolsView)}>Verktyg</li>
          <li onClick={()=> history.push(RoutingPath.UserBoardView)}>Användare</li>
        </ul>
      </nav>
    </div>
  )
}
