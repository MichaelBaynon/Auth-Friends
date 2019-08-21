import React, {useState} from 'react'


const FriendForm = (props) => {
    const [friend, setFriend] = useState({name: '', email: '', age: ''})
const handleChange = event => setFriend({...friend, [event.target.name]: event.target.value })
const handleSubmit = event => {
    event.preventDefault()
    //  submitFriend(friend)
}

    return (
        <form>
            <input  name='name' value={friend.name} onChange={handleChange} placeholder='name' />
            <input  name='email' value={friend.email} onChange={handleChange}  placeholder='email' />
            <input  name='age'  value={friend.age} onChange={handleChange} placeholder='age' />
            <button type='submit' onSubmit={handleSubmit}>Add Friend</button>
        </form>
    )
}

export default FriendForm