let playerState = 'idle';
let playerImage = new Image();
playerImage.src = 'idle.png';

const dropdown = document.getElementById('animations');
dropdown.addEventListener('change', function (e) {
    playerState = e.target.value;
    playerImage.src = `${playerState}.png`;
});

const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 500;
const CANVAS_HEIGHT = canvas.height = 500;

const spriteWidth = 128;
const spriteHeight = 128;

let gameFrame = 0;
const staggerFrames = 5;
const spriteAnimations = [];
const animationStates = [
    {
        name: 'idle',
        frames: 5,
    },
    {
        name: 'run',
        frames: 8
    },
    {
        name: 'hurt',
        frames: 2
    },
    {
        name: 'dead',
        frames: 5
    },
    {
        name: 'jump',
        frames: 8
    },
    {
        name: 'attack1',
        frames: 6
    },
    {
        name: 'attack2',
        frames: 3
    },
    {
        name: 'attack3',
        frames: 3
    },
    {
        name: 'attack4',
        frames: 10
    },
    {
        name: 'walk',
        frames: 8
    }
];



animationStates.forEach((state, index) => {
    let frames = {
        loc: [],
    }
    for (let j = 0; j < state.frames; j++) {
        let positionX = j * spriteWidth;
        // let positionY = index * spriteHeight;
        let positionY = 0;
        frames.loc.push({ x: positionX, y: positionY });
    }
    spriteAnimations[state.name] = frames;
});

function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    let position = Math.floor(gameFrame / staggerFrames) % spriteAnimations[playerState].loc.length;
    let frameX = spriteWidth * position;

    let frameY;
    if (spriteAnimations[playerState].loc[position]) {
        frameY = spriteAnimations[playerState].loc[position].y;
    } else {
        frameY = 0;
    }

    
    // let frameY = spriteAnimations[playerState].loc[position].y;
    ctx.drawImage(playerImage, frameX, frameY, spriteWidth, spriteHeight, 185, 150, spriteWidth, spriteHeight);

    gameFrame++;
    requestAnimationFrame(animate);
};

animate();