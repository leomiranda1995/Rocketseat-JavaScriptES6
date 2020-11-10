// Exercícios Async/Await

// Transforme os seguintes trechos de código utilizando async/await

/*
const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

function umPorSegundo() {
    delay().then( () => {
        console.log('1s');

        delay().then( () => {
            console.log('2s');

            delay().then( () => {
                console.log('3s');
            });
        });
    });
}
*/

const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

async function umPorSegundo() {
    await delay();
    console.log('1s');
    await delay();
    console.log('2s');
    await delay();
    console.log('3s');
}

// umPorSegundo();

/**********************************************************/

/*
import axios from 'axios';

function getUserFromGithub(user) {
    axios.get(`https://api.github.com/users/${user}`)
        .then(response => {
            console.log(response.data);
        })
        .catch(err => {
            console.log('Usuário não existe!');
        })
}
*/


import axios from 'axios';

async function getUserFromGithub(user) {
    try {
        const response = await axios.get(`https://api.github.com/users/${user}`);
        console.log(response.data);
    } catch (err) {
        console.log(err.message);
        console.log('Usuário não existe!');
    }
}

// getUserFromGithub('diego3g');
// getUserFromGithub('diego3g124123');

/**********************************************************/

/*
class Github {
    static getRepositories(repo) {
        axios.get(`https://api.github.com/repos/${repo}`)
            .then(response =>{
                console.log(response.data);
            })
            .catch(err => {
                console.log('Respositório não existe!');
            })
    }
}
*/

class Github {
    static async getRepositories(repo) {
        try {
            console.log(await axios.get(`https://api.github.com/repos/${repo}`));
        } catch(err) {
            console.log('Repositório não existe!');
        }
    }
}

// Github.getRepositories('leomiranda1995/Rocketseat-JavaScriptES6');
// Github.getRepositories('rocketseat/dslkvmskv');

/**********************************************************/
/*
const buscaUsuario = usuario => {
    axios.get(`https://api.github.com/users/${usuario}`)
        .then(response => {
            console.log(response.data);
        })
        .catch(err => {
            console.log('Usuário não existe');
        });
}
*/

const buscaUsuario = async usuario => {
    try {
        console.log(await axios.get(`https://api.github.com/users/${usuario}`));
    } catch (err) {
        console.log('Usuário não existe');
    }
}

// buscaUsuario('diego3g');