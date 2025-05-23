# UC2_DesenvolverAplicacoesWebsites
 

Os princípios básicos para o uso de HTML (Hypertext Markup Language) são fundamentais para estruturar páginas web de forma organizada e compreensível. Aqui estão alguns dos principais:

1. Estrutura Básica do Documento
Todo documento HTML deve seguir uma estrutura básica que inclui:

<!DOCTYPE html>: Define o tipo de documento (HTML5).

<html>: A tag raiz que envolve todo o conteúdo da página.

<head>: Contém metadados, como o título da página, links para arquivos CSS, e outros elementos de configuração.

<body>: Contém o conteúdo visível da página, como texto, imagens e outros elementos.

Exemplo:

html

<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exemplo de Página</title>
</head>
<body>
    <h1>Olá, Mundo!</h1>
    <p>Este é um exemplo básico de HTML.</p>
</body>
</html>

2. Elementos e Tags
HTML é composto por elementos que são representados por tags. Cada tag geralmente tem uma abertura e um fechamento.

Tags de abertura: Por exemplo, <p> (parágrafo).

Tags de fechamento: Por exemplo, </p>.

3. Hierarquia e Aninhamento
É importante seguir uma hierarquia lógica ao estruturar o conteúdo, utilizando tags apropriadas como:

<h1> a <h6>: Cabeçalhos de diferentes níveis, sendo <h1> o mais importante.

<ul>, <ol>, <li>: Listas não ordenadas (bullets), listas ordenadas (numeradas) e itens de lista, respectivamente.

<div> e <section>: Elementos de contêiner para agrupar conteúdo.

<a>: Cria links.

Exemplo de estrutura hierárquica:

html

<section>
    <h1>Meu Título</h1>
    <p>Texto de introdução.</p>
    <ul>
        <li>Item 1</li>
        <li>Item 2</li>
    </ul>
</section>

4. Atributos
Tags HTML podem ter atributos que fornecem informações adicionais sobre um elemento. Por exemplo, a tag <img> usa o atributo src para definir a origem da imagem.

Exemplo:

html
Copiar
Editar
<a href="https://www.exemplo.com">Visite meu site</a>
<img src="imagem.jpg" alt="Descrição da imagem">
5. Semântica
Usar tags semânticas corretamente é importante para acessibilidade e SEO (otimização para motores de busca). Algumas tags semânticas incluem:

<header>: Para o cabeçalho da página.

<footer>: Para o rodapé da página.

<article>: Para conteúdos independentes.

<nav>: Para menus de navegação.

6. Validação e Compatibilidade
É essencial validar o código HTML para garantir que esteja bem estruturado e compatível com os padrões da web. Existem ferramentas online como o Validador de HTML que podem ajudar a verificar se o seu código está correto.

7. Uso de Comentários
Os comentários em HTML não são exibidos na página e servem para documentar o código. Eles são feitos assim:

html
Copiar
Editar
<!-- Este é um comentário -->
8. Boas Práticas de Código
Indentação: Use uma boa indentação (recuo de código) para tornar o HTML mais legível.

Nomes semânticos para classes e IDs: Nomes que descrevem o conteúdo ou a funcionalidade (ex: header, main-content, footer).

Fechamento de tags: Mesmo que algumas tags sejam autocontidas, como <img>, sempre que possível, feche as tags corretamente para melhorar a legibilidade e evitar erros.

Com esses princípios em mente, você pode começar a criar páginas web bem