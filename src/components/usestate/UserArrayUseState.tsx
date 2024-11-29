import React, { useState } from "react";

interface User {
    id: number,
    email: string,
    name: string
}

const UserArrayUseState: React.FC = () => {
    const [users, setUsers] = useState<User[]>([
        {id:1,name:"Edwin Miguel Lara Espinoza",email:"emlara35@gmail.com"},
        {id:2,name:"Juan Enrique Lara Espinoza",email:"jelara35@gmail.com"}
    ])

    const addUser = () => {
        const newUser: User = {
            id:users.length + 1,
            name: "Nuevo Usuario",
            email: "nuevo_usuario@gmail.com"
        }

        setUsers(prevUsers => [...prevUsers, newUser])
    }

    const removeUser = (id: number) =>{
        setUsers(prevUsers => prevUsers.filter(user => user.id !== id))
    }

  return (
    <div>
        <h2>UseState with object's array</h2>
        <h3>User list</h3>
        <ul>
        {
            users.map(user => (
                <li key={user.id}>
                    {user.name} ({user.email}){" "}
                    <button onClick={() => removeUser(user.id)}>Remove</button>
                </li>
            ))
        }
        </ul>
        <button onClick={addUser}>Add User</button>
    </div>
  );
}

export default UserArrayUseState;
