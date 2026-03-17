// ===== ДАННЫЕ ВСЕХ ПЕРСОНАЖЕЙ =====
const charactersData = {
    "char1": {
        buttonName: "Золотые луга",
        locationName: "Золотые луга",
        emoji: "🔑",
        description: "Новые горожане смутно представляют, откуда взялся Марк, но старожилы ещё помнят, как его отец, унаследовавший ферму «Золотые луга» от деда, после десятка лет застоя поднимал её с колен, а ещё – как активно вкладывался в город, став мэром после отставки Льюиса. И как бесследно исчез солнечным весенним утром... Сразу после на семью Валентайнов снежным комом повалилась череда подозрительных несчастий, в мгновение обратив их дом в скорбное родовое захоронение. Окончив школу в шумном мегаполисе, Марк принял решение вернуться туда, где прошло всё его детство – в тихую долину Стардью. Однако тихой она может называться лишь в его детских воспоминаниях. За годы тут всё изменилось до неузнаваемости: теперь после заката из тёмных углов выползают жуткие монстры, а по ночам на патрульные посты заступают бравые воины из гильдии Приключений. Марк знает: этот кошмар напрямую связан с таинственным исчезновением его отца, Ника, и мрачными секретами, которые хранил его прадед Ричард, но времени на спокойные поиски ответов уже совсем нет, ведь с каждым днём монстры становятся всё агрессивнее.",
        portraits: ["richard", "nick", "mark"],
        parallaxNames: ["Ричард", "Ник", "Марк"],
        parallaxPositions: ["left", "right", "center"],
        links: {
            album: "https://vk.com/album-236063317_309020913",
            discussion: "https://vk.com/topic-236063317_57232756",
            lore: "https://vk.com/@stardewoc-golden-fields"
        },
        cardStyle: "style3",
        parallaxImg: "images/parallax/mark.jpg"
    },
    
    "char2": {
        buttonName: "Ферма",
        locationName: "Ферма",
        emoji: "⛏️",
        description: "Фермер по случайности попадает туда, где быть не должен: на Вершину. Так он знакомится с Мистером Ки, но их первая встреча заканчивается очень быстро. Чудом выживая после падения с горы, Мерреф становится одержим желанием вернуться на вершину и отплатить Ки той же монетой.",
        portraits: ["merref"],
        parallaxNames: ["Мерреф"],
        parallaxPositions: ["center"],
        links: {
            album: "https://vk.com/album-236063317_309020852",
            discussion: "https://vk.com/topic-236063317_57282994",
            lore: "https://vk.com/@stardewoc-ferma-merref-rolman"
        },
        cardStyle: "style3",
        parallaxImg: "images/parallax/merref.jpg"
    },
    
    "char3": {
        buttonName: "Без солнца",
        locationName: "Без солнца",
        emoji: "🌓",
        description: "Франц Августин фон Шёнберг - готорский иммигрант; уважаемый аристократ на родине и безумный старик в Фернгилле. После смерти своей супруги и из-за ухудшения здоровья, Августин решился на переезд в хорошо ему знакомую, но совершенно чужую Республику. Здесь, в крошечном городке Пеликан, он фанатично проповедует учение Иобы, разыгрывает мистерии, жалеет себя и из последних сил хватается за остатки своего былого величия. Иногда ему кажется, что его жизнь — тоже чья-то злая игра. Но кто он такой, чтобы нарушать сценарий?",
        portraits: ["augustine"],
        parallaxNames: ["Августин"],
        parallaxPositions: ["center"],
        links: {
            album: "https://vk.com/album-236063317_309020786",
            discussion: "https://vk.com/topic-236063317_57232809",
            lore: "https://vk.com/@stardewoc-bez-solnca-avgustin"
        },
        cardStyle: "style3",
        parallaxImg: "images/parallax/augustine.jpg"
    },

    "char4": {
        buttonName: "Ферма Старлайт",
        locationName: "Ферма Старлайт",
        emoji: "🪴",
        description: "Ичи - фермер в городе Пеликан, которая проживает свои счастливые и размеренные будни. Девушка родилась и выросла в городе Зузу. Из-за проблем со здоровьем у её отца, ей пришлось бросить учебу и устроиться работать в Джоджа. Но проблемы на работе и в личной жизни сломили девушку и та чуть не совершила непоправимое. К счастью, магия дедушки и его письмо помогают ей, и та, уволившись, уехала на его ферму в Долину Стардью.",
        portraits: ["ichi"],
        parallaxNames: ["Ичи"],
        parallaxPositions: ["center"],
        links: {
            album: "https://vk.com/album-236063317_309020827",
            discussion: "https://vk.com/topic-236063317_57232784",
            lore: "https://vk.com/@stardewoc-starlight"
        },
        cardStyle: "style1",
        parallaxImg: "images/parallax/ichi.jpg"
    },

    "char5": {
        buttonName: "Сансет Бэй",  // УБРАЛ ПРОБЕЛ В НАЧАЛЕ
        locationName: "Сансет Бэй", // УБРАЛ ПРОБЕЛ В НАЧАЛЕ
        emoji: "🌅",
        description: "Как часто судьба подкидывает нам интересные встречи и хитросплетения путей? Как многие выбираются из воды сухими? Ферма «Роуз Харт» в районе округа Сансет Бэй, что в Пеликане – тихое местечко со своими секретами. Жители Пеликана хорошо знают Джулс, но совершенно не знают, чего стоило ей обрести покой в том виде, который она имеет сейчас. Однако, покой ли это? Жизнь в маленьком городке, работа изо дня в день, избитый график – это все смешивается с человеческими взаимоотношениями, которые, будто молодой росток, пробиваются вверх к свету сквозь толстый слой пепла. За стабильностью и ясностью кроются призраки прошлого, преследующие девушку и по сей день. Вот только «палки в колеса» вставляет и настоящее. После долгой ночи всегда поднимается солнце, но поднимется ли оно в этот раз?",
        portraits: ["juls"],
        parallaxNames: ["Джулс"],
        parallaxPositions: ["center"],
        links: {
            album: "https://vk.com/album-236063317_309020818",
            discussion: "https://vk.com/topic-236063317_57283045",
            lore: "https://vk.com/@stardewoc-sanset-bei-dzhuls"
        },
        cardStyle: "style2",
        parallaxImg: "images/parallax/juls.jpg"
    }
}; // ЗАКРЫВАЮЩАЯ СКОБКА БЫЛА, ПРОСТО УБРАЛ ЛИШНЮЮ

// Данные портретов
const portraitImages = {
    "richard": "images/portraits/richard.jpg",
    "nick": "images/portraits/nick.jpg",
    "mark": "images/portraits/mark.jpg",
    "merref": "images/portraits/merref.jpg",
    "augustine": "images/portraits/augustine.jpg",
    "ichi": "images/portraits/ichi.jpg",
    "juls": "images/portraits/juls.jpg",
};



const sortedCharacters = Object.entries(charactersData).sort((a, b) => {
    const nameA = a[1].buttonName.toLowerCase();
    const nameB = b[1].buttonName.toLowerCase();
    return nameA.localeCompare(nameB, 'ru'); // Сортировка с учетом русского языка
});


function generateSite() {
    const buttonsContainer = document.getElementById('buttonsContainer');
    const cardsContainer = document.getElementById('cardsContainer');
    
    buttonsContainer.innerHTML = '';
    cardsContainer.innerHTML = '';
    
    // СОРТИРУЕМ ПЕРСОНАЖЕЙ ПО АЛФАВИТУ
    const sortedCharacters = Object.entries(charactersData).sort((a, b) => {
        const nameA = a[1].buttonName.toLowerCase();
        const nameB = b[1].buttonName.toLowerCase();
        return nameA.localeCompare(nameB, 'ru');
    });
    
    // Используем sortedCharacters вместо Object.entries
    for (let [charKey, data] of sortedCharacters) {
        
        // СОЗДАЕМ КНОПКУ
        const button = document.createElement('div');
        button.className = 'character-button';
        button.setAttribute('data-character', charKey);
        button.setAttribute('data-portraits', data.portraits.join(','));
        button.setAttribute('data-names', data.parallaxNames.join(','));
        
        button.innerHTML = `
            <img src="images/button_normal.png" alt="Кнопка" class="button-default">
            <img src="images/button_hover.png" alt="Кнопка" class="button-hover">
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
        
        // Проверяем, мобильное ли устройство
        const isMobile = window.innerWidth <= 768;
        
        if (isMobile) {
            // МОБИЛЬНАЯ КАРТОЧКА
            card.innerHTML = `
                <img src="images/card_mob.png" alt="Карточка" class="card-background-mobile">
                
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
                
                <img src="images/back.png" alt="Закрыть" class="close-button">
            `;
        } else {
            // ПК КАРТОЧКА
            let tagsHTML = '';
            data.parallaxNames.forEach((name, index) => {
                const position = data.parallaxPositions[index] || 'center';
                tagsHTML += `
                    <div class="name-tag ${position}-tag">
                        <img src="images/char_name.png" alt="Рамка" class="tag-bg">
                        <span class="tag-text">${name}</span>
                    </div>
                `;
            });
            
            card.innerHTML = `
                <img src="images/card_1.png" alt="Карточка" class="card-background">
                
                <div class="parallax-container">
                    <img src="${data.parallaxImg || 'images/mark.jpg'}" alt="Пейзаж" class="parallax-image" id="parallax-${charKey}">
                </div>
                
                <div class="name-tags">
                    ${tagsHTML}
                </div>
                
                <div class="card-text-content">
                    <div class="name-with-bg">
                        <img src="images/setting_name.png" alt="Рамка" class="name-bg">
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
                            <img src="images/button_normal.png" alt="Кнопка" class="button-default">
                            <img src="images/button_hover.png" alt="Кнопка" class="button-hover">
                            <span class="link-text">Альбом</span>
                        </a>
                        <a href="${data.links.discussion}" target="_blank" class="card-link-button">
                            <img src="images/button_normal.png" alt="Кнопка" class="button-default">
                            <img src="images/button_hover.png" alt="Кнопка" class="button-hover">
                            <span class="link-text">Обсуждение</span>
                        </a>
                        <a href="${data.links.lore}" target="_blank" class="card-link-button">
                            <img src="images/button_normal.png" alt="Кнопка" class="button-default">
                            <img src="images/button_hover.png" alt="Кнопка" class="button-hover">
                            <span class="link-text">Лорная статья</span>
                        </a>
                    </div>
                </div>
                
                <img src="images/back.png" alt="Закрыть" class="close-button">
            `;
        }
        
        cardsContainer.appendChild(card);
    }
    
    updateElementReferences();
    initParallax();
}

// ===== ОБНОВЛЕНИЕ ССЫЛОК =====
let buttons, cards, overlay, closeButtons, previewContainer, portraitsRow;

function updateElementReferences() {
    buttons = document.querySelectorAll('.character-button');
    cards = document.querySelectorAll('.character-card');
    overlay = document.getElementById('overlay');
    closeButtons = document.querySelectorAll('.close-button');
    previewContainer = document.getElementById('previewContainer');
    portraitsRow = document.getElementById('portraitsRow');
    
    attachEventListeners();
}

// ===== ОБРАБОТЧИКИ =====
let isClosing = false;
let previewTimer;
let currentButton = null;

function attachEventListeners() {
    // Закрытие карточек
    function closeAll() {
        if (isClosing) return;
        
        cards.forEach(card => {
            if (card.classList.contains('active')) {
                card.classList.add('closing');
                card.classList.remove('active');
            }
        });
        
        isClosing = true;
        overlay.classList.remove('active');
        
        setTimeout(() => {
            cards.forEach(card => {
                card.classList.remove('closing');
            });
            isClosing = false;
        }, 200);
    }
    
    // Открытие карточки
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
                    overlay.classList.add('active');
                }
            }, 200);
            
            hidePreview();
        });
        
        // Превью при наведении
        button.addEventListener('mouseenter', function() {
            if (previewTimer) clearTimeout(previewTimer);
            currentButton = this;
            showPreview(this);
        });
        
        button.addEventListener('mouseleave', function() {
            previewTimer = setTimeout(() => {
                if (!previewContainer.matches(':hover')) {
                    hidePreview();
                }
            }, 100);
        });
    });
    
    // Кнопки закрытия
    closeButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            closeAll();
        });
    });
    
    // Затемнение
    overlay.addEventListener('click', closeAll);
    
    // Предотвращение закрытия при клике на карточку
    cards.forEach(card => {
        card.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    });
    
    // Превью
    previewContainer.addEventListener('mouseenter', function() {
        if (previewTimer) clearTimeout(previewTimer);
    });
    
    previewContainer.addEventListener('mouseleave', function() {
        previewTimer = setTimeout(() => {
            hidePreview();
        }, 100);
    });
    
    portraitsRow.addEventListener('click', function(e) {
        const portraitItem = e.target.closest('.portrait-item');
        if (portraitItem && currentButton) {
            const event = new MouseEvent('click', {
                bubbles: true,
                cancelable: true,
                view: window
            });
            currentButton.dispatchEvent(event);
            hidePreview();
        }
    });
}

// ===== ПРЕВЬЮ =====
function showPreview(button) {
    const portraitsAttr = button.getAttribute('data-portraits');
    const namesAttr = button.getAttribute('data-names');
    
    if (!portraitsAttr) return;
    
    const portraitKeys = portraitsAttr.split(',');
    const nameList = namesAttr ? namesAttr.split(',') : [];
    
    portraitsRow.innerHTML = '';
    portraitsRow.className = 'portraits-row';
    
    // Добавляем класс в зависимости от количества портретов
    if (portraitKeys.length === 2) {
        portraitsRow.classList.add('two-portraits');
    } else if (portraitKeys.length === 3) {
        portraitsRow.classList.add('three-portraits');
    }
    
    portraitKeys.forEach((key, index) => {
        const portraitInfo = portraitImages[key.trim()];
        if (!portraitInfo) return;
        
        const portraitItem = document.createElement('div');
        portraitItem.className = 'portrait-item';
        
        const portraitImg = document.createElement('img');
        portraitImg.src = portraitInfo;
        portraitImg.alt = key;
        portraitImg.className = 'preview-portrait';
        
        const namePlate = document.createElement('div');
        namePlate.className = 'name-plate';
        
        const nameImg = document.createElement('img');
        nameImg.src = 'images/char_name.png';
        nameImg.alt = 'Рамка имени';
        
        const nameText = document.createElement('span');
        nameText.className = 'name-text';
        nameText.textContent = nameList[index] || key;
        
        namePlate.appendChild(nameImg);
        namePlate.appendChild(nameText);
        
        portraitItem.appendChild(portraitImg);
        portraitItem.appendChild(namePlate);
        
        portraitsRow.appendChild(portraitItem);
    });
    
    previewContainer.classList.add('active');
}

function hidePreview() {
    previewContainer.classList.remove('active');
}

// ===== ПАРАЛЛАКС =====
function initParallax() {
    cards.forEach(card => {
        const parallaxImage = card.querySelector('.parallax-image');
        if (!parallaxImage) return;
        
        card.addEventListener('mousemove', function(e) {
            if (!this.classList.contains('active')) return;
            
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const moveX = (x - centerX) / 30;
            const moveY = (y - centerY) / 30;
            
            parallaxImage.style.transform = `scale(1.1) translate(${moveX}px, ${moveY}px)`;
        });
        
        card.addEventListener('mouseleave', function() {
            if (!this.classList.contains('active')) return;
            parallaxImage.style.transform = 'scale(1.1) translate(0, 0)';
        });
    });
}

// ===== КАСТОМНЫЙ ПОЛЗУНОК =====
function initScrollbar() {
    const scrollTrack = document.getElementById('scrollTrack');
    const scrollThumb = document.getElementById('scrollThumb');
    const content = document.getElementById('frameContent');
    
    if (!scrollTrack || !scrollThumb || !content) return;
    
    let isDragging = false;
    const thumbHeight = 72; // высота slider_2.png
    
    function updateThumbPosition() {
        const scrollPercent = content.scrollTop / (content.scrollHeight - content.clientHeight);
        const maxTop = scrollTrack.clientHeight - thumbHeight;
        const thumbTop = scrollPercent * maxTop;
        scrollThumb.style.top = thumbTop + 'px';
    }
    
    content.addEventListener('scroll', updateThumbPosition);
    
    scrollThumb.addEventListener('mousedown', function(e) {
        isDragging = true;
        this.style.cursor = 'grabbing';
        e.preventDefault();
    });
    
    document.addEventListener('mousemove', function(e) {
        if (!isDragging) return;
        
        const trackRect = scrollTrack.getBoundingClientRect();
        let newTop = e.clientY - trackRect.top - thumbHeight / 2;
        newTop = Math.max(0, Math.min(newTop, trackRect.height - thumbHeight));
        
        scrollThumb.style.top = newTop + 'px';
        
        const scrollPercent = newTop / (trackRect.height - thumbHeight);
        const maxScroll = content.scrollHeight - content.clientHeight;
        content.scrollTop = scrollPercent * maxScroll;
    });
    
    document.addEventListener('mouseup', function() {
        isDragging = false;
        scrollThumb.style.cursor = 'grab';
    });
    
    scrollTrack.addEventListener('click', function(e) {
        if (e.target === scrollThumb) return;
        
        const trackRect = this.getBoundingClientRect();
        const clickY = e.clientY - trackRect.top;
        let newTop = clickY - thumbHeight / 2;
        newTop = Math.max(0, Math.min(newTop, trackRect.height - thumbHeight));
        
        scrollThumb.style.top = newTop + 'px';
        
        const scrollPercent = newTop / (trackRect.height - thumbHeight);
        const maxScroll = content.scrollHeight - content.clientHeight;
        content.scrollTop = scrollPercent * maxScroll;
    });
    
    // Начальная позиция
    setTimeout(updateThumbPosition, 100);
}

// ===== ЗАПУСК =====
document.addEventListener('DOMContentLoaded', function() {
    generateSite();
    setTimeout(initScrollbar, 500);
});


// ===== ПОИСК ПО ЭМОДЗИ И ТЕКСТУ =====
function initSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');
    
    if (!searchInput || !searchResults) {
        console.log('Элементы поиска не найдены');
        return;
    }
    
    console.log('Поиск инициализирован');
    
    // Собираем все данные для поиска
    const searchData = [];
    const emojiMap = new Map();
    
    for (let [charKey, data] of Object.entries(charactersData)) {
        // Добавляем локацию
        searchData.push({
            type: 'location',
            name: data.locationName,
            charKey: charKey,
            icon: data.parallaxImg || 'images/mark.jpg',
            emoji: data.emoji || ''
        });
        
        // Сохраняем эмодзи в карту
        if (data.emoji) {
            emojiMap.set(data.emoji, {
                charKey: charKey,
                name: data.locationName,
                icon: data.parallaxImg || 'images/mark.jpg'
            });
        }
        
        // Добавляем каждого персонажа
        if (data.parallaxNames && data.portraits) {
            data.parallaxNames.forEach((name, index) => {
                const portraitKey = data.portraits[index];
                searchData.push({
                    type: 'character',
                    name: name,
                    location: data.locationName,
                    charKey: charKey,
                    icon: portraitImages[portraitKey] || 'images/default.jpg',
                    emoji: ''
                });
            });
        }
    }
    
    console.log('Данные для поиска загружены');
    console.log('Доступные эмодзи:', Array.from(emojiMap.keys()));
    
    // Функция проверки эмодзи
    function isEmoji(char) {
        if (!char) return false;
        
        const codePoint = char.codePointAt(0);
        
        // Диапазоны эмодзи
        return (
            (codePoint >= 0x1F300 && codePoint <= 0x1F5FF) ||
            (codePoint >= 0x1F600 && codePoint <= 0x1F64F) ||
            (codePoint >= 0x1F680 && codePoint <= 0x1F6FF) ||
            (codePoint >= 0x2600 && codePoint <= 0x26FF) ||
            (codePoint >= 0x2700 && codePoint <= 0x27BF) ||
            char === '🌾' || char === '🌲' || char === '⛰️' ||
            char === '🏔️' || char === '🌳' || char === '🏕️'
        );
    }
    
    // Функция поиска
    function performSearch(query) {
        if (!query || query.length < 1) {
            searchResults.classList.remove('active');
            return;
        }
        
        console.log('Поиск по запросу:', query);
        
        // Проверяем, является ли запрос эмодзи
        const chars = Array.from(query);
        let foundEmoji = null;
        
        for (let char of chars) {
            if (isEmoji(char)) {
                foundEmoji = char;
                break;
            }
        }
        
        // Если нашли эмодзи
        if (foundEmoji) {
            console.log('Найден эмодзи в запросе:', foundEmoji);
            
            if (emojiMap.has(foundEmoji)) {
                // Эмодзи занят
                const data = emojiMap.get(foundEmoji);
                searchResults.innerHTML = `
                    <div class="search-result-item emoji-result occupied" data-char="${data.charKey}">
                        <div class="emoji-large">${foundEmoji}</div>
                        <div class="search-result-text">
                            <div class="search-result-name">${data.name}</div>
                            <div class="search-result-type" style="color: #ff6b6b;">🔴 Эмодзи занят</div>
                        </div>
                    </div>
                `;
                
                // Добавляем обработчик
                const resultItem = searchResults.querySelector('.emoji-result.occupied');
                if (resultItem) {
                    resultItem.addEventListener('click', function() {
                        const charKey = this.getAttribute('data-char');
                        const button = document.querySelector(`.character-button[data-character="${charKey}"]`);
                        if (button) {
                            button.click();
                            searchInput.value = '';
                            searchResults.classList.remove('active');
                        }
                    });
                }
                
                searchResults.classList.add('active');
                return;
            } else {
                // Эмодзи свободен
                searchResults.innerHTML = `
                    <div class="search-result-item emoji-result free">
                        <div class="emoji-large">${foundEmoji}</div>
                        <div class="search-result-text">
                            <div class="search-result-name" style="color: #6bff6b;">Эмодзи свободен!</div>
                            <div class="search-result-type" style="color: #aaa;">✅ Можно использовать</div>
                        </div>
                    </div>
                `;
                
                searchResults.classList.add('active');
                return;
            }
        }
        
        // Если не эмодзи, обычный текстовый поиск
        if (query.length < 2) {
            searchResults.classList.remove('active');
            return;
        }
        
        const lowerQuery = query.toLowerCase();
        const matches = searchData.filter(item => 
            item.name.toLowerCase().includes(lowerQuery)
        ).slice(0, 8);
        
        if (matches.length === 0) {
            searchResults.innerHTML = '<div class="search-result-item">Ничего не найдено</div>';
            searchResults.classList.add('active');
            return;
        }
        
        // Отображаем текстовые результаты
        searchResults.innerHTML = matches.map(item => {
            const icon = item.icon || 'images/default.jpg';
            
            if (item.type === 'location') {
                return `
                    <div class="search-result-item" data-char="${item.charKey}">
                        <img src="${icon}" class="search-result-icon">
                        <div class="search-result-text">
                            <div class="search-result-name">${item.emoji ? item.emoji + ' ' : ''}${item.name}</div>
                            <div class="search-result-type">Сеттинг</div>
                        </div>
                    </div>
                `;
            } else {
                return `
                    <div class="search-result-item" data-char="${item.charKey}">
                        <img src="${icon}" class="search-result-icon">
                        <div class="search-result-text">
                            <div class="search-result-name">${item.name}</div>
                            <div class="search-result-location">${item.location}</div>
                            <div class="search-result-type">Персонаж</div>
                        </div>
                    </div>
                `;
            }
        }).join('');
        
        searchResults.classList.add('active');
        
        // Добавляем обработчики на результаты
        document.querySelectorAll('.search-result-item[data-char]').forEach(item => {
            item.addEventListener('click', function() {
                const charKey = this.getAttribute('data-char');
                const button = document.querySelector(`.character-button[data-character="${charKey}"]`);
                if (button) {
                    button.click();
                    searchInput.value = '';
                    searchResults.classList.remove('active');
                }
            });
        });
    }
    
    // Удаляем старые обработчики
    const oldHandler = searchInput._searchHandler;
    if (oldHandler) {
        searchInput.removeEventListener('input', oldHandler);
    }
    
    // Создаем новый обработчик
    searchInput._searchHandler = function(e) {
        performSearch(e.target.value);
    };
    
    // Добавляем обработчик
    searchInput.addEventListener('input', searchInput._searchHandler);
    
    // Закрытие по клику вне
    document.addEventListener('click', function(e) {
        if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
            searchResults.classList.remove('active');
        }
    });
    
    // Поиск по Enter
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            const firstResult = document.querySelector('.search-result-item');
            if (firstResult) {
                firstResult.click();
            }
        }
    });
    
    console.log('Поиск готов к работе');
}

// Заменяем старую инициализацию
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM загружен');
    generateSite();
    setTimeout(() => {
        initScrollbar();
        initSearch(); // Одна функция вместо двух
        console.log('Все функции инициализированы');
    }, 500);
});


// ===== ПРЕВЬЮ =====
function showPreview(button) {
    const portraitsAttr = button.getAttribute('data-portraits');
    const namesAttr = button.getAttribute('data-names');
    
    if (!portraitsAttr) return;
    
    const portraitKeys = portraitsAttr.split(',');
    const nameList = namesAttr ? namesAttr.split(',') : [];
    
    portraitsRow.innerHTML = '';
    portraitsRow.className = 'portraits-row';
    
    // Добавляем класс в зависимости от количества
    if (portraitKeys.length === 1) {
        portraitsRow.classList.add('one-portrait');
    } else if (portraitKeys.length === 2) {
        portraitsRow.classList.add('two-portraits');
    } else if (portraitKeys.length === 3) {
        portraitsRow.classList.add('three-portraits');
    } else if (portraitKeys.length === 4) {
        portraitsRow.classList.add('four-portraits');
    } else {
        portraitsRow.classList.add('many-portraits');
    }
    
    portraitKeys.forEach((key, index) => {
        const portraitInfo = portraitImages[key.trim()];
        if (!portraitInfo) return;
        
        const portraitItem = document.createElement('div');
        portraitItem.className = 'portrait-item';
        
        const portraitImg = document.createElement('img');
        portraitImg.src = portraitInfo;
        portraitImg.alt = key;
        portraitImg.className = 'preview-portrait';
        
        const namePlate = document.createElement('div');
        namePlate.className = 'name-plate';
        
        const nameImg = document.createElement('img');
        nameImg.src = 'images/char_name.png';
        nameImg.alt = 'Рамка имени';
        
        const nameText = document.createElement('span');
        nameText.className = 'name-text';
        nameText.textContent = nameList[index] || key;
        
        namePlate.appendChild(nameImg);
        namePlate.appendChild(nameText);
        
        portraitItem.appendChild(portraitImg);
        portraitItem.appendChild(namePlate);
        
        portraitsRow.appendChild(portraitItem);
    });
    
    previewContainer.classList.add('active');
}
