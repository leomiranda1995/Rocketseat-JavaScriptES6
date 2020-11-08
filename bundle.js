"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

// Exercício 1
var Usuario = /*#__PURE__*/function () {
  function Usuario(email, senha) {
    _classCallCheck(this, Usuario);

    this.email = email, this.senha = senha, this.admin = false;
  }

  _createClass(Usuario, [{
    key: "isAdmin",
    value: function isAdmin() {
      return this.admin;
    }
  }]);

  return Usuario;
}();

var Admin = /*#__PURE__*/function (_Usuario) {
  _inherits(Admin, _Usuario);

  var _super = _createSuper(Admin);

  function Admin() {
    var _this;

    _classCallCheck(this, Admin);

    _this = _super.call(this);
    _this.admin = true;
    return _this;
  }

  return Admin;
}(Usuario);

var User1 = new Usuario('user@teste.com', 'senha123');
var Adm1 = new Admin('admin@teste.com', 'senha123');
console.log(User1.isAdmin());
console.log(Adm1.isAdmin()); ///////////////////////////////////////////////////////////
// Exercício 2

var usuarios = [{
  nome: 'Diego',
  idade: 23,
  empresa: 'Rocketseat'
}, {
  nome: 'Gabriel',
  idade: 15,
  empresa: 'Rocketseat'
}, {
  nome: 'Lucas',
  idade: 30,
  empresa: 'Facebook'
}];
console.log(usuarios.map(function (item) {
  return item.idade;
}));
console.log(usuarios.filter(function (item) {
  return item.empresa === 'Rocketseat' && item.idade > 18;
}));
console.log(usuarios.find(function (item) {
  return item.empresa === 'Google';
}));
var usuarios2 = usuarios.map(function (item) {
  return {
    nome: item.nome,
    idade: item.idade * 2,
    empresa: item.empresa
  };
});
console.log(usuarios2);
console.log(usuarios2.filter(function (item) {
  return item.idade <= 50;
})); ///////////////////////////////////////////////////////////
// Exercício 3
//3.1

var arr = [1, 2, 3, 4, 5];
/*
arr.map(function(item) {
 return item + 10;
});
*/

console.log('Exercício 3.1', arr.map(function (item) {
  return item + 10;
})); //3.2

var usuario = {
  nome: 'Diego',
  idade: 23
};
/*
function mostraIdade(usuario) {
    return usuario.idade;
}
*/

var mostraIdade = function mostraIdade(usuario) {
  return usuario.idade;
};

console.log('Exercício 3.2', mostraIdade(usuario)); //3.3

var nome = "Diego";
var idade = 23;
/*
function mostraUsuario(nome = 'Diego', idade = 18) {
    return { nome, idade};
}
*/

var mostraUsuario = function mostraUsuario() {
  var nome = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Diego';
  var idade = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 18;
  return {
    nome: nome,
    idade: idade
  };
};

console.log(mostraUsuario(nome, idade));
console.log(mostraUsuario(nome)); //3.4

/*
const promise = function(){
    return new Promise(function(resolve, reject){
        return resolve();
    })
}
*/

var promise = function promise() {
  return new Promise(function (resolve, reject) {
    return resolve();
  });
}; ///////////////////////////////////////////////////////////
// Exercício 4
//4.1


var empresa = {
  name: 'Rocketseat',
  address: {
    city: 'Rio do Sul',
    state: 'SC'
  }
};
var name = empresa.name,
    _empresa$address = empresa.address,
    city = _empresa$address.city,
    state = _empresa$address.state;
console.log(name);
console.log(city);
console.log(state); //4.2

/*
function mostraInfo(usuario){
    return `${usuario.nome} tem ${usuario.idade} anos.`;
}
mostraInfo( {nome: 'Diego', idade: 23} );
*/

var mostraInfo = function mostraInfo(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade;
  return "".concat(nome, " tem ").concat(idade, " anos");
};

console.log(mostraInfo({
  nome: 'Diego',
  idade: 23
})); ///////////////////////////////////////////////////////////
// Exercício 5
//5.1

var newArr = [1, 2, 3, 4, 5, 6];
var x = newArr[0],
    y = newArr.slice(1);
console.log(x);
console.log(y);

var soma = function soma() {
  for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }

  return params.reduce(function (total, next) {
    return total + next;
  });
};

console.log(soma(1, 2, 3, 4, 5, 6));
console.log(soma(1, 2)); //5.2

var userSpread = {
  nome: 'Diego',
  idade: 23,
  endereco: {
    cidade: 'Rio do Sul',
    uf: 'SC',
    pais: 'Brasil'
  }
};

var userSpread2 = _objectSpread(_objectSpread({}, userSpread), {}, {
  nome: 'Gabriel'
});

console.log(userSpread2);

var userSpread3 = _objectSpread(_objectSpread({}, userSpread), {}, {
  endereco: {
    cidade: 'Lontras'
  }
});

console.log(userSpread3); ///////////////////////////////////////////////////////////
// Exercício 6

var userTL = 'Diego';
var idadeTL = 23; // console.log('O usuário ' + usuario + ' possui ' + idade + ' anos.');

console.log("O usu\xE1rio ".concat(userTL, " possui ").concat(idadeTL, " anos.")); ///////////////////////////////////////////////////////////
// Exercício 7

var nomeOSS = 'Diego';
var idadeOSS = 23;
/*
const usuarioOSS = {
    nomeOSS: nomeOSS,
    idadeOSS: idadeOSS,
    cidadeOSS: 'Rio do Sul',
};
*/

var usuarioOSS = {
  nomeOSS: nomeOSS,
  idadeOSS: idadeOSS,
  cidadeOSS: 'Rio do Sul'
};
console.log(usuarioOSS);
