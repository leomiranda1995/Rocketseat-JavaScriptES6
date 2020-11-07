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