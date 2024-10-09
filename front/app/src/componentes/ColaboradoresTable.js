import React, { useEffect, useState } from 'react';
import './ColaboradoresTable.css'; // Estilos opcionais, se necessário

const ColaboradoresTable = () => {
    const [colaboradores, setColaboradores] = useState([]);

    useEffect(() => {
        const fetchColaboradores = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/api/colaboradores/');
                
                // Verifica se a resposta é bem-sucedida
                if (!response.ok) {
                    throw new Error('Erro na rede');
                }

                const data = await response.json();
                console.log('Dados recebidos:', data); // Verifica os dados recebidos
                setColaboradores(data);
            } catch (error) {
                console.error('Erro ao buscar colaboradores:', error);
            }
        };

        fetchColaboradores();
    }, []);

    return (
        <div className="colaboradores-table">
            {colaboradores.length === 0 ? (
                <p>Nenhum colaborador encontrado.</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th>First name</th>
                            <th>Last name</th>
                            <th>Participation</th>
                        </tr>
                    </thead>
                    <tbody>
                        {colaboradores.map((colaborador) => (
                            <tr key={colaborador.id}>
                                <td>{colaborador.id}</td>
                                <td>{colaborador.primeiro_nome}</td>
                                <td>{colaborador.ultimo_nome}</td>
                                <td>{colaborador.porcentagem_contribuicao}%</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default ColaboradoresTable;
