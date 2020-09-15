const buttons = document.querySelectorAll('button[data-num]');
const screen = document.querySelector('.screen');
const btnEqual = document.querySelector('.btn-equal');
const btnClear = document.querySelector('.btn-clear');

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        let symbol = e.target.dataset.num;
        screen.value += symbol;
        
        btnEqual.addEventListener('click', (equal) => {
            let result = eval(screen.value);
            screen.value = result;
        });
        btnClear.addEventListener('click', (clear) => {
            screen.value = ''
        })
        
    });
});

