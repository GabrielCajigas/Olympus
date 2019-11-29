import React from 'react';
import { BrowserRouter , Switch, Route} from 'react-router-dom';
import Navigationbar from './components/layout/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Dashboard from './components/dashboard/Dashboard';
import ActivityDetails from './components/activities/ActivityDetails';
import LogIn from './components/log/Login';
import Register from './components/log/Register';
import CreateActivity from './components/activities/CreateAvtivity';




class App extends React.Component {
  render(){
    return (
      <BrowserRouter>
        <div>
          <Navigationbar/>
          <Switch > 
            <Route exact path='/' component= {Dashboard} />
            <Route path='/activities/:id' component= {ActivityDetails} />
            <Route path='/login' component= {LogIn} />
            <Route path='/register' component= {Register} />
            <Route path='/create' component= {CreateActivity} />
          </Switch>
        </div>
      </BrowserRouter>
  );
}
}

export default App;
