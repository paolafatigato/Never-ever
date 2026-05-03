let players = [];
let phase = "welcome";
let currentSentence = null;
let activePlayer = null;
let timer = null;
let timeLeft = 8;
let candidates = [];
let storyteller = null;
let showInfinitive = false;
let timerRunning = false;
let unusedSentences = [];



const screen = document.getElementById("screen");
// Toggle sidebar - inserisci dopo la riga: const screen = document.getElementById("screen");
const sidebar = document.getElementById('sidebar');
const toggleBtn = document.getElementById('toggleSidebar');
const instructionsBtn = document.getElementById("instructionsBtn");
const instructionsModal = document.getElementById("instructionsModal");

instructionsBtn.addEventListener("click", openInstructions);

toggleBtn.addEventListener('click', () => {
  sidebar.classList.toggle('hidden');
  toggleBtn.textContent = sidebar.classList.contains('hidden') ? '<' : '>';
});

function newGame() {
  players.forEach(p => {
    p.lives = 2;
    p.eliminated = false;
  });

  unusedSentences = [];
  candidates = [];
  storyteller = null;
  showInfinitive = false;
  timerRunning = false;
  clearInterval(timer);

  phase = "welcome";
  render();
}

const newGameBtn = document.getElementById("newGameBtn");
newGameBtn.addEventListener("click", newGame);

function render() {
  renderPlayers();
  renderScreen();
}

function renderScreen() {
  if (phase === "welcome") {
    screen.innerHTML = `
      <div class="big">Add players and start</div>
      <button onclick="startRound()">Start</button>
    `;
  }

if (phase === "verb") {
  screen.innerHTML = `
    <p class="active-player-label">🎯 ${activePlayer.name}</p>
    <div class="verb-wrapper">
      ${getVerbImageHTML(currentSentence.infinitive)}

      <div class="big">
        Never have I ever ___ ${currentSentence.complement}
      </div>
    </div>

    ${
      showInfinitive
        ? `<p style="font-size:1.5rem">
             Verb: <strong>${currentSentence.infinitive}</strong>
           </p>`
        : `<button onclick="revealInfinitive()">Show infinitive</button>`
    }

    ${
      timerRunning
        ? `<div class="timer">${timeLeft}</div>
           <button onclick="checkAnswer()">Check</button>`
        : `<button onclick="startTimerManual()">Start timer</button>`
    }
  `;
}

if (phase === "hands") {
  screen.innerHTML = `
    <div class="big">
      Who has done it?
    </div>

    <p>Teacher: click on students who raised their hand</p>

<div class="candidates-grid">
  ${players
    .filter(p => !p.eliminated)
    .map(p => `
      <button 
        class="candidate-btn ${candidates.includes(p.id) ? 'selected' : ''}"
        onclick="toggleCandidate(${p.id})">
        ${candidates.includes(p.id) ? '✋ ' : ''}${p.name}
      </button>
    `).join("")}
</div>
<br><br>
    <div style="display:flex; gap:1rem; justify-content:center; flex-wrap:wrap">
      <button onclick="pickStoryteller()">
        Pick storyteller
      </button>
      <button class="skip-btn" onclick="skipHands()">Skip ⏭</button>
    </div>
  `;
}


if (phase === "story") {
  screen.innerHTML = `
    <div class="big">${storyteller.name}</div>
    <p style="font-size:1.3rem; color: var(--orange-accent); font-weight: 700;">
      🎤 Selected Storyteller
    </p>
    <p>Tell the experience</p>
    <button onclick="storyResult(true)">Good (+1)</button>
    <button onclick="storyResult(false)">Fail (-2)</button>
    <button class="skip-btn" onclick="skipStory()">Skip ⏭</button>
  `;
}

if (phase === "answer-shown") {
  screen.innerHTML = `
    <div class="big">
      Never have I ever 
      <span style="color:#16a34a">
        ${currentSentence.participle}
      </span> 
      ${currentSentence.complement}
    </div>

    <p style="margin-top:1rem;font-size:1.3rem">
      Verb: <strong>${currentSentence.infinitive} → ${currentSentence.participle}</strong>
    </p>

    <p style="margin-top:1.5rem;font-size:1.2rem">
      ${activePlayer.name}'s answer
    </p>

    <div style="display:flex; gap:2rem; margin-top:2rem">
      <button onclick="answerOk()">✅ OK</button>
      <button onclick="answerWrong()">❌</button>
    </div>
  `;
}

if (phase === "story-result") {
  screen.innerHTML = `
    <div class="big">
      Story evaluated
    </div>

    <button style="margin-top:2rem" onclick="startRound()">
      Next round
    </button>
  `;
}



}

function startRound() {
  const alive = players.filter(p => !p.eliminated);
  if (!alive.length) return;

currentSentence = getRandomSentence();

  activePlayer = alive[Math.floor(Math.random() * alive.length)];

  showInfinitive = false;
  timerRunning = false;
  timeLeft = 7;

  phase = "verb";
  render();
}

function getRandomSentence() {
  // se è vuoto, ricarica tutte le frasi
  if (unusedSentences.length === 0) {
    unusedSentences = [...sentences];
  }

  const index = Math.floor(Math.random() * unusedSentences.length);
  return unusedSentences.splice(index, 1)[0];
}

function getVerbImageHTML(verb) {
  const imgPath = `img/${verb}.png`;

  return `
    <img 
      src="${imgPath}" 
      class="verb-image"
      onerror="this.remove()"
      alt="${verb}"
    >
  `;
}

function startTimerManual() {
  if (timerRunning) return;

  timerRunning = true;
  startTimer();
  render();
}


function startTimer() {
  clearInterval(timer);

  timer = setInterval(() => {
    timeLeft--;

    if (timeLeft === 0) {
      clearInterval(timer);
      phase = "answer-shown";
      render();
    } else {
      render();
    }
  }, 1000);
}


function revealInfinitive() {
  showInfinitive = true;
  render();
}


function checkAnswer() {
  clearInterval(timer);
  timerRunning = false;
  phase = "answer-shown";
  render();
}


function answerOk() {
  phase = "hands";
  render();
}

function answerWrong() {
  loseLife(activePlayer.id);
  phase = "hands";
  render();
}


function toggleCandidate(id) {
  candidates.includes(id)
    ? candidates = candidates.filter(x => x !== id)
    : candidates.push(id);
  render();
}


function startHandsUp() {
  candidates = [];
  phase = "hands";
  render();
}


function pickStoryteller() {
  if (!candidates.length) return;

  storyteller = players.find(
    p => p.id === candidates[Math.floor(Math.random() * candidates.length)]
  );

  phase = "story";
  render();
}


function skipStory() {
  candidates = [];
  storyteller = null;
  startRound();
}

function skipHands() {
  candidates = [];
  startRound();
}

function storyResult(success) {
  const raisedHands = [...candidates];

  if (success) {
    gainLife(storyteller.id);
  } else {
    loseLife(storyteller.id, 2);
  }

  raisedHands
    .filter(id => id !== storyteller.id)
    .forEach(id => gainLife(id));

  candidates = [];
  phase = "story-result";
  render();
}


function gainLife(id) {
  const p = players.find(p=>p.id===id);
  if (p) p.lives = Math.min(5, p.lives+1);
}

function loseLife(id, n=1) {
  const p = players.find(p=>p.id===id);
  if (!p) return;
  p.lives = Math.max(0, p.lives-n);
  if (p.lives===0) p.eliminated=true;
}

function addPlayer() {
  const name = document.getElementById("playerName").value.trim();
  if (!name) return;
  players.push({id:Date.now(), name, lives:2, eliminated:false});
  render();
}

function addNumbered() {
  const from = +document.getElementById("fromN").value;
  const to = +document.getElementById("toN").value;
  for (let i=from;i<=to;i++) {
    players.push({id:Date.now()+i, name:`Player ${i}`, lives:2, eliminated:false});
  }
  render();
}

function renderPlayers() {
  const list = document.getElementById("playerList");
  list.innerHTML = "";
  players.forEach(p => {
    const div = document.createElement("div");
    
    let className = "player";
    if (p.id === activePlayer?.id) className += " active";
    if (p.eliminated) className += " eliminated";
    if (storyteller && p.id === storyteller.id) className += " storyteller";
    
    div.className = className;
   div.innerHTML = `
  <div class="player-header">
    <input 
      class="player-name-input"
      type="text"
      value="${p.name}"
      oninput="updatePlayerName(${p.id}, this.value)"
    />
    <button 
      class="remove-player-btn"
      onclick="removePlayer(${p.id})"
      aria-label="Remove player"
    >✕</button>
  </div>

  <div class="lives">
    ${[0,1,2,3,4].map(i =>
      `<div 
        class="life ${i >= p.lives ? 'lost' : ''}"
        onclick="toggleLife(${p.id}, ${i})"
      ></div>`
    ).join("")}
  </div>
`;

    list.appendChild(div);
  });
}

function toggleLife(playerId, index) {
  const player = players.find(p => p.id === playerId);
  if (!player) return;

  if (index < player.lives) {
    // clic su vita attiva → togli
    player.lives--;
  } else {
    // clic su vita persa → aggiungi
    player.lives++;
  }

  player.lives = Math.max(0, Math.min(5, player.lives));
  player.eliminated = player.lives === 0;

  render();
}


function updatePlayerName(id, newName) {
  const player = players.find(p => p.id === id);
  if (!player) return;

  player.name = newName.trim() || player.name;
}

function removePlayer(id) {
  // rimuovi da players
  players = players.filter(p => p.id !== id);

  // pulizia stato
  if (activePlayer?.id === id) activePlayer = null;
  if (storyteller?.id === id) storyteller = null;
  candidates = candidates.filter(cid => cid !== id);

  // se non restano giocatori attivi, torna al welcome
  if (!players.filter(p => !p.eliminated).length) {
    phase = "welcome";
  }

  render();
}


screen.addEventListener("click", () => {
  if (window.innerWidth <= 768 && !sidebar.classList.contains("hidden")) {
    sidebar.classList.add("hidden");
  }
});


function openInstructions() {
  instructionsModal.classList.remove("hidden");
}

function closeInstructions() {
  instructionsModal.classList.add("hidden");
}


render();
