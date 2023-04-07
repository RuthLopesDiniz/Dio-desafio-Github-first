const nota1 = 8
const nota2 = 3
const nota3 = 1
const media = (nota1 + nota2 + nota3) / 3

function resul(media) {
    if (media < 5) {
        console.log("A média é:", Math.floor(media), " - Reprovação");
    }
    else if (media >= 5 && media <= 7) {
        console.log("A média é:", Math.floor(media), " - Recuperação");
    }
    else {
        console.log("A média é:", Math.floor(media), " - Aprovação");
    }
}
resul(media)

