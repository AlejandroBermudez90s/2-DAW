window.onload = function(){

    console.time("prueba");

    let lista = ["hola", 5, true, null];

    //console.log(lista);
    //console.table(lista);

    //console.log("mensaje consola");
    //console.info("mensaje informativo");
    //console.warn("mensaje aviso");
    //console.error("mensaje error");
    //console.debug("mensaje depuración");

    console.timeEnd("prueba");

    let valor = prompt("Introduce un valor");
    console.log(valor);

    let a = "hola";
    let b = a;
    a += "!";

    console.log(a);
    console.log(b);
}