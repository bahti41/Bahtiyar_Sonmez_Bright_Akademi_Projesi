import React from "react";
import { useBauContext } from '../../Contexts/BauContext.js';

const UserDetails = ({ userId }) => {
    const { users } = useBauContext();
    const user = users.find((u) => u.id === userId);

    return (
        <div>
            <h2>User Details</h2>
            {user && (
                <div>
                    <p>ID: {user.id}</p>
                    <p>Name: {user.name}</p>
                    <p>Age: {user.age}</p>
                    <p>Img: {user.img}</p>
                    <p>Blog: {user.blog}</p>
                </div>
            )}
        </div>
    );
};

export default UserDetails;