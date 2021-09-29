import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './FriendsDetail.css'
const FriendDeatail = () => {
     const {friendId} = useParams()
     const [friend, setFriend] = useState({})
     const {name, address} = friend || {};
     useEffect(()=>{
          const url = `https://jsonplaceholder.typicode.com/users/${friendId}`
          fetch(url)
          .then(res => res.json())
          .then( data => setFriend(data))
     },[])
    
     return (
          <div className="single-card">
               <h1>This is friend detail </h1>
               <h2>Name : {name}</h2>
               <h3>Street : {address?.street}</h3>
               <h3>City : {address?.city}</h3>
               <h3>Zip Code : {address?.zipcode}</h3>
               
          </div>
     );
};

export default FriendDeatail;