// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
//var lyricsData = [
//  { text: "At the time", time: 15 },
//  { text: "The whisper of birds", time: 18 },
//  { text: "Lonely before the sun cried", time: 27 },
//  { text: "Fell from the sky", time: 32 },
//  { text: "Like water drops", time: 33 },
//  { text: "Where I'm now? I don't know why", time: 41 },
//  { text: "Nice butterflies in my hands", time: 47 },
//  { text: "Too much light for twilight", time: 54 },
//  { text: "In the mood for the flowers love", time: 59 },
//  { text: "That vision", time: 67 },
//  { text: "Really strong, blew my mind", time: 72 },
//  { text: "Silence Let me see what it was", time: 78 },
//  { text: "I only want to live in clouds", time: 83 },
//  { text: "Where I'm now? I don't know why", time: 91 },
//  { text: "Nice butterflies in my hands", time: 97 },
//  { text: "Too much light for twilight", time: 104 },
//  { text: "In the mood for the flowers love", time: 108 },
//  { text: "At the time", time: 144 },
//  { text: "The whisper of birds", time: 148 },
//  { text: "Lonely before the sun cried", time: 153 },
//  { text: "Fell from the sky", time: 158 },
//  { text: "Like water drops", time: 164 },
//  { text: "Where I'm now? I don't know why", time: 169 },
//  { text: "Nice butterflies in my hands", time: 176 },
//  { text: "Too much light for twilight", time: 183 },
//  { text: "In the mood for the flowers", time: 188 },
//  { text: "Love.", time: 140 },
//];

var lyricsData = [
  { text: "Estar contigo", time: 5 },
  { text: "Hazme sentir de nuevo,", time: 10 },
  { text: "Deslízate sobre mi piel de nuevo,", time: 15 },
  { text: "Déjame descubrirte para redescubrirte", time: 20 },
  { text: "Y me abriré si prometes ceder", time: 26 },
  { text: "En esta noche perfecta", time: 32 },
  { text: "Dejemos que los dos seamos uno...", time: 38 },
  { text: "Seremos de nuevo en otro momento", time: 44 },
  { text: "No importa lo que digan los demás", time: 50 },
  { text: "Porque dejaría todo tan atrás", time: 56 },
  { text: "Solo para estar contigo hoy...", time: 62 },
  { text: "Así que hazme sentir de nuevo", time: 68 },
  { text: "Sentir tu aliento de nuevo", time: 74 },
  { text: "No importa nadie más", time: 80 },
  { text: "Solo estamos tú y yo...", time: 86 },
  { text: "Seremos de nuevo en otro momento", time: 92 },
  { text: "No importa lo que digan los demás", time: 98 },
  { text: "Porque dejaría todo tan atrás", time: 104 },
  { text: "Solo para estar contigo hoy...", time: 110 },
  { text: "Solo para estar contigo hoy", time: 116 },
  { text: "Solo para estar contigo hoy", time: 122 },
  { text: "Solo para estar contigo", time: 128 },
  { text: "Seremos de nuevo en otro momento", time: 134 },
  { text: "No importa lo que digan los demás", time: 140 },
  { text: "Porque dejaría todo tan atrás", time: 146 },
  { text: "Solo para estar contigo hoy...", time: 152 },
  { text: "Así que seremos de nuevo en otro momento", time: 158 },
  { text: "Y haré todo lo necesario para dejar a los demás", time: 164 },
  { text: "Tan atrás", time: 170 },
  { text: "Solo para poder estar, solo para poder estar...", time: 176 },
  { text: "Contigo...", time: 182 },
  { text: "Contigo...", time: 188 },
  { text: "Contigo...", time: 194 },
  { text: "Contigo...", time: 200 },
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