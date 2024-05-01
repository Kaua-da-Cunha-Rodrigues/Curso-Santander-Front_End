# Aula 1

    npm i -g @angular/cli@16.2.13 - baixei o Angular

    ng new site - criei o projeto site em Angular

# Aula 2

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

# Aula 3

    Criei os componentes "home", "contact" e "address" e colei seus respectivos conteúdos no arquivo html

    atualizei todas as ancoras com (click) chamando a função "goToPage", criada no app.component.ts, para cada respectiva página

    Fui em home.component.ts e criei um objeto sectionFeatures que recebe dinamicamente os valores da aba destaques da página home

    Adicionei uma interpolação de string no h1 "Destaque", que basicamente é pegar o elemento do ts de home.component.ts e passar para o html. {{ sectionFeatures.title }}

    Para tipar o nosso atributo sectionFeatures, criei uma pasta models em app e criei um arquivo para tipar todos os valores de sectionFeatures

    Fiz a interpolação para todos os outros elementos

    Puxei o sectionFeatures do home.ts (componente filho), pro app.component.ts (componente pai)

    em app.component.html, no app-body, eu adicionei o property binding [homeData] para importar o atributo do pai para a home

    Em home.component.ts eu adicionei um @Input que recebe o homeData como sendo do tipo SectionModel

    Substitui todos os "sectionFeatures" de home.component.html por "homeData"

    Criei uma pasta chamada "constants" que recebe o enum para as páginas, que é chamada em app.component.html e o ts.

    Na pasta models em section-features. criei uma interface AppData, que receberá a tipagem das seções de todos os componentes.

    Esse AppData é importado no app.component, e através dele, eu adiciono todos os textos para serem carregados de forma dinâmica.
    Para puxar esses textos em seus devidos components, adicionei uma propriedade em app.component.html em cada chamada de componente, uma propriedade. Ex: em <app-home [homeData]="AppData.SectionFeatures">
    
     no ts de cada um (Ex: home.component.ts) um @input recebendo <nome-component>Data: <interface que define seu tipo> e em seu html, coloquei esse valor usando property-biding para chamar seus valores: Ex: em home, eu tenho o homeData. Para chamar o valor da propriedade título dele, eu uso {{ appData.title }} dentro do h1