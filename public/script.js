// Ã¢ÂÂÃ¢ÂÂ State Ã¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂ
// 'en|ru' = English Ã¢ÂÂ Russian,  'ru|en' = Russian Ã¢ÂÂ English
let currentDirection = 'en|ru';
let lastTranslation = ''; // stores the most recent translated text

// Ã¢ÂÂÃ¢ÂÂ DOM References Ã¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂ
const sourceText      = document.getElementById('source-text');
const translationOut  = document.getElementById('translation-output');
const translateBtn    = document.getElementById('translate-btn');
const clearBtn        = document.getElementById('clear-btn');
const btnEnRu         = document.getElementById('btn-en-ru');
const btnRuEn         = document.getElementById('btn-ru-en');
const btnSwap         = document.getElementById('btn-swap');
const speakSource     = document.getElementById('speak-source');
const speakTarget     = document.getElementById('speak-target');
const charCount       = document.getElementById('char-count');
const status          = document.getElementById('translation-status');
const historyList     = document.getElementById('history-list');
const emptyHistory    = document.getElementById('empty-history');
const clearHistoryBtn = document.getElementById('clear-history-btn');
const labelSource     = document.getElementById('label-source');
const labelTarget     = document.getElementById('label-target');

// Ã¢ÂÂÃ¢ÂÂ Language Helpers Ã¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂ
const LANG_NAMES = { en: 'English', ru: 'Russian' };

// Maps language code Ã¢ÂÂ BCP-47 tag used by Web Speech API
const SPEECH_LANG = { en: 'en-US', ru: 'ru-RU' };

function sourceLang() { return currentDirection.split('|')[0]; }
function targetLang() { return currentDirection.split('|')[1]; }

// Ã¢ÂÂÃ¢ÂÂ Direction Toggle Ã¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂ
function setDirection(dir) {
  currentDirection = dir;
  const [src, tgt] = dir.split('|');

  // Update button styles
  btnEnRu.classList.toggle('active', dir === 'en|ru');
  btnRuEn.classList.toggle('active', dir === 'ru|en');

  // Update panel labels
  labelSource.textContent = LANG_NAMES[src];
  labelTarget.textContent = LANG_NAMES[tgt];

  // Update textarea placeholder
  sourceText.placeholder = `Type your ${LANG_NAMES[src]} text hereÃ¢ÂÂ¦`;

  // Clear output when direction changes
  clearOutput();
}

btnEnRu.addEventListener('click', () => setDirection('en|ru'));
btnRuEn.addEventListener('click', () => setDirection('ru|en'));

// Swap: flip direction AND swap the text content
btnSwap.addEventListener('click', () => {
  const newDir = currentDirection === 'en|ru' ? 'ru|en' : 'en|ru';
  const currentSource = sourceText.value;

  // If there's a translation, put it into the source box
  if (lastTranslation) {
    sourceText.value = lastTranslation;
    updateCharCount();
  }

  setDirection(newDir);
});

// Ã¢ÂÂÃ¢ÂÂ Character Counter Ã¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂ
sourceText.addEventListener('input', updateCharCount);

function updateCharCount() {
  charCount.textContent = sourceText.value.length;
}

// Ã¢ÂÂÃ¢ÂÂ Translation Ã¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂ
translateBtn.addEventListener('click', translate);

// Allow Ctrl+Enter to translate
sourceText.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) translate();
});

async function translate() {
  const text = sourceText.value.trim();

  if (!text) {
    showStatus('Please enter some text first.', true);
    return;
  }

  // Show loading state
  translateBtn.disabled = true;
  translateBtn.textContent = 'TranslatingÃ¢ÂÂ¦';
  translationOut.innerHTML = '<span class="spinner"></span> Fetching translationÃ¢ÂÂ¦';
  status.textContent = '';
  lastTranslation = '';

  try {
    // MyMemory API Ã¢ÂÂ free, no key required
    // langpair format: "en|ru"
    const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${currentDirection}`;
    const response = await fetch(url);

    if (!response.ok) throw new Error(`Network error: ${response.status}`);

    const data = await response.json();

    // MyMemory returns responseStatus 200 on success
    if (data.responseStatus !== 200) {
      throw new Error(data.responseMessage || 'Translation failed');
    }

    let translated = data.responseData.translatedText;

    // If the top result isn't in the target script, scan matches for a better one
    if (targetLang() === 'ru' && !/[\u0400-\u04FF]/.test(translated)) {
      const better = (data.matches || [])
        .filter(m => /[\u0400-\u04FF]/.test(m.translation))
        .sort((a, b) => b.quality - a.quality)[0];
      if (better) translated = better.translation;
    }
    if (targetLang() === 'en' && /[\u0400-\u04FF]/.test(translated)) {
      const better = (data.matches || [])
        .filter(m => !/[\u0400-\u04FF]/.test(m.translation))
        .sort((a, b) => b.quality - a.quality)[0];
      if (better) translated = better.translation;
    }

    lastTranslation = translated;

    // Display result
    translationOut.textContent = translated;
    showStatus('Ã¢ÂÂ Translated', false);

    // Save to history
    saveToHistory(text, translated, currentDirection);

  } catch (err) {
    translationOut.innerHTML = '<span class="placeholder-text">Could not fetch translation. Check your connection and try again.</span>';
    showStatus('Error: ' + err.message, true);
  } finally {
    translateBtn.disabled = false;
    translateBtn.textContent = 'Translate';
  }
}

function showStatus(msg, isError) {
  status.textContent = msg;
  status.style.color = isError ? '#ef4444' : '#22c55e';
}

function clearOutput() {
  translationOut.innerHTML = '<span class="placeholder-text">Translation will appear hereÃ¢ÂÂ¦</span>';
  status.textContent = '';
  lastTranslation = '';
}

// Ã¢ÂÂÃ¢ÂÂ Clear button Ã¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂ
clearBtn.addEventListener('click', () => {
  sourceText.value = '';
  updateCharCount();
  clearOutput();
  sourceText.focus();
});

// Ã¢ÂÂÃ¢ÂÂ Pronunciation (Web Speech API) Ã¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂ
function speak(text, lang) {
  if (!text || !('speechSynthesis' in window)) {
    alert('Sorry, your browser does not support text-to-speech.');
    return;
  }
  // Cancel any ongoing speech
  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = SPEECH_LANG[lang] || lang;
  utterance.rate = 0.9; // slightly slower Ã¢ÂÂ better for learners
  window.speechSynthesis.speak(utterance);
}

speakSource.addEventListener('click', () => {
  speak(sourceText.value.trim(), sourceLang());
});

speakTarget.addEventListener('click', () => {
  speak(lastTranslation, targetLang());
});

// Ã¢ÂÂÃ¢ÂÂ History Ã¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂ
const HISTORY_KEY = 'ruslearn_history';
const MAX_HISTORY = 50; // keep last 50 entries

function loadHistory() {
  try {
    return JSON.parse(localStorage.getItem(HISTORY_KEY)) || [];
  } catch {
    return [];
  }
}

function saveHistory(history) {
  localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
}

function saveToHistory(source, target, direction) {
  const history = loadHistory();

  const entry = {
    id: Date.now(),
    source,
    target,
    direction,
    time: new Date().toISOString()
  };

  // Add to the front, cap at MAX_HISTORY
  history.unshift(entry);
  if (history.length > MAX_HISTORY) history.pop();

  saveHistory(history);
  renderHistory();
}

function renderHistory() {
  const history = loadHistory();

  if (history.length === 0) {
    emptyHistory.style.display = 'block';
    // Remove all history cards (keep the empty-history element)
    [...historyList.querySelectorAll('.history-card')].forEach(el => el.remove());
    return;
  }

  emptyHistory.style.display = 'none';

  // Clear and re-render all cards
  [...historyList.querySelectorAll('.history-card')].forEach(el => el.remove());

  history.forEach(entry => {
    const [src, tgt] = entry.direction.split('|');
    const card = document.createElement('div');
    card.className = 'history-card';
    card.dataset.id = entry.id;

    const timeStr = formatTime(entry.time);
    const dirLabel = `${LANG_NAMES[src].slice(0,2)} Ã¢ÂÂ ${LANG_NAMES[tgt].slice(0,2)}`;

    card.innerHTML = `
      <div class="history-source">${escapeHtml(entry.source)}</div>
      <div class="history-target">${escapeHtml(entry.target)}</div>
      <div class="history-meta">
        <span class="history-direction">${dirLabel}</span>
        <span class="history-time">${timeStr}</span>
        <button class="history-speak" data-text="${escapeAttr(entry.target)}" data-lang="${tgt}" title="Hear translation">Ã°ÂÂÂ</button>
      </div>
    `;

    historyList.appendChild(card);
  });

  // Attach speak listeners to history cards
  historyList.querySelectorAll('.history-speak').forEach(btn => {
    btn.addEventListener('click', () => {
      speak(btn.dataset.text, btn.dataset.lang);
    });
  });
}

clearHistoryBtn.addEventListener('click', () => {
  if (confirm('Clear all translation history?')) {
    localStorage.removeItem(HISTORY_KEY);
    renderHistory();
  }
});

// Ã¢ÂÂÃ¢ÂÂ Helpers Ã¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂ
function formatTime(iso) {
  const d = new Date(iso);
  return d.toLocaleDateString(undefined, { month: 'short', day: 'numeric' })
    + ' ÃÂ· '
    + d.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' });
}

// Prevent XSS when inserting user text into the DOM
function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function escapeAttr(str) {
  return str.replace(/"/g, '&quot;');
}

// Ã¢ÂÂÃ¢ÂÂ Init Ã¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂ
setDirection('en|ru');   // set up labels and placeholder on load
renderHistory();          // render any saved history from localStorage
