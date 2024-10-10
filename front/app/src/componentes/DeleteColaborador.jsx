// DeleteUser.js
import React, { useState } from 'react';
import axios from 'axios';
import './DeleteColaborador.css'; // Estilo do componente

const DeleteUser = () => {
    const [userId, setUserId] = useState('');
    const [colaborador, setColaborador] = useState(null);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    const fetchUserData = async () => {
        setLoading(true);
        setMessage('');
        try {
            const response = await axios.get(`http://127.0.0.1:8000/api/colaboradores/${userId}/`);
            setColaborador(response.data);
            setMessage('Colaborador encontrado com sucesso!');
        } catch (error) {
            console.error("Erro ao buscar o colaborador:", error);
            setMessage('Erro ao buscar o colaborador. Verifique se o ID está correto.');
            setColaborador(null); // Limpa o colaborador caso não encontre
        } finally {
            setLoading(false);
        }
    };

    const deleteUser = async () => {
        setLoading(true);
        setMessage('');
        try {
            await axios.delete(`http://127.0.0.1:8000/api/colaboradores/${userId}/`);
            setMessage('Colaborador deletado com sucesso!');
            setColaborador(null); // Limpa os dados do colaborador após exclusão
        } catch (error) {
            console.error("Erro ao deletar o colaborador:", error);
            setMessage('Erro ao deletar o colaborador.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="delete-user-container">
            <h2>Deletar Colaborador</h2>
            {/* Campo de busca pelo ID */}
            <div className="search-container">
                <label>ID do Colaborador</label>
                <input
                    type="number"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                    placeholder="Digite o ID do colaborador"
                    className="input-field search-input"
                />
                <button onClick={fetchUserData} className="search-button">
                    Buscar Colaborador
                </button>
            </div>
            {/* Mensagem de feedback */}
            {message && <div className={`message ${message.includes('sucesso') ? 'success' : 'error'}`}>{message}</div>}
            
            {/* Mostrar dados do colaborador antes de excluir */}
            {colaborador && (
                <div className="colaborador-info">
                    <h3>Detalhes do Colaborador</h3>
                    <p><strong>Primeiro Nome:</strong> {colaborador.primeiro_nome}</p>
                    <p><strong>Último Nome:</strong> {colaborador.ultimo_nome}</p>
                    <p><strong>Porcentagem de Contribuição:</strong> {colaborador.porcentagem_contribuicao}%</p>
                    <button onClick={deleteUser} className="delete-button">Deletar Colaborador</button>
                </div>
            )}
        </div>
    );
};

export default DeleteUser;
