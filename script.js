// ===== ДАННЫЕ ПЕРСОНАЖЕЙ =====
const charactersData = {
    // ВСТАВЬТЕ ВАШИ ДАННЫЕ ЗДЕСЬ
};

// Данные портретов
const portraitImages = {
    // ВСТАВЬТЕ ВАШИ ПОРТРЕТЫ ЗДЕСЬ
};

// ===== ГЕНЕРАЦИЯ САЙТА =====
function generateSite() {
    const buttonsContainer = document.getElementById('buttonsContainer');
    const cardsContainer = document.getElementById('cardsContainer');
    
    if (!buttonsContainer || !cardsContainer) return;
    
    buttonsContainer.innerHTML = '';
    cardsContainer.innerHTML = '';
    
    // Проверка на мобильное устройство
    const isMobile = window.innerWidth <= 768;
    
    const sortedCharacters = Object.entries(charactersData).sort((a, b) => {
        return a[1].buttonName.localeCompare(b[1].buttonName, 'ru');
    });
    
    for (let [charKey, data] of sortedCharacters) {
        
        // СОЗДАЕМ КНОПКУ
        const button = document.createElement('div');
        button.className = 'character-button';
        button.setAttribute('data-character', charKey);
        button.setAttribute('data-portraits', data.portraits.join(','));
        button.setAttribute('data-names', data.parallaxNames.join(','));
        
        button.innerHTML = `
            <img src="images/button_normal.png" class="button-default">
            <img src="images/button_hover.png" class="button-hover">
            <span class="button-text">
                <span class="button-emoji">${data.emoji || ''}</span>
                <span class="button-name">${data.buttonName}</span>
            </span>
        `;
        
        buttonsContainer.appendChild(button);
        
        // СОЗДАЕМ КАРТОЧКУ
        const card = document.createElement('div');
        card.className = `character-card ${data.cardStyle || 'style1'}`;
        card.id = `${charKey}-card`;
        
        if (isMobile) {
            // ===== МОБИЛЬНАЯ КАРТОЧКА =====
            card.innerHTML = `
                <img src="images/card_mob.png" class="card-background-mobile">
                
                <div class="card-text-content-mobile">
                    <div class="mobile-title">
                        <span class="mobile-emoji">${data.emoji || ''}</span>
                        <span>${data.locationName}</span>
                    </div>
                    
                    <div class="mobile-description">
                        ${data.description.split('\n').map(p => `<p>${p}</p>`).join('')}
                    </div>
                    
                    <div class="mobile-links">
                        <a href="${data.links.album}" target="_blank" class="mobile-link">Альбом</a>
                        <a href="${data.links.discussion}" target="_blank" class="mobile-link">Обсуждение</a>
                        <a href="${data.links.lore}" target="_blank" class="mobile-link">Лор</a>
                    </div>
                </div>
                
                <img src="images/back.png" class="close-button">
            `;
        } else {
            // ===== ПК КАРТОЧКА =====
            let tagsHTML = '';
            data.parallaxNames.forEach((name, index) => {
                const position = data.parallaxPositions[index] || 'center';
                tagsHTML += `
                    <div class="name-tag ${position}-tag">
                        <img src="images/char_name.png" class="tag-bg">
                        <span class="tag-text">${name}</span>
                    </div>
                `;
            });
            
            card.innerHTML = `
                <img src="images/card_1.png" class="card-background">
                
                <div class="parallax-container">
                    <img src="${data.parallaxImg || 'images/mark.jpg'}" class="parallax-image" id="parallax-${charKey}">
                </div>
                
                <div class="name-tags">${tagsHTML}</div>
                
                <div class="card-text-content">
                    <div class="name-with-bg">
                        <img src="images/setting_name.png" class="name-bg">
                        <span class="name-bg-text">
                            <span class="name-emoji">${data.emoji || ''}</span>
                            <span class="name-location">${data.locationName}</span>
                        </span>
                    </div>
                    
                    <div class="character-description">
                        ${data.description.split('\n').map(p => `<p>${p}</p>`).join('')}
                    </div>
                    
                    <div class="links-container">
                        <a href="${data.links.album}" target="_blank" class="card-link-button">
                            <img src="images/button_normal.png" class="button-default">
                            <img src="images/button_hover.png" class="button-hover">
                            <span class="link-text">Альбом</span>
                        </a>
                        <a href="${data.links.discussion}" target="_blank" class="card-link-button">
                            <img src="images/button_normal.png" class="button-default">
                            <img src="images/button_hover.png" class="button-hover">
                            <span class="link-text">Обсуждение</span>
                        </a>
                        <a href="${data.links.lore}" target="_blank" class="card-link-button">
                            <img src="images/button_normal.png" class="button-default">
                            <img src="images/button_hover.png" class="button-hover">
                            <span class="link-text">Лорная статья</span>
                        </a>
                    </div>
                </div>
                
                <img src="images/back.png" class="close-button">
            `;
        }
        
        cardsContainer.appendChild(card);
    }
    
    updateElementReferences();
    initParallax();
}

// ===== ОСТАЛЬНЫЕ ФУНКЦИИ (без изменений) =====
let buttons, cards, overlay, closeButtons, previewContainer, portraitsRow;
let isClosing = false;
let previewTimer;
let currentButton = null;

function updateElementReferences() {
    buttons = document.querySelectorAll('.character-button');
    cards = document.querySelectorAll('.character-card');
    overlay = document.getElementById('overlay');
    closeButtons = document.querySelectorAll('.close-button');
    previewContainer = document.getElementById('previewContainer');
    portraitsRow = document.getElementById('portraitsRow');
    attachEventListeners();
}

function attachEventListeners() {
    function closeAll() {
        if (isClosing) return;
        cards.forEach(card => {
            if (card.classList.contains('active')) {
                card.classList.add('closing');
                card.classList.remove('active');
            }
        });
        isClosing = true;
        if (overlay) overlay.classList.remove('active');
        setTimeout(() => {
            cards.forEach(card => card.classList.remove('closing'));
            isClosing = false;
        }, 200);
    }
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            if (isClosing) return;
            const charId = this.getAttribute('data-character');
            const card = document.getElementById(charId + '-card');
            cards.forEach(c => {
                if (c.classList.contains('active')) {
                    c.classList.add('closing');
                    c.classList.remove('active');
                }
            });
            setTimeout(() => {
                cards.forEach(c => c.classList.remove('closing'));
                if (card) {
                    card.classList.add('active');
                    if (overlay) overlay.classList.add('active');
                }
            }, 200);
            hidePreview();
        });
        
        button.addEventListener('mouseenter', function() {
            if (previewTimer) clearTimeout(previewTimer);
            currentButton = this;
            showPreview(this);
        });
        
        button.addEventListener('mouseleave', function() {
            previewTimer = setTimeout(() => {
                if (previewContainer && !previewContainer.matches(':hover')) hidePreview();
            }, 100);
        });
    });
    
    closeButtons.forEach(btn => btn.addEventListener('click', closeAll));
    if (overlay) overlay.addEventListener('click', closeAll);
    cards.forEach(card => card.addEventListener('click', e => e.stopPropagation()));
    
    if (previewContainer) {
        previewContainer.addEventListener('mouseenter', () => clearTimeout(previewTimer));
        previewContainer.addEventListener('mouseleave', () => previewTimer = setTimeout(hidePreview, 100));
    }
    
    if (portraitsRow) {
        portraitsRow.addEventListener('click', function(e) {
            const portraitItem = e.target.closest('.portrait-item');
            if (portraitItem && currentButton) {
                currentButton.click();
                hidePreview();
            }
        });
    }
}

function showPreview(button) {
    if (!portraitsRow || !previewContainer) return;
    const portraitsAttr = button.getAttribute('data-portraits');
    const namesAttr = button.getAttribute('data-names');
    if (!portraitsAttr) return;
    
    const portraitKeys = portraitsAttr.split(',');
    const nameList = namesAttr ? namesAttr.split(',') : [];
    
    portraitsRow.innerHTML = '';
    portraitKeys.forEach((key, index) => {
        const portraitInfo = portraitImages[key.trim()];
        if (!portraitInfo) return;
        
        const portraitItem = document.createElement('div');
        portraitItem.className = 'portrait-item';
        portraitItem.innerHTML = `
            <img src="${portraitInfo}" class="preview-portrait">
            <div class="name-plate">
                <img src="images/char_name.png">
                <span class="name-text">${nameList[index] || key}</span>
            </div>
        `;
        portraitsRow.appendChild(portraitItem);
    });
    previewContainer.classList.add('active');
}

function hidePreview() {
    if (previewContainer) previewContainer.classList.remove('active');
}

function initParallax() {
    cards.forEach(card => {
        const parallaxImage = card.querySelector('.parallax-image');
        if (!parallaxImage) return;
        card.addEventListener('mousemove', function(e) {
            if (!this.classList.contains('active')) return;
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const moveX = (x - rect.width/2) / 30;
            const moveY = (y - rect.height/2) / 30;
            parallaxImage.style.transform = `scale(1.1) translate(${moveX}px, ${moveY}px)`;
        });
        card.addEventListener('mouseleave', function() {
            if (this.classList.contains('active')) parallaxImage.style.transform = 'scale(1.1) translate(0,0)';
        });
    });
}

function initScrollbar() {
    const scrollTrack = document.getElementById('scrollTrack');
    const scrollThumb = document.getElementById('scrollThumb');
    const content = document.getElementById('frameContent');
    if (!scrollTrack || !scrollThumb || !content) return;
    
    let isDragging = false;
    const thumbHeight = 72;
    function updateThumbPosition() {
        const scrollPercent = content.scrollTop / (content.scrollHeight - content.clientHeight);
        scrollThumb.style.top = scrollPercent * (scrollTrack.clientHeight - thumbHeight) + 'px';
    }
    content.addEventListener('scroll', updateThumbPosition);
    
    scrollThumb.addEventListener('mousedown', e => {
        isDragging = true;
        e.preventDefault();
    });
    document.addEventListener('mousemove', e => {
        if (!isDragging) return;
        const trackRect = scrollTrack.getBoundingClientRect();
        let newTop = e.clientY - trackRect.top - thumbHeight/2;
        newTop = Math.max(0, Math.min(newTop, trackRect.height - thumbHeight));
        scrollThumb.style.top = newTop + 'px';
    });
}