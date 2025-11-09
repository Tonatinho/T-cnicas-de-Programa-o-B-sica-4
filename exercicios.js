var ContaBancaria = /** @class */ (function () {
    function ContaBancaria(titular, saldoInicial) {
        if (saldoInicial === void 0) { saldoInicial = 0; }
        this.titular = titular;
        this.saldo = saldoInicial;
    }
    ContaBancaria.prototype.depositar = function (valor) {
        if (valor <= 0) {
            console.log("O valor do depósito deve ser positivo.");
            return;
        }
        this.saldo += valor;
        console.log("Dep\u00F3sito de ".concat(valor, " realizado. Novo saldo: ").concat(this.saldo));
    };
    ContaBancaria.prototype.sacar = function (valor) {
        if (valor <= 0) {
            console.log("O valor do saque deve ser positivo.");
            return;
        }
        if (valor > this.saldo) {
            console.log("Saldo insuficiente. Saldo atual: ".concat(this.saldo));
        }
        else {
            this.saldo -= valor;
            console.log("Saque de ".concat(valor, " realizado. Novo saldo: ").concat(this.saldo));
        }
    };
    ContaBancaria.prototype.consultarSaldo = function () {
        return this.saldo;
    };
    return ContaBancaria;
}());
var Livro = /** @class */ (function () {
    function Livro(titulo, autor, paginas) {
        this.titulo = titulo;
        this.autor = autor;
        this.paginas = paginas;
        this.lido = false;
    }
    Livro.prototype.marcarComoLido = function () {
        this.lido = true;
        console.log("O livro \"".concat(this.titulo, "\" foi marcado como lido."));
    };
    Livro.prototype.info = function () {
        var statusLido = this.lido ? 'Sim' : 'Não';
        console.log("--- Info do Livro ---\nT\u00EDtulo: ".concat(this.titulo, "\nAutor: ").concat(this.autor, "\nP\u00E1ginas: ").concat(this.paginas, "\nLido: ").concat(statusLido));
    };
    return Livro;
}());
var Produto = /** @class */ (function () {
    function Produto(nome, preco, quantidade) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }
    Produto.prototype.calcularValorTotalEmEstoque = function () {
        var valorTotal = this.preco * this.quantidade;
        console.log("O valor total em estoque de ".concat(this.nome, " \u00E9: ").concat(valorTotal.toFixed(2)));
        return valorTotal;
    };
    return Produto;
}());
var Temperatura = /** @class */ (function () {
    function Temperatura(valorCelsius) {
        this.valorCelsius = valorCelsius;
    }
    Object.defineProperty(Temperatura.prototype, "celsius", {
        get: function () {
            return this.valorCelsius;
        },
        set: function (valor) {
            this.valorCelsius = valor;
        },
        enumerable: false,
        configurable: true
    });
    Temperatura.prototype.converterParaFahrenheit = function () {
        return (this.valorCelsius * 9 / 5) + 32;
    };
    Temperatura.prototype.converterParaKelvin = function () {
        return this.valorCelsius + 273.15;
    };
    return Temperatura;
}());
var Agenda = /** @class */ (function () {
    function Agenda() {
        this.compromissos = [];
    }
    Agenda.prototype.adicionarCompromisso = function (compromisso) {
        if (compromisso && compromisso.trim() !== "") {
            this.compromissos.push(compromisso.trim());
            console.log("Compromisso adicionado.");
        }
        else {
            console.log("Não é possível adicionar um compromisso vazio.");
        }
    };
    Agenda.prototype.listarCompromissos = function () {
        if (this.compromissos.length === 0) {
            console.log("Nenhum compromisso na agenda.");
            return;
        }
        console.log("--- Lista de Compromissos ---");
        this.compromissos.forEach(function (item, index) {
            console.log("".concat(index + 1, ": ").concat(item));
        });
    };
    return Agenda;
}());
// -----------------------------------------------------------------
// --- EXEMPLOS DE USO ---
// -----------------------------------------------------------------
console.log("--- Testando ContaBancaria ---");
var minhaConta = new ContaBancaria("João Silva", 100);
minhaConta.depositar(50);
minhaConta.sacar(30);
minhaConta.sacar(200); // Deve falhar (saldo insuficiente)
console.log("Titular: ".concat(minhaConta.titular, ", Saldo Final: ").concat(minhaConta.consultarSaldo()));
console.log("\n");
console.log("--- Testando Livro ---");
var meuLivro = new Livro("O Hobbit", "J.R.R. Tolkien", 300);
meuLivro.info();
meuLivro.marcarComoLido();
meuLivro.info();
console.log("\n");
console.log("--- Testando Produto ---");
var tv = new Produto("TV 4K", 2500, 10);
tv.calcularValorTotalEmEstoque();
var cafe = new Produto("Café 1kg", 20.50, 50);
cafe.calcularValorTotalEmEstoque();
console.log("\n");
console.log("--- Testando Temperatura ---");
var tempHoje = new Temperatura(25); // 25°C
console.log("Celsius: ".concat(tempHoje.celsius.toFixed(2), "\u00B0C"));
console.log("Fahrenheit: ".concat(tempHoje.converterParaFahrenheit().toFixed(2), "\u00B0F"));
console.log("Kelvin: ".concat(tempHoje.converterParaKelvin().toFixed(2), "K"));
tempHoje.celsius = 0; // Testando o setter (ponto de congelamento da água)
console.log("Nova temp (Celsius): ".concat(tempHoje.celsius.toFixed(2), "\u00B0C"));
console.log("Nova temp (Fahrenheit): ".concat(tempHoje.converterParaFahrenheit().toFixed(2), "\u00B0F"));
console.log("\n");
console.log("--- Testando Agenda ---");
var minhaAgenda = new Agenda();
minhaAgenda.listarCompromissos(); // Vazia
minhaAgenda.adicionarCompromisso("Reunião com equipe às 10h");
minhaAgenda.adicionarCompromisso("Consulta ao dentista às 15h");
minhaAgenda.adicionarCompromisso("   "); // Não deve adicionar
minhaAgenda.adicionarCompromisso("Buscar filhos na escola");
minhaAgenda.listarCompromissos();
