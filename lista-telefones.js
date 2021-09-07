/* Desafio: Lista de Telefones
Acessar a lista de números de telefone das pessoas cadastradas no sistema e
imprimi-la, verificando se  há mais de um número em algum cadastro. 
*/

const cliente = {
    nome: 'André', 
    idade: 36, 
    cpf: '123.456.789-12', 
    email: 'andre@email.com.br', 
    telefones: ['+55(32)98765-4321', '+55(45)3728-2812']
}

// console.log(cliente);

cliente.telefones.forEach(numero => {
    console.log(numero);
})