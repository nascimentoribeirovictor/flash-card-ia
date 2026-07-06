// Lista de flashcards
const flashcards = [
    {
        pergunta: "Quem é o único jogador tricampeão mundial?",
        resposta: "Pelé venceu as Copas do Mundo de 1958, 1962 e 1970."
    },
    {
        pergunta: "Quem foi o melhor jogador da Copa do Mundo de 2022?",
        resposta: "Lionel Messi."
    },
    {
        pergunta: "Quem foi o artilheiro da Copa de 2002?",
        resposta: "Ronaldo Fenômeno marcou 8 gols."
    },
    {
        pergunta: "Quem marcou três gols na final da Copa de 2022?",
        resposta: "Kylian Mbappé."
    },
    {
        pergunta: "Quem é o maior artilheiro da história das Copas do Mundo?",
        resposta: "Miroslav Klose, com 16 gols."
    },
    {
        pergunta: "Qual goleiro foi destaque da Argentina na Copa de 2022?",
        resposta: "Emiliano Martínez."
    },
    {
        pergunta: "Quem foi o capitão da Seleção Brasileira no título de 2002?",
        resposta: "Cafu."
    },
    {
        pergunta: "Qual jogador português é um dos maiores ídolos da seleção de Portugal?",
        resposta: "Cristiano Ronaldo."
    },
    {
        pergunta: "Qual jogador brasileiro é conhecido como 'Fenômeno'?",
        resposta: "Ronaldo Nazário."
    },
    {
        pergunta: "Qual jogador brasileiro disputou as Copas de 2014, 2018 e 2022?",
        resposta: "Neymar Jr."
    }
];

let indice = 0;
let mostrandoResposta = false;

// Elementos da página
const card = document.getElementById("card");
const contador = document.getElementById("contador");

// Exibe a pergunta
function mostrarPergunta() {
    card.textContent = flashcards[indice].pergunta;
    mostrandoResposta = false;
    contador.textContent = `Flashcard ${indice + 1} de ${flashcards.length}`;
}

// Vira o card
function virarCard() {
    if (mostrandoResposta) {
        card.textContent = flashcards[indice].pergunta;
    } else {
        card.textContent = flashcards[indice].resposta;
    }

    mostrandoResposta = !mostrandoResposta;
}

// Próximo flashcard
function proximo() {
    indice++;

    if (indice >= flashcards.length) {
        indice = 0;
    }

    mostrarPergunta();
}

// Flashcard anterior
function anterior() {
    indice--;

    if (indice < 0) {
        indice = flashcards.length - 1;
    }

    mostrarPergunta();
}

// Inicia o primeiro flashcard
mostrarPergunta();
