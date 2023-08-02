# FeedThePet

o projeto pode ser vizualizado por meio do [link](https://gustavogajdeczka.github.io/feed-the-pet/).

## Servidor de desenvolvimento

para iniciar o ambiente de desenvolvimento do projeto primeiro deve-se instalar a versão 16.1.0 do angular e executar o comando `npm install`, feito isso
Execute `ng serve` para gerar um servidor. 
navegue pelo browser até `http://localhost:4200/`.

## Rodando o teste automatizado

Para rodar o teste automatizado, primeiro deve-se executar o comando `ng serve` e em seguida execute o comando `npx cypress open`
quando abrir o painel de testes do Cypress navegue por E2E Testing -> Start E2E Testing in Chrome -> test-app.cy.ts