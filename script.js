
document.addEventListener('DOMContentLoaded', () => {
    const correctAnswers = {
        q1: 'B', q2: 'B', q3: 'B', q4: 'B', q5: 'B', q6: 'B',
        q7: 'A', q8: 'B', q9: 'B', q10: 'B', q11: 'B', q12: 'B'
    };

    const userSelections = {};

    document.querySelectorAll('.option-btn').forEach(button => {
        button.addEventListener('click', function() {
            const questionBox = this.closest('.question-box');
            const qId = questionBox.getAttribute('data-qid');
            const selectedValue = this.getAttribute('data-value');

            if (userSelections[qId] !== undefined) return;
            userSelections[qId] = selectedValue;

            const allButtons = questionBox.querySelectorAll('.option-btn');
            allButtons.forEach(btn => {
                const val = btn.getAttribute('data-value');
                if (val === correctAnswers[qId]) {
                    btn.classList.add('correct');
                } else if (val === selectedValue) {
                    btn.classList.add('incorrect');
                }
                btn.disabled = true;
            });
        });
    });

    const submitBtn = document.getElementById('submit-quiz');
    if (submitBtn) {
        submitBtn.addEventListener('click', function() {
            let score = 0;
            let total = Object.keys(correctAnswers).length;

            for (let qId in correctAnswers) {
                if (userSelections[qId] === correctAnswers[qId]) {
                    score++;
                }
            }

            const resultDiv = document.getElementById('quiz-result');
            if (score >= 10 && score <= 12) {
                resultDiv.innerHTML = `🎉 Congratulations! You scored ${score}/${total}! You are officially a Gen Z icon! ✨💜`;
            } else {
                resultDiv.innerHTML = `😢 You scored ${score}/${total}. Not quite there yet, bestie! Try again and fix your vibe check! 💀`;
            }
        });
    }
});
