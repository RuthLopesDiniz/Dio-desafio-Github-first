const precoEtiqueta = 100

const formaPagamento = 4

if (formaPagamento === 1) {
    console.log("Você paga com desconto de 10%: ", precoEtiqueta - (precoEtiqueta * 0.1))
}
else if (formaPagamento === 2) {
    console.log("Você paga com desconto de 15%: ", precoEtiqueta - (precoEtiqueta * 0.15))
} else if (formaPagamento === 3) {
    console.log("Preço de etiqueta sem juros: ", precoEtiqueta)
} else {
    console.log("Acima de 2 vezes: ", precoEtiqueta + (precoEtiqueta * 0.1))
}

