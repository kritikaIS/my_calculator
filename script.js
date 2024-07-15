document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.button');
    let displayValue = '';

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const value = this.textContent;
            handleInput(value);
        });
    });

    document.addEventListener('keydown', function(event) {
        const key = event.key;
        if ((key >= '0' && key <= '9') || key === '.' || key === '+' || key === '-' || key === '*' || key === '/' || key === 'Enter' || key === 'Backspace') {
            handleInput(key);
        }
    });

    function handleInput(value) {
        if (value === 'Enter' || value === '=') {
            try {
                displayValue = displayValue.replace('X', '*');
                display.value = eval(displayValue);
                displayValue = display.value;
            } catch {
                display.value = 'Error';
                displayValue = '';
            }
        } else if (value === 'Backspace' || value === 'Del') {
            displayValue = displayValue.slice(0, -1);
            display.value = displayValue;
        } else if (value === 'AC') {
            displayValue = '';
            display.value = displayValue;
        } else {
            if (value === 'X') value = '*';
            displayValue += value;
            display.value = displayValue;
        }
    }
});
