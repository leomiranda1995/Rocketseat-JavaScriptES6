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