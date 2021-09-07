/* Desafio: 
Adicionar dependentes para um dos clientes cadastrados, com nome, idade e parentesco
*/ 

// const cliente = {
//     nome: 'Andre', 
//     idade: 36, 
//     email: 'andre@email.com'
// }

// cliente.dependente = {
//     nome: 'Sarah', 
//     parentesco: 'filha', 
//     dataNascimento: '20/03/2021'
// }

// console.log(cliente);

// cliente.dependente.nome = 'Sarah Silva';
// console.log(cliente);

// Transformando a chave 'dependentes' em um array: 
const cliente = {
    nome: 'Andre', 
    idade: 36, 
    email: 'andre@email.com',
    dependentes: [{
        nome: 'Sarah',
        parentesco: 'filha', 
        dataNasc: '20/03/2011',
    }]
}

cliente.dependentes.push({
    nome: 'Samia Maria', 
    parentesco: 'filha', 
    dataNasc: '25/12/2015',
})

console.log(cliente);

const filhaMaisNova = cliente.dependentes.filter(dependente => dependente.dataNasc === '25/12/2015');
console.log(filhaMaisNova[0].nome);



