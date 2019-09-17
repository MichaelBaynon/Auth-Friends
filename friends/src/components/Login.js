import React, {useState }from 'react'
import {Link} from "react-router-dom";
import axios from 'axios'

const Login = (props) => {

const [creds, setCreds] = useState({username: '', password: ''})

const handleChange = event => {
    setCreds({...creds, [event.target.name]: event.target.value })
}

const handleSubmit = event => {
    event.preventDefault()
    axios.post('http://localhost:5000/api/login', creds)
    .then(res => {
        console.log(res)
        localStorage.setItem('token', res.data.payload)
        props.history.push('/friends')
    })
    .catch(err => console.log(err.response))
}


    
        return (
            <div>
              <h2>  LOGIN PAGE</h2>
                <Link to='/'>Home</Link>
            <form onSubmit={handleSubmit}>
                 <input type='text' name='username'  placeholder='username' onChange={handleChange} />
                 <input type='password' name='password'  placeholder='password' onChange={handleChange} />
                 <button>Log In</button>
            </form>
            </div>
        )
    }


export default Login 