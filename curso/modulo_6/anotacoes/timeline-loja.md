# Aula 1

    Criação do projeto "Loja"

    Criação da pasta "modules" em "app" para gerenciar os componentes, services, etc.

    Criei o componente products dentro da pasta "products" em "modules"

    Rota para o componente products feita em "app.route.ts"

    dentro de app.component.html foi adicionado o rout-outlet, que carrega a página daquela determinada rota. Ex: para carregar o componente product, a url da página deve ser "localhost:4200/products"
    
    criado o componente auth na pasta "auth" em "modules" e sua rota em "app.route.ts"

    Instalei o bootstrap (npm i bootstrap) e o angular material (ng add @angular/material)

    Em product, eu puxei um material do angular material para fazer o card e fiz suas importações em product.component.ts
    Essse materiais são códigos prontos pra vc usar em angular

    Estilizei os botões do card usando o material de buttons

    Utilizei crudcrud com o thunder cliente para criar um produto sem ter uma aba para isso, e vou chamá-lo em product.ts

# Aula 2

    Puxei uma api do professor para servir como banco de dados, porém ainda não está funcionando

    Substitui o conteúdo dos cards de estático para dinâmico utilizando property-binding

    Transferi os cards de product.component.html e product.component.ts para o componente list

    Adicionado um botão em list.component.html para mudar da rota de list para create

    Utilização de OnDestroy em list para fazer a destruição de um observable

    Criei um service, que é como se fosse um intermediário entre os componentes gerais para que eles compartilhem funções iguais, sem ter que dar import rodando por toda árvore de componentes. Eles apenas contatam o service e pronto. ng g s <caminho-desejado>

    Criei um environment que receberá a url de onde os dados geral da aplicação serão recebidos. Esse envinroment servirá para receber a lista de produtos, que será utilizada em cada componente a sua maneira

    Em app.config.ts eu adicionei o provideHttpClient para poder achar a rota http