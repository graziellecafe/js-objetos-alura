/* Desafio: Oferta de seguro
Percorrer um objeto, verificar se existe a chave 'dependentes' e, caso exista, 
enviar uma mensagem de oferta de seguro. 
*/

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

function oferecerSeguro(obj) {
    const propsCliente = Object.keys(obj);
    if(propsCliente.includes('dependentes')){
        console.log(`Oferta de seguro de vida disponível para o(a) cliente ${obj.nome}.`);
    }
}

oferecerSeguro(cliente);