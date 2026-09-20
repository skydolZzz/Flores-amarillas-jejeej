
const loginContainer = document.getElementById('login-container');
const giftContainer = document.getElementById('gift-container');
const passwordInput = document.getElementById('password-input');
const loginBtn = document.getElementById('login-btn');
const errorMessage = document.getElementById('error-message');

const CONTRASEÑA_CORRECTA = "tinako67"; 

function verificarContrasena() {
    const passwordIngresada = passwordInput.value;

    if (passwordIngresada === CONTRASEÑA_CORRECTA) {

        loginContainer.classList.add('hidden');
        giftContainer.classList.remove('hidden');
        

        setInterval(createFlower, 300);
    } else {
        errorMessage.innerText = "asi no es mi gorrion jeejje";
        passwordInput.value = ""; 
    }
}

loginBtn.addEventListener('click', verificarContrasena);

passwordInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        verificarContrasena();
    }
});

const flowerEmojis = ['🌻', '🌼', '💛', '✨'];

function createFlower() {
    const flower = document.createElement('div');
    flower.classList.add('flower');
    flower.innerText = flowerEmojis[Math.floor(Math.random() * flowerEmojis.length)];
    flower.style.left = Math.random() * 100 + 'vw';
    
    const size = Math.random() * 1.5 + 1; 
    flower.style.fontSize = `${size}rem`;
    
    const duration = Math.random() * 3 + 4; 
    flower.style.animationDuration = `${duration}s`;
    flower.style.opacity = Math.random() * 0.5 + 0.5;

    document.body.appendChild(flower);

    setTimeout(() => {
        flower.remove();
    }, duration * 1000);
}
