import React from 'react';
import { useHistory } from 'react-router';
import './Friend.css'
const Friend = (props) => {
     const {id, name, email, company, website, address, phone} = props.friend || {};

     const history = useHistory()

     const handlerVisite = () =>{
          history.push(`/friend/${id}`)
     }

     return (
          <div className = "card-style">
               <h3>{name}</h3>
               <h4>Phone : {phone}</h4>
               <h4>Email : {email}</h4>
               <h4><small>Address : {address.city}</small></h4>
               <h4><small>Website : {website}</small></h4>
               <button onClick={handlerVisite}>Visite me</button>
          </div>
     );
};

export default Friend;