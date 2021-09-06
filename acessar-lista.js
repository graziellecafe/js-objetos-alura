/* --------------------- DESAFIO 02: ACESSAR CHAVES --------------------- 
Consultar um objeto utilizando uma lista de chaves relativas a informações de clientes
gerada pelo sistema e printar o resultado na tela. 
*/

const cliente = {
    nome: 'André', 
    idade: 36, 
    cpf: '123.456.789-23', 
    email: 'andre@gmail.com'
}

const chaves = ['nome', 'idade', 'cpf', 'email'];
// console.log(cliente[chaves[0]]);

// console.log(cliente['nome']);

// forEach: método de array. Precisa de uma callback para funcionar
chaves.forEach(info => {
    console.log(cliente[info]);
})