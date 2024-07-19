# 🏥 Site da Fundação Hospital Centenário
A Fundação Hospital Centenário é um hospital público 100% SUS situado em São Leopoldo, Rio Grande do Sul, trabalhando desde 1924 para auxiliar a comunidade de São Leopoldo e região. 
Visando uma melhor experiência para todos que tem contato com a nossa instituição, nosso setor de TI está sempre identificando áreas que são passivas a melhorias. E a renovação do site está entre uma das diversas melhorias implementadas nos últimos anos.
O site é utilizado desde 2015, e contava com uma interface muito desatualizada e nada moderna. E é aí que este projeto entra em cena, visando melhorar a interação e relação de nossa comunidade com o hospital. Além de ser uma maneira de destacar e trazer visibilidade a tudo de bom oferecido pela nossa instituição.

### 🏚 Como era o site antigo?

Nos prints abaixo podemos ver como era a interface do site antes do projeto. Feito inteiramente com WordPress, o site era, no mínimo, nada intuitivo. 
>![Site antigo](https://github.com/user-attachments/assets/f2ca42d3-258e-42ac-a7e1-06c92655209c)
>![Site antigo](https://github.com/user-attachments/assets/e0a2369e-901d-4532-8ba9-b53a48b34ef4)
>Tela home👆

As outras telas do site seguiam o mesmo padrão, possuindo textos antigos e, no geral, formando uma experiência de usuário nada convidativa e dificultando a utilização das funcionalidades presentes nele.
Por isso, o presente projeto buscou trazer um novo visual ao site. Além de melhorar as funcionalidades existentes.


-------------

# 👩‍💻 Como rodar/modificar o código do projeto?
Você vai realizar mudanças no código do projeto? Aqui nós vamos te ensinar como rodar o projeto no seu computador e o que você precisa para fazer isso acontecer. Veremos aqui:
1. [Tecnologias utilizadas](https://github.com/hetielle/SiteFHC?tab=readme-ov-file#-como-rodarmodificar-o-código-do-projeto)
2. [Estrutura de organização de componentes/código](https://github.com/hetielle/SiteFHC?tab=readme-ov-file#-estrutura-de-organização-de-componentescódigo)
3. [Estrutura de organização lógica](https://github.com/hetielle/SiteFHC?tab=readme-ov-file#estrutura-de-organização-lógica)
   
> [!IMPORTANT]
> Antes de qualquer coisa, instale o VSCode em seu computador para conseguir editar o código. O site para download está [aqui](https://code.visualstudio.com/download).
> Instale também o [Git](https://git-scm.com/downloads) e o [GitHub Desktop](https://desktop.github.com/download/), para poder clonar o projeto para a sua máquina.

## 🖥 Tecnologias utilizadas
Primeiramente, vamos nos situar sobre as tecnologias utilizadas no projeto. Para conseguir mexer melhor neste projeto, é bom você ter algum conhecimento sobre:
- HTML
- CSS responsivo
- JavaScript
- WordPress
- Consumo de API's
- Git
- React JS/ Node.js

***HTML, CSS e JavaScript*** são as principais tecnologias/linguagens de programação utilizadas em qualquer site. E ***responsividade*** é o termo utilizado para se referir a um site que se adapta adequadamente a qualquer tamanho de tela.

O ***WordPress*** é um sistema de gerenciamento de conteúdo que visa descomplicar a criação de sites e blogs. Neste projeto, nós utilizamos o WP como uma espécie de backend para as telas novas que foram criadas. Nele que realizamos os uploads e o mantimento de arquivos puxados pelo site, alguns dos quais explicaramos mais a fundo posteriormente. Além disso, é utilizado para algumas telas simples, como as de notícias.

O ***consumo de API*** realizado aqui, consiste apenas em algumas requisções HTTP do tipo GET e utilização dos dados retornados. Porém, também comentaremos mais sobre isso posteriormente!

Em relação ao ***Git***, serão utilizados alguns comandos básicos. Você pode achar diversos tutoriais a respeito da utilização do Git e do GitHub muito facilmente na internet.

Por fim, mas não menos importante, temos a utilização de ***React JS*** que é impressindível para o funcionamento do código. React JS é uma tecnologia que te permite criar sites muito mais facilmente por meio da utilização de componentes reutilizáveis e métodos e classes nativas, inserindo JavaScript diretamente no HTML. Essa mistura acaba tornando a programação/criação de um site uma tarefa mais intuitiva e ágil.
> [!WARNING]
> É preciso realizar a instalação do Node.js para rodar o site.
> - Baixe [aqui](https://nodejs.org/en). Se atente a marcar a opção de instalar o que for necessário para rodar a aplicação durante a instalação.
> - Ou usando [`nvm`](https://github.com/nvm-sh/nvm)
>    - `nvm install`
>    - `nvm use`

## 🗂 Estrutura de organização de componentes/código
VSCode e Node.js instalados? Então agora vamos entender melhor como o projeto está organizado para você conseguir encontrar o que precisa para realizar suas modificações. Como isso funciona lógicamente será abordado na próxima seção.
Dentro de `./site-fhc` temos a pasta **`./public`**, onde temos os componentes mais principais como o `index.html` (onde temos a iniciação das ***animações*** utilizando a ***biblioteca AOS***), e a pasta **`./src`**, que é onde a mágica acontece a partir dos componentes que criamos.
Na pasta **`./src`** temos os componentes principais:

- `App.css` & `index.css`: Possuem características/regras de CSS que são utilizadas no site todo.
- `index.js`: Inicia os scripts de JavaScript e o pop-up da política de cookies e LGPD.
- `App.js`: Componente pai onde são organizadas as rotas e chamadas as páginas.

E além disso, temos a pasta **`./ui`** que possui tudo referente a lógica utilizada para a apresentação do conteúdo nas páginas. Ela é dividida por duas subpastas: 
- **`./components`:** Aqui estão os componentes com o HTML, CSS e JavaScript por trás do conteúdo das telas. Para mais organização, aqui dentro foi seguido um padrão de organização que divide esses componentes em **subpastas** referentes as suas **respectivas páginas do site**, assim temos pastas como `./components/doacao`, `./components/escalas`, `./components/fundacao`, etc. Já a pasta `./components/geral`, diferente das outras, é para componentes que não são para apenas uma página, como o componente de erro 404, o do footer, o da header e o da política de privacidade. 

  E dentro de cada uma dessas subpastas da pasta `./components`, temos mais algumas subspastas: **`./img`**, para deixar os arquivos `.webp` para serem puxados quando há imagens na página, e **`./style`**, com os códigos de CSS. Ambas pastas são divididas em subpastas de acordo com os componentes presentes na página. Pegando a pasta `./components/home` como exemplo, temos as pastas `./img` e `./style` sendo subdivididas em `./albumBebes`, `./home` e `./noticias`, que são os componentes que compõem a tela home do site.

   Exepicionalmente, temos a pasta `./pdfs-escala` na pasta `./escala`, que foi criada devido ao grande números de componentes que foi necessário criar. Nessa pasta temos o carregamento dos PDF's de cada especialidade.

  E por fim, a maioria das pastas de `./style` possuem dois arquivos de CSS: um geral e um referente as especificações para telas menores e outras questões de responsividade, a qual sempre possui o sufixo "Smartphone". 
- **`./pages`:** Aqui temos os componentes de página. Neles são carrregados o componente principal presente na pasta `./components` e, por sua vez, esse componente de página é carregado nas rotas presentes no `App.js`, conforme mencionamos antes.


## 🧠Estrutura de organização lógica e observações importantes
Para conseguirmos realizar mudanças no código, precisamos entender não só onde está cada coisa, mas como elas se interligam na prática. 
Primeiramente, vamos entender como o site funciona no geral. Como mencionado anteriormente, ele é dividido em duas partes: 
- **WordPress:** Tendo em mente que a criação de um sistema inteiro de CRUD seria custoso e demorado, temos o WordPress funcionando como uma espécie de *backend*. É nele que são realizados os uploads de arquivos a serem utilizados em todo o site, a publicação de notícias pelo setor de comunicação e o controle por trás de todos os PDF's das escalas que será explicado posteriormente.
- **Front-end:** Sendo a parte que foi criada com React JS, o front-end do sistema é todo este projeto aqui! Partes do site são feitas pegando dados que vem do WordPress, fromatando-os, estilizando-os e apresentando nas telas. Nos próximos tópicos explicaremos melhor o que acontece em cada página do site!

### Home
Começando pela página *home*, além dos elementos de HTML básicos, fazemos o uso da ***REST API do WordPress***, a qual é utilizada aqui e nas páginas de escalas. Essa API possui diversas funcionalidades, e a que utilizamos aqui funciona a partir da seguinte lógica: 

Quando você faz um site com WordPress, os dados do seu site são salvos no formato **JSON** em um diretório específico que segue o padrão de ***"https://seudominio/wp-json/wp/v2/"*** e, dentro da pasta ***v2***, temos outras pastas que podem ir sendo acessadas, como ***pages*** e ***posts***. E sendo esta API do tipo **REST**, ela funciona por meio de **requisições HTTP**. Dessa maneira podemos realizar uma requisição do tipo ***GET*** para o endereço ***"https://seudominio/wp-json/wp/v2/posts"*** e, por meio de JavaScript, pegar o JSON lá presente e fazer algo com ele. Caso você tenha ficado com alguma dúvida ou queira se aprofundar, você pode ler mais sobre [aqui](https://developer.wordpress.org/rest-api/) e [aqui](https://developer.wordpress.com/docs/api/).

Aqui ná página *home*, utilizamos essa API na parte de notícias para trazer os dados das últimas três notícias publicadas no site e encaixá-los no CSS que haviamos proposto. E ao clicar no "ler mais" da notícia ou no "ver mais notícias", você é levado as únicas telas feitas com WordPress que restaram no site.

Embaixo das notícias, temos o álbum dos bebês. Queríamos trazer uma maneira de colocar em display todos os posts realizados no instagram do hospital acerca dos álbuns dos bebês, então utilizamos a ferramenta [Embeded Social](https://embedsocial.com/). Com ela, você pode colar um iframe no seu código que irá exibir seus posts do Instagram. Foi utilizado um widget do tipo slide que filtra as publicações do Instagram do hospital pegando apenas as que estão com a hashtag #albumdosbebes. Em relação as senhas, a para entrar no site do Embeded Social consta no GLPI e a a para entrar no Instagram do hospital está com o setor de comunicação.

### Escalas
   Para essa tela foram criadas páginas no WordPress: uma página para cada especialidade com os links para seus PDF's (cujo nome é o **nome da especialidade**), e uma página com o link para cada uma dessas páginas com os PDF's (cujo nome é **ESCALAS MÉDICAS**). Essas páginas são utilizadas apenas para serem feitas requisições acerca dos seus dados para serem apresentados no site pelos componentes criados aqui no projeto. 

> [!WARNING]
> É preciso que você siga alguns cuidados ao adicionar os PDF's das escalas mensalmente:
> - Tente não deixar linhas em branco desnecessárias na página
> - Coloque os nomes das especialidades em maiúsculo para melhor organização
> - Nas telas com os PDF's siga o padrão: título com nome da especialidade, ano das escalas, todos os links para as escalas dos meses respectivos a esse ano colocando somente o nome do seu respectivo mês, e assim sucessivamente.

   Na página de escalas do site é carregado o componente `Especialidades.jsx`, que utiliza da API REST do WordPress para realizar uma requisição do tipo GET para a URL ***https://iamind.com.br/wp/wp-json/wp/v2/pages/80***, que pega dentro do JSON de todas as páginas o JSON da página de *ID* 80, que é a página que possui os links para as páginas de cada especialidade. Com isso pegamos todos os nomes das especialidades para apresentar no site. 

   Ao clicar em uma especialidade, é pego o nome da especialidade e mandado via parâmetro na URL do site. Esse nome é usado no `App.js` para fazer uma verificação com switch case para direcionar a rota para o componente da especialidade referida presente em `./pdf-escala`.

   Em cada componente do `./pdf-escala` também é feita a mesma requisição para `./pages` porém mudando o *ID* para o *ID* respectivo de cada página de cada especialidade, assim conseguimos acessar cada JSON e pegar o nome da especialidade, os anos e os links para cada PDF. 

> [!TIP]
> ***Como pegar o ID das páginas?***
>
> Você pode acessar o WordPress como admnistrador, ir na aba de páginas e passar o mouse por cima do título da página:
> 
> ![image](https://github.com/user-attachments/assets/e99b717d-6702-4a12-829b-fcfd63f07465)
> 
> Na parte inferior da tela irá aparecer a URL com uma variável ***post***. O número que aparecer nela é o ID da página:
> 
> ![image](https://github.com/user-attachments/assets/b050edba-18cc-44e1-ba17-10e6b489aab2)
> 
> Neste exemplo, o ID da página é 5908.
> Você também pode acessar a página e verificar essa mesma variável na barra de pesquisa do navegador:
>
> ![image](https://github.com/user-attachments/assets/e8fda576-99c4-42e3-9ea3-2511c175e09f)

   
### Ouvidoria
A página da ouvidoria é feita com um formulário HTML e com o código em PHP presente aqui no projeto, chamado `FormOuvidoria.php`. Esse código pega o que foi digitado no formulário e envia para o email da ouvidoria do hospital.

### Notícias
É uma tela feita com um modelo do WordPress que mostra as notícias publicadas no site pelo setor de comunicação. Nela você também pode ser redirecionado para notícias específicas.

### Doe Vida e Fundação
Telas inteiramente expositivas feitas com HTML e CSS.

### Programa de Estágio
É um link para outro site que não foi feito neste projeto. É o portal usado para quem quer se inscrever para estagiar no hospital.

### Observações gerais
Sobre detalhes utilizados no site inteiro, podemos citar as animações e o *pop-up* dos *cookies* e da LGPD.

Para as animações foram utilizadas as as bibliotecas [Animate On Scroll](https://github.com/michalsnik/aos) e [Animate.css](https://animate.style/) para animar a entrada do conteúdo da tela, e [React Spinners](https://www.npmjs.com/package/react-spinners) para as animações de carregamento dos dados.

Para o *pop-up*, foi utilizado [react-cookie-consent](https://www.npmjs.com/package/react-cookie-consent), cujas configurações, conforme mencionado anteriormente, estão presentes em `./src/index.js`.

-----------------------------------------------

Site feito por Hetielle Matos com ❤, JS e React JS.

Dúvidas e feedbacks são mais do que bem-vindos <3
