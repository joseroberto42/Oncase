import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaSearch } from 'react-icons/fa'; // Ícones para Home e Busca
import axios from 'axios';
import './Navbar.css'; // Arquivo CSS para estilos

const Navbar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [message, setMessage] = useState('');

    // Realiza a busca sempre que o searchTerm é alterado
    useEffect(() => {
        if (searchTerm.trim() === '') {
            setSearchResults([]); // Limpa as sugestões se o input estiver vazio
            return;
        }

        const fetchSearchResults = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/colaboradores/?search=${searchTerm}`);
                setSearchResults(response.data); // Atualiza os resultados de busca
            } catch (error) {
                console.error("Erro ao buscar colaboradores:", error);
                setMessage('Erro ao buscar colaboradores. Por favor, tente novamente.');
                setSearchResults([]);
            }
        };

        fetchSearchResults();
    }, [searchTerm]);

    // Atualiza o valor do searchTerm conforme o usuário digita
    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <div className="navbar-container">
            {/* Botão Home com ícone */}
            <div className="home-button">
                <Link to="/">
                    <button className="home-icon-button">
                        <FaHome size={24} /> {/* Ícone Home */}
                    </button>
                </Link>
            </div>

            {/* Campo de busca e sugestões */}
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Buscar por nome ou ID..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="search-input"
                />
                <button className="search-button">
                    <FaSearch size={16} /> Buscar {/* Ícone Search */}
                </button>
                
                {/* Renderização das sugestões */}
                {searchResults.length > 0 && (
                    <div className="suggestions">
                        <ul>
                            {searchResults.map((user) => (
                                <li key={user.id}>
                                    {user.primeiro_nome} {user.ultimo_nome} - ID: {user.id}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>

            {/* Mensagem de erro ou sucesso */}
            {message && <p className="message">{message}</p>}
        </div>
    );
};

export default Navbar;
