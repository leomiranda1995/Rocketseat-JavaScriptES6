// ES6

// Classes

class List {
    constructor() {
        this.data = [];
    }

    add(data){
        this.data.push(data);
        console.log(this.data);
    }
}

class TodoList extends  List {
    constructor() {
        super();

        this.usuario = 'Leonardo';
    }

    mostraUsuario(){
        console.log(this.usuario);
    }

    // normalmente métodos static, sua classe não tem constructor, pois ele não ve o escopo dela somente para apresentar alguma informação
    static soma(a, b) {
        return a + b;
    }
}

var MinhaLista = new TodoList();


document.querySelector('#novoTodo').onclick = function() {
    MinhaLista.add('Novo todo');
}

MinhaLista.mostraUsuario();

console.log(TodoList.soma(6, 7));


// Const e Let

const a = 1; // Não pode ter seu valor redefinido
// a = 3; // não irá funcionar

// Mas ela pode ser alterada por mutação dentro da constante
const usuario = { nome: 'Leonardo'};
usuario.nome = 'Cleiton';


// Let é a variável de escopo, não-global a todo arquivo
function teste(x) {
    let y = 2;

    if (x > 5) {
        console.log(x, y);
    }
}

teste(10);


// OPERAÇÕES EM ARRAY

const arr = [1, 3, 4, 5, 8, 9];

//map -> percorrer o vetor e retornar uma informação
const mapArray = arr.map(function(item, index){
    return item + index;
});
console.log(mapArray);

//reduce -> consumir o vetor e transformar em uma única variável, geralmente um número
const reduceArray = arr.reduce(function(total, next){
    return total + next;
});
console.log(reduceArray);

//filter -> filtra e retorna apenas os itens que atendem a condição, retornando true ou false
const filterArray = arr.filter(function(item){
    return item % 2 === 0;
});
console.log(filterArray);

//find -> procura uma informação dentro do array ou se a gente consegue encontrar uma informação dentro do array]
const findArray = arr.find(function(item){
    return item === 4;
});
console.log(findArray);


// ARROW FUNCTIONS

const arrayAf = [1, 3, 4, 5, 6];

const mapArrayAf = arrayAf.map(item => item * 2);
console.log(mapArrayAf);


const TesteAf = () => ({ nome: 'Diego' });
console.log(TesteAf());


// VALORES PADRÃO

function soma(a = 3, b = 6) {
    return a + b;
}
console.log(soma(1));
console.log(soma());

const somaArrowFunction = (a = 3, b = 6) => a + b;
console.log(somaArrowFunction(1));
console.log(somaArrowFunction());


// DESESTRUTURAÇÃO
const usuarioDs = {
    nomeDs: 'Diego',
    idadeDs: 23,
    enderecoDs: {
        cidadeDs: 'Rio do Sul',
        estadoDs: 'SC',
    },
};

// const nome = usuario.nome;
// const idade = usuario.idade;
// const cidade = usuario.endereco.cidade;

const{ nomeDs, idadeDs, enderecoDs: { cidadeDs } } = usuarioDs;
console.log(nomeDs);
console.log(idadeDs);
console.log(cidadeDs);


function mostraNome({ nomeDs, idadeDs }) {
    console.log(nomeDs, idadeDs);
}
mostraNome(usuarioDs);


// OPERADORES REST E SPREAD

// Rest -> Pegar o resto das propriedades

const usuarioRS = {
    nomeRS: 'Diego',
    idadeRS: 23,
    empresaRS: 'Rocketseat'
};
const { nomeRS, ...resto } = usuarioRS;
console.log(nomeRS);
console.log(resto);

const arrRS = [1, 2, 3, 4];
const [ x, y, ...z ] = arrRS;
console.log(x);
console.log(y);
console.log(z);

function somaRS(...params) {
    return params.reduce((total, next) => total + next);
}
console.log(somaRS(1, 3, 4));

// SPREAD

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];
console.log(arr3);

const usuario1 = {
    nome: 'Diego',
    idade: 23,
    empresa: 'Rocketseat',
};
const usuario2 = { ...usuario1, nome: 'Gabriel' };
console.log(usuario2);


// TEMPLATE LITERALS

const nomeTL = 'Diego';
const idadeTL = 23;
// console.log('Meu nome é ' + nomeTL + ' e tenho ' + idadeTL + ' anos.');
console.log(`Meu nome é ${nomeTL} e tenho ${idadeTL} anos.`);


// OBJECT SHORT SYNTAX

const nomeOSS = 'Diego';
const idadeOSS = 23;

const usuarioOSS = {
    nomeOSS,
    idadeOSS,
    empresa: 'Rocketseat', 
};
console.log(usuarioOSS);