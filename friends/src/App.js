import React from 'react';
import Login from './components/Login'
import './App.css';
import { BrowserRouter  as Router, Route, Link} from "react-router-dom";

function App() {
  return (
    <Router>
    
     <h1>FRIENDS</h1>

     <Link className='loginLink' to='/login'>Login</Link>
    <Route path='/login' component={Login} />
    </Router>
  );
}

export default App;
