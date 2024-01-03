import React from "react";
import { useBauContext } from '../../Contexts/BauContext.js';

const Users = () => {
    const { users } = useBauContext();

    return (
        <div>
            <h2>Users</h2>
            {users.map((user) => (
                <div key={user.id}>
                    <p>ID: {user.id}</p>
                    <p>Name: {user.name}</p>
                    <p>Age: {user.age}</p>
                    <p>Img: {user.img}</p>
                    <p>Blog: {user.blog}</p>
                </div>
            ))}
        </div>
    );
};

export default Users;