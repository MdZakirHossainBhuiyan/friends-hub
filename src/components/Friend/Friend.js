import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Friend.css';

const Friend = (props) => {
    const {name, email, id} = props.friend;
    const history = useHistory();

    const handleClick = (friendId) => {
        const url = `/friend/${friendId}`;
        history.push(url);
    }

    return (
        <div className="friend-area">
            <h1>Name: {name}</h1>
            <p>Email: {email}</p>
            <p><Link to={`/friend/${id}`}><button className="btn-detail">Show details(Link)</button></Link></p>

            <br/>
            <button onClick={() => handleClick(id)} className="btn-detail">Show details(useHistory)</button>
        </div>
    );
};

export default Friend;