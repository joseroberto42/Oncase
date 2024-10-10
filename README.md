# Projeto de Avaliação - Oncase

Este projeto foi desenvolvido para ser avaliado como parte de um processo seletivo na Oncase. Ele consiste em uma aplicação web que utiliza **Django** como backend (API) e **React** como frontend.

## Tecnologias Utilizadas

### Backend
- **Django**: Framework web utilizado para criar a API.
- **Django REST Framework**: Ferramenta para criar endpoints RESTful.

### Frontend
- **React**: Biblioteca JavaScript para criar interfaces de usuário.

## Funcionalidades

- Adição, edição e remoção de colaboradores.
- Busca de colaboradores por nome ou ID.
- Visualização da lista de colaboradores cadastrados.

## Estrutura do Projeto

- **API (Backend)**: A API foi desenvolvida em Django, utilizando o Django REST Framework para facilitar a criação dos endpoints e realizar operações CRUD com colaboradores.
- **Frontend**: O front-end é construído em React e se comunica com a API através de requisições HTTP utilizando `axios` ou `fetch`.

## Instalação e Execução

### Pré-requisitos

- Python 3.x
- Node.js e npm (ou yarn)

### Como Executar

#### Backend (API)
1. Clone o repositório:
   ```bash
   git clone https://github.com/joseroberto42/Oncase.git

2.Navegue até a pasta do backend:

    cd back-end
    cd myproject
    
3.Crie e ative um ambiente virtual:

    python -m venv venv
    source venv/bin/activate  # No Windows use `venv\Scripts\activate`
    
4.Instale as dependências:

    pip install -r requirements.txt
   
5.Rode as migrações e inicie o servidor:

     python manage.py migrate
     python manage.py runserver
     
#Front-end
Navegue até a pasta do frontend:

    cd front-end
    cd app
    
Instale as dependências:
   
    npm install
    
Inicie o servidor de desenvolvimento:

    npm start
O projeto estará rodando localmente em http://localhost:3000 para o frontend e em http://127.0.0.1:8000 para o backend.

Contato
Se você tiver alguma dúvida sobre o projeto, sinta-se à vontade para entrar em contato:

Nome: José Roberto de Albuquerque Júnior
E-mail: joserobertope2000@gmail.com

