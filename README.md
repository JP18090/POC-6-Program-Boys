# Forja - Prova de Conceito (POC)

## Objetivo
Esta prova de conceito (POC) tem como objetivo demonstrar a capacidade do grupo Forja em desenvolver um website utilizando Next.js que permite a compra do filme "A Forja". O site oferece a seleção de 60 bancos, modos claro e escuro dependendo do tema do dispositivo e exibe bancos randomizados bloqueados.

## Integrantes
- Vitor Lemos
- Marcelo Takao
- José Pedro

## Tecnologias Utilizadas
- Next.js
- HTML5
- CSS3
- JavaScript (JSON)
- React

## Funcionalidades

### Seleção de Bancos
Permite a seleção de até 60 bancos disponíveis para a compra do filme "A Forja".

### Modos Claro e Escuro
O site adapta automaticamente o tema (claro ou escuro) de acordo com as configurações do dispositivo do usuário.

### Randomização de Bancos Bloqueados
Os bancos são randomizados e alguns são bloqueados, proporcionando uma experiência de compra dinâmica e interessante.

## Funcionamento Básico de uma Aplicação Web
Uma aplicação web permite que os usuários interajam com um sistema através de um navegador. No contexto da nossa POC, o site permite que os usuários comprem o filme "A Forja" e escolham seus bancos de forma interativa.

## Exemplo de Código
Aqui está um exemplo simples de como a seleção de bancos pode ser implementada usando Next.js e JSON:

```javascript
// Exemplo de um componente React para seleção de bancos
import { useState, useEffect } from 'react';

const BankSelection = () => {
    const [banks, setBanks] = useState([]);
    const [blockedBanks, setBlockedBanks] = useState([]);
    
    useEffect(() => {
        // Simula a obtenção de dados de bancos de uma API ou arquivo JSON
        const fetchBanks = async () => {
            const response = await fetch('/api/banks.json');
            const data = await response.json();
            setBanks(data.banks);
        };

        fetchBanks();
    }, []);

    return (
        <div>
            <h2>Selecione seu banco:</h2>
            <ul>
                {banks.map(bank => (
                    <li key={bank.id} style={{ textDecoration: blockedBanks.includes(bank.id) ? 'line-through' : 'none' }}>
                        {bank.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BankSelection;
```

## Sintaxe do Fetch e Explicação
O Fetch é uma API JavaScript moderna que permite realizar solicitações HTTP de forma assíncrona. No nosso exemplo, usamos o Fetch para obter a lista de bancos a partir de um arquivo JSON.

### Sintaxe Básica do Fetch
A sintaxe básica do Fetch envolve chamar a função `fetch()` com a URL do recurso que você deseja acessar. Ele retorna uma Promise que resolve com a resposta da solicitação.

```javascript
fetch('/api/banks.json')
    .then(response => {
        if (response.ok) {
            return response.json(); // Converte a resposta em JSON
        }
        throw new Error('Erro na solicitação'); // Lança um erro se a resposta não for bem-sucedida
    })
    .then(data => {
        // Processa os dados recebidos
        console.log('Dados:', data);
    })
    .catch(error => {
        // Lida com erros
        console.error('Erro:', error);
    });
```

## Exemplo de Funcionamento
Abaixo está uma captura de tela do funcionamento da aplicação, mostrando a seleção de bancos e a adaptação do tema.

![image](https://github.com/user-attachments/assets/ff13f88b-0fce-4714-a32d-812c43c27b20)
![image](https://github.com/user-attachments/assets/98e552db-17ef-41d9-acc0-bfba1b6523e6)

## Considerações Finais
A POC "Forja" demonstra a capacidade do grupo em criar uma aplicação web interativa e responsiva utilizando Next.js, com foco na experiência do usuário e na funcionalidade de compra do filme "A Forja". A randomização de bancos e a adaptação de tema são recursos que enriquecem a usabilidade do site. 
