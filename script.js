// =============================
// FLASHCARDS - COPA DO MUNDO
// =============================

const flashcards = [
    {
        pergunta: "Quem é o único jogador tricampeão mundial?",
        resposta: "Pelé conquistou as Copas do Mundo de 1958, 1962 e 1970."
    },
    {
        pergunta: "Quem foi o melhor jogador da Copa do Mundo de 2022?",
        resposta: "Lionel Messi."
    },
    {
        pergunta: "Quem foi o artilheiro da Copa do Mundo de 2002?",
        resposta: "Ronaldo Fenômeno marcou 8 gols."
    },
    {
        pergunta: "Quem marcou três gols na final da Copa de 2022?",
        resposta: "Kylian Mbappé."
    },
    {
        pergunta: "Quem é o maior artilheiro da história das Copas?",
        resposta: "Miroslav Klose, com 16 gols."
    },
    {
        pergunta: "Qual goleiro foi destaque da Argentina em 2022?",
        resposta: "Emiliano Martínez."
    },
    {
        pergunta: "Quem foi o capitão da Seleção Brasileira no título de 2002?",
        resposta: "Cafu."
    },
    {
        pergunta: "Qual jogador português é um dos maiores ídolos da seleção?",
        resposta: "Cristiano Ronaldo."
    },
    {
        pergunta: "Qual jogador brasileiro é conhecido como Fenômeno?",
        resposta: "Ronaldo Nazário."
    },
    {
        pergunta: "Qual jogador brasileiro disputou as Copas de 2014, 2018 e 2022?",
        resposta: "Neymar Jr."
    }
];

// Seleciona a div onde os cards serão criados
const container = document.getElementById("cards");

// Cria todos os flashcards
flashcards.forEach((flashcard) => {

    // Card
    const card = document.createElement("div");
    card.className = "card";

    // Conteúdo interno
    card.innerHTML = `
        <div class="conteudo">
            <div class="frente">
                <h3>Pergunta</h3>
                <p>${flashcard.pergunta}</p>
            </div>

            <div class="verso">
                <h3>Resposta</h3>
                <p>${flashcard.resposta}</p>
            </div>
        </div>
    `;

    // Virar o card
    card.addEventListener("click", () => {
        card.classList.toggle("virado");
    });

    // Adiciona o card na página
    container.appendChild(card);

});
