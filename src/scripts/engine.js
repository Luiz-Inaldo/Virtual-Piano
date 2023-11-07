const pianoKeys = document.querySelectorAll(".piano-keys .key");

let audio = new Audio('src/tunes/a.wav');

function playTune(key) {
    audio.src = `src/tunes/${key}.wav`; // indicando o diretório de cada tecla clicada/pressionada.
    audio.play(key);
}

pianoKeys.forEach((key) => {
    console.log(key.dataset.key);
    // criando um evento para cada tecla que será ativado quando for clicada.
    key.addEventListener('click', () => playTune(key.dataset.key)); // dataset vai puxar no HTML os seletores que contem o atributo data-.
});

// acionando o teclado para usar no piano.
document.addEventListener('keydown', (evento) => playTune(evento.key));