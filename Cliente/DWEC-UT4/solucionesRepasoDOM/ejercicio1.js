window.onload = function(){
    let numero = +prompt("Introduce el número del elemento que quieres modificar");
    let textoNuevo = prompt("Introduce el texto que contendrá el elemento seleccionado");

    let arrayLi = document.getElementsByTagName("li");
    console.log(arrayLi);

    let numeroMenor = arrayLi[0].id;
    console.log(numeroMenor);

    let numeroMayor = arrayLi[5].id;
    console.log(numeroMayor);

    if (numero <= numeroMayor && numero >= numeroMenor) {

        for (let i = 0; i < arrayLi.length; i++) {
            let idModificar = arrayLi[i].id;

            if (idModificar == numero) {
                let texto = document.getElementsByTagName("span")[i];
                texto.innerHTML = textoNuevo;
                break;
            }
        }
    } else if (isNaN(numero)){
        alert("Debes introducir un número");
    }
    else {
        alert("EL número debe estar dentro de la lista");
    }
}