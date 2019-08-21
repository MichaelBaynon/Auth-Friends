import React from 'react';
import Login from './components/Login'
import Friends from './components/Friends'
import PrivateRoute from './components/PrivateRoute'
import './App.css';
import { BrowserRouter  as Router, Route, Link} from "react-router-dom";

function App() {
  return (
   <div>
    
     <h1>FRIENDS</h1>

     <Link className='loginLink' to='/login'>Login</Link>
     <Link to='/friends'>Friend List</Link>

    <Route path='/login' component={Login} />
    <PrivateRoute exact path='/friends' component={Friends} />

    </div>
  );
}

export default App;
