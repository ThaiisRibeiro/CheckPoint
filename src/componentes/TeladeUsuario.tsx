import React, { useState } from "react";

// Definindo a interface do Usuario
interface User {
    id: string,
    name: string,
    username: string,
    email: string,
    address: {
        street: string,
        suite: string,
        city: string,
        zipcode: string,
        geo: {
            lat: string,
            lng: string
        }
    }
}

const BuscaUser: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]); // Estado para armazenar os usuários
    const [selectedUser, setSelectedUser] = useState<User | null>(null); // Estado para o usuário selecionado

    const buscarUser = async () => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
            const data: User[] = await response.json(); 
            setUsers(data); // Atualizando o estado com os dados dos Usuarios
        } catch (error) {
            console.error('Erro ao buscar usuário', error);
            setUsers([]); // Resetando os dados dos usuários para um array vazio
        }
    };

    const selecionarUser = (id: string) => {
        const userSelecionado = users.find(user => user.id === id);
        setSelectedUser(userSelecionado || null);
    };

    return (
        <div>
            <h1>Buscar Usuários</h1>
            <button onClick={buscarUser}>Buscar Usuário</button>
            {users.map(user => (
                <div key={user.id} onClick={() => selecionarUser(user.id)}>
                    <p>ID: {user.id}</p>
                    <p>Nome: {user.name}</p>
                    <p>Username: {user.username}</p>
                    <p>Email: {user.email}</p>
                    <p>Endereço: {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}</p>
                    <p>Geo: {user.address.geo.lat}, {user.address.geo.lng}</p>
                </div>
            ))}
            {selectedUser && (
                <div>
                    <p>ID: {selectedUser.id}</p>
                    <p>Nome: {selectedUser.name}</p>
                    <p>Username: {selectedUser.username}</p>
                    <p>Email: {selectedUser.email}</p>
                    <p>Endereço: {selectedUser.address.street}, {selectedUser.address.suite}, {selectedUser.address.city}, {selectedUser.address.zipcode}</p>
                    <p>Geo: {selectedUser.address.geo.lat}, {selectedUser.address.geo.lng}</p>
                </div>
            )}
        </div>
    );
};

export default BuscaUser;
