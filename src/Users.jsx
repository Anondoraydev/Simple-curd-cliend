import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Users = () => {
    const loddeteusers = useLoaderData()
    const [users, setUsers] = useState(loddeteusers)
    const heandelDeled = _id => {
        console.log('delete', _id);
        fetch(`http://localhost:5000/users/${_id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    alert('Deleted successfully')
                    const remmaing = users.filter(user => user._id !== _id)
                    setUsers(remmaing)
                }

            })

    }
    return (
        <div>
            <h2>{users.length}</h2>
            <div>
                {
                    users.map(user => <p key={user._id}>{user.name} : {user.email} <button
                        onClick={() => heandelDeled(user._id)}
                    >X</button></p>)
                }
            </div>
        </div>
    );
};

export default Users;