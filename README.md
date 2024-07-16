# 🏥 Site da Fundação Hospital Centenário
A Fundação Hospital Centenário é um hospital público 100% SUS situado em São Leopoldo, Rio Grande do Sul, trabalhando desde 1924 para auxiliar a comunidade de São Leopoldo e região. 
Visando uma melhor experiência para todos que tem contato com a nossa instituição, nosso setor de TI está sempre identificando áreas que são passivas a melhorias. E a renovação do site está entre uma das diversas melhorias implementadas nos últimos anos.
O site é utilizado desde 2015, e contava com uma interface muito desatualizada e nada moderna. E é aí que este projeto entra em cena, visando melhorar a interação e relação de nossa comunidade com o hospital. Além de ser uma maneira de destacar e trazer visibilidade a tudo de bom oferecido pela nossa instituição.

### 🏚 Como era o site antigo?

Nos prints abaixo podemos ver como era a interface do site antes do projeto. Feito inteiramente com WordPress, o site era, no mínimo, nada intuitivo. 
>![Site antigo](https://github.com/user-attachments/assets/f2ca42d3-258e-42ac-a7e1-06c92655209c)
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
> Antes de qualquer coisa, instale o VSCode em seu computador para conseguir editar o código. O site para download está [aqui](https://code.visualstudio.com/download)

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
> - Baixe [aqui](https://nodejs.org/en)
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

  E por fim, a maioria das pastas de `./style` possuem dois arquivos de CSS: um geral e um referente as especificações para telas menores e outras questões de responsividade, a qual sempre possui o sufixo "Smartphone". 
- **`./pages`:** Aqui temos os componentes de página. Neles são carrregados o componente principal presente na pasta `./components` e, por sua vez, esse componente de página é carregado nas rotas presentes no `App.js`, conforme mencionamos antes.


## 🧠Estrutura de organização lógica
