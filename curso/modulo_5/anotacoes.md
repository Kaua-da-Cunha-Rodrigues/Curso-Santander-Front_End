# Aula 1

  ##  O que é o Angular?

        é um framework JavaScript, de código aberto, mantido pela Google para a construção de SPA (Single Page Application)

   ## O que é um framework?

        Conjunto de recursos prontos que nos oferecem algumas funcionalidades ou a estrutura para desenvolvermos essas funcionalidades.

   ## SPA

        Aplicações cujas funcionalidades estão concentradas em uma única página

   ## Angular CLI

        É uma ferramenta de interface de linha de comando que você usa para inicializar, desenvolver, estruturar e manter aplicativos Angular

# Aula 2

    É comum que, quando vamos subir o projeto no git, nós adicionemos um arquivo ".gitignore" que contenha o "node_modules/", pois o arquivo é muito grande e não é modificado.

    E quando vamos puxar esse projeto em uma outra máquina, precisamos dar um "npm i" para baixar as dependências do projeto.

   ## Mas onde ficam essas dependências?**

        Dentro do arquivo package.json. Lá também ficam as "devdependences" que só servem na hora em que você está programando.
    
   ## Package-lock

        Ele guarda as versões das aplicações (Angular, tslib, etc) para quando um usuário baixar as dependências do projeto, as versões das aplicações sejam as mesmas utilizadas para a criação do projeto

   ## Arquivos que Dificilmente irão ser Alterados

        tsconfig.json
        main.ts
    
    A pasta src é a mais importante, pois é nela onde está de fato a aplicação e onde será mais alterado e trabalhado

   ## Pasta src

        main.ts - Faz algumas configurações padrões

        index.html - É a casca da aplicação, onde dentro do body geralmente fica o <app-root></app-root>, que faz referência ao app.component dentro da pasta app

        style.css - Estilo global da aplicação 
    
   ## Pasta app app.component

        app.component: É o componente principal e dele surgem os outros componentes, como head.component, main.component etc.

        dentro desta pasta ficam também os outros componentes da aplicação

   ## Estrutura dos Componentes

        <nome-componente>.component.ts - É onde é definida as regras de negócio do componente

        <nome-componente>.component.spec.ts - Funciona como teste unitário para o item acima

        <nome-componente>.component.html - Traz algum html específico do componente

        <nome-componente>.component.css - Estilização específica desse componente

        <nome-componente>.module.ts - É aqui que é declarado alguns módulos de terceiros que serão usados (assunto da próxima matéria). Não está em todos necessariamente

     Para fazer a chamada de um componente dentro do app.component.html, utilizamos o seu nome seletor como uma tag HTML. Esse seletor fica no arquivo <nome-componente>.component.ts

     Por exemplo, para utilizar o componente about na estrutura, utilizados <app-about></app-about>. Assim, o conteúdo do html do componente será puxado para a tela

# Aula 3

   ##  Databiding

     É a comunicação entre o template (HTML) e o código Typescript (lógica de negócio). Ela pode ser feita de três formas:

          Dados do Typescript para o template HTML (interpolação de string ou property binding). Ex: {{ interpolação }}

          Dados do template para o Typescript (event binding). Ex: (click)

          Ou, ainda, combinando as duas formas anteriores (two-way-binding)

# Aula 4

     Início do crud

     Criação do componente cadastrar-usuario
     Montagem do model que receberá a tipagem do formulário de cadastro
     Dentro de cadastro-usuario.ts foi criado o userForm com os formControls relacionados ao html (através do formControlName) para receber os dados pelo ts.
     onSave é a função que é executada quando o formulário for enviado
     Utilização de (ngSubmit), [disabled], (click), ngOnInit