const square = document.getElementById('square');
let isDown = false;

setInterval(() => {
    isDown = !isDown;
    if (isDown) {
        square.classList.add('move-dowm');
    } else {
        square.classList.remove('move-dowm');
    }
}, 2000);
