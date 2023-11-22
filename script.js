document.getElementById('quizForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const answers = {
        q1: document.querySelector('input[name="q1"]:checked').value,
        q2: document.querySelector('input[name="q2"]:checked').value,
        q3: document.querySelector('input[name="q3"]:checked').value,
        q4: document.querySelector('input[name="q4"]:checked').value,
        q5: document.querySelector('input[name="q5"]:checked').value,
        q6: document.querySelector('input[name="q6"]:checked').value,
        q7: document.querySelector('input[name="q7"]:checked').value,
        q8: document.querySelector('input[name="q8"]:checked').value,
        q9: document.querySelector('input[name="q9"]:checked').value,
        q10: document.querySelector('input[name="q10"]:checked').value
    };

    // Vos réponses correctes attendues
    const correctAnswers = {
        q1: 'vrai',
        q2: 'faux',
        q3: 'vrai',
        q4: 'vrai',
        q5: 'vrai',
        q6: 'vrai',
        q7: 'vrai',
        q8: 'vrai',
        q9: 'vrai',
        q10: 'vrai'
    };

    let score = 0;

    // Vérification des réponses et calcul du score
    for (const key in answers) {
        if (answers[key] === correctAnswers[key]) {
            score++;
        }
    }

    alert(`GG ${score} sur 10 regarde tes dm discord`);
});