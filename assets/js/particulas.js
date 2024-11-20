const imageContainer = document.getElementById('imageContainer');

imageContainer.addEventListener('mouseover', (event) => {
    createParticles(event.clientX, event.clientY, imageContainer);
});

function createParticles(x, y, container) {
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        const rect = container.getBoundingClientRect();
        particle.style.left = `${x - rect.left}px`;
        particle.style.top = `${y - rect.top}px`;

        // Randomize particle direction
        const angle = Math.random() * 2 * Math.PI;
        const distance = Math.random() * 50 + 10;
        particle.style.setProperty('--x', `${Math.cos(angle) * distance}px`);
        particle.style.setProperty('--y', `${Math.sin(angle) * distance}px`);

        container.appendChild(particle);

        // Remove particle after animation ends
        particle.addEventListener('animationend', () => {
            particle.remove();
        });
    }
}

function toggleInfo(element) {
    const info = element.querySelector('.info');
    // Alterna entre mostrar e esconder as informações
    info.classList.toggle('show-info');
}