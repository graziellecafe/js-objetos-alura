/* Usando a representação do objeto pessoa, foi solicitado que adicionássemos
os campos seguro social e cpf no formato string. Além disso, quando forem
exibidas as informações da pessoa em um relatório, deverão aparecer
somente os primeiros 4 digitos do CPF e da carteira de identidade. 
*/

const pessoa = {
    nome:"Bruce Banner",
    dataNascimento:"25/01/1980",
    carteiraIdentidade:"997776-X",
    email:"profbanner@email.com",
    telefone:"+552877776666",
    cidade:"Cachoeiro de Itapemirim",
    estado:"ES"
 }

 pessoa.seguroSocial = '854321985-9';
 pessoa.cpf = '123456789-10';

 console.log(pessoa);

 console.log(pessoa.cpf.substring(0,4));

