import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { axiosWithAuth } from '../helpers/axiosWithAuth';

const Friends = (props) => {
    const [friendsList, setFriendsList] = useState([])

useEffect(() => {
    axiosWithAuth().get('http://localhost:5000/api/friends')
   
    .then(res => {
        console.log(res)
        setFriendsList(res.data)
    })
    .catch(err => console.log(err.response))
}, [])

return (
    <div>
       {friendsList.map(friend => {
           return <div key={friend.id}>Name: {friend.name} Email: {friend.email} Age: {friend.age}</div>
       })}
      

    </div>
)
}

export default Friends
