document.querySelectorAll('.square').forEach(square => {
    square.addEventListener('click', () => {
        if (square.style.backgroundColor === 'lightblue') {
            square.style.backgroundColor = 'white';
        } else {
            square.style.backgroundColor = 'lightblue';
        }
    });
});
