import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom'



const UserDetail = ({ users }) => {

    const { userId } = useParams();
    const user = users.find((user) => user.id === parseInt(userId, 10));


    if (!user) {
        return <div>Kullanıcı bulunamadı.</div>;
    }
    return (
        <>
            <div style={{ width: '30%', margin: '10px', border: '1px solid #ddd', padding: '10px' }}>
                <img src={user.photo} alt={user.name} style={{ width: '100%', height: 'auto' }} />
                <h3>{user.name}</h3>
                <p>Meslek: {user.occupation}</p>
                <p>Biyografi: {user.bio}</p>
            </div>
        </>
    )
}

export default UserDetail;
