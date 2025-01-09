document.querySelectorAll('.square').forEach(square => {
    square.addEventListener('click', () => {
        document.querySelectorAll('.square').forEach(sq => sq.style.backgroundColor = 'white');
        square.style.backgroundColor = 'lightblue';
    });
});
