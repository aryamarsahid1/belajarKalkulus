function checkDerivative() {
    const input = document.getElementById('derivative-input').value;
    const result = document.getElementById('result');
    
    if (input === '6') {
        result.textContent = 'Jawaban benar!';
    } else {
        result.textContent = 'Jawaban salah. Derivatif dari x^3 adalah 3x^2.';
    }
}

function checkPractice() {
    const input1 = document.getElementById('practice-input-1').value;
    const input2 = document.getElementById('practice-input-2').value;
    const result = document.getElementById('practice-result');
    
    // Derivatif dari x^3
    if (input1 === 'f\'(x) = 3x^2') {
        result.textContent = 'Jawaban benar untuk derivate!';
    } else {
        result.textContent = 'Jawaban salah untuk derivate. Derivatif dari x^3 adalah 3x^2.';
    }

    // Integral dari x^2 + 3x - 4 dari 0 hingga 2
    if (input2 === '(x^3/3 + (3/2)x^2 - 4x)') {
        result.textContent += '\n\nJawaban benar untuk integral!';
    } else {
        result.textContent += '\n\nJawaban salah untuk integral. Integral dari x^2 + 3x - 4 dari 0 hingga 2 adalah (x^3/3 + (3/2)x^2 - 4x) | dari 0 hingga 2.';
    }
}