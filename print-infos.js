/* --------------------- DESAFIO 01: PRINTAR INFOS --------------------- 
Acessar um objeto com informações de um cliente e exibir essas informações no console

Vamos trabalhar com o conceito de um banco, então teremos:
- Clientes
- Conta Corrente
- Saldo
*/


const cliente = {
    nome: 'André', 
    idade: 36, 
    cpf: '123.456.789-23', 
    email: 'andre@gmail.com'
}

/* Acessando nosso objeto cliente, na chave 'nome' e acessou o 
valor através da notação de ponto */
console.log(`O nome do cliente é ${cliente.nome} e sua idade é de ${cliente.idade} anos.`);

// Acessando o cpf dentro do objeto cliente
// A partir disso conseguimos utilizar qualquer método do Javascript para determinado tipo
console.log(`Os três primeiros números do cpf do cliente é: ${cliente.cpf.substring(0,3)}`);