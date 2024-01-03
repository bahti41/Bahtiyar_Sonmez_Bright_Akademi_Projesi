import React from "react";
import { useBauContext } from '../../Contexts/BauContext.js';

const Instructor = () => {
    const { users } = useBauContext();

    return (
        <div>
            <h2>Instructors</h2>
            {users.map((user) => (
                <div key={user.id}>
                    <img src={user.img} alt={user.name} />
                    <p>Name: {user.name}</p>
                    <p>Blog: {user.blog}</p>
                    <button>Details</button>
                </div>
            ))}
        </div>
    );
};

export default Instructor;