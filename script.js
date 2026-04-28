const texto = "Dedico Isso a Você 💕";
let i = 0;

document.getElementById("titulo").innerHTML = "";

function escrever() {

  if(i < texto.length){

    document.getElementById("titulo").innerHTML += texto.charAt(i);

    i++;

    setTimeout(escrever, 100);

  }

}

escrever();