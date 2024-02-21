document.addEventListener('DOMContentLoaded', function () {
    const display = document.querySelector('input[name="display"]');
    const buttons = document.querySelectorAll('.buttons input');

    buttons.forEach(button => {
        button.addEventListener('click', handleButtonClick);
    });

    function handleButtonClick(event) {
        const buttonValue = event.target.value;

        switch (buttonValue) {
            case 'AC':
                display.value = '';
                break;
            case 'DE':
                display.value = display.value.slice(0, -1);
                break;
            case '=':
                evaluateExpression();
                break;
            default:
                display.value += buttonValue;
                break;
        }
    }

    function evaluateExpression() {
        try {
            const expression = display.value.replace(/÷/g, '/').replace(/×/g, '*');
            const result = eval(expression);
    
            if (Number.isFinite(result)) {
                display.value = result;
            } else {
                throw new Error('Invalid result');
            }
        } catch (error) {
            display.value = 'Syntax Error';
        }
    }
    
    
});
