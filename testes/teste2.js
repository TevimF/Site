function verificar_estoque(solicita, estoque) {
  const quantidade = estoque.tecnologia.length
  for(i=0;i<=quantidade;i++){
    if (solicita == estoque.tecnologia[i]){
      return 'pode comprar';
    }
  }
  return 'produto não disponivel';
}

let estoque = {
  tecnologia: ['Acer nitro', 'galaxyS24', 'rtx 4090'],
};
let resposta = window.prompt('qual produto voce quer?');
console.log(verificar_estoque(resposta, estoque));
