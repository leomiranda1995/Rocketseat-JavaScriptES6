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