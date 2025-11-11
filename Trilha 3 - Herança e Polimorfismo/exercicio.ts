console.log("--- Exercício 1: Veículos ---");

class Veiculo {
    mover(): void {
        console.log("O veículo está se movendo.");
    }
}

class Carro extends Veiculo {
    override mover(): void {
        console.log("O carro está dirigindo.");
    }
}

class Bicicleta extends Veiculo {
    override mover(): void {
        console.log("A bicicleta está pedalando.");
    }
}

const meuCarro = new Carro();
const minhaBicicleta = new Bicicleta();

meuCarro.mover(); 
minhaBicicleta.mover(); 

console.log("\n");


console.log("--- Exercício 2: Figuras Geométricas ---");

abstract class FiguraGeometrica {
    abstract calcularArea(): number;
}

class Circulo extends FiguraGeometrica {
    constructor(public raio: number) {
        super(); 
    }

    override calcularArea(): number {
        return Math.PI * this.raio * this.raio;
    }
}

class Quadrado extends FiguraGeometrica {
    constructor(public lado: number) {
        super();
    }

    override calcularArea(): number {
        return this.lado * this.lado;
    }
}

class Triangulo extends FiguraGeometrica {
    constructor(public base: number, public altura: number) {
        super();
    }

    override calcularArea(): number {
        return (this.base * this.altura) / 2;
    }
}

function imprimirAreas(figuras: FiguraGeometrica[]): void {
    console.log("Calculando áreas das figuras:");
    for (const figura of figuras) {
        console.log(`- Área: ${figura.calcularArea().toFixed(2)}`);
    }
}

const figuras: FiguraGeometrica[] = [
    new Circulo(10),
    new Quadrado(5),
    new Triangulo(8, 4)
];

imprimirAreas(figuras);
console.log("\n");



console.log("--- Exercício 3: Sistema de Pagamento ---");

class Pagamento {
    processar(): void {
        console.log("Processando pagamento...");
    }
}

class PagamentoCartao extends Pagamento {
    override processar(): void {
        console.log("Validando número do cartão...");
        console.log("Pagamento com cartão aprovado!");
    }
}

class PagamentoBoleto extends Pagamento {
    override processar(): void {
        console.log("Gerando código de barras...");
        console.log("Boleto emitido com sucesso!");
    }
}

function realizarPagamento(metodoDePagamento: Pagamento): void {
    metodoDePagamento.processar();
}

const pagamento1 = new PagamentoCartao();
const pagamento2 = new PagamentoBoleto();

realizarPagamento(pagamento1);
realizarPagamento(pagamento2);
console.log("\n");



console.log("--- Exercício 4: Animais e Energia ---");

abstract class Animal {
    protected energia: number;

    constructor(energiaInicial: number) {
        this.energia = energiaInicial;
    }

    abstract comer(): void;

    public statusEnergia(): void {
        console.log(`Energia atual: ${this.energia}`);
    }
}

class Leao extends Animal {
    override comer(): void {
        console.log("Leão está caçando...");
        this.energia -= 10;
        console.log("Caça gastou 10 de energia.");
        
        console.log("Leão come sua presa...");
        this.energia += 25;
        console.log("Refeição restaurou 25 de energia.");
    }
}

class Passaro extends Animal {
    override comer(): void {
        console.log("Pássaro está comendo sementes...");
        this.energia += 5;
        console.log("Refeição restaurou 5 de energia.");
    }
}

const simba = new Leao(50);
const piuPiu = new Passaro(20);

console.log("--- Leão ---");
simba.statusEnergia();
simba.comer();
simba.statusEnergia();

console.log("--- Pássaro ---");
piuPiu.statusEnergia();
piuPiu.comer();
piuPiu.statusEnergia();

console.log("\n");



console.log("--- Exercício 5: Bônus de Funcionários ---");

abstract class Funcionario {
    private _nome: string;
    private _salario: number;

    constructor(nome: string, salario: number) {
        this._nome = nome;
        this._salario = salario;
    }

    public get nome(): string {
        return this._nome;
    }

    public get salario(): number {
        return this._salario;
    }

    abstract calcularBonus(): number;
}

class Gerente extends Funcionario {
    override calcularBonus(): number {
        return this.salario * 0.10;
    }
}

class Operario extends Funcionario {
    override calcularBonus(): number {
        return this.salario * 0.05;
    }
}

function calcularSalarioComBonus(funcionarios: Funcionario[]): void {
    console.log("Calculando folha de pagamento com bônus:");
    for (const f of funcionarios) {
        const bonus = f.calcularBonus();
        const salarioFinal = f.salario + bonus;
        
        console.log(`- Funcionário: ${f.nome} (${f.constructor.name})`);
        console.log(`  Salário Base: R$ ${f.salario.toFixed(2)}`);
        console.log(`  Bônus: R$ ${bonus.toFixed(2)}`);
        console.log(`  Salário Final: R$ ${salarioFinal.toFixed(2)}`);
    }
}

const listaFuncionarios: Funcionario[] = [
    new Gerente("Carla Silva", 5000),
    new Operario("Marcos Andrade", 2000),
    new Gerente("Júlio Costa", 6000),
    new Operario("Ana Pereira", 2200)
];

calcularSalarioComBonus(listaFuncionarios);