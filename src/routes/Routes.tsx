import { useEffect, useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AuthContext } from '../shared/provider/Auth-provider';
import { LoginView } from '../views/LoginView';
import { ToolsView } from '../views/ToolsView';
import { UserBoardView } from '../views/UserBoardView';
import RoutingPath from './RoutingPath';

export const Routes = (props: { children?: React.ReactChild }) => {
  const { children } = props;
	const [auth, setAuth] = useContext(AuthContext);

  useEffect(() => {
		const loc = localStorage.getItem('username');
			if (loc) {
				setAuth(loc);
			}
	},[setAuth]);

  const blockeRouteIfAuth = (navToViewIfAuth: React.FC) => {
    return auth ? ToolsView : navToViewIfAuth;
 };

 const authNeeded = (navToViewIfAuth: React.FC) => {
    return auth ? navToViewIfAuth : LoginView;
 };

  return (
    <Router>
      	{children}
      <Switch>
        <Route exact path={RoutingPath.UserBoardView} component={authNeeded(UserBoardView)} />
        <Route exact path={RoutingPath.ToolsView} component={authNeeded(ToolsView)} />
        <Route component={blockeRouteIfAuth(LoginView)} />
      </Switch>
    </Router>
  )
};
