
    // declaração de variaveis
    var nome = "Estevao";
    // acessivel dentro da função que foi declarada. Ela tem escopo de função
    let idade;
    // acessivel dentro do bloco que foi declarada. Ela tem escopo de bloco
    const data_n = "07/03/2002";
    // também é bloqueada, mas não pode ser alterada

    // a tipagem é dinamica, ou seja, a variavel pode mudar de tipo e não precisa ser declarada especificando o tipo

    // a diferença de var e let é que var pode ser redeclarada e let não. isso significa que você pode declarar a mesma variavel mais de uma vez com var e não com let.
    // exemplo:
    nome = "Estevao Felipe";
    // vai imprimir "Estevao Felipe" mesmo que a variavel já tenha sido declarada

    /* let idade = 20;
    let idade = 21;
    console.log(idade); */
    // daria erro, pois a variavel já foi declarada

    // para imprimir no console é só usar console.log()
    console.log(nome, idade, data_n);
    // data_n ficou azul pois é uma constante

    // para rodar o js, precisamos baixar o nodejs no site nodejs.org
    // para saber o tipo de uma variavel, usamos typeof
    console.log(typeof nome);
    // vai imprimir string
    // lembrando que o tipo de uma variavel pode mudar pois a tipagem é dinamica
    // observação!:
        console.log(typeof 6);
        // vai imprimir number
        console.log(typeof "6");
        // vai imprimir string
    