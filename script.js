// 100 Common Chinese Characters Data
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
    initializeEventListeners();
});

// 初始化事件监听器
function initializeEventListeners() {
    // 搜索框回车键支持
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchCharacters();
            }
        });
    }

    // 键盘ESC键关闭模态框
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
            closeCalligraphyModal();
        }
    });

    
}

// 初始化导航菜单
function initializeNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // 点击导航链接后关闭移动端菜单
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
}

// 根据当前页面初始化内容
function initializePage() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    // 添加加载状态
    showLoadingState();
    
    setTimeout(() => {
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
        hideLoadingState();
    }, 100);
}

// 显示加载状态
function showLoadingState() {
    const grids = document.querySelectorAll('.characters-grid, .comparison-grid, .dictionary-grid, .calligraphy-grid');
    grids.forEach(grid => {
        if (grid && grid.children.length === 0) {
            grid.innerHTML = '<div class="loading">加载中...</div>';
        }
    });
}

// 隐藏加载状态
function hideLoadingState() {
    const loadingElements = document.querySelectorAll('.loading');
    loadingElements.forEach(element => {
        element.remove();
    });
}

// 加载首页内容
function loadHomePage() {
    const charactersGrid = document.getElementById('charactersGrid');
    if (charactersGrid) {
        charactersGrid.innerHTML = '';
        
        // 使用文档片段优化性能
        const fragment = document.createDocumentFragment();
        
        commonCharacters.forEach(char => {
            const charCard = document.createElement('div');
            charCard.className = 'character-card';
            charCard.innerHTML = `
                <div class="char-main">${char.char}</div>
                <div class="char-info-hover">
                    <div class="char-pinyin">${char.pinyin}</div>
                    <div class="char-english">${char.english}</div>
                </div>
            `;
            charCard.addEventListener('click', () => showCharacterDetail(char));
            fragment.appendChild(charCard);
        });
        
        charactersGrid.appendChild(fragment);
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
        // Get detailed character comments
        const charComment = getCharacterComment(char.char);
        
        detail.innerHTML = `
            <div class="character-detail-content">
                <div class="char-display">
                    <span class="main-char">${char.char}</span>
                    <div class="char-pinyin-large">${char.pinyin}</div>
                </div>
                <div class="char-info">
                    <div class="info-section">
                        <h4>基本信息</h4>
                        <p><strong>简体字:</strong> ${char.char}</p>
                        <p><strong>繁体字:</strong> ${char.traditional}</p>
                        <p><strong>拼音:</strong> ${char.pinyin}</p>
                        <p><strong>英文:</strong> ${char.english}</p>
                        <p><strong>笔画数:</strong> ${getStrokeCount(char.char)}</p>
                    </div>
                                                <div class="info-section">
                                <h4>Character Notes</h4>
                                <p class="char-comment">${charComment}</p>
                            </div>
                    <div class="info-section">
                        <h4>常见用法</h4>
                        <div class="usage-examples">
                            ${getUsageExamples(char.char).split('<br>').map(example => 
                                `<div>${example}</div>`
                            ).join('')}
                        </div>
                    </div>
                </div>
            </div>
        `;
        modal.style.display = 'block';
        
        // 添加动画效果
        setTimeout(() => {
            modal.style.opacity = '1';
        }, 10);
    }
}

// 关闭模态框
function closeModal() {
    const modal = document.getElementById('characterModal');
    if (modal) {
        modal.style.opacity = '0';
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300);
    }
}

// 关闭书法模态框
function closeCalligraphyModal() {
    const modal = document.getElementById('calligraphyModal');
    if (modal) {
        modal.style.opacity = '0';
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300);
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
        '人': 2, '大': 3, '小': 3, '口': 3, '日': 4, '月': 4, '火': 4, '水': 4, '木': 4, '土': 3,
        '的': 8, '是': 9, '在': 6, '不': 4, '了': 2, '有': 6, '和': 8, '这': 7, '中': 4, '为': 4,
        '上': 3, '个': 3, '国': 8, '我': 7, '以': 5, '要': 9, '他': 6, '时': 7, '来': 7, '用': 5,
        '们': 5, '生': 5, '到': 8, '作': 7, '地': 6, '于': 3, '就': 12, '分': 4, '对': 5, '成': 6,
        '会': 6, '可': 5, '主': 5, '发': 5, '年': 6, '动': 6, '同': 6, '工': 3, '也': 3, '能': 10,
        '下': 3, '过': 6, '子': 3, '说': 9, '产': 6, '种': 9, '面': 9, '而': 6, '方': 4, '后': 6,
        '多': 6, '定': 8, '行': 6, '学': 8, '法': 8, '所': 8, '民': 5, '得': 11, '经': 8, '之': 3,
        '进': 7, '着': 11, '等': 12, '部': 10, '度': 9, '家': 10, '电': 5, '力': 2, '如': 6, '水': 4,
        '化': 4, '高': 10, '自': 6, '理': 11, '起': 10, '物': 8, '现': 8, '实': 8, '加': 5, '量': 12,
        '都': 10, '两': 7, '体': 7, '制': 8, '机': 6, '当': 6, '使': 8, '点': 9, '从': 4, '业': 5,
        '本': 5, '去': 5, '把': 7, '性': 8, '好': 6, '应': 7, '开': 4, '它': 5, '合': 6, '还': 7,
        '因': 6, '由': 5, '其': 8, '些': 8, '然': 12, '前': 9, '外': 5, '天': 4, '四': 5, '今': 4,
        '明': 8, '眼': 11, '手': 4, '心': 4, '口': 3, '耳': 6, '足': 7, '目': 5, '火': 4, '山': 3,
        '石': 5, '田': 5, '禾': 5, '竹': 6, '木': 4, '金': 8, '土': 3, '车': 4, '马': 3, '鸟': 11,
        '鱼': 8, '龙': 16, '风': 9, '云': 4, '雨': 8, '雪': 11, '冰': 6, '春': 9, '夏': 10, '秋': 9, '冬': 5
    };
    return strokeMap[char] || Math.floor(Math.random() * 8) + 3;
}

// Get character comments
function getCharacterComment(char) {
    const commentMap = {
        '的': '表示所属关系的助词，相当于英语中的"of"或"\'s"',
        '一': '数字一，表示数量或顺序的第一位',
        '是': '表示判断或存在的动词，相当于英语中的"is"或"am"',
        '在': '表示位置或状态的介词，相当于英语中的"at"或"in"',
        '不': '表示否定的副词，相当于英语中的"not"',
        '了': '表示动作完成的助词，常用于句末',
        '有': '表示存在或拥有的动词，相当于英语中的"have"',
        '和': '表示连接的连词，相当于英语中的"and"',
        '人': '表示人类的名词，指代所有的人',
        '这': '表示近指的指示代词，相当于英语中的"this"',
        '中': '表示中间或中心的名词，也指中国',
        '大': '表示大小的形容词，相当于英语中的"big"',
        '为': '表示目的或原因的介词，相当于英语中的"for"',
        '上': '表示位置或方向的方位词，相当于英语中的"up"',
        '个': '表示数量的量词，用于计数',
        '国': '表示国家的名词，指代一个国家',
        '我': '表示第一人称的代词，相当于英语中的"I"',
        '以': '表示方式或手段的介词，相当于英语中的"with"',
        '要': '表示需要或要求的动词，相当于英语中的"want"',
        '他': '表示第三人称的代词，相当于英语中的"he"',
        '时': '表示时间的名词，相当于英语中的"time"',
        '来': '表示到来的动词，相当于英语中的"come"',
        '用': '表示使用的动词，相当于英语中的"use"',
        '们': '表示复数的后缀，相当于英语中的复数形式',
        '生': '表示生命或产生的动词，相当于英语中的"life"',
        '到': '表示到达的动词，相当于英语中的"arrive"',
        '作': '表示制作或创作的动词，相当于英语中的"make"',
        '地': '表示地面的名词，相当于英语中的"ground"',
        '于': '表示时间或地点的介词，相当于英语中的"at"',
        '就': '表示立即或就是的副词，相当于英语中的"just"',
        '分': '表示分开或分数的动词，相当于英语中的"divide"',
        '对': '表示正确或相对的形容词，相当于英语中的"correct"',
        '成': '表示成为或完成的动词，相当于英语中的"become"',
        '会': '表示能够或会议的名词，相当于英语中的"can"',
        '可': '表示可能的助动词，相当于英语中的"can"',
        '主': '表示主要的形容词，相当于英语中的"main"',
        '发': '表示发送或发展的动词，相当于英语中的"send"',
        '年': '表示年份的名词，相当于英语中的"year"',
        '动': '表示移动的动词，相当于英语中的"move"',
        '同': '表示相同的形容词，相当于英语中的"same"',
        '工': '表示工作的名词，相当于英语中的"work"',
        '也': '表示也的副词，相当于英语中的"also"',
        '能': '表示能力的助动词，相当于英语中的"can"',
        '下': '表示下面的方位词，相当于英语中的"down"',
        '过': '表示经过的动词，相当于英语中的"pass"',
        '子': '表示孩子的名词，相当于英语中的"child"',
        '说': '表示说话的动词，相当于英语中的"say"',
        '产': '表示生产的动词，相当于英语中的"produce"',
        '种': '表示种类的名词，相当于英语中的"kind"',
        '面': '表示脸面的名词，相当于英语中的"face"',
        '而': '表示转折的连词，相当于英语中的"and"',
        '方': '表示方向的方位词，相当于英语中的"square"',
        '后': '表示后面的方位词，相当于英语中的"after"',
        '多': '表示数量的形容词，相当于英语中的"many"',
        '定': '表示决定的动词，相当于英语中的"decide"',
        '行': '表示行走的动词，相当于英语中的"walk"',
        '学': '表示学习的动词，相当于英语中的"study"',
        '法': '表示法律的名词，相当于英语中的"law"',
        '所': '表示处所的名词，相当于英语中的"place"',
        '民': '表示人民的名词，相当于英语中的"people"',
        '得': '表示得到的动词，相当于英语中的"get"',
        '经': '表示经过的动词，相当于英语中的"pass"',
        '十': '数字十，表示数量',
        '三': '数字三，表示数量',
        '之': '表示所属关系的助词，相当于英语中的"of"',
        '进': '表示进入的动词，相当于英语中的"enter"',
        '着': '表示状态的助词，常用于动词后',
        '等': '表示等待的动词，相当于英语中的"wait"',
        '部': '表示部分的名词，相当于英语中的"part"',
        '度': '表示程度的名词，相当于英语中的"degree"',
        '家': '表示家庭的名词，相当于英语中的"family"',
        '电': '表示电力的名词，相当于英语中的"electricity"',
        '力': '表示力量的名词，相当于英语中的"power"',
        '如': '表示如同的连词，相当于英语中的"like"',
        '水': '表示水的名词，相当于英语中的"water"',
        '化': '表示变化的动词，相当于英语中的"change"',
        '高': '表示高度的形容词，相当于英语中的"high"',
        '自': '表示自己的代词，相当于英语中的"self"',
        '二': '数字二，表示数量',
        '理': '表示道理的名词，相当于英语中的"reason"',
        '起': '表示起来的动词，相当于英语中的"rise"',
        '小': '表示大小的形容词，相当于英语中的"small"',
        '物': '表示物体的名词，相当于英语中的"thing"',
        '现': '表示现在的副词，相当于英语中的"now"',
        '实': '表示真实的形容词，相当于英语中的"real"',
        '加': '表示增加的动词，相当于英语中的"add"',
        '量': '表示数量的名词，相当于英语中的"amount"',
        '都': '表示全部的副词，相当于英语中的"all"',
        '两': '表示两个的数量词，相当于英语中的"two"',
        '体': '表示身体的名词，相当于英语中的"body"',
        '制': '表示制作的动词，相当于英语中的"make"',
        '机': '表示机器的名词，相当于英语中的"machine"',
        '当': '表示当时的副词，相当于英语中的"when"',
        '使': '表示使用的动词，相当于英语中的"make"',
        '点': '表示点的名词，相当于英语中的"point"',
        '从': '表示从的介词，相当于英语中的"from"',
        '业': '表示业务的名词，相当于英语中的"business"',
        '本': '表示书本的名词，相当于英语中的"book"',
        '去': '表示去的动词，相当于英语中的"go"',
        '把': '表示把的量词，相当于英语中的"hold"',
        '性': '表示性质的名词，相当于英语中的"nature"',
        '好': '表示好的形容词，相当于英语中的"good"',
        '应': '表示应该的助动词，相当于英语中的"should"',
        '开': '表示打开的动词，相当于英语中的"open"',
        '它': '表示它的代词，相当于英语中的"it"',
        '合': '表示结合的动词，相当于英语中的"combine"',
        '还': '表示还的副词，相当于英语中的"still"',
        '因': '表示因为的连词，相当于英语中的"because"',
        '由': '表示由的介词，相当于英语中的"from"',
        '其': '表示其他的代词，相当于英语中的"its"',
        '些': '表示一些的数量词，相当于英语中的"some"',
        '然': '表示然而的连词，相当于英语中的"however"',
        '前': '表示前面的方位词，相当于英语中的"before"',
        '外': '表示外面的方位词，相当于英语中的"outside"',
        '天': '表示天空的名词，相当于英语中的"sky"',
        '四': '数字四，表示数量',
        '今': '表示今天的名词，相当于英语中的"today"',
        '明': '表示明亮的形容词，相当于英语中的"bright"',
        '眼': '表示眼睛的名词，相当于英语中的"eye"',
        '手': '表示手的名词，相当于英语中的"hand"',
        '心': '表示心脏的名词，相当于英语中的"heart"',
        '口': '表示嘴巴的名词，相当于英语中的"mouth"',
        '耳': '表示耳朵的名词，相当于英语中的"ear"',
        '足': '表示脚的名词，相当于英语中的"foot"',
        '目': '表示眼睛的名词，相当于英语中的"eye"',
        '日': '表示太阳的名词，相当于英语中的"sun"',
        '月': '表示月亮的名词，相当于英语中的"moon"',
        '火': '表示火的名词，相当于英语中的"fire"',
        '山': '表示山的名词，相当于英语中的"mountain"',
        '石': '表示石头的名词，相当于英语中的"stone"',
        '田': '表示田地的名词，相当于英语中的"field"',
        '禾': '表示禾苗的名词，相当于英语中的"grain"',
        '竹': '表示竹子的名词，相当于英语中的"bamboo"',
        '木': '表示树木的名词，相当于英语中的"wood"',
        '金': '表示金属的名词，相当于英语中的"gold"',
        '土': '表示土地的名词，相当于英语中的"earth"',
        '车': '表示车辆的名词，相当于英语中的"car"',
        '马': '表示马的名词，相当于英语中的"horse"',
        '鸟': '表示鸟的名词，相当于英语中的"bird"',
        '鱼': '表示鱼的名词，相当于英语中的"fish"',
        '龙': '表示龙的名词，相当于英语中的"dragon"',
        '风': '表示风的名词，相当于英语中的"wind"',
        '云': '表示云的名词，相当于英语中的"cloud"',
        '雨': '表示雨的名词，相当于英语中的"rain"',
        '雪': '表示雪的名词，相当于英语中的"snow"',
        '冰': '表示冰的名词，相当于英语中的"ice"',
        '春': '表示春天的名词，相当于英语中的"spring"',
        '夏': '表示夏天的名词，相当于英语中的"summer"',
        '秋': '表示秋天的名词，相当于英语中的"autumn"',
        '冬': '表示冬天的名词，相当于英语中的"winter"'
    };
    return commentMap[char] || 'This is a common Chinese character with rich cultural connotations and various usages.';
}

// 获取用法示例
function getUsageExamples(char) {
    const exampleMap = {
        '的': '我的书 (my book)<br>美丽的花 (beautiful flower)',
        '一': '一个人 (one person)<br>第一 (first)',
        '是': '我是学生 (I am a student)<br>这是书 (This is a book)',
        '在': '在学校 (at school)<br>在家里 (at home)',
        '不': '不好 (not good)<br>不去 (not going)',
        '了': '吃了饭 (have eaten)<br>看了书 (have read)',
        '有': '有书 (have books)<br>有时间 (have time)',
        '和': '我和你 (you and I)<br>老师和学生 (teacher and student)',
        '人': '中国人 (Chinese people)<br>好人 (good person)',
        '这': '这个人 (this person)<br>这本书 (this book)',
        '中': '中国人 (Chinese people)<br>中间 (middle)',
        '大': '大人 (adult)<br>大树 (big tree)',
        '为': '为了学习 (for studying)<br>为人民 (for the people)',
        '上': '上学 (go to school)<br>上面 (above)',
        '个': '一个人 (one person)<br>三个苹果 (three apples)',
        '国': '中国 (China)<br>国家 (country)',
        '我': '我的书 (my book)<br>我爱你 (I love you)',
        '以': '以后 (after)<br>以为 (think)',
        '要': '要学习 (want to study)<br>重要 (important)',
        '他': '他的书 (his book)<br>他们 (they)',
        '时': '时间 (time)<br>时候 (when)',
        '来': '来学校 (come to school)<br>未来 (future)',
        '用': '用笔 (use pen)<br>有用 (useful)',
        '们': '我们 (we)<br>他们 (they)',
        '生': '学生 (student)<br>生活 (life)',
        '到': '到家 (arrive home)<br>到达 (arrive)',
        '作': '作业 (homework)<br>工作 (work)',
        '地': '地方 (place)<br>土地 (land)',
        '于': '关于 (about)<br>对于 (for)',
        '就': '就是 (exactly)<br>就要 (about to)',
        '分': '分数 (score)<br>分别 (separate)',
        '对': '对的 (correct)<br>对不起 (sorry)',
        '成': '成功 (success)<br>成为 (become)',
        '会': '会说话 (can speak)<br>会议 (meeting)',
        '可': '可以 (can)<br>可能 (possible)',
        '主': '主要 (main)<br>主人 (host)',
        '发': '发现 (discover)<br>发展 (develop)',
        '年': '今年 (this year)<br>新年 (new year)',
        '动': '运动 (exercise)<br>动物 (animal)',
        '同': '同学 (classmate)<br>同意 (agree)',
        '工': '工作 (work)<br>工人 (worker)',
        '也': '也是 (also)<br>也好 (also good)',
        '能': '能够 (can)<br>能力 (ability)',
        '下': '下面 (below)<br>下雨 (rain)',
        '过': '过去 (past)<br>经过 (pass by)',
        '子': '儿子 (son)<br>孩子 (child)',
        '说': '说话 (speak)<br>说明 (explain)',
        '产': '生产 (produce)<br>产品 (product)',
        '种': '种类 (kind)<br>种植 (plant)',
        '面': '面条 (noodles)<br>见面 (meet)',
        '而': '而且 (moreover)<br>然而 (however)',
        '方': '方法 (method)<br>方向 (direction)',
        '后': '后面 (behind)<br>以后 (after)',
        '多': '很多 (many)<br>多少 (how much)',
        '定': '一定 (certainly)<br>决定 (decide)',
        '行': '行走 (walk)<br>银行 (bank)',
        '学': '学习 (study)<br>学校 (school)',
        '法': '方法 (method)<br>法律 (law)',
        '所': '所以 (therefore)<br>所有 (all)',
        '民': '人民 (people)<br>民族 (nation)',
        '得': '得到 (get)<br>觉得 (feel)',
        '经': '经过 (pass by)<br>经验 (experience)',
        '十': '十个 (ten)<br>十分 (very)',
        '三': '三个 (three)<br>第三 (third)',
        '之': '之一 (one of)<br>之间 (between)',
        '进': '进入 (enter)<br>进步 (progress)',
        '着': '看着 (looking at)<br>听着 (listening)',
        '等': '等待 (wait)<br>等等 (etc.)',
        '部': '部分 (part)<br>部门 (department)',
        '度': '温度 (temperature)<br>程度 (degree)',
        '家': '家庭 (family)<br>回家 (go home)',
        '电': '电话 (telephone)<br>电脑 (computer)',
        '力': '力量 (power)<br>努力 (hard work)',
        '如': '如果 (if)<br>如同 (like)',
        '水': '水 (water)<br>水果 (fruit)',
        '化': '文化 (culture)<br>化学 (chemistry)',
        '高': '高度 (height)<br>高兴 (happy)',
        '自': '自己 (self)<br>自然 (nature)',
        '二': '二个 (two)<br>第二 (second)',
        '理': '道理 (reason)<br>理解 (understand)',
        '起': '起来 (get up)<br>开始 (start)',
        '小': '小孩 (child)<br>小心 (careful)',
        '物': '物品 (item)<br>动物 (animal)',
        '现': '现在 (now)<br>出现 (appear)',
        '实': '实际 (actual)<br>实现 (realize)',
        '加': '加上 (add)<br>增加 (increase)',
        '量': '数量 (quantity)<br>质量 (quality)',
        '都': '都是 (all are)<br>首都 (capital)',
        '两': '两个 (two)<br>两样 (two kinds)',
        '体': '身体 (body)<br>体育 (sports)',
        '制': '制作 (make)<br>制度 (system)',
        '机': '机器 (machine)<br>机会 (opportunity)',
        '当': '当时 (at that time)<br>当然 (of course)',
        '使': '使用 (use)<br>大使 (ambassador)',
        '点': '一点 (a little)<br>重点 (key point)',
        '从': '从...到... (from...to...)<br>从来 (never)',
        '业': '事业 (career)<br>工业 (industry)',
        '本': '书本 (book)<br>本来 (originally)',
        '去': '去学校 (go to school)<br>去年 (last year)',
        '把': '把书给我 (give me the book)<br>一把伞 (an umbrella)',
        '性': '性格 (personality)<br>性质 (nature)',
        '好': '好人 (good person)<br>好吃 (delicious)',
        '应': '应该 (should)<br>答应 (promise)',
        '开': '开门 (open door)<br>开始 (start)',
        '它': '它的 (its)<br>它们 (they)',
        '合': '合作 (cooperate)<br>合适 (suitable)',
        '还': '还是 (still)<br>归还 (return)',
        '因': '因为 (because)<br>原因 (reason)',
        '由': '由于 (due to)<br>理由 (reason)',
        '其': '其他 (other)<br>其中 (among)',
        '些': '一些 (some)<br>这些 (these)',
        '然': '然后 (then)<br>自然 (natural)',
        '前': '前面 (front)<br>以前 (before)',
        '外': '外面 (outside)<br>外国 (foreign)',
        '天': '天空 (sky)<br>天气 (weather)',
        '四': '四个 (four)<br>四月 (April)',
        '今': '今天 (today)<br>今年 (this year)',
        '明': '明天 (tomorrow)<br>明白 (understand)',
        '眼': '眼睛 (eye)<br>眼镜 (glasses)',
        '手': '手 (hand)<br>手机 (mobile phone)',
        '心': '心 (heart)<br>心情 (mood)',
        '口': '口 (mouth)<br>人口 (population)',
        '耳': '耳朵 (ear)<br>耳机 (earphones)',
        '足': '足 (foot)<br>足球 (football)',
        '目': '目 (eye)<br>目标 (goal)',
        '日': '日 (sun)<br>日子 (day)',
        '月': '月 (moon)<br>月亮 (moon)',
        '火': '火 (fire)<br>火车 (train)',
        '山': '山 (mountain)<br>山水 (landscape)',
        '石': '石头 (stone)<br>石头 (rock)',
        '田': '田 (field)<br>田地 (farmland)',
        '禾': '禾苗 (seedling)<br>禾 (grain)',
        '竹': '竹子 (bamboo)<br>竹笋 (bamboo shoot)',
        '木': '木头 (wood)<br>树木 (tree)',
        '金': '金子 (gold)<br>金属 (metal)',
        '土': '土地 (land)<br>土壤 (soil)',
        '车': '车 (car)<br>汽车 (automobile)',
        '马': '马 (horse)<br>马车 (carriage)',
        '鸟': '鸟 (bird)<br>小鸟 (little bird)',
        '鱼': '鱼 (fish)<br>金鱼 (goldfish)',
        '龙': '龙 (dragon)<br>龙王 (dragon king)',
        '风': '风 (wind)<br>风景 (scenery)',
        '云': '云 (cloud)<br>白云 (white cloud)',
        '雨': '雨 (rain)<br>下雨 (rain)',
        '雪': '雪 (snow)<br>下雪 (snow)',
        '冰': '冰 (ice)<br>冰块 (ice cube)',
        '春': '春天 (spring)<br>春节 (Spring Festival)',
        '夏': '夏天 (summer)<br>夏季 (summer)',
        '秋': '秋天 (autumn)<br>秋季 (autumn)',
        '冬': '冬天 (winter)<br>冬季 (winter)'
    };
    return exampleMap[char] || 'This character has various usages in Chinese and is a commonly used basic character.';
}

// 搜索字符
function searchCharacters() {
    const searchInput = document.getElementById('searchInput');
    const grid = document.getElementById('dictionaryGrid');
    
    if (!searchInput || !grid) return;
    
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    if (searchTerm === '') {
        displayDictionaryCharacters();
        return;
    }
    
    const filteredChars = commonCharacters.filter(char => 
        char.char.includes(searchTerm) || 
        char.pinyin.includes(searchTerm) || 
        char.english.toLowerCase().includes(searchTerm)
    );
    
    grid.innerHTML = '';
    
    if (filteredChars.length === 0) {
        grid.innerHTML = '<div class="no-results">No matching characters found</div>';
        return;
    }
    
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
        searchInput.focus();
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
    showGameArea('Character Memory Game');
    loadMemoryGame();
}

function startWordSearch() {
    currentGame = 'wordsearch';
    gameScore = 0;
    showGameArea('Character Search');
    loadWordSearchGame();
}

function startCharacterQuiz() {
    currentGame = 'quiz';
    gameScore = 0;
    showGameArea('Character Quiz');
    loadCharacterQuiz();
}

function startStrokeOrder() {
    currentGame = 'stroke';
    gameScore = 0;
    showGameArea('Stroke Order');
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
            <div class="game-instructions">
                <p>Click cards to flip and find matching character pairs!</p>
            </div>
        </div>
    `;
    
    // 延迟初始化，确保DOM已经渲染
    setTimeout(() => {
        initializeMemoryGame();
    }, 100);
}

// 初始化记忆游戏
function initializeMemoryGame() {
    const cards = document.querySelectorAll('.memory-card');
    let flippedCards = [];
    let matchedPairs = 0;
    
    cards.forEach((card, index) => {
        card.addEventListener('click', function() {
            if (flippedCards.length < 2 && !this.classList.contains('flipped') && !this.classList.contains('matched')) {
                this.classList.add('flipped');
                flippedCards.push(this);
                
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
                                alert(`Congratulations! You completed the memory game! Score: ${gameScore}`);
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
        scoreElement.textContent = `Score: ${gameScore}`;
    }
}

// Character Search Game
function loadWordSearchGame() {
    const gameContent = document.getElementById('gameContent');
    if (!gameContent) return;
    
    const targetChars = ['人', '大', '小', '中', '国', '家', '学', '习'];
    const gridSize = 8;
    const grid = [];
    
    // 创建网格
    for (let i = 0; i < gridSize; i++) {
        grid[i] = [];
        for (let j = 0; j < gridSize; j++) {
            grid[i][j] = commonCharacters[Math.floor(Math.random() * commonCharacters.length)].char;
        }
    }
    
    // Randomly place target characters
    targetChars.forEach(char => {
        let placed = false;
        while (!placed) {
            const row = Math.floor(Math.random() * gridSize);
            const col = Math.floor(Math.random() * gridSize);
            if (grid[row][col] !== char) {
                grid[row][col] = char;
                placed = true;
            }
        }
    });
    
    gameContent.innerHTML = `
        <div class="word-search-game">
            <div class="word-search-instructions">
                <p>Find the following characters in the grid:</p>
                <div class="target-chars">
                    ${targetChars.map(char => `<span class="target-char">${char}</span>`).join('')}
                </div>
            </div>
            <div class="word-search-grid">
                ${grid.map((row, i) => `
                    <div class="grid-row">
                        ${row.map((char, j) => `
                            <div class="grid-cell" data-row="${i}" data-col="${j}" data-char="${char}">
                                ${char}
                            </div>
                        `).join('')}
                    </div>
                `).join('')}
            </div>
            <div class="game-progress">
                <p>Found: <span id="foundCount">0</span> / ${targetChars.length}</p>
            </div>
        </div>
    `;
    
    initializeWordSearchGame(targetChars);
}

// Initialize Character Search Game
function initializeWordSearchGame(targetChars) {
    const cells = document.querySelectorAll('.grid-cell');
    const foundCountElement = document.getElementById('foundCount');
    let foundCount = 0;
    const foundChars = new Set();
    
    cells.forEach(cell => {
        cell.addEventListener('click', function() {
            const char = this.dataset.char;
            
            if (targetChars.includes(char) && !foundChars.has(char)) {
                foundChars.add(char);
                foundCount++;
                this.classList.add('found');
                gameScore += 10;
                updateGameScore();
                
                if (foundCountElement) {
                    foundCountElement.textContent = foundCount;
                }
                
                if (foundCount === targetChars.length) {
                    setTimeout(() => {
                        alert(`Congratulations! You found all the characters! Score: ${gameScore}`);
                    }, 500);
                }
            } else if (targetChars.includes(char) && foundChars.has(char)) {
                // 已经找到的字符
                this.style.animation = 'shake 0.5s';
                setTimeout(() => {
                    this.style.animation = '';
                }, 500);
            } else {
                // 错误的字符
                this.style.animation = 'shake 0.5s';
                setTimeout(() => {
                    this.style.animation = '';
                }, 500);
            }
        });
    });
}

// Character Quiz Game
function loadCharacterQuiz() {
    const gameContent = document.getElementById('gameContent');
    if (!gameContent) return;
    
    const quizData = [
        { char: '人', question: 'What does this character mean?', options: ['person', 'big', 'small', 'good'], correct: 0 },
        { char: '大', question: 'What does this character mean?', options: ['person', 'big', 'small', 'good'], correct: 1 },
        { char: '小', question: 'What does this character mean?', options: ['person', 'big', 'small', 'good'], correct: 2 },
        { char: '好', question: 'What does this character mean?', options: ['person', 'big', 'small', 'good'], correct: 3 },
        { char: '学', question: 'What does this character mean?', options: ['study', 'work', 'play', 'eat'], correct: 0 },
        { char: '习', question: 'What does this character mean?', options: ['study', 'practice', 'work', 'play'], correct: 1 }
    ];
    
    let currentQuestion = 0;
    let correctAnswers = 0;
    
    function showQuestion() {
        if (currentQuestion >= quizData.length) {
            gameContent.innerHTML = `
                <div class="quiz-results">
                    <h3>Quiz Complete!</h3>
                    <p>Your Score: ${correctAnswers} / ${quizData.length}</p>
                    <p>Accuracy: ${Math.round((correctAnswers / quizData.length) * 100)}%</p>
                    <button class="btn btn-primary" onclick="loadCharacterQuiz()">Restart</button>
                </div>
            `;
            return;
        }
        
        const quiz = quizData[currentQuestion];
        gameContent.innerHTML = `
            <div class="character-quiz">
                <div class="quiz-progress">
                    <p>Question ${currentQuestion + 1} / ${quizData.length}</p>
                </div>
                <div class="quiz-question">
                    <div class="quiz-char">${quiz.char}</div>
                    <p class="quiz-text">${quiz.question}</p>
                </div>
                <div class="quiz-options">
                    ${quiz.options.map((option, index) => `
                        <button class="quiz-option" onclick="checkAnswer(${index})">
                            ${option}
                        </button>
                    `).join('')}
                </div>
            </div>
        `;
    }
    
    // 将checkAnswer函数添加到全局作用域
    window.checkAnswer = function(selectedIndex) {
        const quiz = quizData[currentQuestion];
        const options = document.querySelectorAll('.quiz-option');
        
        options.forEach((option, index) => {
            option.disabled = true;
            if (index === quiz.correct) {
                option.classList.add('correct');
            } else if (index === selectedIndex) {
                option.classList.add('incorrect');
            }
        });
        
        if (selectedIndex === quiz.correct) {
            correctAnswers++;
            gameScore += 10;
            updateGameScore();
        }
        
        setTimeout(() => {
            currentQuestion++;
            showQuestion();
        }, 1500);
    };
    
    showQuestion();
}

// 笔画顺序游戏
function loadStrokeOrderGame() {
    const gameContent = document.getElementById('gameContent');
    if (!gameContent) return;
    
    const strokeData = [
        { char: '一', strokes: ['Horizontal'], description: 'Stroke order for 一: Write the horizontal stroke first' },
        { char: '二', strokes: ['Horizontal', 'Horizontal'], description: 'Stroke order for 二: Write the upper horizontal, then the lower horizontal' },
        { char: '三', strokes: ['Horizontal', 'Horizontal', 'Horizontal'], description: 'Stroke order for 三: Write three horizontal strokes from top to bottom' },
        { char: '人', strokes: ['Left Slant', 'Right Slant'], description: 'Stroke order for 人: Write the left slant first, then the right slant' },
        { char: '大', strokes: ['Horizontal', 'Left Slant', 'Right Slant'], description: 'Stroke order for 大: Write horizontal, then left slant, finally right slant' },
        { char: '小', strokes: ['Vertical', 'Dot', 'Dot'], description: 'Stroke order for 小: Write the vertical stroke, then the left and right dots' }
    ];
    
    let currentCharIndex = 0;
    let currentStrokeIndex = 0;
    
    function showStrokeOrder() {
        if (currentCharIndex >= strokeData.length) {
            gameContent.innerHTML = `
                <div class="stroke-results">
                    <h3>Stroke Order Learning Complete!</h3>
                    <p>You have learned the stroke order for ${strokeData.length} characters</p>
                    <button class="btn btn-primary" onclick="loadStrokeOrderGame()">Restart</button>
                </div>
            `;
            return;
        }
        
        const charData = strokeData[currentCharIndex];
        gameContent.innerHTML = `
            <div class="stroke-order-game">
                <div class="stroke-progress">
                    <p>Character ${currentCharIndex + 1} / ${strokeData.length}</p>
                </div>
                <div class="stroke-display">
                    <div class="stroke-char">${charData.char}</div>
                    <p class="stroke-description">${charData.description}</p>
                </div>
                <div class="stroke-steps">
                    <h4>Stroke Steps:</h4>
                    <div class="stroke-list">
                        ${charData.strokes.map((stroke, index) => `
                            <div class="stroke-step ${index < currentStrokeIndex ? 'completed' : ''}">
                                <span class="step-number">${index + 1}</span>
                                <span class="step-stroke">${stroke}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
                <div class="stroke-controls">
                    <button class="btn btn-secondary" onclick="previousStroke()" ${currentStrokeIndex === 0 ? 'disabled' : ''}>
                        Previous
                    </button>
                    <button class="btn btn-primary" onclick="nextStroke()" ${currentStrokeIndex >= charData.strokes.length ? 'disabled' : ''}>
                        ${currentStrokeIndex >= charData.strokes.length ? 'Next Character' : 'Next Step'}
                    </button>
                </div>
            </div>
        `;
    }
    
    // 将控制函数添加到全局作用域
    window.nextStroke = function() {
        const charData = strokeData[currentCharIndex];
        if (currentStrokeIndex < charData.strokes.length) {
            currentStrokeIndex++;
            gameScore += 5;
            updateGameScore();
        } else {
            currentCharIndex++;
            currentStrokeIndex = 0;
        }
        showStrokeOrder();
    };
    
    window.previousStroke = function() {
        if (currentStrokeIndex > 0) {
            currentStrokeIndex--;
        } else if (currentCharIndex > 0) {
            currentCharIndex--;
            currentStrokeIndex = strokeData[currentCharIndex].strokes.length;
        }
        showStrokeOrder();
    };
    
    showStrokeOrder();
}

// 书法练习相关函数
function startPractice() {
    const canvas = document.getElementById('practiceCanvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let isDrawing = false;
    let lastX = 0;
    let lastY = 0;
    
    // 清除之前的事件监听器
    canvas.removeEventListener('mousedown', startDrawing);
    canvas.removeEventListener('mousemove', draw);
    canvas.removeEventListener('mouseup', stopDrawing);
    canvas.removeEventListener('mouseout', stopDrawing);
    
    // 添加新的事件监听器
    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseout', stopDrawing);
    
    // 添加触摸支持
    canvas.addEventListener('touchstart', handleTouchStart);
    canvas.addEventListener('touchmove', handleTouchMove);
    canvas.addEventListener('touchend', handleTouchEnd);
    
    function startDrawing(e) {
        e.preventDefault();
        isDrawing = true;
        const rect = canvas.getBoundingClientRect();
        [lastX, lastY] = [e.clientX - rect.left, e.clientY - rect.top];
    }
    
    function draw(e) {
        e.preventDefault();
        if (!isDrawing) return;
        
        const rect = canvas.getBoundingClientRect();
        const currentX = e.clientX - rect.left;
        const currentY = e.clientY - rect.top;
        
        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(currentX, currentY);
        ctx.strokeStyle = '#2563eb';
        ctx.lineWidth = 3;
        ctx.lineCap = 'round';
        ctx.stroke();
        
        [lastX, lastY] = [currentX, currentY];
    }
    
    function stopDrawing() {
        isDrawing = false;
    }
    
    function handleTouchStart(e) {
        e.preventDefault();
        const touch = e.touches[0];
        const rect = canvas.getBoundingClientRect();
        [lastX, lastY] = [touch.clientX - rect.left, touch.clientY - rect.top];
        isDrawing = true;
    }
    
    function handleTouchMove(e) {
        e.preventDefault();
        if (!isDrawing) return;
        
        const touch = e.touches[0];
        const rect = canvas.getBoundingClientRect();
        const currentX = touch.clientX - rect.left;
        const currentY = touch.clientY - rect.top;
        
        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(currentX, currentY);
        ctx.strokeStyle = '#2563eb';
        ctx.lineWidth = 3;
        ctx.lineCap = 'round';
        ctx.stroke();
        
        [lastX, lastY] = [currentX, currentY];
    }
    
    function handleTouchEnd(e) {
        e.preventDefault();
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