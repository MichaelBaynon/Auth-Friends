import React from 'react'
import { BrowserRouter  as Router, Route, Link} from "react-router-dom";
import axios from 'axios'

class Login extends React.Component {

state = {
    credentials: {
        username: '',
        password: ''
}
}

handleChange = e => {
    this.setState({
        credentials: {
            ...this.state.credentials,
            [e.target.name]: e.target.value
        }
    })
}

login = e => {
    e.preventDefault()
    axios.post('hhtp://localhost:5000/api/login', this.state.credentials)
    .then()
    .catch()
}

    render() {
        return (
            <div>
              <h2>  LOGIN PAGE</h2>
                <Link to='/'>Home</Link>
            <form onSubmit={this.login}>
                 <input type='text' name='username' value={this.state.username} placeholder='username' onChange={this.handleChange} />
                 <input value={this.state.password} placeholder='password' />
                 <button>Log In</button>
            </form>
            </div>
        )
    }
}

export default Login 