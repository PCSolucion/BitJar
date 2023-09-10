// Simulamos una variable para la cantidad de bits donados (esto debería obtenerse de la API de Twitch)
let bitsDonados = 0;

// Define la longitud máxima de la barra de vida
const longitudMaximaBarra = 500;

// Variable para controlar si se ha reproducido el sonido
let seReprodujoElSonido = false;

// Actualiza la barra de vida según la cantidad de bits donados
function actualizarBarraDeVida() {
    const lifeBar = document.getElementById('life-bar');
    const porcentajeLlenado = (bitsDonados / longitudMaximaBarra) * 100;
    lifeBar.style.width = `${porcentajeLlenado}%`;

    // Comprueba si la barra alcanza el valor máximo
    if (bitsDonados >= longitudMaximaBarra && !seReprodujoElSonido) {
        reproducirSonido();
        seReprodujoElSonido = true;
        reiniciarBarra();
    } else if (bitsDonados < longitudMaximaBarra) {
        seReprodujoElSonido = false;
    }
}

// Función para aumentar bits automáticamente cada segundo
function aumentarBits() {
    bitsDonados += 45;
    // Limitamos bitsDonados para que no exceda la longitud máxima de la barra
    if (bitsDonados > longitudMaximaBarra) {
        bitsDonados = longitudMaximaBarra;
    }
    actualizarBarraDeVida();
}

// Función para disminuir bits automáticamente cada dos segundos
function disminuirBits() {
    bitsDonados -= 3;
    // Aseguramos que bitsDonados no sea menor que cero
    if (bitsDonados < 0) {
        bitsDonados = 0;
    }
    actualizarBarraDeVida();
}

// Función para reproducir el sonido "tono.mp3"
function reproducirSonido() {
    const audio = new Audio('POTIS.mp3'); // Ruta al archivo "tono.mp3"
    audio.play();
}

// Función para reiniciar la barra de vida a 0
function reiniciarBarra() {
    bitsDonados = 0;
    actualizarBarraDeVida();
}

// Llama a la función de aumento de bits cada segundo
setInterval(aumentarBits, 1000);

// Llama a la función de disminución de bits cada dos segundos
setInterval(disminuirBits, 2000);
