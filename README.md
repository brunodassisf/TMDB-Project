# Projeto Next.js com TMDB API

Este projeto utiliza o framework Next.js versão 13 e a API de filmes TMDB. Ele tem como objetivo demonstrar como criar componentes reutilizáveis e fazer uso dos endpoints da API para listar filmes e séries de TV mais populares, além de exibir detalhes de um filme ou série.


##  Pré-requisitos

Comece clonando o projeto:

    git clone https://github.com/brunodassisf/tmdb-project.git

Acesse o  projeto

    cd tmdb-project
    
  Instale as dependências
  

    yarn

Crie um arquivo arquivo  '.env' na raiz do projeto, e coloque as seguinte variaveis

    NEXT_PUBLIC_API_KEY=''
    NEXT_PUBLIC_API_URL='https://api.themoviedb.org/3'
    NEXT_PUBLIC_API_IMG_URL='https://image.tmdb.org/t/p'
E importante para que o projeto rode corretamente.
Adiquira sua chave de api, [acessando  TMBD](https://www.themoviedb.org/settings/api?language=pt-BR) e se cadastrando.

### Componentização
Este projeto utiliza o conceito de componentização para criar componentes reutilizáveis. Os componentes estão localizados no diretório `src/core/components/`. Você pode criar novos componentes ou modificar os existentes de acordo com suas necessidades.
### Listagem de Filmes e Séries de TV Populares
O projeto faz uso dos endpoints da API TMDB para listar filmes e séries de TV mais populares. Essas informações são exibidas nas páginas principais do projeto. Para fazer isso, são utilizados os seguintes endpoints da API:

-   `https://api.themoviedb.org/3/movie/popular`: Retorna uma lista dos filmes mais populares.
-   ` https://api.themoviedb.org/3/tv/popular`: Retorna uma lista das séries de TV mais populares.
- 
### Detalhes de um Filme ou Série de TV
Ao clicar em um filme ou série de TV na lista, o projeto exibe os detalhes completos do item selecionado. Os detalhes incluem informações como título, sinopse, elenco, avaliação, entre outros. Essas informações são obtidas através do endpoint da API TMDB:

-   `https://api.themoviedb.org/3/movie/{movie_id}`: Retorna os detalhes completos de um filme com base no ID fornecido.
-   `https://api.themoviedb.org/3/tv/{series_id}`: Retorna os detalhes completos de uma série de TV com base no ID fornecido.

### Realizações Iniciais
Até o momento, as seguintes realizações foram alcançadas neste projeto:

-   Criação do projeto Next.js com a versão 13.
-   Componentização de componentes reutilizáveis.
-   Acesso aos endpoints da API TMDB para listar filmes e séries de TV populares.
-   Exibição de detalhes de um filme ou série de TV selecionado.
### Conclusão

Este README fornece uma visão geral do projeto Next.js utilizando componentização e a API TMDB para listar filmes e séries de TV populares. Sinta-se à vontade para explorar, modificar e adicionar novas features ao projeto. Se tiver alguma dúvida ou sugestão, não hesite em entrar em contato. Aproveite!
