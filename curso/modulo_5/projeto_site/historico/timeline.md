Aula 1

    npm i -g @angular/cli@16.2.13 - baixei o Angular

    ng new site - criei o projeto site em Angular

Aula 2

    npm run build - Compilei e subi a aplicação para o servidor poder rodar o ts no navegador

    Peguei todo conteúdo desejado dentro do body de "site-estatico" (excluindo o body) e joguei dentro de app.component.html, que é como se fosse nosso "index.html"

    Tiro o arquivo "gitkeep" dentro da pasta assets em src para adicionar as imagens da aplicação e colei as imagens dentro de assets

    Copiei os estilos para o "style.css" global

    Instalei o bootstrap com "npm i bootstrap"

    Fui no angular.json e adicionei a referência ao bootstrap na aba "styles": [] e "scripts": []

    *Cópia do projeto estático para angular feita*

    Criei um novo componente ABOUT - ng generate component <nome-componente>

    Referenciei ele no app.component.html para que ele apareça

    Criei uma propriedade em app.component.ts chamada currentPage que recebe a página atual da aplicação

    Utilizei *ngIf na divisão da home e do app-about para só exibir essa áreas quando o currentPage for igual ao nome delas

    Na barra de navegação, peguei a âncora do "Sobre Nós" e adicionei um evento de (click) que chama uma função do app.component.ts