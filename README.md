#Projeto de certificação 1 - Pontuação dos atletas

<h2>Resumo do projeto</h2>

***Uma aplicação capaz de receber o nome e as notas de um atleta, calcular a média e apresentar ao usuário.***

__Introdução__

Em uma determinada competição de ginástica artística, vários atletas realizam apresentações para uma banca composta por cinco jurados. Cada jurado é responsável por avaliar um critério em específico, sendo eles o tempo de duração da apresentação, originalidade da coreografia, postura do atleta, dificuldade das acrobacias e sincronismo.

***A competição em questão possui a seguinte regra de avaliação:***

1.Cada jurado pode fornecer uma nota de um (1) a dez (10);

2.A média é calculada com base nas três notas do meio, desconsiderando a maior e menor nota.

Essa Aplicação foi criada utilizando a linguagem JavaScript.

***Especificações***

Foi criada uma função capaz de receber uma matriz de objetos contendo o nome do atleta e as cinco notas atribuídas. Essa função deverá calcular a média das notas sem considerar a maior e menor nota do atleta. Por fim, deverá apresentar ao usuário o nome de cada atleta, seguido das notas e da média calculada.

***As seguintes informações foram utilizadas como entrada:***

let atletas = [
 {
   nome: "Cesar Abascal",
   notas: [10, 9.34, 8.42, 10, 7.88]
 },
 {
   nome: "Fernando Puntel",
   notas:  [8, 10, 10, 7, 9.33]
 },
 {
   nome: "Daiane Jelinsky",
   notas: [7, 10, 9.5, 9.5, 8]
 },
 {
   nome: "Bruno Castro",
   notas: [10, 10, 10, 9, 9.5]
 }
];

***A saída deve ser:***

Atleta: Cesar Abascal

Notas Obtidas: 10,10,7.88,8.42,9.34

Média Válida: 8.766666666666666

Atleta: Fernando Puntel

Notas Obtidas: 10,10,7,8,9.33

Média Válida: 8.333333333333334

Atleta: Daiane Jelinsky

Notas Obtidas: 10,7,8,9.5,9.5

Média Válida: 8.166666666666666

Atleta: Bruno Castro

Notas Obtidas: 10,10,10,9,9.5

Média Válida: 9.666666666666666

***2- Dados do atleta***

Especificações

 ARQUIVO: atletas.js
 
*Você deverá criar uma classe Atleta para concentrar os atributos e métodos dos atletas.*

A classe deverá receber os seguintes atributos:
nome
idade
peso
altura
notas

A classe deverá possuir os seguintes métodos:

calculaCategoria(), para calcular a categoria do atleta;
calculaIMC(), para calcular o IMC do atleta;
calculaMediaValida(), para calcular a média válida do atleta.
obtemNomeAtleta(), que retorna o nome do atleta
obtemIdadeAtleta(), que retorna a idade do atleta
obtemPesoAtleta(), que retorna o peso do atleta
obtemNotasAtleta(), que retorna as notas do atleta
obtemCategoria(), que retorna a categoria do atleta
obtemIMC(), que retorna o IMC do atleta
obtemMediaValida(), que retorna a média válida do atleta
Utilize as seguintes regras:
Para calcular a categoria

Infantil: 9 a 11 anos Juvenil: 12 e 13 anos Intermediário: 14 e 15 anos Adulto: 16 a 30 anos Sem categoria: demais idades

Para calcular o IMC

Fórmula: imc = peso / (altura x altura)

Para calcular a média válida utilize o metodologia abordada no Projeto de Certificação 1.

**Exemplo de entrada**

// Declara o atleta
const atleta = new Atleta("Cesar Abascal",
30, 80, 1.70,
[10, 9.34, 8.42, 10, 7.88]);
Exemplo de saída
Nome: Cesar Abascal
Idade: 30
Peso: 80
Altura: 1.7
Notas: 10,9.34,8.42,10,7.88
Categoria: Adulto
IMC: 27.68166089965398
Média válida: 8.766666666666666
