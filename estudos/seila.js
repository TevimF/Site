// declaração de variaveis
var nome = "Estevao";
// acessivel dentro da função que foi declarada. Ela tem escopo de função
let idade = 20;
// acessivel dentro do bloco que foi declarada. Ela tem escopo de bloco
const dataNascimento = "07/03/2002";
// também é bloqueada, mas não pode ser alterada

// a tipagem é dinamica, ou seja, a variavel pode mudar de tipo e não precisa ser declarada especificando o tipo
// a diferença de var e let é que var pode ser redeclarada e let não. isso significa que você pode declarar a mesma variavel mais de uma vez com var e não com let.
// exemplo:
var nome = "Estevao Felipe";
console.log(nome);
// vai imprimir "Estevao Felipe" mesmo que a variavel já tenha sido declarada
/* let idade = 20;
let idade = 21;
console.log(idade); */
// vai dar erro, pois a variavel já foi declarada