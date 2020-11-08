"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// ES6
// Classes
var List = /*#__PURE__*/function () {
  function List() {
    _classCallCheck(this, List);

    this.data = [];
  }

  _createClass(List, [{
    key: "add",
    value: function add(data) {
      this.data.push(data);
      console.log(this.data);
    }
  }]);

  return List;
}();

var TodoList = /*#__PURE__*/function (_List) {
  _inherits(TodoList, _List);

  var _super = _createSuper(TodoList);

  function TodoList() {
    var _this;

    _classCallCheck(this, TodoList);

    _this = _super.call(this);
    _this.usuario = 'Leonardo';
    return _this;
  }

  _createClass(TodoList, [{
    key: "mostraUsuario",
    value: function mostraUsuario() {
      console.log(this.usuario);
    } // normalmente métodos static, sua classe não tem constructor, pois ele não ve o escopo dela somente para apresentar alguma informação

  }], [{
    key: "soma",
    value: function soma(a, b) {
      return a + b;
    }
  }]);

  return TodoList;
}(List);

var MinhaLista = new TodoList();

document.querySelector('#novoTodo').onclick = function () {
  MinhaLista.add('Novo todo');
};

MinhaLista.mostraUsuario();
console.log(TodoList.soma(6, 7)); // Const e Let

var a = 1; // Não pode ter seu valor redefinido
// a = 3; // não irá funcionar
// Mas ela pode ser alterada por mutação dentro da constante

var usuario = {
  nome: 'Leonardo'
};
usuario.nome = 'Cleiton'; // Let é a variável de escopo, não-global a todo arquivo

function teste(x) {
  var y = 2;

  if (x > 5) {
    console.log(x, y);
  }
}

teste(10); // OPERAÇÕES EM ARRAY

var arr = [1, 3, 4, 5, 8, 9]; //map -> percorrer o vetor e retornar uma informação

var mapArray = arr.map(function (item, index) {
  return item + index;
});
console.log(mapArray); //reduce -> consumir o vetor e transformar em uma única variável, geralmente um número

var reduceArray = arr.reduce(function (total, next) {
  return total + next;
});
console.log(reduceArray); //filter -> filtra e retorna apenas os itens que atendem a condição, retornando true ou false

var filterArray = arr.filter(function (item) {
  return item % 2 === 0;
});
console.log(filterArray); //find -> procura uma informação dentro do array ou se a gente consegue encontrar uma informação dentro do array]

var findArray = arr.find(function (item) {
  return item === 4;
});
console.log(findArray); // ARROW FUNCTIONS

var arrayAf = [1, 3, 4, 5, 6];
var mapArrayAf = arrayAf.map(function (item) {
  return item * 2;
});
console.log(mapArrayAf);

var TesteAf = function TesteAf() {
  return {
    nome: 'Diego'
  };
};

console.log(TesteAf()); // VALORES PADRÃO

function soma() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 6;
  return a + b;
}

console.log(soma(1));
console.log(soma());

var somaArrowFunction = function somaArrowFunction() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 6;
  return a + b;
};

console.log(somaArrowFunction(1));
console.log(somaArrowFunction()); // DESESTRUTURAÇÃO

var usuarioDs = {
  nomeDs: 'Diego',
  idadeDs: 23,
  enderecoDs: {
    cidadeDs: 'Rio do Sul',
    estadoDs: 'SC'
  }
}; // const nome = usuario.nome;
// const idade = usuario.idade;
// const cidade = usuario.endereco.cidade;

var nomeDs = usuarioDs.nomeDs,
    idadeDs = usuarioDs.idadeDs,
    cidadeDs = usuarioDs.enderecoDs.cidadeDs;
console.log(nomeDs);
console.log(idadeDs);
console.log(cidadeDs);

function mostraNome(_ref) {
  var nomeDs = _ref.nomeDs,
      idadeDs = _ref.idadeDs;
  console.log(nomeDs, idadeDs);
}

mostraNome(usuarioDs); // OPERADORES REST E SPREAD
// Rest -> Pegar o resto das propriedades

var usuarioRS = {
  nomeRS: 'Diego',
  idadeRS: 23,
  empresaRS: 'Rocketseat'
};

var nomeRS = usuarioRS.nomeRS,
    resto = _objectWithoutProperties(usuarioRS, ["nomeRS"]);

console.log(nomeRS);
console.log(resto);
var arrRS = [1, 2, 3, 4];
var x = arrRS[0],
    y = arrRS[1],
    z = arrRS.slice(2);
console.log(x);
console.log(y);
console.log(z);

function somaRS() {
  for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }

  return params.reduce(function (total, next) {
    return total + next;
  });
}

console.log(somaRS(1, 3, 4)); // SPREAD

var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var arr3 = [].concat(arr1, arr2);
console.log(arr3);
var usuario1 = {
  nome: 'Diego',
  idade: 23,
  empresa: 'Rocketseat'
};

var usuario2 = _objectSpread(_objectSpread({}, usuario1), {}, {
  nome: 'Gabriel'
});

console.log(usuario2);
