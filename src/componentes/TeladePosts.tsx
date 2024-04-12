import React, { useState } from "react";
// Definindo a interface Posts
interface Post {
    userId: string;
    id: string;
    title: string;
    body: string; 
}

const BuscaPost: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([]); // Estado para armazenar os posts
    const [selectedPost, setSelectedPost] = useState<Post | null>(null); // Estado para o post selecionado

    const buscarPost = async () => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
            const data: Post[] = await response.json(); 
            setPosts(data); // Atualizando o estado com os dados dos posts
        } catch (error) {
            console.error('Erro ao buscar posts', error);
            setPosts([]); // Resetando os dados dos posts para um array vazio
        }
    };

    const selecionarPost = (id: string) => {
        const postSelecionado = posts.find(post => post.id === id);
        setSelectedPost(postSelecionado || null);
    };

    return (
        <div>
            <h1>Buscar Posts</h1>
            <button onClick={buscarPost}>Buscar Posts</button>
            {posts.map(post => (
                <div key={post.id} onClick={() => selecionarPost(post.id)}>
                    <p>Título: {post.title}</p>
                    <p>ID: {post.id}</p>
                </div>
            ))}
            {selectedPost && (
                <div>
                    <p>User ID: {selectedPost.userId}</p>
                    <p>ID: {selectedPost.id}</p>
                    <p>Título: {selectedPost.title}</p>
                    <p>Body: {selectedPost.body}</p>
                </div>
            )}
        </div>
    );
};

export default BuscaPost;
