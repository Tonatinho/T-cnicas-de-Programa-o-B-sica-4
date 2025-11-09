class ContaBancaria {
    public titular: string;
    private saldo: number;

    constructor(titular: string, saldoInicial: number = 0) {
        this.titular = titular;
        this.saldo = saldoInicial;
    }

    depositar(valor: number): void {
        if (valor <= 0) {
            console.log("O valor do depósito deve ser positivo.");
            return;
        }
        this.saldo += valor;
        console.log(`Depósito de ${valor} realizado. Novo saldo: ${this.saldo}`);
    }

    sacar(valor: number): void {
        if (valor <= 0) {
            console.log("O valor do saque deve ser positivo.");
            return;
        }

        if (valor > this.saldo) {
            console.log(`Saldo insuficiente. Saldo atual: ${this.saldo}`);
        } else {
            this.saldo -= valor;
            console.log(`Saque de ${valor} realizado. Novo saldo: ${this.saldo}`);
        }
    }

    consultarSaldo(): number {
        return this.saldo;
    }
}

class Livro {
    public titulo: string;
    public autor: string;
    public paginas: number;
    public lido: boolean;

    constructor(titulo: string, autor: string, paginas: number) {
        this.titulo = titulo;
        this.autor = autor;
        this.paginas = paginas;
        this.lido = false; 
    }

    marcarComoLido(): void {
        this.lido = true;
        console.log(`O livro "${this.titulo}" foi marcado como lido.`);
    }

    info(): void {
        const statusLido = this.lido ? 'Sim' : 'Não';
        console.log(`--- Info do Livro ---
Título: ${this.titulo}
Autor: ${this.autor}
Páginas: ${this.paginas}
Lido: ${statusLido}`);
    }
}

class Produto {
    public nome: string;
    public preco: number;
    public quantidade: number;

    constructor(nome: string, preco: number, quantidade: number) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }

    calcularValorTotalEmEstoque(): number {
        const valorTotal = this.preco * this.quantidade;
        console.log(`O valor total em estoque de ${this.nome} é: ${valorTotal.toFixed(2)}`);
        return valorTotal;
    }
}

class Temperatura {
    private valorCelsius: number;

    constructor(valorCelsius: number) {
        this.valorCelsius = valorCelsius;
    }

    public get celsius(): number {
        return this.valorCelsius;
    }

    public set celsius(valor: number) {
        this.valorCelsius = valor;
    }

    converterParaFahrenheit(): number {
        return (this.valorCelsius * 9/5) + 32;
    }

    converterParaKelvin(): number {
        return this.valorCelsius + 273.15;
    }
}

class Agenda {
    private compromissos: string[];

    constructor() {
        this.compromissos = []; 
    }

    adicionarCompromisso(compromisso: string): void {
        if (compromisso && compromisso.trim() !== "") {
            this.compromissos.push(compromisso.trim());
            console.log("Compromisso adicionado.");
        } else {
            console.log("Não é possível adicionar um compromisso vazio.");
        }
    }

    listarCompromissos(): void {
        if (this.compromissos.length === 0) {
            console.log("Nenhum compromisso na agenda.");
            return;
        }

        console.log("--- Lista de Compromissos ---");
        this.compromissos.forEach((item, index) => {
            console.log(`${index + 1}: ${item}`);
        });
    }
}



console.log("--- Testando ContaBancaria ---");
const minhaConta = new ContaBancaria("João Silva", 100);
minhaConta.depositar(50);
minhaConta.sacar(30);
minhaConta.sacar(200); 
console.log(`Titular: ${minhaConta.titular}, Saldo Final: ${minhaConta.consultarSaldo()}`);
console.log("\n");


console.log("--- Testando Livro ---");
const meuLivro = new Livro("O Hobbit", "J.R.R. Tolkien", 300);
meuLivro.info();
meuLivro.marcarComoLido();
meuLivro.info();
console.log("\n");


console.log("--- Testando Produto ---");
const tv = new Produto("TV 4K", 2500, 10);
tv.calcularValorTotalEmEstoque();
const cafe = new Produto("Café 1kg", 20.50, 50);
cafe.calcularValorTotalEmEstoque();
console.log("\n");


console.log("--- Testando Temperatura ---");
const tempHoje = new Temperatura(25); 
console.log(`Celsius: ${tempHoje.celsius.toFixed(2)}°C`);
console.log(`Fahrenheit: ${tempHoje.converterParaFahrenheit().toFixed(2)}°F`);
console.log(`Kelvin: ${tempHoje.converterParaKelvin().toFixed(2)}K`);
tempHoje.celsius = 0; 
console.log(`Nova temp (Celsius): ${tempHoje.celsius.toFixed(2)}°C`);
console.log(`Nova temp (Fahrenheit): ${tempHoje.converterParaFahrenheit().toFixed(2)}°F`);
console.log("\n");


console.log("--- Testando Agenda ---");
const minhaAgenda = new Agenda();
minhaAgenda.listarCompromissos(); 
minhaAgenda.adicionarCompromisso("Reunião com equipe às 10h");
minhaAgenda.adicionarCompromisso("Consulta ao dentista às 15h");
minhaAgenda.adicionarCompromisso("   "); 
minhaAgenda.adicionarCompromisso("Buscar filhos na escola");
minhaAgenda.listarCompromissos();

