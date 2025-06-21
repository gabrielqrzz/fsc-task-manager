# 📝 TaskMaster

TaskMaster é um sistema de gerenciamento de tarefas desenvolvido com React, que permite que usuários se cadastrem, façam login e administrem suas tarefas diárias com funcionalidades completas de criação, edição, visualização e exclusão.

## 🚀 Funcionalidades

- ✅ Cadastro e login com autenticação via Firebase  
- ✅ Criação de tarefas com título, descrição, horário e status  
- ✅ Edição e exclusão de tarefas  
- ✅ Visualização organizada por período do dia  
- ✅ Validação de formulários com React Hook Form  
- ✅ Integração com JSON Server para armazenamento de tarefas  
- ✅ Testes unitários com Jest  
- ✅ Testes E2E com Cypress  

## 📦 Tecnologias utilizadas

- **React**
- **Vite**
- **Firebase Authentication**
- **JSON Server**
- **React Hook Form**
- **Jest**
- **Cypress**
- **ESLint + Prettier**

## 🧪 Testes

### ✅ Testes Unitários

- Realizados com **Jest**
- Cobertura total de validações: senha, título, descrição, status, período e estrutura de tarefa
- Comando para rodar:
  ```bash
  npm run coverage
- Gera relatório visual em: coverage/lcov-report/index.html

### ✅ Testes de API
Realizados via Postman e Supertest

Simulação de endpoints de tarefas no JSON Server com middleware de validação

### ✅ Testes E2E
Realizados com Cypress

Simulação de interações reais: cadastro, login, criação, edição, visualização e exclusão de tarefas

## 📂 Como rodar o projeto localmente
🔧 Pré-requisitos
Node.js instalado

JSON Server instalado:
npm install -g json-server

## 📥 Clone o repositório
git clone https://github.com/gabrielqrzz/task-master.git
cd task-master

### 📦 Instale as dependências
npm install

### ▶️ Rode o frontend (React)
npm run dev

### 🌐 Rode o backend (JSON Server com validação)
npx json-server db.json

O servidor será iniciado em http://localhost:3000

### 👨‍💻 Autor
Gabriel Queiroz
Estudante de Análise e Desenvolvimento de Sistemas – UCB
[linkedin.com/in/gabrielqrzz](https://www.linkedin.com/in/gabriel-leite-73955333b/)
