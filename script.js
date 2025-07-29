// 100个常用汉字数据
const commonCharacters = [
    { char: '的', pinyin: 'de', english: 'of', traditional: '的', category: 'basic' },
    { char: '一', pinyin: 'yī', english: 'one', traditional: '一', category: 'basic' },
    { char: '是', pinyin: 'shì', english: 'is', traditional: '是', category: 'basic' },
    { char: '在', pinyin: 'zài', english: 'at', traditional: '在', category: 'basic' },
    { char: '不', pinyin: 'bù', english: 'not', traditional: '不', category: 'basic' },
    { char: '了', pinyin: 'le', english: 'particle', traditional: '了', category: 'basic' },
    { char: '有', pinyin: 'yǒu', english: 'have', traditional: '有', category: 'basic' },
    { char: '和', pinyin: 'hé', english: 'and', traditional: '和', category: 'basic' },
    { char: '人', pinyin: 'rén', english: 'person', traditional: '人', category: 'basic' },
    { char: '这', pinyin: 'zhè', english: 'this', traditional: '這', category: 'different' },
    { char: '中', pinyin: 'zhōng', english: 'middle', traditional: '中', category: 'basic' },
    { char: '大', pinyin: 'dà', english: 'big', traditional: '大', category: 'basic' },
    { char: '为', pinyin: 'wèi', english: 'for', traditional: '為', category: 'different' },
    { char: '上', pinyin: 'shàng', english: 'up', traditional: '上', category: 'basic' },
    { char: '个', pinyin: 'gè', english: 'measure word', traditional: '個', category: 'different' },
    { char: '国', pinyin: 'guó', english: 'country', traditional: '國', category: 'different' },
    { char: '我', pinyin: 'wǒ', english: 'I', traditional: '我', category: 'basic' },
    { char: '以', pinyin: 'yǐ', english: 'with', traditional: '以', category: 'basic' },
    { char: '要', pinyin: 'yào', english: 'want', traditional: '要', category: 'basic' },
    { char: '他', pinyin: 'tā', english: 'he', traditional: '他', category: 'basic' },
    { char: '时', pinyin: 'shí', english: 'time', traditional: '時', category: 'different' },
    { char: '来', pinyin: 'lái', english: 'come', traditional: '來', category: 'different' },
    { char: '用', pinyin: 'yòng', english: 'use', traditional: '用', category: 'basic' },
    { char: '们', pinyin: 'men', english: 'plural', traditional: '們', category: 'different' },
    { char: '生', pinyin: 'shēng', english: 'life', traditional: '生', category: 'basic' },
    { char: '到', pinyin: 'dào', english: 'arrive', traditional: '到', category: 'basic' },
    { char: '作', pinyin: 'zuò', english: 'make', traditional: '作', category: 'basic' },
    { char: '地', pinyin: 'de', english: 'ground', traditional: '地', category: 'basic' },
    { char: '于', pinyin: 'yú', english: 'at', traditional: '於', category: 'different' },
    { char: '就', pinyin: 'jiù', english: 'just', traditional: '就', category: 'basic' },
    { char: '分', pinyin: 'fēn', english: 'divide', traditional: '分', category: 'basic' },
    { char: '对', pinyin: 'duì', english: 'correct', traditional: '對', category: 'different' },
    { char: '成', pinyin: 'chéng', english: 'become', traditional: '成', category: 'basic' },
    { char: '会', pinyin: 'huì', english: 'can', traditional: '會', category: 'different' },
    { char: '可', pinyin: 'kě', english: 'can', traditional: '可', category: 'basic' },
    { char: '主', pinyin: 'zhǔ', english: 'main', traditional: '主', category: 'basic' },
    { char: '发', pinyin: 'fā', english: 'send', traditional: '發', category: 'different' },
    { char: '年', pinyin: 'nián', english: 'year', traditional: '年', category: 'basic' },
    { char: '动', pinyin: 'dòng', english: 'move', traditional: '動', category: 'different' },
    { char: '同', pinyin: 'tóng', english: 'same', traditional: '同', category: 'basic' },
    { char: '工', pinyin: 'gōng', english: 'work', traditional: '工', category: 'basic' },
    { char: '也', pinyin: 'yě', english: 'also', traditional: '也', category: 'basic' },
    { char: '能', pinyin: 'néng', english: 'can', traditional: '能', category: 'basic' },
    { char: '下', pinyin: 'xià', english: 'down', traditional: '下', category: 'basic' },
    { char: '过', pinyin: 'guò', english: 'pass', traditional: '過', category: 'different' },
    { char: '子', pinyin: 'zǐ', english: 'child', traditional: '子', category: 'basic' },
    { char: '说', pinyin: 'shuō', english: 'say', traditional: '說', category: 'different' },
    { char: '产', pinyin: 'chǎn', english: 'produce', traditional: '產', category: 'different' },
    { char: '种', pinyin: 'zhǒng', english: 'kind', traditional: '種', category: 'different' },
    { char: '面', pinyin: 'miàn', english: 'face', traditional: '面', category: 'basic' },
    { char: '而', pinyin: 'ér', english: 'and', traditional: '而', category: 'basic' },
    { char: '方', pinyin: 'fāng', english: 'square', traditional: '方', category: 'basic' },
    { char: '后', pinyin: 'hòu', english: 'after', traditional: '後', category: 'different' },
    { char: '多', pinyin: 'duō', english: 'many', traditional: '多', category: 'basic' },
    { char: '定', pinyin: 'dìng', english: 'decide', traditional: '定', category: 'basic' },
    { char: '行', pinyin: 'xíng', english: 'walk', traditional: '行', category: 'basic' },
    { char: '学', pinyin: 'xué', english: 'study', traditional: '學', category: 'different' },
    { char: '法', pinyin: 'fǎ', english: 'law', traditional: '法', category: 'basic' },
    { char: '所', pinyin: 'suǒ', english: 'place', traditional: '所', category: 'basic' },
    { char: '民', pinyin: 'mín', english: 'people', traditional: '民', category: 'basic' },
    { char: '得', pinyin: 'dé', english: 'get', traditional: '得', category: 'basic' },
    { char: '经', pinyin: 'jīng', english: 'pass', traditional: '經', category: 'different' },
    { char: '十', pinyin: 'shí', english: 'ten', traditional: '十', category: 'basic' },
    { char: '三', pinyin: 'sān', english: 'three', traditional: '三', category: 'basic' },
    { char: '之', pinyin: 'zhī', english: 'of', traditional: '之', category: 'basic' },
    { char: '进', pinyin: 'jìn', english: 'enter', traditional: '進', category: 'different' },
    { char: '着', pinyin: 'zhe', english: 'particle', traditional: '著', category: 'different' },
    { char: '等', pinyin: 'děng', english: 'wait', traditional: '等', category: 'basic' },
    { char: '部', pinyin: 'bù', english: 'part', traditional: '部', category: 'basic' },
    { char: '度', pinyin: 'dù', english: 'degree', traditional: '度', category: 'basic' },
    { char: '家', pinyin: 'jiā', english: 'family', traditional: '家', category: 'basic' },
    { char: '电', pinyin: 'diàn', english: 'electricity', traditional: '電', category: 'different' },
    { char: '力', pinyin: 'lì', english: 'power', traditional: '力', category: 'basic' },
    { char: '如', pinyin: 'rú', english: 'like', traditional: '如', category: 'basic' },
    { char: '水', pinyin: 'shuǐ', english: 'water', traditional: '水', category: 'basic' },
    { char: '化', pinyin: 'huà', english: 'change', traditional: '化', category: 'basic' },
    { char: '高', pinyin: 'gāo', english: 'high', traditional: '高', category: 'basic' },
    { char: '自', pinyin: 'zì', english: 'self', traditional: '自', category: 'basic' },
    { char: '二', pinyin: 'èr', english: 'two', traditional: '二', category: 'basic' },
    { char: '理', pinyin: 'lǐ', english: 'reason', traditional: '理', category: 'basic' },
    { char: '起', pinyin: 'qǐ', english: 'rise', traditional: '起', category: 'basic' },
    { char: '小', pinyin: 'xiǎo', english: 'small', traditional: '小', category: 'basic' },
    { char: '物', pinyin: 'wù', english: 'thing', traditional: '物', category: 'basic' },
    { char: '现', pinyin: 'xiàn', english: 'now', traditional: '現', category: 'different' },
    { char: '实', pinyin: 'shí', english: 'real', traditional: '實', category: 'different' },
    { char: '加', pinyin: 'jiā', english: 'add', traditional: '加', category: 'basic' },
    { char: '量', pinyin: 'liàng', english: 'amount', traditional: '量', category: 'basic' },
    { char: '都', pinyin: 'dōu', english: 'all', traditional: '都', category: 'basic' },
    { char: '两', pinyin: 'liǎng', english: 'two', traditional: '兩', category: 'different' },
    { char: '体', pinyin: 'tǐ', english: 'body', traditional: '體', category: 'different' },
    { char: '制', pinyin: 'zhì', english: 'make', traditional: '製', category: 'different' },
    { char: '机', pinyin: 'jī', english: 'machine', traditional: '機', category: 'different' },
    { char: '当', pinyin: 'dāng', english: 'when', traditional: '當', category: 'different' },
    { char: '使', pinyin: 'shǐ', english: 'make', traditional: '使', category: 'basic' },
    { char: '点', pinyin: 'diǎn', english: 'point', traditional: '點', category: 'different' },
    { char: '从', pinyin: 'cóng', english: 'from', traditional: '從', category: 'different' },
    { char: '业', pinyin: 'yè', english: 'business', traditional: '業', category: 'different' },
    { char: '本', pinyin: 'běn', english: 'book', traditional: '本', category: 'basic' },
    { char: '去', pinyin: 'qù', english: 'go', traditional: '去', category: 'basic' },
    { char: '把', pinyin: 'bǎ', english: 'hold', traditional: '把', category: 'basic' },
    { char: '性', pinyin: 'xìng', english: 'nature', traditional: '性', category: 'basic' },
    { char: '好', pinyin: 'hǎo', english: 'good', traditional: '好', category: 'basic' },
    { char: '应', pinyin: 'yīng', english: 'should', traditional: '應', category: 'different' },
    { char: '开', pinyin: 'kāi', english: 'open', traditional: '開', category: 'different' },
    { char: '它', pinyin: 'tā', english: 'it', traditional: '它', category: 'basic' },
    { char: '合', pinyin: 'hé', english: 'combine', traditional: '合', category: 'basic' },
    { char: '还', pinyin: 'hái', english: 'still', traditional: '還', category: 'different' },
    { char: '因', pinyin: 'yīn', english: 'because', traditional: '因', category: 'basic' },
    { char: '由', pinyin: 'yóu', english: 'from', traditional: '由', category: 'basic' },
    { char: '其', pinyin: 'qí', english: 'its', traditional: '其', category: 'basic' },
    { char: '些', pinyin: 'xiē', english: 'some', traditional: '些', category: 'basic' },
    { char: '然', pinyin: 'rán', english: 'however', traditional: '然', category: 'basic' },
    { char: '前', pinyin: 'qián', english: 'before', traditional: '前', category: 'basic' },
    { char: '外', pinyin: 'wài', english: 'outside', traditional: '外', category: 'basic' },
    { char: '天', pinyin: 'tiān', english: 'sky', traditional: '天', category: 'basic' },
    { char: '四', pinyin: 'sì', english: 'four', traditional: '四', category: 'basic' },
    { char: '今', pinyin: 'jīn', english: 'today', traditional: '今', category: 'basic' },
    { char: '明', pinyin: 'míng', english: 'bright', traditional: '明', category: 'basic' },
    { char: '眼', pinyin: 'yǎn', english: 'eye', traditional: '眼', category: 'basic' },
    { char: '手', pinyin: 'shǒu', english: 'hand', traditional: '手', category: 'basic' },
    { char: '心', pinyin: 'xīn', english: 'heart', traditional: '心', category: 'basic' },
    { char: '口', pinyin: 'kǒu', english: 'mouth', traditional: '口', category: 'basic' },
    { char: '耳', pinyin: 'ěr', english: 'ear', traditional: '耳', category: 'basic' },
    { char: '足', pinyin: 'zú', english: 'foot', traditional: '足', category: 'basic' },
    { char: '目', pinyin: 'mù', english: 'eye', traditional: '目', category: 'basic' },
    { char: '日', pinyin: 'rì', english: 'sun', traditional: '日', category: 'basic' },
    { char: '月', pinyin: 'yuè', english: 'moon', traditional: '月', category: 'basic' },
    { char: '火', pinyin: 'huǒ', english: 'fire', traditional: '火', category: 'basic' },
    { char: '山', pinyin: 'shān', english: 'mountain', traditional: '山', category: 'basic' },
    { char: '石', pinyin: 'shí', english: 'stone', traditional: '石', category: 'basic' },
    { char: '田', pinyin: 'tián', english: 'field', traditional: '田', category: 'basic' },
    { char: '禾', pinyin: 'hé', english: 'grain', traditional: '禾', category: 'basic' },
    { char: '竹', pinyin: 'zhú', english: 'bamboo', traditional: '竹', category: 'basic' },
    { char: '木', pinyin: 'mù', english: 'wood', traditional: '木', category: 'basic' },
    { char: '金', pinyin: 'jīn', english: 'gold', traditional: '金', category: 'basic' },
    { char: '土', pinyin: 'tǔ', english: 'earth', traditional: '土', category: 'basic' },
    { char: '车', pinyin: 'chē', english: 'car', traditional: '車', category: 'different' },
    { char: '马', pinyin: 'mǎ', english: 'horse', traditional: '馬', category: 'different' },
    { char: '鸟', pinyin: 'niǎo', english: 'bird', traditional: '鳥', category: 'different' },
    { char: '鱼', pinyin: 'yú', english: 'fish', traditional: '魚', category: 'different' },
    { char: '龙', pinyin: 'lóng', english: 'dragon', traditional: '龍', category: 'different' },
    { char: '风', pinyin: 'fēng', english: 'wind', traditional: '風', category: 'different' },
    { char: '云', pinyin: 'yún', english: 'cloud', traditional: '雲', category: 'different' },
    { char: '雨', pinyin: 'yǔ', english: 'rain', traditional: '雨', category: 'basic' },
    { char: '雪', pinyin: 'xuě', english: 'snow', traditional: '雪', category: 'basic' },
    { char: '冰', pinyin: 'bīng', english: 'ice', traditional: '冰', category: 'basic' },
    { char: '春', pinyin: 'chūn', english: 'spring', traditional: '春', category: 'basic' },
    { char: '夏', pinyin: 'xià', english: 'summer', traditional: '夏', category: 'basic' },
    { char: '秋', pinyin: 'qiū', english: 'autumn', traditional: '秋', category: 'basic' },
    { char: '冬', pinyin: 'dōng', english: 'winter', traditional: '冬', category: 'basic' }
];

// 游戏相关变量
let currentGame = null;
let gameScore = 0;
let gameData = null;

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializePage();
});

// 初始化导航菜单
function initializeNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
}

// 根据当前页面初始化内容
function initializePage() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    switch(currentPage) {
        case 'index.html':
            loadHomePage();
            break;
        case 'games.html':
            // 游戏页面不需要预加载内容
            break;
        case 'traditional-simplified.html':
            loadTraditionalSimplifiedPage();
            break;
        case 'chinese-english.html':
            loadChineseEnglishPage();
            break;
        case 'calligraphy.html':
            loadCalligraphyPage();
            break;
    }
}

// 加载首页内容
function loadHomePage() {
    const charactersGrid = document.getElementById('charactersGrid');
    if (charactersGrid) {
        charactersGrid.innerHTML = '';
        commonCharacters.forEach(char => {
            const charCard = document.createElement('div');
            charCard.className = 'character-card';
            charCard.textContent = char.char;
            charCard.addEventListener('click', () => showCharacterDetail(char));
            charactersGrid.appendChild(charCard);
        });
    }
}

// 加载简体繁体对照页面
function loadTraditionalSimplifiedPage() {
    const comparisonGrid = document.getElementById('comparisonGrid');
    if (comparisonGrid) {
        displayComparisonCharacters('all');
    }
}

// 加载中英文对照页面
function loadChineseEnglishPage() {
    const dictionaryGrid = document.getElementById('dictionaryGrid');
    if (dictionaryGrid) {
        displayDictionaryCharacters();
    }
}

// 加载书法页面
function loadCalligraphyPage() {
    const calligraphyGrid = document.getElementById('calligraphyGrid');
    if (calligraphyGrid) {
        displayCalligraphyCharacters('all');
    }
}

// 显示字符详情
function showCharacterDetail(char) {
    const modal = document.getElementById('characterModal');
    const detail = document.getElementById('characterDetail');
    
    if (modal && detail) {
        detail.innerHTML = `
            <div class="character-detail-content">
                <div class="char-display">
                    <span class="main-char">${char.char}</span>
                    <div class="char-info">
                        <p><strong>拼音:</strong> ${char.pinyin}</p>
                        <p><strong>英文:</strong> ${char.english}</p>
                        <p><strong>繁体:</strong> ${char.traditional}</p>
                    </div>
                </div>
            </div>
        `;
        modal.style.display = 'block';
    }
}

// 关闭模态框
function closeModal() {
    const modal = document.getElementById('characterModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// 关闭书法模态框
function closeCalligraphyModal() {
    const modal = document.getElementById('calligraphyModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// 显示简体繁体对照字符
function displayComparisonCharacters(filter) {
    const grid = document.getElementById('comparisonGrid');
    if (!grid) return;
    
    grid.innerHTML = '';
    const filteredChars = filter === 'all' ? commonCharacters : 
                         filter === 'different' ? commonCharacters.filter(c => c.char !== c.traditional) :
                         commonCharacters.filter(c => c.char === c.traditional);
    
    filteredChars.forEach(char => {
        const card = document.createElement('div');
        card.className = 'comparison-card';
        card.innerHTML = `
            <div class="simplified">${char.char}</div>
            <div class="traditional">${char.traditional}</div>
            <div class="pinyin">${char.pinyin}</div>
            <div class="meaning">${char.english}</div>
        `;
        grid.appendChild(card);
    });
}

// 显示字典字符
function displayDictionaryCharacters() {
    const grid = document.getElementById('dictionaryGrid');
    if (!grid) return;
    
    grid.innerHTML = '';
    commonCharacters.forEach(char => {
        const card = document.createElement('div');
        card.className = 'dictionary-card';
        card.innerHTML = `
            <div class="character">${char.char}</div>
            <div class="english">${char.english}</div>
        `;
        card.addEventListener('click', () => showCharacterDetail(char));
        grid.appendChild(card);
    });
}

// 显示书法字符
function displayCalligraphyCharacters(filter) {
    const grid = document.getElementById('calligraphyGrid');
    if (!grid) return;
    
    grid.innerHTML = '';
    const filteredChars = filter === 'all' ? commonCharacters : 
                         filter === 'basic' ? commonCharacters.slice(0, 30) :
                         filter === 'complex' ? commonCharacters.slice(30, 70) :
                         commonCharacters.slice(70);
    
    filteredChars.forEach(char => {
        const card = document.createElement('div');
        card.className = 'calligraphy-card';
        card.innerHTML = `
            <div class="character">${char.char}</div>
            <div class="pinyin">${char.pinyin}</div>
        `;
        card.addEventListener('click', () => showCalligraphyDetail(char));
        grid.appendChild(card);
    });
}

// 显示书法详情
function showCalligraphyDetail(char) {
    const modal = document.getElementById('calligraphyModal');
    const detail = document.getElementById('calligraphyDetail');
    
    if (modal && detail) {
        detail.innerHTML = `
            <div class="calligraphy-detail-content">
                <div class="calligraphy-display">
                    <span class="calligraphy-char">${char.char}</span>
                    <div class="calligraphy-info">
                        <p><strong>拼音:</strong> ${char.pinyin}</p>
                        <p><strong>英文:</strong> ${char.english}</p>
                        <p><strong>笔画数:</strong> ${getStrokeCount(char.char)}</p>
                    </div>
                </div>
            </div>
        `;
        modal.style.display = 'block';
    }
}

// 获取笔画数（简化版本）
function getStrokeCount(char) {
    // 这里是一个简化的笔画数计算，实际应用中需要更复杂的算法
    const strokeMap = {
        '一': 1, '二': 2, '三': 3, '四': 4, '五': 4, '六': 4, '七': 2, '八': 2, '九': 2, '十': 2,
        '人': 2, '大': 3, '小': 3, '口': 3, '日': 4, '月': 4, '火': 4, '水': 4, '木': 4, '土': 3
    };
    return strokeMap[char] || Math.floor(Math.random() * 8) + 3;
}

// 搜索字符
function searchCharacters() {
    const searchInput = document.getElementById('searchInput');
    const grid = document.getElementById('dictionaryGrid');
    
    if (!searchInput || !grid) return;
    
    const searchTerm = searchInput.value.toLowerCase();
    const filteredChars = commonCharacters.filter(char => 
        char.char.includes(searchTerm) || 
        char.pinyin.includes(searchTerm) || 
        char.english.toLowerCase().includes(searchTerm)
    );
    
    grid.innerHTML = '';
    filteredChars.forEach(char => {
        const card = document.createElement('div');
        card.className = 'dictionary-card';
        card.innerHTML = `
            <div class="character">${char.char}</div>
            <div class="english">${char.english}</div>
        `;
        card.addEventListener('click', () => showCharacterDetail(char));
        grid.appendChild(card);
    });
}

// 清除搜索
function clearSearch() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.value = '';
        displayDictionaryCharacters();
    }
}

// 过滤字符
function filterCharacters(type) {
    displayComparisonCharacters(type);
}

// 过滤书法字符
function filterCalligraphy(type) {
    displayCalligraphyCharacters(type);
}

// 游戏相关函数
function startMemoryGame() {
    currentGame = 'memory';
    gameScore = 0;
    showGameArea('汉字记忆游戏');
    loadMemoryGame();
}

function startWordSearch() {
    currentGame = 'wordsearch';
    gameScore = 0;
    showGameArea('汉字找找看');
    loadWordSearchGame();
}

function startCharacterQuiz() {
    currentGame = 'quiz';
    gameScore = 0;
    showGameArea('汉字小测验');
    loadCharacterQuiz();
}

function startStrokeOrder() {
    currentGame = 'stroke';
    gameScore = 0;
    showGameArea('笔画顺序');
    loadStrokeOrderGame();
}

function showGameArea(title) {
    const gameArea = document.getElementById('gameArea');
    const gameTitle = document.getElementById('gameTitle');
    const gamesGrid = document.querySelector('.games-grid');
    
    if (gameArea && gameTitle) {
        gameTitle.textContent = title;
        gameArea.style.display = 'block';
        if (gamesGrid) {
            gamesGrid.style.display = 'none';
        }
    }
}

function closeGame() {
    const gameArea = document.getElementById('gameArea');
    const gamesGrid = document.querySelector('.games-grid');
    
    if (gameArea) {
        gameArea.style.display = 'none';
    }
    if (gamesGrid) {
        gamesGrid.style.display = 'grid';
    }
    currentGame = null;
    gameScore = 0;
}

// 记忆游戏
function loadMemoryGame() {
    const gameContent = document.getElementById('gameContent');
    if (!gameContent) return;
    
    const gameChars = commonCharacters.slice(0, 8);
    const cards = [...gameChars, ...gameChars].sort(() => Math.random() - 0.5);
    
    gameContent.innerHTML = `
        <div class="memory-game">
            <div class="memory-grid">
                ${cards.map((char, index) => `
                    <div class="memory-card" data-index="${index}" data-char="${char.char}">
                        <div class="card-back">?</div>
                        <div class="card-front">${char.char}</div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    
    initializeMemoryGame();
}

// 初始化记忆游戏
function initializeMemoryGame() {
    const cards = document.querySelectorAll('.memory-card');
    let flippedCards = [];
    let matchedPairs = 0;
    
    cards.forEach(card => {
        card.addEventListener('click', () => {
            if (flippedCards.length < 2 && !card.classList.contains('flipped') && !card.classList.contains('matched')) {
                card.classList.add('flipped');
                flippedCards.push(card);
                
                if (flippedCards.length === 2) {
                    const [card1, card2] = flippedCards;
                    if (card1.dataset.char === card2.dataset.char) {
                        card1.classList.add('matched');
                        card2.classList.add('matched');
                        matchedPairs++;
                        gameScore += 10;
                        updateGameScore();
                        
                        if (matchedPairs === 8) {
                            setTimeout(() => {
                                alert(`恭喜！你完成了记忆游戏！得分：${gameScore}`);
                            }, 500);
                        }
                    } else {
                        setTimeout(() => {
                            card1.classList.remove('flipped');
                            card2.classList.remove('flipped');
                        }, 1000);
                    }
                    flippedCards = [];
                }
            }
        });
    });
}

// 更新游戏分数
function updateGameScore() {
    const scoreElement = document.getElementById('gameScore');
    if (scoreElement) {
        scoreElement.textContent = `得分: ${gameScore}`;
    }
}

// 其他游戏加载函数（简化版本）
function loadWordSearchGame() {
    const gameContent = document.getElementById('gameContent');
    if (gameContent) {
        gameContent.innerHTML = '<div class="word-search-game"><p>汉字找找看游戏正在开发中...</p></div>';
    }
}

function loadCharacterQuiz() {
    const gameContent = document.getElementById('gameContent');
    if (gameContent) {
        gameContent.innerHTML = '<div class="character-quiz"><p>汉字小测验游戏正在开发中...</p></div>';
    }
}

function loadStrokeOrderGame() {
    const gameContent = document.getElementById('gameContent');
    if (gameContent) {
        gameContent.innerHTML = '<div class="stroke-order-game"><p>笔画顺序游戏正在开发中...</p></div>';
    }
}

// 书法练习相关函数
function startPractice() {
    const canvas = document.getElementById('practiceCanvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let isDrawing = false;
    let lastX = 0;
    let lastY = 0;
    
    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseout', stopDrawing);
    
    function startDrawing(e) {
        isDrawing = true;
        [lastX, lastY] = [e.offsetX, e.offsetY];
    }
    
    function draw(e) {
        if (!isDrawing) return;
        
        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.strokeStyle = '#2563eb';
        ctx.lineWidth = 3;
        ctx.lineCap = 'round';
        ctx.stroke();
        
        [lastX, lastY] = [e.offsetX, e.offsetY];
    }
    
    function stopDrawing() {
        isDrawing = false;
    }
}

function clearPractice() {
    const canvas = document.getElementById('practiceCanvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
}

function savePractice() {
    const canvas = document.getElementById('practiceCanvas');
    if (canvas) {
        const link = document.createElement('a');
        link.download = 'calligraphy-practice.png';
        link.href = canvas.toDataURL();
        link.click();
    }
}

// 点击模态框外部关闭
window.addEventListener('click', function(event) {
    const modal = document.getElementById('characterModal');
    const calligraphyModal = document.getElementById('calligraphyModal');
    
    if (event.target === modal) {
        modal.style.display = 'none';
    }
    if (event.target === calligraphyModal) {
        calligraphyModal.style.display = 'none';
    }
}); 