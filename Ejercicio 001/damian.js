const array = [["Spock","Tijera"],["Piedra","Tijera"],["Tijera","Tijera"],["Papel","Tijera"]]


function verificarPar(par){
    //Devuelve 1 si gana jugador 1, -1 si gana jugador 2, 0 si empate
    switch (par[0]){
        case "Piedra":
            if (par[1]==="Tijera" | par[1]==="Lagarto"){
                return 1
            }
            if (par[1]==="Papel" | par[1]==="Spock"){
                return -1
            }else{
                return 0
            }
        case "Tijera":
            if (par[1]==="Papel" | par[1]==="Lagarto"){
                return 1
            }
            if (par[1]==="Piedra" | par[1]==="Spock"){
                return -1
            }else{
                return 0
            }
        case "Papel":
            if (par[1]==="Piedra" | par[1]==="Spock"){
                return 1
            }
            if (par[1]==="Tijera" | par[1]==="Lagarto"){
                return -1
            }else{
                return 0
            }
        case "Lagarto":
            if (par[1]==="Spock" | par[1]==="Papel"){
                return 1
            }
            if (par[1]==="Piedra" | par[1]==="Tijera"){
                return -1
            }else{
                return 0
            }
        case "Spock":
            if (par[1]==="Piedra" | par[1]==="Tijera"){
                return 1
            }
            if (par[1]==="Papel" | par[1]==="Lagarto"){
                return -1
            }else{
                return 0
            }


    }

}





function mostrarResultado(array){
    let resultado = 0

    array.forEach(element => {
        resultado = resultado + verificarPar(element)
    });
    if (resultado>0){
        console.log("Gana Player1");
    }else if (resultado<0){
        console.log("Gana Player2");
    }else{
        console.log("Es un empate");

    }
  console.log(resultado)

}
mostrarResultado(array)