class Usuario {
  constructor(username, password) {
    this.username = username;
    this.password = password;
    this.date = new Date(); // fecha en la que se da de alta el usuario
  }
}

let userBD = [];

// Función para agregar usuarios
function agregarUsuario(username, password) {
  let usuario = new Usuario(username, password);
  userBD.push(usuario);
}

// Función para verificar ingreso de usuarios
function verificarIngreso(username, password) {
  for (let i = 0; i < userBD.length; i++) {
    if (userBD[i].username === username && userBD[i].password === password) {
      return true; // si los datos coinciden devuelve true
    }
  }
  return false; // Usuario y/o contraseña incorrectos
}

agregarUsuario("Giulo", "palabra");
agregarUsuario("Profe", "otrapalabra");

let accesoConcedido = false;

while (!accesoConcedido) {
  let usernameInput = prompt("Ingrese su nombre de usuario").trim();
  let passwordInput = prompt("Ingrese su contraseña").trim();

  if (verificarIngreso(usernameInput, passwordInput)) {
    alert("¡Bienvenido al sistema!");
    accesoConcedido = true;
  } else {
    alert("Usuario y/o contraseña incorrectos. Acceso denegado.");
  }
}

alert("Juguemos! Piedra, papel, tijera, lagarto, Spock! :)");
alert("Las reglas son muy sencillas");
alert("Las tijeras cortan el papel");
alert("El papel cubre la piedra");
alert("La piedra aplasta el lagarto.");
alert("El lagarto envenena a Spock.");
alert("Spock aplasta las tijeras");
alert("Las tijeras decapitan el lagarto.");
alert("El lagarto se come el papel.");
alert("El papel refuta a Spock.");
alert("Spock vaporiza la piedra.");
alert("La piedra aplasta a las tijeras.");

alert("¿Estás listo?");

let jugadorUno = prompt("Ingrese el nombre del jugador 1");
let jugadorDos = prompt("Ingrese el nombre del jugador 2");
let rondas = Number(prompt("Ingrese la cantidad de rondas que desea jugar"));

while (isNaN(rondas)) {
    rondas = Number(prompt("Puede ponerlo en numeros por favor?"));
}

function juegoJs() {
    let contadorUno = 0;
    let contadorDos = 0;

    alert("Comencemos!");
    for (let i = 1; i <= rondas; i++) {
        let jugadaUno = prompt("Jugada n° " + i + " " + jugadorUno + " " + "Elije tu juego! Piedra, papel, tijera, lagarto, Spock!").toLowerCase();
        let jugadaDos = prompt("Jugada n° " + i + " " + jugadorDos + " " + "Elije tu juego! Piedra, papel, tijera, lagarto, Spock!").toLowerCase();
        
        while ((jugadaUno != "piedra" && jugadaUno != "papel" && jugadaUno != "tijera" && jugadaUno != "lagarto" && jugadaUno != "spock") || (jugadaDos != "piedra" && jugadaDos != "papel" && jugadaDos != "tijera" && jugadaDos != "lagarto" && jugadaDos != "spock")) {
            alert("No es tan dificil muchachos. EN PALABRAS Y COMO ESTA ESCRITO!! Piedra, papel, tijera, lagarto, Spock");
            jugadaUno = prompt(jugadorUno + ": Piedra, papel, tijera, lagarto, Spock");
            jugadaDos = prompt(jugadorDos + ": Piedra, papel, tijera, lagarto, Spock");
        }

        if (jugadaUno === jugadaDos) {
            alert("Empate! Vuelve a tirar");
            i--;
        } else if ((jugadaUno === "piedra" && (jugadaDos === "tijera" || jugadaDos === "lagarto")) || (jugadaUno === "papel" && (jugadaDos === "piedra" || jugadaDos === "spock")) || (jugadaUno === "tijera" && (jugadaDos === "papel" || jugadaDos === "lagarto")) || (jugadaUno === "lagarto" && (jugadaDos === "spock" || jugadaDos === "papel")) || (jugadaUno === "spock" && (jugadaDos === "tijera" || jugadaDos === "piedra"))) {
            contadorUno++;
            alert(jugadorUno + ": Felicitaciones! Has ganado la ronda " + i);
        } else {
            contadorDos++;
            alert(jugadorDos + ": Felicitaciones! Has ganado la ronda " + i);
        }
    }

    alert("Juego terminado! Vamos a ver quien gano");
    if (contadorUno > contadorDos) {
        alert("Gano " + jugadorUno + "! El puntaje fue de " + contadorUno + " contra " + contadorDos + " de " + jugadorDos);
    } else if (contadorUno < contadorDos) {
        alert("Gano " + jugadorDos + "! El puntaje fue de " + contadorDos + " contra " + contadorUno + " de " + jugadorUno);
    } else {
        alert("Empate! el puntaje fue " + contadorUno + " a " + contadorDos);
    }
}

juegoJs();

// bucle para confirmar jugar de nuevo
while (confirm("¿Revancha?")) {
    juegoJs();
}

alert("Gracias por jugar!");