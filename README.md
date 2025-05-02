# Básico em HTML

Em HTML, os comandos básicos são as "tags", que são marcadores que definem a estrutura e o conteúdo de uma página da web. As tags mais importantes para um iniciante incluem <html>, <head>, <body>, <title>, <p>, <h1>, <h2>, <h3>, <h4>, <h5>, <h6>, <img>, <a>, <ul>, <ol>, <li>, <div>, e <span>. 

## 1. Estrutura Básica:

<!DOCTYPE html>: Define que o documento é do tipo HTML5. 
<html>: Elemento raiz, que engloba toda a página. 
<head>: Contém informações sobre a página, como o título, metadados, links para arquivos externos, etc. O título da página é definido com <title> dentro do <head>. 
<body>: Contém o conteúdo visível da página, como texto, imagens, links, etc. 

## 2. Elementos de Texto:

<p>: Define um parágrafo de texto. 
<h1> a <h6>: Define títulos de níveis diferentes, com <h1> sendo o mais importante e <h6> o menos. 
<strong>: Formata texto em negrito, geralmente com significado semântico (destaque). 
<em>: Formata texto em itálico, geralmente com significado semântico (ênfase). 
<span>: Um contêiner para texto em linha, usado para fins de estilo ou para aplicar um efeito a uma parte do texto. 

## 3. Imagens: 

<img>: Insere imagens na página, com o atributo src especificando o caminho para a imagem. O atributo alt fornece uma descrição da imagem, que é exibida se a imagem não puder ser carregada ou para acessibilidade.

## 4. Links: 

<a>: Cria links para outras páginas da web ou para outros locais no mesmo site, com o atributo href especificando o URL do link.

## 5. Listas: 

<ul>: Cria uma lista não ordenada (com marcadores).
<ol>: Cria uma lista ordenada (com números).
<li>: Define um item de lista dentro de <ul> ou <ol>.

## 6. Estrutura de Bloco: 

<div>: Cria um bloco de conteúdo, que pode ser usado para dividir a página em seções ou para agrupar elementos.

## 7. Comentários: 

<!-- ... -->: Insere comentários no código HTML, que são ignorados pelos navegadores.

## Exemplo:

Código

```html
<!DOCTYPE html>
<html>
<head>
    <title>Título da Página</title>
</head>
<body>
    <h1>Título Principal</h1>
    <p>Este é um parágrafo de texto.</p>
    <img src="imagem.jpg" alt="Descrição da imagem">
    <a href="https://www.example.com">Clique aqui</a>
    
    <ul>
        <li>Item 1</li>
        <li>Item 2</li>
    </ul>
</body>
</html>
```


# Básico de CSS para molhorar o site

Aqui estão alguns comandos básicos de CSS para iniciantes, junto com suas explicações:

### 1. **Seletores**

Seletores são usados para definir quais elementos HTML serão estilizados.

#### a) Seleção por **tag** (elemento HTML)

```css
p {
  color: red;
}
```

* Aplica a cor vermelha a **todos os elementos `<p>`** na página.

#### b) Seleção por **classe**

```css
.button {
  background-color: blue;
  color: white;
}
```

* Aplica o estilo a **todos os elementos com a classe `button`**. No HTML, você usaria assim: `<button class="button">Clique</button>`

#### c) Seleção por **ID**

```css
#header {
  font-size: 24px;
}
```

* Aplica o estilo ao **elemento com o id `header`**. No HTML: `<div id="header">Bem-vindo!</div>`

---

### 2. **Propriedades básicas de estilo**

#### a) **Cor do texto**

```css
h1 {
  color: green;
}
```

* Muda a **cor do texto** dentro de um `<h1>` para verde.

#### b) **Cor de fundo**

```css
body {
  background-color: lightgray;
}
```

* Muda a **cor de fundo** da página para cinza claro.

#### c) **Fonte**

```css
p {
  font-family: Arial, sans-serif;
}
```

* Define a **família de fontes** para o texto do parágrafo (`<p>`) como Arial.

#### d) **Tamanho da fonte**

```css
h2 {
  font-size: 20px;
}
```

* Define o **tamanho da fonte** para 20px no `<h2>`.

#### e) **Espaçamento entre linhas**

```css
p {
  line-height: 1.5;
}
```

* Ajusta o **espaçamento entre as linhas** de texto dentro de um `<p>` para 1,5 vezes o tamanho da fonte.

---

### 3. **Espaçamento e Layout**

#### a) **Margem (margem externa)**

```css
div {
  margin: 20px;
}
```

* Define uma **margem de 20px** ao redor de todos os elementos `<div>`.

#### b) **Preenchimento (padding)**

```css
div {
  padding: 10px;
}
```

* Define um **preenchimento de 10px** dentro de todos os elementos `<div>`, ou seja, o espaço entre o conteúdo e a borda.

#### c) **Largura e Altura**

```css
img {
  width: 200px;
  height: auto;
}
```

* Define a **largura da imagem** para 200px, e a altura será ajustada automaticamente para manter a proporção.

---

### 4. **Bordas**

```css
div {
  border: 2px solid black;
}
```

* Adiciona uma **borda de 2px** de espessura, **sólida** e **preta** ao redor de todos os elementos `<div>`.

---

### 5. **Exemplo de um código CSS simples**

```css
/* Estilos para a página inteira */
body {
  background-color: #f4f4f4;
  font-family: Arial, sans-serif;
}

/* Estilo para o título principal */
h1 {
  color: #333;
  text-align: center;
  font-size: 36px;
}

/* Estilo para os parágrafos */
p {
  color: #666;
  font-size: 16px;
  line-height: 1.6;
  margin: 20px;
}
```

### 6. **Seletores combinados**

#### a) **Seleção por tag e classe**

```css
p.warning {
  color: red;
}
```

* Estiliza **apenas os parágrafos com a classe `warning`**.

#### b) **Seletores aninhados**

```css
div p {
  color: blue;
}
```

* Seleciona **todos os parágrafos dentro de uma `<div>`**, aplicando a cor azul.

---

Esses são alguns dos conceitos e comandos básicos para começar a entender e usar o CSS. Tem algum desses que você gostaria de ver em mais detalhes ou precisa de ajuda com algum outro aspecto do CSS?
