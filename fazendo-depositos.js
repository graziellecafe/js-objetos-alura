/* Desafio: Fazendo depósitos 
Adicionar uma propriedade que permita 
"ações" para que os clientes que estão cadastrados
consigam fazer operações bancárias. */

const cliente = {
    nome: 'Andre', 
    idade: 36, 
    email: 'andre@email.com',
    dependentes: [
        {
            nome: 'Sarah',
            parentesco: 'filha', 
            dataNasc: '20/03/2011'},
        {
            nome: 'Samia Maria',
            parentesco: 'filha', 
            dataNasc: '04/01/2014'
        }    
    ],
    saldo: 100, 
    depositar: function(valor){
        this.saldo += valor;
    }
}

cliente.depositar(50)
console.log(cliente.saldo);