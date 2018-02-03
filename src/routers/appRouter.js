import React from 'react';
import { Router, Route, Switch} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Header from '../components/header';
import Notfound from '../components/notfound';
import Dashboard from '../components/Dashboard';
import LoginPage from '../components/loginPage';
import AddAlarmPage from '../components/addAlarmPage';
import PrivateRoute from './privateRoute';
import PublicRoute from './publicRoute';
import EditAlarmPage from '../components/editAlarmPage';


export const history = createHistory();


const Website = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path="/" component={LoginPage} exact={true} />
                <PrivateRoute path="/dashboard" component={Dashboard} />
                <PrivateRoute path="/addAlarm" component={AddAlarmPage} />
                <PrivateRoute path="/edit/:id" component={EditAlarmPage} />
                <Route component={Notfound} />
            </Switch>
        </div>
    </Router>
)

export default Website;