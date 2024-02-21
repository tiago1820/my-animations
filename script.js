import { frameX, frameY } from "./frames.js";

const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 400;
const CANVAS_HEIGHT = canvas.height = 400;

const playerImage = new Image();
playerImage.src = 'fullguile.png';
const spriteWidth = 150;
const spriteHeight = 200;

let currentFrame = 0;
let gameFrame = 0;
const staggerFrames = 5;

const spriteAnimations = [];
const animationStates = [
    {
        name: 'sonicboom',
        frames: 31,
    },
    {
        name: 'fleshkick',
        frames: 0,
    }
];

function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    ctx.drawImage(playerImage, frameX[currentFrame] * spriteWidth,frameY[0] * spriteHeight, spriteWidth, spriteHeight, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    if(gameFrame % staggerFrames == 0){
        if(currentFrame < frameX.length -1) {
            currentFrame++;
        }else {
            currentFrame = 0;
        }
    }

    gameFrame++;
    
    requestAnimationFrame(animate);
};

animate();