const COLORS = {
  red: "#ef4444",
  blue: "#2563eb",
  yellow: "#facc15",
  green: "#16a34a",
  purple: "#7c3aed",
  gray: "#64748b",
  orange: "#f97316",
  pink: "#ec4899"
};

const SYMBOLS = {
  "face.smiling": "🙂",
  "cloud.rain": "🌧️",
  flame: "🔥",
  leaf: "🍃",
  "exclamationmark.bubble": "!",
  moon: "🌙",
  "circle.fill": "●",
  circle: "○",
  square: "□",
  triangle: "△",
  diamond: "◇",
  star: "★",
  heart: "♥",
  "1.circle": "1",
  "2.circle": "2",
  "3.circle": "3",
  "4.circle": "4",
  "5.circle": "5",
  "6.circle": "6",
  "fork.knife": "🍽️",
  "cube.box": "📦",
  "apple.logo": "🍎",
  "birthday.cake": "🍞",
  carrot: "🥕",
  basketball: "🏀",
  "book.closed": "📘",
  bag: "🎒"
};

const activities = [
  {
    id: "emotion-matching-v1",
    type: "matchingCards",
    language: "cs-CZ",
    title: "Poznávání emocí",
    teacherGoal: "Procvičuje poznávání základních emocí podle obrázkových vodítek.",
    childPrompt: "Najdi emoci: {target}",
    theme: "orange",
    cards: [
      { id: "happy", label: "Radost", symbol: "face.smiling", color: "yellow" },
      { id: "sad", label: "Smutek", symbol: "cloud.rain", color: "blue" },
      { id: "angry", label: "Vztek", symbol: "flame", color: "red" },
      { id: "calm", label: "Klid", symbol: "leaf", color: "green" },
      { id: "surprised", label: "Překvapení", symbol: "exclamationmark.bubble", color: "purple" },
      { id: "tired", label: "Únava", symbol: "moon", color: "gray" }
    ]
  },
  {
    id: "color-matching-v1",
    type: "matchingCards",
    language: "cs-CZ",
    title: "Poznávání barev",
    teacherGoal: "Procvičuje výběr správné barvy podle jednoduchého slovního zadání.",
    childPrompt: "Najdi barvu: {target}",
    theme: "pink",
    cards: [
      { id: "red", label: "Červená", symbol: "circle.fill", color: "red" },
      { id: "blue", label: "Modrá", symbol: "circle.fill", color: "blue" },
      { id: "yellow", label: "Žlutá", symbol: "circle.fill", color: "yellow" },
      { id: "green", label: "Zelená", symbol: "circle.fill", color: "green" },
      { id: "purple", label: "Fialová", symbol: "circle.fill", color: "purple" },
      { id: "gray", label: "Šedá", symbol: "circle.fill", color: "gray" }
    ]
  },
  {
    id: "shape-matching-v1",
    type: "matchingCards",
    language: "cs-CZ",
    title: "Poznávání tvarů",
    teacherGoal: "Procvičuje rozlišování základních tvarů podle názvu.",
    childPrompt: "Najdi tvar: {target}",
    theme: "purple",
    cards: [
      { id: "circle", label: "Kruh", symbol: "circle", color: "red" },
      { id: "square", label: "Čtverec", symbol: "square", color: "blue" },
      { id: "triangle", label: "Trojúhelník", symbol: "triangle", color: "yellow" },
      { id: "diamond", label: "Kosočtverec", symbol: "diamond", color: "green" },
      { id: "star", label: "Hvězda", symbol: "star", color: "purple" },
      { id: "heart", label: "Srdce", symbol: "heart", color: "gray" }
    ]
  },
  {
    id: "number-matching-v1",
    type: "matchingCards",
    language: "cs-CZ",
    title: "Poznávání čísel",
    teacherGoal: "Procvičuje rozpoznávání číslic od jedné do šesti.",
    childPrompt: "Najdi číslo: {target}",
    theme: "blue",
    cards: [
      { id: "one", label: "1", symbol: "1.circle", color: "red" },
      { id: "two", label: "2", symbol: "2.circle", color: "blue" },
      { id: "three", label: "3", symbol: "3.circle", color: "yellow" },
      { id: "four", label: "4", symbol: "4.circle", color: "green" },
      { id: "five", label: "5", symbol: "5.circle", color: "purple" },
      { id: "six", label: "6", symbol: "6.circle", color: "gray" }
    ]
  },
  {
    id: "food-object-sorting-v1",
    type: "sortingCategories",
    language: "cs-CZ",
    title: "Třídění: jídlo a věci",
    teacherGoal: "Procvičuje třídění známých předmětů do dvou jasných kategorií.",
    childPrompt: "Dej kartu do správné skupiny.",
    theme: "green",
    categories: [
      { id: "food", label: "Jídlo", symbol: "fork.knife", color: "green" },
      { id: "things", label: "Věci", symbol: "cube.box", color: "blue" }
    ],
    cards: [
      { id: "apple", label: "Jablko", symbol: "apple.logo", color: "red", categoryID: "food" },
      { id: "bread", label: "Chleba", symbol: "birthday.cake", color: "orange", categoryID: "food" },
      { id: "carrot", label: "Mrkev", symbol: "carrot", color: "orange", categoryID: "food" },
      { id: "ball", label: "Míč", symbol: "basketball", color: "yellow", categoryID: "things" },
      { id: "book", label: "Kniha", symbol: "book.closed", color: "purple", categoryID: "things" },
      { id: "bag", label: "Taška", symbol: "bag", color: "gray", categoryID: "things" }
    ]
  }
];

const communicationCards = [
  { id: "want", label: "Chci", phrase: "Chci.", symbol: "✋", color: "#1d4ed8" },
  { id: "help", label: "Pomoc", phrase: "Potřebuji pomoc.", symbol: "🛟", color: "#db2777" },
  { id: "drink", label: "Pití", phrase: "Chci pití.", symbol: "🥤", color: "#0891b2" },
  { id: "food", label: "Jídlo", phrase: "Chci jídlo.", symbol: "🍽️", color: "#ea580c" },
  { id: "break", label: "Pauza", phrase: "Potřebuji pauzu.", symbol: "⏸", color: "#7c3aed" },
  { id: "pain", label: "Bolí mě", phrase: "Bolí mě to.", symbol: "🩹", color: "#dc2626" },
  { id: "yes", label: "Ano", phrase: "Ano.", symbol: "✓", color: "#16a34a" },
  { id: "no", label: "Ne", phrase: "Ne.", symbol: "×", color: "#92400e" }
];

const musicTiles = [
  { id: "red", label: "Červená", note: "Do", symbol: "●", color: "#ef4444", frequency: 261.63 },
  { id: "orange", label: "Oranžová", note: "Re", symbol: "●", color: "#f97316", frequency: 293.66 },
  { id: "yellow", label: "Žlutá", note: "Mi", symbol: "●", color: "#facc15", frequency: 329.63 },
  { id: "green", label: "Zelená", note: "Fa", symbol: "●", color: "#16a34a", frequency: 349.23 },
  { id: "blue", label: "Modrá", note: "Sol", symbol: "●", color: "#2563eb", frequency: 392.0 },
  { id: "purple", label: "Fialová", note: "La", symbol: "●", color: "#7c3aed", frequency: 440.0 }
];

const app = document.querySelector("#app");
let state = {};
let audioContext;

function speak(text, language = "cs-CZ") {
  if (!("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = language;
  utterance.rate = 0.88;
  utterance.pitch = 1.05;
  const voice = window.speechSynthesis.getVoices().find((item) => item.lang === language);
  if (voice) utterance.voice = voice;
  window.speechSynthesis.speak(utterance);
}

function playTone(frequency, duration = 0.55) {
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) return;
  audioContext ||= new AudioContextClass();
  if (audioContext.state === "suspended") audioContext.resume();

  const oscillator = audioContext.createOscillator();
  const gain = audioContext.createGain();
  const now = audioContext.currentTime;

  oscillator.type = "sine";
  oscillator.frequency.setValueAtTime(frequency, now);
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(0.28, now + 0.04);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

  oscillator.connect(gain);
  gain.connect(audioContext.destination);
  oscillator.start(now);
  oscillator.stop(now + duration + 0.03);
}

function color(name) {
  return COLORS[name] || name || COLORS.purple;
}

function symbol(name) {
  return SYMBOLS[name] || name || "★";
}

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function pageShell(title, subtitle, body, back = false) {
  app.innerHTML = `
    <main class="page">
      <div class="topbar">
        <div class="brand">
          <div class="brand-mark">★</div>
          <div>
            <h1>${title}</h1>
            <p class="subtitle">${subtitle}</p>
          </div>
        </div>
        ${back ? '<button class="back-button" data-action="home">← Aktivity</button>' : ""}
      </div>
      ${body}
    </main>
  `;
  bindGlobalActions();
}

function bindGlobalActions() {
  document.querySelectorAll('[data-action="home"]').forEach((button) => {
    button.addEventListener("click", renderHome);
  });
}

function renderHome() {
  window.speechSynthesis?.cancel();
  const cards = [
    {
      title: "Komunikační kniha",
      goal: "Velké obrázky a hlas pro rychlé vyjádření.",
      symbol: "💬",
      color: "#0ea5e9",
      action: "communication"
    },
    {
      title: "Hudební barvy",
      goal: "Barevné dlaždice hrají tóny a říkají názvy barev.",
      symbol: "🎵",
      color: "#f97316",
      action: "music"
    },
    ...activities.map((activity) => ({
      title: activity.title,
      goal: activity.teacherGoal,
      symbol: activity.type === "sortingCategories" ? "🧩" : "▶",
      color: color(activity.theme),
      action: activity.id
    }))
  ];

  pageShell(
    "Speciální aktivity",
    "Obrázky, hlas a barevné učení pro iPad",
    `<section class="grid">
      ${cards
        .map(
          (card) => `
            <button class="activity-card" data-card="${card.action}" data-symbol="${card.symbol}" style="--card-color: ${card.color}">
              <span class="activity-symbol">${card.symbol}</span>
              <h2 class="activity-title">${card.title}</h2>
              <p class="activity-goal">${card.goal}</p>
            </button>
          `
        )
        .join("")}
    </section>`
  );

  document.querySelectorAll("[data-card]").forEach((button) => {
    button.addEventListener("click", () => {
      const id = button.dataset.card;
      if (id === "communication") {
        renderCommunication();
      } else if (id === "music") {
        renderMusic();
      } else {
        startActivity(activities.find((activity) => activity.id === id));
      }
    });
  });
}

function startActivity(activity) {
  state = {
    activity,
    round: 0,
    correct: 0,
    order: shuffle(activity.cards),
    selected: null,
    feedback: "",
    shouldSpeakPrompt: true,
    promptDelay: 260
  };
  renderActivity();
}

function renderActivity() {
  const { activity, round, order } = state;
  if (round >= Math.min(6, order.length)) {
    renderCompletion(activity);
    return;
  }

  const target = order[round];
  const progress = Math.round((round / Math.min(6, order.length)) * 100);
  const prompt = activity.childPrompt.replace("{target}", target.label);

  if (activity.type === "sortingCategories") {
    renderSorting(activity, target, progress, prompt);
  } else {
    renderMatching(activity, target, progress, prompt);
  }
}

function renderMatching(activity, target, progress, prompt) {
  const distractors = shuffle(activity.cards.filter((card) => card.id !== target.id)).slice(0, 2);
  const choices = shuffle([target, ...distractors]);
  pageShell(
    activity.title,
    "Vyber správnou kartičku",
    `
      <section class="prompt-panel">
        <h2 class="prompt">${prompt}</h2>
        <button class="sound-button" data-speak="${prompt}" aria-label="Přečíst zadání">🔊</button>
      </section>
      <div class="progress-track"><div class="progress-fill" style="width: ${progress}%"></div></div>
      <section class="choice-grid">
        ${choices.map(choiceCard).join("")}
      </section>
      <p class="feedback ${state.feedbackClass || ""}">${state.feedback}</p>
    `,
    true
  );
  bindSpeechButtons();
  document.querySelectorAll("[data-choice]").forEach((button) => {
    button.addEventListener("click", () => {
      speak(button.dataset.label, activity.language);
      setTimeout(() => answer(button.dataset.choice === target.id), 560);
    });
  });
  maybeSpeakPrompt(prompt, activity.language);
}

function renderSorting(activity, target, progress, prompt) {
  pageShell(
    activity.title,
    "Dej kartu do správné skupiny",
    `
      <section class="prompt-panel">
        <h2 class="prompt">${prompt}</h2>
        <button class="sound-button" data-speak="${prompt}" aria-label="Přečíst zadání">🔊</button>
      </section>
      <div class="progress-track"><div class="progress-fill" style="width: ${progress}%"></div></div>
      <section class="sorting-layout">
        <div class="sorting-current">${choiceCard(target)}</div>
        <div class="category-grid">
          ${activity.categories.map(categoryCard).join("")}
        </div>
      </section>
      <p class="feedback ${state.feedbackClass || ""}">${state.feedback}</p>
    `,
    true
  );
  bindSpeechButtons();
  document.querySelectorAll("[data-category]").forEach((button) => {
    button.addEventListener("click", () => {
      speak(button.dataset.label, activity.language);
      setTimeout(() => answer(button.dataset.category === target.categoryID), 560);
    });
  });
  maybeSpeakPrompt(prompt, activity.language);
}

function choiceCard(card) {
  return `
    <button class="choice-card" data-choice="${card.id}" data-label="${card.label}" style="--card-color: ${color(card.color)}">
      <span class="listen-hint">🔊</span>
      <span class="card-symbol">${symbol(card.symbol)}</span>
      <span class="card-label">${card.label}</span>
    </button>
  `;
}

function categoryCard(card) {
  return `
    <button class="category-card" data-category="${card.id}" data-label="${card.label}" style="--card-color: ${color(card.color)}">
      <span class="listen-hint">🔊</span>
      <span class="card-symbol">${symbol(card.symbol)}</span>
      <span class="card-label">${card.label}</span>
    </button>
  `;
}

function answer(isCorrect) {
  if (isCorrect) {
    state.feedback = "Správně!";
    state.feedbackClass = "good";
    state.round += 1;
    state.shouldSpeakPrompt = true;
    state.promptDelay = 900;
    speak("Správně.", state.activity.language);
    setTimeout(renderActivity, 620);
  } else {
    state.feedback = "Zkus to ještě jednou.";
    state.feedbackClass = "try";
    speak("Zkus to ještě jednou.", state.activity.language);
    renderActivity();
  }
}

function renderCompletion(activity) {
  app.innerHTML = `
    <main class="page">
      <section class="completion-card">
        <div>
          <div class="completion-symbol">🌟</div>
          <h1 class="completion-title">Skvělá práce!</h1>
          <p class="subtitle">${activity.title} je hotovo.</p>
          <div class="completion-actions">
            <button class="primary-button" data-action="again">Znovu</button>
            <button class="secondary-button" data-action="home">Aktivity</button>
          </div>
        </div>
      </section>
    </main>
  `;
  document.querySelector('[data-action="again"]').addEventListener("click", () => startActivity(activity));
  bindGlobalActions();
}

function renderCommunication() {
  pageShell(
    "Komunikační kniha",
    "Klepni na obrázek, aplikace ho přečte nahlas",
    `<section class="grid">
      ${communicationCards
        .map(
          (card) => `
            <button class="comm-card" data-phrase="${card.phrase}" style="--card-color: ${card.color}">
              <span class="listen-hint">🔊</span>
              <span class="card-symbol">${card.symbol}</span>
              <span class="card-label">${card.label}</span>
            </button>
          `
        )
        .join("")}
    </section>`,
    true
  );
  document.querySelectorAll("[data-phrase]").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".comm-card").forEach((card) => card.classList.remove("selected"));
      button.classList.add("selected");
      speak(button.dataset.phrase);
    });
  });
}

function renderMusic() {
  pageShell(
    "Hudební barvy",
    "Klepni na barvu. Zahraje tón a řekne název.",
    `<section class="music-grid">
      ${musicTiles
        .map(
          (tile) => `
            <button class="music-tile" data-music="${tile.id}" style="--card-color: ${tile.color}">
              <span class="listen-hint">🎵</span>
              <span class="music-symbol">${tile.symbol}</span>
              <span class="card-label">${tile.label}</span>
              <span class="note-pill">${tile.note}</span>
            </button>
          `
        )
        .join("")}
    </section>
    <div class="completion-actions">
      <button class="primary-button" data-action="rainbow">Zahraj duhu</button>
      <button class="secondary-button" data-action="quiet">Ticho</button>
    </div>`,
    true
  );

  setTimeout(() => speak("Klepni na barvu."), 260);

  document.querySelectorAll("[data-music]").forEach((button) => {
    button.addEventListener("click", () => {
      const tile = musicTiles.find((item) => item.id === button.dataset.music);
      if (!tile) return;
      document.querySelectorAll(".music-tile").forEach((item) => item.classList.remove("selected"));
      button.classList.add("selected");
      playTone(tile.frequency);
      speak(tile.label);
      setTimeout(() => button.classList.remove("selected"), 650);
    });
  });

  document.querySelector('[data-action="rainbow"]').addEventListener("click", playRainbow);
  document.querySelector('[data-action="quiet"]').addEventListener("click", () => window.speechSynthesis?.cancel());
}

function playRainbow() {
  window.speechSynthesis?.cancel();
  musicTiles.forEach((tile, index) => {
    setTimeout(() => {
      document.querySelectorAll(".music-tile").forEach((item) => item.classList.remove("selected"));
      const button = document.querySelector(`[data-music="${tile.id}"]`);
      button?.classList.add("selected");
      playTone(tile.frequency, 0.42);
      if (index === musicTiles.length - 1) {
        setTimeout(() => {
          button?.classList.remove("selected");
          speak("Duhová písnička.");
        }, 460);
      }
    }, index * 520);
  });
}

function bindSpeechButtons() {
  document.querySelectorAll("[data-speak]").forEach((button) => {
    button.addEventListener("click", () => speak(button.dataset.speak));
  });
}

function maybeSpeakPrompt(prompt, language) {
  if (!state.shouldSpeakPrompt) return;
  const delay = state.promptDelay || 260;
  state.shouldSpeakPrompt = false;
  setTimeout(() => speak(prompt, language), delay);
}

renderHome();
