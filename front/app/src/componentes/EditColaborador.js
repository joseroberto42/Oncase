// EditUser.js
import React, { useState } from 'react';
import axios from 'axios';
import './EditColaborador.css'; // Importa o arquivo CSS com estilos

const EditUser = () => {
    const [userId, setUserId] = useState(''); // ID do usuário para buscar
    const [primeiroNome, setPrimeiroNome] = useState('');
    const [ultimoNome, setUltimoNome] = useState('');
    const [porcentagemContribuicao, setPorcentagemContribuicao] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    const fetchUserData = async () => {
        setLoading(true);
        setMessage('');
        try {
            const response = await axios.get(`http://127.0.0.1:8000/api/colaboradores/${userId}/`);
            const { primeiro_nome, ultimo_nome, porcentagem_contribuicao } = response.data;
            setPrimeiroNome(primeiro_nome);
            setUltimoNome(ultimo_nome);
            setPorcentagemContribuicao(porcentagem_contribuicao);
            setMessage('Usuário encontrado com sucesso!');
        } catch (error) {
            console.error("Erro ao buscar os dados do usuário:", error);
            setMessage('Erro ao buscar os dados do usuário. Verifique se o ID está correto.');
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await axios.put(`http://127.0.0.1:8000/api/colaboradores/${userId}/`, {
                primeiro_nome: primeiroNome,
                ultimo_nome: ultimoNome,
                porcentagem_contribuicao: porcentagemContribuicao
            });
            setMessage('Usuário atualizado com sucesso!');
        } catch (error) {
            console.error("Erro ao atualizar o usuário:", error);
            setMessage('Erro ao atualizar usuário.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="edit-user-container">
            <h2>Editar Usuário</h2>
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
            {/* Mensagem de status */}
            {message && <div className={`message ${message.includes('sucesso') ? 'success' : 'error'}`}>{message}</div>}
            
            {/* Formulário para edição */}
            {!loading && primeiroNome && (
                <form onSubmit={handleSubmit} className="edit-user-form">
                    <div className="form-group">
                        <label>Primeiro Nome</label>
                        <input
                            type="text"
                            value={primeiroNome}
                            onChange={(e) => setPrimeiroNome(e.target.value)}
                            required
                            className="input-field"
                        />
                    </div>
                    <div className="form-group">
                        <label>Último Nome</label>
                        <input
                            type="text"
                            value={ultimoNome}
                            onChange={(e) => setUltimoNome(e.target.value)}
                            required
                            className="input-field"
                        />
                    </div>
                    <div className="form-group">
                        <label>Porcentagem de Contribuição (%)</label>
                        <input
                            type="number"
                            value={porcentagemContribuicao}
                            onChange={(e) => setPorcentagemContribuicao(e.target.value)}
                            required
                            className="input-field"
                        />
                    </div>
                    <button type="submit" className="submit-button">Salvar Alterações</button>
                </form>
            )}
        </div>
    );
};

export default EditUser;
