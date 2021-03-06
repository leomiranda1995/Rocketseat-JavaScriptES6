import api from './api';
class App {
    constructor(){
        this.repositories = [];

        this.formEl = document.querySelector('#repo-form');
        this.inputEl = document.querySelector('input[name=repository');
        this.listElement = document.querySelector('#repo-list');

        this.registerHandlers();
    }

    registerHandlers() {
        this.formEl.onsubmit = event => this.addRepository(event);
    }

    setLoading(loading = true) {
        if (loading === true) {
            let loadingEl = document.createElement('span');
            loadingEl.appendChild(document.createTextNode('Carregando'));
            loadingEl.setAttribute('id', 'loading');

            this.formEl.appendChild(loadingEl);
        } else {
            document.querySelector('#loading').remove();
        }
    }

    async addRepository(event) {
        event.preventDefault();

        this.setLoading();
        
        try{
            const repoInput = this.inputEl.value;

            if(repoInput.length === 0)
                return;

            const response = await api.get(`/repos/${repoInput}`);
            
            const { name, description, html_url, owner: {avatar_url} } = response.data;

            this.repositories.push({
                name,
                description,
                avatar_url,
                html_url,
            });

            this.render();
        } catch (err) {
            alert('O repositório não existe!');
        }
        
        this.setLoading(false);
        this.inputEl.value = '';
        // console.log(this.repositories);
    }

    render(){
        this.listElement.innerHTML = '';

        this.repositories.forEach(repo => {
            let imgEl = document.createElement('img');
            imgEl.setAttribute('src', repo.avatar_url);

            let titleEl = document.createElement('strong');
            titleEl.appendChild(document.createTextNode(repo.name));

            let descriptionEl = document.createElement('p');
            descriptionEl.appendChild(document.createTextNode(repo.description));

            let linkEl = document.createElement('a');
            linkEl.setAttribute('target', '_blank');
            linkEl.setAttribute('href', repo.html_url);
            linkEl.appendChild(document.createTextNode('Acessar'));

            let listItemEl = document.createElement('li');
            listItemEl.appendChild(imgEl);
            listItemEl.appendChild(titleEl);
            listItemEl.appendChild(descriptionEl);
            listItemEl.appendChild(linkEl);

            this.listElement.appendChild(listItemEl);
        });
    }
}

new App();