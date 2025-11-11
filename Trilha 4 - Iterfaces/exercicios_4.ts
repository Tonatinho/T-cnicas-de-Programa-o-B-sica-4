// 1 - Produtos
interface Produto {
  id: number;
  nome: string;
  preco: number;
}

class ItemLoja implements Produto {
  id: number;
  nome: string;
  preco: number;

  constructor(id: number, nome: string, preco: number) {
    this.id = id;
    this.nome = nome;
    this.preco = preco;
  }
}

const item1 = new ItemLoja(1, "Placa de Vídeo", 2500.00);
console.log("EX 1:", item1);

// 2 - Documentos
interface Documento {
  titulo: string;
  conteudo: string;
}

class Texto implements Documento {
  titulo: string;
  conteudo: string;

  constructor(titulo: string, conteudo: string) {
    this.titulo = titulo;
    this.conteudo = conteudo;
  }

  exibir(): string {
    return `Título: ${this.titulo}, Conteúdo: ${this.conteudo}`;
  }
}

const meuDocumento = new Texto("Relatório Trimestral", "As vendas aumentaram...");
console.log("EX 2:", meuDocumento.exibir());

// 3 - Cadastro e Busca de Produtos em uma Loja
interface ProdutoLoja {
  codigo: number;
  nome: string;
}

class Loja {
  produtos: ProdutoLoja[];

  constructor(produtosIniciais: ProdutoLoja[] = []) {
    this.produtos = produtosIniciais;
  }

  buscarProdutoPorCodigo(codigo: number): ProdutoLoja | undefined {
    return this.produtos.find(produto => produto.codigo === codigo);
  }
}

const listaProdutos: ProdutoLoja[] = [
  { codigo: 101, nome: "Notebook" },
  { codigo: 102, nome: "Mouse" },
  { codigo: 103, nome: "Teclado" }
];

const minhaLoja = new Loja(listaProdutos);

console.log("EX 3 (Encontrado):", minhaLoja.buscarProdutoPorCodigo(102));
console.log("EX 3 (Não Encontrado):", minhaLoja.buscarProdutoPorCodigo(999));

// 4 - Sistema de Biblioteca com Checagem de Disponibilidade
interface Livro {
  titulo: string;
  autor: string;
  disponivel: boolean;
}

class Biblioteca {
  livros: Livro[];

  constructor(livrosIniciais: Livro[] = []) {
    this.livros = livrosIniciais;
  }

  buscarLivrosDisponiveis(): Livro[] {
    return this.livros.filter(livro => livro.disponivel === true);
  }
}

const acervo: Livro[] = [
  { titulo: "O Senhor dos Anéis", autor: "J.R.R. Tolkien", disponivel: true },
  { titulo: "1984", autor: "George Orwell", disponivel: false },
  { titulo: "Duna", autor: "Frank Herbert", disponivel: true }
];

const bibliotecaMunicipal = new Biblioteca(acervo);
console.log("EX 4 (Disponíveis):", bibliotecaMunicipal.buscarLivrosDisponiveis());

// 5 - Gestão de Bibliotecas com Filtro Avançado
interface LivroBiblioteca {
  titulo: string;
  autor: string;
  genero: string;
  disponivel: boolean;
}

class BibliotecaGestao {
  livros: LivroBiblioteca[];

  constructor(livrosIniciais: LivroBiblioteca[] = []) {
    this.livros = livrosIniciais;
  }

  filtrarPorGenero(genero: string): LivroBiblioteca[] {
    return this.livros.filter(livro => livro.genero === genero);
  }

  buscarPorAutor(autor: string): LivroBiblioteca[] {
    return this.livros.filter(livro => livro.autor === autor);
  }

  obterLivrosDisponiveisOrdenados(): LivroBiblioteca[] {
    const disponiveis = this.livros.filter(livro => livro.disponivel);

    return disponiveis.sort((a, b) => a.titulo.localeCompare(b.titulo));
  }
}

const acervoGestao: LivroBiblioteca[] = [
  { titulo: "Duna", autor: "Frank Herbert", genero: "Ficção Científica", disponivel: true },
  { titulo: "O Guia do Mochileiro das Galáxias", autor: "Douglas Adams", genero: "Ficção Científica", disponivel: true },
  { titulo: "1984", autor: "George Orwell", genero: "Distopia", disponivel: false },
  { titulo: "A Cor Púrpura", autor: "Alice Walker", genero: "Drama", disponivel: true },
  { titulo: "Fundação", autor: "Isaac Asimov", genero: "Ficção Científica", disponivel: true }
];

const bibliotecaAvancada = new BibliotecaGestao(acervoGestao);

console.log("EX 5 (Gênero 'Ficção Científica'):", bibliotecaAvancada.filtrarPorGenero("Ficção Científica"));
console.log("EX 5 (Autor 'Frank Herbert'):", bibliotecaAvancada.buscarPorAutor("Frank Herbert"));
console.log("EX 5 (Disponíveis Ordenados):", bibliotecaAvancada.obterLivrosDisponiveisOrdenados());