function calculaDesconto (valorProduto, porcentagemDesconto) {
const valorFinal = valorProduto - valorProduto*porcentagemDesconto/100
return valorFinal
}

const valorComDesconto = calculaDesconto(100, 5)

console.log(valorComDesconto)
