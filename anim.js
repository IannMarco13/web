// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

var lyricsData = [
  { text: "Hazme sentir de nuevo,", time: 18 },
  { text: "Deslízate sobre mi piel de nuevo,", time: 25 },
  { text: "Déjame despertarte para redescubrirte", time: 34 },
  { text: "Y me abriré si prometes ceder", time: 45 },
  { text: "En esta noche perfecta", time: 57 },
  { text: "Dejemos que los dos seamos uno...", time: 62 },    // 1:02 = 62 seg
  { text: "Estaremos juntos otra vez en otro momento", time: 70 }, // 1:10 = 70 seg
  { text: "No importa lo que digan los demás", time: 77 },    // 1:17 = 77 seg
  { text: "Porque dejaría todo tan atrás", time: 84 },        // 1:24 = 84 seg
  { text: "Solo para estar contigo hoy...", time: 87 },       // 1:27 = 87 seg
  { text: "Así que hazme sentir de nuevo", time: 97 },        // 1:37 = 97 seg
  { text: "Sentir tu aliento de nuevo", time: 103 },          // 1:43 = 103 seg
  { text: "No importa nadie más", time: 108 },                // 1:48 = 108 seg
  { text: "Solo estamos tú y yo...", time: 116 },             // 1:56 = 116 seg
  { text: "Estaremos juntos otra vez en otro momento", time: 123 }, // 2:03 = 123 seg
  { text: "No importa lo que digan los demás", time: 130 },   // 2:10 = 130 seg
  { text: "Porque dejaría todo tan atrás", time: 135 },       // 2:15 = 135 seg
  { text: "Solo para estar contigo hoy...", time: 140 },      // 2:20 = 140 seg
  { text: "Solo para estar contigo hoy", time: 146 },         // 2:26 = 146 seg
  { text: "Solo para estar contigo hoy", time: 152 },         // 2:32 = 152 seg
  { text: "Solo para estar contigo", time: 158 },             // 2:38 = 158 seg
  { text: "Estaremos juntos otra vez en otro momento", time: 176 }, // 2:56 = 176 seg
  { text: "No importa lo que digan los demás", time: 182 },   // 3:02 = 182 seg
  { text: "Porque dejaría todo tan atrás", time: 186 },       // 3:06 = 186 seg
  { text: "Solo para estar contigo hoy...", time: 191 },      // 3:11 = 191 seg
  { text: "Así que Estaremos juntos otra vez otro momento", time: 195 }, // 3:15 = 195 seg
  { text: "Y haré todo lo necesario para dejar a los demás", time: 205 },// 3:25 = 205 seg
  { text: "Tan atrás", time: 209 },                           // 3:29 = 209 seg
  { text: "Solo para poder estar, solo para poder estar...", time: 215 },// 3:35 = 215 seg
  { text: "Contigo...", time: 223 },                          // 3:43 = 223 seg
  { text: "Contigo...", time: 228 },                          // 3:48 = 228 seg
];
// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);
