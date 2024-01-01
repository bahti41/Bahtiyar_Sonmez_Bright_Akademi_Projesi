import React from 'react'
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom'




const UserCard = ({ user }) => (
    <div style={{ width: '30%', margin: '10px', border: '1px solid #ddd', padding: '10px' }}>
        <img src={user.photo} alt={user.name} style={{ width: '100%', height: 'auto' }} />
        <h3>{user.name}</h3>
        <p>{user.occupation}</p>
        <p>{user.bio}</p>
        <Link to={`/userdetail/${user.name}`}>
            <button>Detayları Gör</button>
        </Link>
    </div>
);
const Trainings = ({ users }) => {

    return (
        <>
            <Container fluid>
                <div className='mb-5'>
                    <h2 className='d-flex justify-content-center align-items-center m-4'>Türkiyenin İleri Gelen Egitimcileri</h2>
                    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                        {users.map((user) => (
                            <UserCard key={user.id} user={user} />
                        ))}
                    </div>
                </div>
            </Container >
            {/* <Container>
                <div style={{ width: '30%', margin: '10px', border: '1px solid black', padding: '10px' }}>
                    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                        {users.map((user) => (
                            <div key={user.id} className="user-card">
                                <img src={user.photo} alt={user.name} style={{ width: '100%', height: 'auto' }} />
                                <h3>{user.name}</h3>
                                <Link to={`/userdetail/${user.id}`}>
                                    <button className='mb-3'>Detaylar</button>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </Container> */}
        </>
    )
}

export default Trainings
