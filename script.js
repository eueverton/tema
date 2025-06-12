// Efeitos interativos para a carta de amor
document.addEventListener('DOMContentLoaded', function() {
    const card = document.querySelector('.card');
    const envelope = document.querySelector('.envelope');
    const cartaWrapper = document.querySelector('.carta-wrapper');
    const floatingHearts = document.querySelectorAll('.floating-heart');
    const envelopeFlap = document.querySelector('.envelope-flap');
    let isOpening = false;
    
    // Função para abrir o envelope e depois a carta sair e abrir
    function openEnvelopeAndCard() {
        if (isOpening || card.classList.contains('open')) return;
        isOpening = true;
        envelope.classList.add('open');
        setTimeout(() => {
            // Move a carta para cima (carta-wrapper)
            envelope.classList.add('open'); // para ativar o + .carta-wrapper
            setTimeout(() => {
                card.classList.add('open');
                isOpening = false;
            }, 900); // tempo do slide da carta
        }, 900); // tempo do flap do envelope
    }

    // Clique/toque no envelope
    envelope.addEventListener('click', openEnvelopeAndCard);
    envelope.addEventListener('touchstart', function(e) {
        openEnvelopeAndCard();
        e.stopPropagation();
    });

    // Opcional: fechar ao clicar fora (mobile)
    document.body.addEventListener('touchstart', function(e) {
        if (!card.contains(e.target) && !envelope.contains(e.target)) {
            card.classList.remove('open');
            envelope.classList.remove('open');
        }
    });
    
    // Efeito de confete quando a carta é aberta
    function createConfetti() {
        const colors = ['#ff6b6b', '#ff8e8e', '#ffb3b3', '#ffd6d6', '#e91e63'];
        
        for (let i = 0; i < 50; i++) {
            const confetti = document.createElement('div');
            confetti.style.position = 'absolute';
            confetti.style.width = '10px';
            confetti.style.height = '10px';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.left = Math.random() * window.innerWidth + 'px';
            confetti.style.top = '-10px';
            confetti.style.borderRadius = '50%';
            confetti.style.pointerEvents = 'none';
            confetti.style.zIndex = '1000';
            
            document.body.appendChild(confetti);
            
            const animation = confetti.animate([
                { transform: 'translateY(0px) rotate(0deg)', opacity: 1 },
                { transform: `translateY(${window.innerHeight + 100}px) rotate(${Math.random() * 360}deg)`, opacity: 0 }
            ], {
                duration: Math.random() * 3000 + 2000,
                easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            });
            
            animation.onfinish = () => {
                confetti.remove();
            };
        }
    }
    
    // Efeito de brilho na carta
    function addGlowEffect() {
        card.style.boxShadow = '0 20px 40px rgba(255, 107, 107, 0.6), 0 0 60px rgba(255, 107, 107, 0.3)';
        setTimeout(() => {
            card.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
        }, 1000);
    }
    
    // Animação de coração pulsante mais intensa
    function intensifyHeartbeat() {
        const heart = document.querySelector('.heart');
        if (heart) {
            heart.style.animation = 'heartbeat 0.8s ease-in-out infinite';
            setTimeout(() => {
                heart.style.animation = 'heartbeat 1.5s ease-in-out infinite';
            }, 2000);
        }
    }
    
    // Efeito de envelope se abrindo
    function openEnvelope() {
        envelopeFlap.style.transform = 'translateX(-50%) rotateX(180deg)';
        envelopeFlap.style.transition = 'transform 1s ease-in-out';
        
        setTimeout(() => {
            envelope.style.transform = 'translateY(-50px) scale(0.9)';
            envelope.style.transition = 'transform 1s ease-in-out';
        }, 500);
    }
    
    // Event listener para quando passar o mouse sobre a carta
    card.addEventListener('mouseenter', function() {
        addGlowEffect();
        intensifyHeartbeat();
        openEnvelope();
        
        // Adiciona mais corações flutuantes
        setTimeout(() => {
            createConfetti();
        }, 1000);
    });
    
    // Event listener para clique na carta
    card.addEventListener('click', function() {
        // Efeito de vibração sutil
        card.style.animation = 'shake 0.5s ease-in-out';
        setTimeout(() => {
            card.style.animation = '';
        }, 500);
        
        // Cria mais confete
        createConfetti();
        
        // Mensagem especial no console (para desenvolvedores)
        console.log('💕 Feliz Dia dos Namorados! 💕');
        console.log('Que este dia seja repleto de amor e felicidade!');
    });
    
    // Animação de shake para o CSS
    const style = document.createElement('style');
    style.textContent = `
        @keyframes shake {
            0%, 100% { transform: scale(1.1) translateX(0); }
            25% { transform: scale(1.1) translateX(-5px); }
            75% { transform: scale(1.1) translateX(5px); }
        }
    `;
    document.head.appendChild(style);
    
    // Efeito de parallax suave para os corações flutuantes
    document.addEventListener('mousemove', function(e) {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        
        floatingHearts.forEach((heart, index) => {
            const speed = (index + 1) * 0.5;
            const x = (mouseX - 0.5) * speed * 20;
            const y = (mouseY - 0.5) * speed * 20;
            
            heart.style.transform = `translate(${x}px, ${y}px)`;
        });
    });
    
    // Efeito de digitação para a mensagem (opcional)
    function typeWriter(element, text, speed = 50) {
        let i = 0;
        element.innerHTML = '';
        
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        type();
    }
    
    // Inicialização de efeitos especiais
    setTimeout(() => {
        // Adiciona um efeito de entrada suave
        card.style.opacity = '0';
        card.style.transform = 'scale(1.05) translateY(50px)';
        card.style.transition = 'all 1s ease-out';
        
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'scale(1.05) translateY(0)';
        }, 100);
    }, 500);
    
    // Efeito de música de fundo (comentado - descomente se quiser adicionar)
    /*
    function playBackgroundMusic() {
        const audio = new Audio('path-to-your-music.mp3');
        audio.loop = true;
        audio.volume = 0.3;
        audio.play().catch(e => console.log('Audio play failed:', e));
    }
    
    // Descomente a linha abaixo se quiser música de fundo
    // playBackgroundMusic();
    */
}); 