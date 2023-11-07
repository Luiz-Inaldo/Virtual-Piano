const pianoKeys = document.querySelectorAll(".piano-keys .key");

let audio = new Audio('src/tunes/a.wav');

function playTune(key) {
    audio.src = `src/tunes/${key}.wav`;
    audio.play(key);
}

pianoKeys.forEach((key) => {
    key.addEventListener('click', () => playTune(key.dataset.key));
});