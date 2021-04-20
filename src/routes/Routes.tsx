import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Tools } from '../views/Tools';
import { UserBoard } from '../views/UserBoard';
import RoutingPath from './RoutingPath';

export const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={RoutingPath.UserBoard} component={UserBoard} />
        <Route component={Tools} />
      </Switch>
    </Router>
  )
};
