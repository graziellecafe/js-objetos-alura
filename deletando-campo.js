const personagem = {
    nome: 'Harry Potter', 
    casa: 'Grifinória',
    classe: 'bruxo',
    aliado: {
        nome: 'Hermione', 
        casa: 'Grifinória', 
        classe: 'bruxa'
    },
}

console.log(personagem);

delete personagem.aliado;
console.log(personagem);