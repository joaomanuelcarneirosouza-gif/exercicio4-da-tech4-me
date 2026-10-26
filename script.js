const alunos = [
    { nome: "Ana", idade: 25, peso: 52, altura: 1.65 },
    { nome: "Bruno", idade: 32, peso: 78, altura: 1.78 },
    { nome: "Carla", idade: 28, peso: 68, altura: 1.60 },
    { nome: "Diego", idade: 41, peso: 105, altura: 1.75 },
    { nome: "Elisa", idade: 19, peso: 47, altura: 1.70 },
];


const calcularIMC = aluno => aluno.peso / (aluno.altura ** 2);

const classificarIMC = imc => {
    if (imc < 18.5) return "Abaixo do peso";
    if (imc < 25) return "Peso normal";
    if (imc < 30) return "Sobrepeso";
    return "Obesidade";
};


const alunosCompletos = alunos.map(aluno => {
    const imc = calcularIMC(aluno);
    return { ...aluno, imc, classificacao: classificarIMC(imc) };
});


const tabela = document.createElement("table");

const thead = tabela.createTHead();
const trHead = thead.insertRow();
["Nome", "Idade", "Peso (kg)", "Altura (m)", "IMC", "Classificação"].forEach(titulo => {
    const th = document.createElement("th");
    th.textContent = titulo;
    trHead.appendChild(th);
});

const tbody = tabela.createTBody();
alunosCompletos.forEach(a => {
    const tr = tbody.insertRow();
    [a.nome, a.idade, a.peso, a.altura.toFixed(2), a.imc.toFixed(1), a.classificacao]
        .forEach(valor => {
            tr.insertCell().textContent = valor;
        });
});

document.getElementById("alunos").appendChild(tabela);