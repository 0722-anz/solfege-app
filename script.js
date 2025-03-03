const notes = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
let correctNote = '';

function playRandomNote() {
    const index = Math.floor(Math.random() * notes.length);
    correctNote = notes[index];
    const audio = new Audio(`sounds/${correctNote}.mp3`);
    audio.play();
    generateAnswerButtons();
}

function generateAnswerButtons() {
    const answerButtons = document.getElementById('answerButtons');
    answerButtons.innerHTML = '';

    let choices = [...notes].sort(() => 0.5 - Math.random()).slice(0, 3);
    if (!choices.includes(correctNote)) {
        choices[Math.floor(Math.random() * 3)] = correctNote;
    }

    choices.forEach(note => {
        const btn = document.createElement('button');
        btn.innerText = note;
        btn.onclick = () => checkAnswer(note);
        answerButtons.appendChild(btn);
    });
}

function checkAnswer(userAnswer) {
    const resultText = document.getElementById('result');
    resultText.innerHTML = (userAnswer === correctNote) ? '✅ 正解！ 🎉' : '❌ 不正解 😢 もう一度挑戦！';
}
