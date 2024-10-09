import React, { useState } from 'react';
import axios from 'axios';
import './AddColaborador.css'; // Para os estilos

const AddColaborador = ({ onAddColaborador }) => { // Recebe a prop onAddColaborador
    const [primeiroNome, setPrimeiroNome] = useState('');
    const [ultimoNome, setUltimoNome] = useState('');
    const [porcentagemContribuicao, setPorcentagemContribuicao] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/colaboradores/', {
                primeiro_nome: primeiroNome,
                ultimo_nome: ultimoNome,
                porcentagem_contribuicao: porcentagemContribuicao
            });

            const novoColaborador = response.data; // Supondo que a resposta contenha o colaborador adicionado
            
            // Chama a função de callback do componente pai
            onAddColaborador(novoColaborador);

            // Limpa o formulário e exibe uma mensagem de sucesso
            setPrimeiroNome('');
            setUltimoNome('');
            setPorcentagemContribuicao('');
            setMessage('Colaborador adicionado com sucesso!');
        } catch (error) {
            console.error("Erro ao adicionar colaborador:", error);
            setMessage('Erro ao adicionar colaborador.');
        }
    };

    const handleNomeChange = (setter) => (e) => {
        const value = e.target.value;
        // Verifica se o valor contém apenas letras (a-z, A-Z) e espaços
        if (/^[a-zA-ZÀ-ÿ\s]*$/.test(value) || value === '') {
            setter(value);
        } else {
            alert('O nome não pode conter números ou caracteres especiais.');
        }
    };

    return (
        <div className="navbar">
            <form onSubmit={handleSubmit} className="colaborador-form">
                <input
                    type="text"
                    placeholder="First name"
                    value={primeiroNome}
                    onChange={handleNomeChange(setPrimeiroNome)}
                    required
                />
                <input
                    type="text"
                    placeholder="Last name"
                    value={ultimoNome}
                    onChange={handleNomeChange(setUltimoNome)}
                    required
                />
                <input
                    type="number"
                    placeholder="Participation"
                    value={porcentagemContribuicao}
                    onChange={(e) => setPorcentagemContribuicao(e.target.value)}
                    required
                />
                <button type="submit">Send</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default AddColaborador;
