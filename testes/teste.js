let numero1 = window.prompt("digite um numero")
let operacao = window.prompt("digite uma operação")
let numero2 = window.prompt("digite outro numero")
let resultado = 0
if(operacao == "+"){
    resultado = parseInt(numero1) + parseInt(numero2);
}else if(operacao == "-"){
    resultado = parseInt(numero1) - parseInt(numero2);
}
else if(operacao == "*"){
    resultado = parseInt(numero1) * parseInt(numero2);
}
else if(operacao == "/"){
    resultado = parseInt(numero1) / parseInt(numero2);
}else{
    window.alert("operação inválida")
}
window.alert(
    'o resultado de ' + numero1 + operacao + numero2 + ' é: ' + resultado);
