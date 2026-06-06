// ---------- HEARTFELT MESSAGE ----------
const fullMessage = `Lila,

I've been wanting to say this for a while, but words are hard. So I built this little page for you — with music, floating hearts, and some silly jokes. 

The truth is: you have a special kind of magic. When you smile, the whole room feels brighter. When you laugh, it's like music. And when you just quietly exist, somehow everything feels better.

I don't know what the future holds, but I know one thing: I'm really glad you're in my life. No drama, no big speech — just a fact. You're amazing, Lila.

Thank you for being you. Every single day. 💗

Now... here's something to make you smile even more. ↓`;

const signatureLine = `— from someone who thinks you're absolutely wonderful ✨`;

// ---------- 8 FLIRTING JOKES (easy English, about Lila) ----------
const jokes = [
    "Are you made of gold? Because every time I see you, my day becomes valuable. 😄",
    "Lila, is your name Google? Because you have everything I'm searching for. 🔍",
    "Do you have a map? I keep getting lost in your smile. 🗺️",
    "If you were a vegetable, you'd be a cute-cumber! 🥒",
    "Is your dad a baker? Because you're a cutie pie! 🥧",
    "Lila, you must be a star — because the night looks better when you're around. ✨",
    "Do you like raisins? How about a date? 😉 (Just kidding... unless?)",
    "I was going to make a joke about you... but I'm afraid it would be too lovely. 🌸"
];

let jokeIndex = 0;
let musicStarted = false;
const audio = document.getElementById('bgMusic');
const revealBtn = document.getElementById('revealBtn');
const resetBtn = document.getElementById('resetBtn');
const messageBox = document.getElementById('messageBox');
const jokesBox = document.getElementById('jokesBox');
const typingDiv = document.getElementById('typingMessage');
const signatureDiv = document.getElementById('signature');
const questionText = document.getElementById('questionText');
const jokeDisplay = document.getElementById('jokeDisplay');
const nextJokeBtn = document.getElementById('nextJokeBtn');
const musicStatus = document.getElementById('musicStatus');

let floatInterval = null;

// Floating hearts/flowers
function createFloat() {
    const el = document.createElement('div');
    el.classList.add('float-item');
    const icons = ['❤️', '💖', '🌸', '✨', '💕', '🌹', '🌸 L 🌸', '🎵'];
    el.innerHTML = icons[Math.floor(Math.random() * icons.length)];
    el.style.left = Math.random() * 100 + '%';
    el.style.fontSize = (Math.random() * 1.6 + 1.2) + 'rem';
    const duration = Math.random() * 5 + 5;
    el.style.animationDuration = duration + 's';
    el.style.opacity = Math.random() * 0.6 + 0.3;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), duration * 1000);
}

function startFloating(sec = 20) {
    if (floatInterval) clearInterval(floatInterval);
    floatInterval = setInterval(createFloat, 500);
    setTimeout(() => {
        if (floatInterval) clearInterval(floatInterval);
        floatInterval = null;
    }, sec * 1000);
}

function stopFloating() {
    if (floatInterval) clearInterval(floatInterval);
    document.querySelectorAll('.float-item').forEach(e => e.remove());
}

function typeMessage(text, element, callback) {
    let i = 0;
    element.innerHTML = '';
    function add() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(add, 25);
        } else if (callback) callback();
    }
    add();
}

// Start music (called after user clicks reveal)
function startMusic() {
    if (!musicStarted) {
        audio.play().then(() => {
            musicStarted = true;
            musicStatus.innerHTML = "🎵 A Thousand Years (Piano) is playing 🎵";
        }).catch(e => {
            musicStatus.innerHTML = "🎵 Click the play button if music doesn't start automatically 🎵";
        });
    }
}

function showNextJoke() {
    jokeDisplay.innerHTML = jokes[jokeIndex % jokes.length];
    jokeIndex++;
    jokeDisplay.style.transform = "scale(1.02)";
    setTimeout(() => jokeDisplay.style.transform = "", 200);
}

function revealEverything() {
    startMusic();
    stopFloating();
    startFloating(30);
    
    messageBox.style.display = 'block';
    jokesBox.style.display = 'none';
    typingDiv.innerHTML = '';
    signatureDiv.innerHTML = '';
    
    typeMessage(fullMessage, typingDiv, () => {
        setTimeout(() => {
            signatureDiv.innerHTML = signatureLine;
            signatureDiv.style.opacity = '0';
            signatureDiv.style.transition = 'opacity 0.5s';
            setTimeout(() => signatureDiv.style.opacity = '1', 30);
        }, 200);
        // after message is fully typed, show jokes box
        setTimeout(() => {
            jokesBox.style.display = 'block';
            jokeIndex = 0;
            showNextJoke();
        }, 800);
    });
    
    questionText.innerHTML = '💗 For you, Lila 💗';
    revealBtn.style.display = 'none';
    resetBtn.style.display = 'inline-block';
}

function resetAll() {
    stopFloating();
    audio.pause();
    audio.currentTime = 0;
    musicStarted = false;
    musicStatus.innerHTML = "🎵 A Thousand Years (Piano) will play when you open 💖";
    
    messageBox.style.display = 'none';
    jokesBox.style.display = 'none';
    typingDiv.innerHTML = '';
    signatureDiv.innerHTML = '';
    questionText.innerHTML = 'Lila... I made something just for you 💌';
    revealBtn.style.display = 'inline-block';
    resetBtn.style.display = 'none';
    
    // restart gentle floating
    for (let i=0; i<6; i++) setTimeout(createFloat, i*300);
}

// Event listeners
revealBtn.addEventListener('click', revealEverything);
resetBtn.addEventListener('click', resetAll);
nextJokeBtn.addEventListener('click', showNextJoke);

// Initial gentle floating
for (let i=0; i<8; i++) setTimeout(createFloat, i*250);
const manualPlayBtn = document.getElementById('manualPlayBtn');
if (manualPlayBtn) {
    manualPlayBtn.addEventListener('click', () => {
        audio.play().then(() => {
            musicStatus.innerHTML = "🎵 A Thousand Years (Piano) is playing 🎵";
        }).catch(e => console.log("Play error:", e));
    });
}
