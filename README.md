# Fundamentos do Javascript: Objetos
Exercícios e teoria sobre Objetos em JS. Curso 'Fundamentos do Javascript: Objetos' pela plataforma Alura.

# Sobre o curso 
* Como construir objetos utilizando a sintaxe do Javascript
* Objetos literais, ou seja, objetos únicos 
* Percorrer e alterar objetos
* Conceitos de Orientação a Objetos
* Protótipo e Herança

# O que são objetos
Todo objeto no Javascript é formado pelo par chave/valor, diferentemente de um array (que temos os valores associados ao seu índice).

O array não 'permite' que fornecemos qual informação está dentro daquele índice, não conseguindo realizar uma especificação. 

Exemplo de array: 
```
const nomeUsuario = ['André', 36, 'Belo Horizonte'];
```

Utilizar um outro tipo de estrutura para organizar melhor os dados e informações.

Exemplo de um objeto: 
```
const cliente = {
    nome: 'André',
    idade: 36, 
    cidade: 'Belo Horizonte', 
    cpf: '123.345.564-38', 
    email: 'andre@gmail.com'
}
```

Temos a chave 'nome' com o valor 'André', a chave 'idade' com o valor '36'.

Utilizamos um objeto quando precisamos realizar uma abstração de algo do mundo real.

Exemplo: Um cliente tem nome, endereço, cpf, conta, etc. 

## Como acessar um objeto: 
Através da notação de '.' ou pela notação de [].

## Template strings: 
**Definição**: São strings que permitem expressões embutidas. Interpolação de strings com variáveis.

``` 
console.log(`Texto ${<nome_da_variavel>}`);
```

## Consultar um objeto
Utilizando chaves 

```
const cliente = { 
    nome: 'André'; 
    idade: 37; 
    cpf: '123.456.789-23', 
    email: 'andre@gmail.com'
}

console.log(cliente['nome']);
```

ou

```
const cliente = {
    nome: 'André', 
    idade: 37, 
    cpf: '123.456.789-23', 
    email: 'andre@gmail.com'
}

const chaves = ['nome', 'idade', 'cpf', 'email']; 
console.log(cliente[chaves[0]]);
```

Acessando todas as chaves do objeto através do método forEach:
```
chaves.forEach(info => { 
    console.log(cliente[info]);
})
```

## Deletando propriedade / classe do objeto 
delete <objeto.classe>
O delete remove do objeto o valor da propriedade, assim como a chave. 

Exemplo: 

```
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
```