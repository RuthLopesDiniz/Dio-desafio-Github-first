

function aplicarDesconto(valor, desconto){
    return (valor-(valor*(desconto/100)))
}

function aplicarJuros(valor, juros){
    return (valor+(valor*(juros/100)))
}

const precoEtiqueta = 100
const formaPagamento = 3

if (formaPagamento === 1) {
    console.log("Preço de etiqueta com desconto de 10%: ",aplicarDesconto(precoEtiqueta, 10),",00")
}
else if (formaPagamento === 2) {
    console.log("Preço de etiqueta com desconto de 15%: ",aplicarDesconto(precoEtiqueta, 15),",00")
} else if (formaPagamento === 3) {
    console.log("Preço de etiqueta sem juros: ",precoEtiqueta,",00")
} else {
    console.log("Acima de 2 vezes: " , aplicarJuros(precoEtiqueta, 10),",00")
}
