const pianoKeys = document.querySelectorAll(".piano-keys .key");
// selecionando todos os seletores com a classe piano-keys que tenha como filho a key.

const volumeSlider = document.querySelector('.volume-slider input');
// selecionando o seletor com a classe volume-slider que contenha um input.

let mappedKeys = [];
let audio = new Audio('src/tunes/a.wav');

function playTune(key) {
    audio.src = `src/tunes/${key}.wav`; // indicando o diretório de cada tecla clicada/pressionada.
    audio.play(key);

    // adicionando sombreamento ao piano quando for pressionado teclas
    const pressedKey = document.querySelector(`[data-key='${key}']`); // pegando todos os seletores com a prop datakey
    pressedKey.classList.add('active');
    setTimeout(() => pressedKey.classList.remove('active'), 100);
}

pianoKeys.forEach((key) => {
    console.log(key.dataset.key);
    // criando um evento para cada tecla que será ativado quando for clicada.
    key.addEventListener('click', () => playTune(key.dataset.key)); // dataset vai puxar no HTML os seletores que contem o atributo data-.
    mappedKeys.push(key.dataset.key); // jogando a tecla da posição na array.
});

// acionando o teclado para usar no piano.
document.addEventListener('keydown', (evento) => {
    if (mappedKeys.includes(evento.key)){
        playTune(evento.key);
    }
    
});

function handleVolume(evento){
    console.log(evento.target.value);
    audio.volume = evento.target.value;
}


document.addEventListener('input', handleVolume);