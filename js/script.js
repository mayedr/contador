const counterElement = document.getElementById('counter');
const increaseBtn = document.getElementById('increaseBtn');
const decreaseBtn = document.getElementById('decreaseBtn');

let count = 0;

increaseBtn.addEventListener('click', () => {
    count++;
    updateCounter();
    animateCounter('+');
});

decreaseBtn.addEventListener('click', () => {
    if (count > 0) {
        count--;
        updateCounter();
        animateCounter('-');
    }
});

function updateCounter() {
    counterElement.textContent = count;
}

function animateCounter(operation) {
    gsap.to(counterElement, {
        duration: 0.5,
        scale: 1.2,
        color: operation === '+' ? '#0f0' : '#f00',
        onComplete: () => {
            gsap.to(counterElement, {
                duration: 0.5,
                scale: 1,
                color: '#333',
            });
        },
    });
}
