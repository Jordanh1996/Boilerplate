import React from 'react';
import { Router, Route, Switch} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Header from '../components/header';
import Notfound from '../components/notfound';
import Dashboard from '../components/Dashboard';
import LoginPage from '../components/loginPage';
import PrivateRoute from './privateRoute';
import PublicRoute from './publicRoute';


export const history = createHistory();


const Website = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path="/" component={LoginPage} exact={true} />
                <PrivateRoute path="/dashboard" component={Dashboard} />
                <Route component={Notfound} />
            </Switch>
        </div>
    </Router>
)

export default Website;