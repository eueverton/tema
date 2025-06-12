# 💕 Carta Digital de Amor - Dia dos Namorados 💕

Uma carta digital interativa e romântica para celebrar o Dia dos Namorados!

## ✨ Características

- **Carta 3D interativa** que abre ao passar o mouse
- **Animações suaves** e efeitos visuais
- **Coração pulsante** na frente da carta
- **Efeito de confete** quando a carta é aberta
- **Corações flutuantes** no fundo
- **Design responsivo** para mobile e desktop
- **Efeitos de parallax** suaves

## 🚀 Como usar

1. Abra o arquivo `index.html` no seu navegador
2. Passe o mouse sobre a carta para vê-la abrir
3. Clique na carta para ativar efeitos especiais
4. Aproveite a experiência romântica! 💖

## 🎨 Personalização

### Alterando a mensagem
Edite o arquivo `index.html` e modifique o conteúdo dentro da div `message`:

```html
<div class="message">
    <h1>💕 Feliz Dia dos Namorados! 💕</h1>
    <p class="love-message">
        Sua mensagem personalizada aqui...
    </p>
    <p class="signature">
        Com todo o meu amor,<br>
        <span class="signature-name">Seu Nome</span>
    </p>
</div>
```

### Alterando as cores
No arquivo `style.css`, você pode modificar as cores principais:

```css
/* Cor principal dos corações */
.heart {
    background: linear-gradient(45deg, #sua-cor-1, #sua-cor-2);
}

/* Cor do fundo */
body {
    background: linear-gradient(135deg, #sua-cor-1 0%, #sua-cor-2 100%);
}
```

### Adicionando fotos
Para adicionar suas fotos, substitua o coração na frente da carta:

```html
<div class="f-box">
    <img src="caminho-para-sua-foto.jpg" alt="Nossa foto">
</div>
```

### Adicionando música de fundo
1. Adicione um arquivo de música na pasta
2. Descomente as linhas no arquivo `script.js`:
```javascript
function playBackgroundMusic() {
    const audio = new Audio('sua-musica.mp3');
    audio.loop = true;
    audio.volume = 0.3;
    audio.play().catch(e => console.log('Audio play failed:', e));
}

playBackgroundMusic();
```

## 📱 Compatibilidade

- ✅ Chrome
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers

## 🎯 Efeitos especiais

- **Hover**: A carta abre e o envelope se move
- **Click**: Efeito de confete e vibração
- **Mouse move**: Parallax nos corações flutuantes
- **Animação contínua**: Coração pulsante e corações flutuantes

## 💝 Dicas românticas

- Personalize a mensagem com suas próprias palavras
- Adicione fotos de vocês dois
- Inclua uma música especial de vocês
- Use cores que tenham significado para o casal
- Adicione a data de vocês ou momentos especiais

---

**Feito com 💕 para celebrar o amor!**

*Feliz Dia dos Namorados!* 💖 