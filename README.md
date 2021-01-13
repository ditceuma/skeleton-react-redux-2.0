# Skeleton REACT + REDUX 2.0

Skeleton feito para facilitar a criação de apps com react usando redux. Essa versão utiliza o conceito de Hooks do React, [Clique aqui](https://reactjs.org/docs/hooks-intro.html) para conhecê-lo.

*This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).*

## Estrutura de diretórios

A estrutura de diretórios deste Skeleton, segue o seguinte padrão:

```
skeleton-react-redux-2.0
├── package.json
├── package-lock.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
├── README.md
├── src
│    ├── __tests__
│    |    |
│    |    └── App.test.js
│    ├── Assets
│    │    ├── css
|    |    |   ├── index.css
|    |    |   └── App.css
│    │    └── img
|    |        ├── logo.svg
│    ├── Pages
│    ├── Components
│    │    ├── shared
|    |    |   └── Logo.js
│    │    └── index.js
│    ├── Slices
│    │    └── rate.js
│    ├── App.js
│    ├── index.js
│    ├── store.js
│    ├── reducers.js
│    └── serviceWorker.js
```

Dentro de `src` os diretórios possuem as seguintes definições:

- **Actions**: a pasta actions contém todas as ações da sua aplicação, e elas podem ser separadas baseadas - nas rotas que você usa, ou até mesmo por responsabilidades que suas ações terão.
- **Components**: mantém os arquivos de componentes da aplicação.
- **Slices**: contém definições de 'fatias' do estado global da aplicação, baseado na responsabilidade. Gera as funções criadoras de actions, strings dos tipos de actions junto com um reducer pra lidar com todas essas ações.
- **Pages**: Contém os páginas que serão carregadas pelas rotas da aplicação.
- __**__tests__**_: diretório que contém a estrutura de testes.
## Instruções:

```sh
git clone git@github.com:devsceuma/skeleton-react-redux-2.0.git
cd skeleton-react-redux-2.0
npm install
npm start
```
