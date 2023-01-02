/**
 Desafio conciste em uma aplicação que criptografa textos, assim você poderá trocar mensagens secretas com outras pessoas que saibam o segredo da criptografia utilizada.

As "chaves" de criptografia que utilizaremos são:
`A letra "e" é convertida para "enter"`
`A letra "i" é convertida para "imes"`
`A letra "a" é convertida para "ai"`
`A letra "o" é convertida para "ober"`
`A letra "u" é convertida para "ufat"`
 */

let posicaoLetras = new Map();
let textoNaoCriptografado = "gato fugiu pra rua";
let arrayNaoCriptografado = textoNaoCriptografado.split("");
let arrayCriptografado;
let textoCriptografado;

function inserePosicaoELetra(textoNaoCriptografado) {
  // Insere a posição e a letra.
  for (let i = 0; i < textoNaoCriptografado.length; i++) {
    let letra = textoNaoCriptografado.charAt(i);
    if (
      letra == "a" ||
      letra == "e" ||
      letra == "i" ||
      letra == "o" ||
      letra == "u"
    ) {
      posicaoLetras.set(i, letra);
    }
  }
  return posicaoLetras;
}

function criptografaTexto() {
  inserePosicaoELetra(textoNaoCriptografado);

  //  na posição da letra insere o caracter correspondente.
  for (const [key, value] of posicaoLetras) {
    if (value === "a") {
      arrayNaoCriptografado[key] = "ai";
    } else if (value === "e") {
      arrayNaoCriptografado[key] = "enter";
    } else if (value === "i") {
      arrayNaoCriptografado[key] = "imes";
    } else if (value === "o") {
      arrayNaoCriptografado[key] = "ober";
    } else if (value === "u") {
      arrayNaoCriptografado[key] = "ufat";
    }
  }

  arrayCriptografado = arrayNaoCriptografado;
  textoCriptografado = arrayNaoCriptografado.join("");
  return textoCriptografado;
}

function descriptografaTexto(textoCriptografado) {
  let textoDescriptografado = textoCriptografado
    .replaceAll("ai", "a")
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ober", "o")
    .replaceAll("ufat", "u");
  return textoDescriptografado;
}

console.log(criptografaTexto());
console.log(descriptografaTexto(textoCriptografado));
