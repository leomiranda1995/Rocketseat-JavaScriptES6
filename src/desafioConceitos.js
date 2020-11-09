// Exercício 1

class Usuario {
    constructor(email, senha){
        this.email = email,
        this.senha = senha,
        this.admin = false
    }

    isAdmin(){
        return this.admin;
    }
}

class Admin extends Usuario {
    constructor(){
        super();
        this.admin = true;
    }
}

const User1 = new Usuario('user@teste.com', 'senha123');
const Adm1 = new Admin('admin@teste.com', 'senha123');

console.log(User1.isAdmin());
console.log(Adm1.isAdmin());

///////////////////////////////////////////////////////////

// Exercício 2

const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

console.log(usuarios.map(item => item.idade));

console.log(usuarios.filter(item => item.empresa === 'Rocketseat' && item.idade > 18));

console.log(usuarios.find(item => item.empresa === 'Google'));

const usuarios2 = usuarios.map((item)=>{
    return {
        nome: item.nome,
        idade: item.idade * 2,
        empresa: item.empresa
    }
});

console.log(usuarios2);

console.log(usuarios2.filter((item)=>{
    return item.idade <= 50;
}));

///////////////////////////////////////////////////////////

// Exercício 3

//3.1
const arr = [1, 2, 3, 4, 5];
/*
arr.map(function(item) {
 return item + 10;
});
*/
console.log('Exercício 3.1', arr.map( item => item + 10 ));


//3.2
const usuario = {
    nome: 'Diego',
    idade: 23
};
/*
function mostraIdade(usuario) {
    return usuario.idade;
}
*/
const mostraIdade = usuario => usuario.idade;
console.log('Exercício 3.2', mostraIdade(usuario));


//3.3
const nome = "Diego";
const idade = 23;
/*
function mostraUsuario(nome = 'Diego', idade = 18) {
    return { nome, idade};
}
*/
const mostraUsuario = (nome = 'Diego', idade = 18) => ({nome, idade});
console.log(mostraUsuario(nome, idade));
console.log(mostraUsuario(nome));


//3.4
/*
const promise = function(){
    return new Promise(function(resolve, reject){
        return resolve();
    })
}
*/
const promise = () => {
    return new Promise( (resolve, reject) => resolve() );
}

///////////////////////////////////////////////////////////

// Exercício 4

//4.1
const empresa = {
    name: 'Rocketseat',
    address: {
        city: 'Rio do Sul',
        state: 'SC',
    }
};

const {name, address: {city, state}} = empresa;

console.log(name);
console.log(city);
console.log(state);

//4.2
/*
function mostraInfo(usuario){
    return `${usuario.nome} tem ${usuario.idade} anos.`;
}
mostraInfo( {nome: 'Diego', idade: 23} );
*/
const mostraInfo = ({nome, idade}) => `${nome} tem ${idade} anos`;
console.log(mostraInfo({nome: 'Diego', idade: 23}));

///////////////////////////////////////////////////////////

// Exercício 5

//5.1
const newArr = [1, 2, 3, 4, 5, 6];
const [x, ...y] = newArr;
console.log(x);
console.log(y);

const soma = (...params) => params.reduce((total, next)=>total+next);
console.log(soma(1, 2, 3, 4, 5, 6));
console.log(soma(1, 2));

//5.2
const userSpread = {
    nome:  'Diego',
    idade: 23,
    endereco: {
        cidade: 'Rio do Sul',
        uf: 'SC',
        pais: 'Brasil',
    }
};

const userSpread2 = {...userSpread, nome: 'Gabriel'};
console.log(userSpread2);

const userSpread3 = {...userSpread, endereco:{cidade: 'Lontras'}};
console.log(userSpread3);

///////////////////////////////////////////////////////////

// Exercício 6

const userTL = 'Diego';
const idadeTL = 23;
// console.log('O usuário ' + usuario + ' possui ' + idade + ' anos.');
console.log(`O usuário ${userTL} possui ${idadeTL} anos.`);

///////////////////////////////////////////////////////////

// Exercício 7

const nomeOSS = 'Diego';
const idadeOSS = 23;
/*
const usuarioOSS = {
    nomeOSS: nomeOSS,
    idadeOSS: idadeOSS,
    cidadeOSS: 'Rio do Sul',
};
*/
const usuarioOSS = {
    nomeOSS,
    idadeOSS,
    cidadeOSS: 'Rio do Sul',
};
console.log(usuarioOSS);