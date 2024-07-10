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

# Aula 3

    criei uma pasta communs em app para guardar meu componente navbar (header)

    peguei um angular material pra nav e em app.component.html chamei o componente header

    Em create.component, fiz o seguinte:

        Em TS, eu criei um formGroup para agrupar os formControls dos inputs do formulário, que são passados no método buildForm() e iniciado em OnInit

        Criei o html do formulário usando material, e dentro de form adicionei o mesmo nome do formGroup que havia criado em TS

        Os inputs possuem um formControlName que deve ser o mesmo dos formControl em TS para serem relacionados entre si

        Ainda na tag form, adicionei o (ngSubmit) que chama a função onSave em TS assim que o formulário for enviado

        A função onSave, inicialmente, só cria uma const product di tipo Product (model criado) que recebe os valores presentes nos inputs. Cria o produto de fato

    Agora no service:

        Criei um método chamado saveProduct() que sua função, será o de postar (post) o produto criado em create para o banco de dados, ou seja, armazenar esse produto cadastrado

        O método recebe como parâmetro o produto que será enviado e não retorna nenhum valor (Observable = void)

        Utilizando então o httpClient, eu dou um post que não retorna nada, enviando a url na qual eu desejo enviar, seguido do produto recebido. Então eu envio o endereço desejado e o produto enviado

    Voltando para o create:

        No TS, eu importo o service para utilizar o saveProduct e chamo o método enviando a const product criada anteriormente, dando pipe e mudando a rota da página para a listagem de produtos

    Criado a função de deletar produto em list.component.ts

    
    Para utilizar a API products-api sem ter a parte de login, precisa-se mudar a branch no terminal de products-api para "git checkout no-auth"

    Componente modal criado para complementar a função de "excluir" em list.component. Esse componente serve para confirmar se deseja-se realmente excluir o produto

    Basicamente, em list html no (click) do botão excluir, eu mudei a chamada da função para a abertura do modal. Essa função openDialog do modal faz o seguinte: ele abre o modal, e dependendo do botão clicado nele, ele retorna true ou false. Assim que o modal é fechado clicando no botão, ele chamará o método onDelete para de fato fazer a exclusão do produto.

    Para editar o produto, utilizei o próprio componente de create para servir como form de modificação. Foi adicionado uma rota em app.route que abre o edit enviando o id do produto clicado, que está associado na listagem.

    Assim que clicado no botão edit, ele manda para a rota criada para edição vinculando o id a ela

    Em product.service criou-se um método para obter o produto a partir de seu id (getProductById)

    Em create TS criei o getProduct que faz a chamada do service para obter o produto pelo id. Assim que ele pega o produto, ele substitui todos os valores de form, que é um formGroup com seus formControls e da um patchValue aos campos do form para que sejam associados os valores do produto puxado

    O método onSave foi modificado, para que ele reconheça quando o botão de "Salvar" está sendo para criar de fato um produto ou editar seus valores já existentes, se dividindo em dois novos métodos: createProduct e updateProduct

# Aula 4

    Criada a parte de registrar usuário e login de usuário, recebendo token do banco de dados e fornecendo para as aplcações que necessitam do token, como o cadastrar produto

    Uso de localStorage, HttpHeaders, criação de mais models em auth

    Alteração no environment adicionado o token passado pelo login de usuário

# Aula 5

    Criei um interceptor, que serve para: ***

    Comando pra criar: ng g interceptor <caminho-desejado>

    Nesse interceptor, ele capta todas as requisições feitas para a api, e, para as reqs que exigem um token, ele envia o token

    Criei um service em commons de loading, que servirá junto do interceptor loading, para capturar as requisições e enquanto ela estiver rodando na aplicação, aparece uma tela de loading para o usuário, que só sai quando todas as requisições forem finalizadas

# Aula 6

    