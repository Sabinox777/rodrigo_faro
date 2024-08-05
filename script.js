const simBtn = document.getElementById('simBtn');
const naoBtn = document.getElementById('naoBtn');
const messageDiv = document.getElementById('message');
const audio = document.querySelector("#audio")

// Event listener for 'Sim' button
simBtn.addEventListener('click', function() {
    clearScreen();
    messageDiv.classList.remove('hidden');
    messageDiv.textContent = "Que bom! Envie uma mensagem com o dia de sua preferência 😄";
    audio.play();

});

// Event listener for 'Não' button
naoBtn.addEventListener('click', function() {
    animateNoButton();
});

// Function to clear the screen
function clearScreen() {
    document.getElementById('options').style.display = 'none';
}

// Function to animate 'Não' button
function animateNoButton() {
    const width = window.innerWidth - 150; // Adjusting for button width
    const height = window.innerHeight - 50; // Adjusting for button height
    const x = Math.random() * width;
    const y = Math.random() * height;

    naoBtn.style.position = 'absolute';
    naoBtn.style.left = x + 'px';
    naoBtn.style.top = y + 'px';
}
