import React from 'react'
import Loader from 'react-loader-spinner'

import {axiosWithAuth} from '../helpers/axiosWithAuth'

class Friends extends React.Component {
state ={
    friends: []
}

componentDidMount() {
    this.getData()
}

getData = () => {
    axiosWithAuth()
    .get('http://localhost:5000/api/friends')
    .then(res => {
        this.setState({
           friends: res.data
           
        })
    })
}

    render() {
        console.log('results', this.state.friends)
        return(
            <div>
            this.state.friends
            </div>
        )
    }
}

export default Friends