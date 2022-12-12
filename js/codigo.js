function aleatorio(min, max){
    return Math.floor(Math.random()*(max-min+1)+min)
}
function eleccion(jugada){
    let resultado = ""
    if(jugada == 1) {
        resultado = "piedra🥌"
    } else if(jugada == 2){
        resultado = "papel 📋"
    }else if(jugada == 3){
        resultado = "tijera ✂"
    }else {
        resultado = "MALA ELECCION"
    }
    return resultado
}
function duelo(elecJug, elecPc){
    let definitiva = ""
    if (elecJug == elecPc){
        definitiva = "EMPATE"
    } else if(elecJug == 1 && elecPc == 3){
        definitiva = "GANASTE"
        triunfos = triunfos + 1
    } else if(elecJug == 2 && elecPc==1){
        definitiva = "GANASTE"
        triunfos = triunfos + 1
    } else if(elecJug == 3 && elecPc==2){
        definitiva = "GANASTE"
        triunfos = triunfos + 1
    } else{
        definitiva = "PERDISTE"
        derrotas = derrotas + 1
   }
   return definitiva
}
// 1 es piedra, 2 es papel, 3 es tijera
let jugador = 0
let pc = 0
let triunfos = 0
let derrotas = 0

while (triunfos < 3 && derrotas < 3) {
    pc = aleatorio(1,3)
    jugador = prompt("Elige: 1: para piedra, 2: para papel, 3: para tijera")

    //alert("Elegiste: "+ jugador)

    alert ("jugador elige: " + eleccion(jugador))
    alert ("PC elige: " + eleccion(pc))
    

    //COMBATE
    //if (pc == jugador){
     //   alert("EMPATE")
    //} else if(jugador == 1 && pc == 3){
      //  alert("GANASTE")
        //triunfos = triunfos + 1
    //} else if(jugador == 2 && pc==1){
      //  alert("GANASTE")
        //triunfos = triunfos + 1
    //} else if(jugador == 3 && pc==2){
      //  alert("GANASTE")
       // triunfos = triunfos + 1
    //} else{
      //  alert("PERDISTE")
        //derrotas = derrotas + 1
    //}
    
    alert (duelo (jugador, pc))
}
alert ("ganaste " + triunfos + " veces. perdiste " + derrotas + " veces")  



