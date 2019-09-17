import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { axiosWithAuth } from '../helpers/axiosWithAuth';
import FriendForm from './FriendForm'

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

const addFriend = friend => {
    axiosWithAuth().post('http://localhost:5000/api/friends', friend)
    .then(res => setFriendsList(res.data))
    .catch(err => console.log(err.response))
}

return (
    <div>
       {friendsList.map(friend => {
           return <div key={friend.id}>Name: {friend.name} Email: {friend.email} Age: {friend.age}</div>
       })}
      
<FriendForm submitFriend={addFriend}/>
    </div>
)
}

export default Friends
