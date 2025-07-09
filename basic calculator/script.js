let display = document.getElementById('display');

// Append input to display
function appendToDisplay(value) {
    display.value += value;
}

// Clear the display
function clearDisplay() {
    display.value = '';
}

// Calculate result
function calculate() {
    try {
        // Replace × with * for calculation
        let expression = display.value.replace(/×/g, '*');
        display.value = eval(expression);
    } catch (error) {
        display.value = 'Error';
    }
}

// Touch event support for mobile
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('touchstart', function() {
        this.style.transform = 'translateY(0)';
        this.style.backgroundColor = '#555';
    });
    
    button.addEventListener('touchend', function() {
        this.style.transform = 'translateY(-2px)';
        this.style.backgroundColor = '#666';
    });
});
