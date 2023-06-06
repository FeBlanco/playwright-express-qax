<h2 align="center">
 <img align="center"  height="120" width="120" src="https://playwright.dev/img/playwright-logo.svg"  alt="playwright"> 
</h2>

**CodeceptJs + JS**

Este repositório foi criado como um ambiente de treinamento local para aprender sobre testes automatizados para web, utilizando a ferramenta playwright, através do curso da [QAxperience](https://qaxperience.com/ "QAxperience") com a mentoria do Fernando Papito.

Nele automatizamos o sistema do Mark L feito exclusivamente para o curso, sendo um sistema de gerenciamento de tarefas. Foi implementado Boas práticas de automação web e padrões de page objects e custom commands, junto ao typescript.

![01_6L3SV5jL_2](https://github.com/FeBlanco/playwright-express-qax/assets/43914674/844e0cf6-1c07-4d08-9a48-69411ca9df07)

### Instalação e Execução

Para rodar o projeto, você precisará do:
[NodeJS - Vesion 16](https://nodejs.org/en/download/ "NodeJS -Vesion 16") ou superior, e do [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm "npm") e/ou [yarn](https://yarnpkg.com/package/npm "yarn") instalados.

O comando para iniciar o projeto: `npm install` ou `yarn install` e dessa forma todas as dependências serão instaladas.

Caso queira instalar o playwright o comando é: `yarn create playwright`.

Para rodar os testes, após ter instalado o playwright e sua dependências com os comandos acima, navegue para a pasta raiz do projeto e execute:

    yarn playwright test
    
Para rodar os testes no modo ui.

    yarn playwright test --ui

Para rodar os testes no modo debug.

    yarn playwright test --debug

## Tecnologias Utilizadas

- [Playwright](https://playwright.dev/) - Ferramenta de teste automatizados
- [Yarn](https://yarnpkg.com/) - Gerenciador de pacotes
