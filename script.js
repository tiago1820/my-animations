class Player {
    constructor() {
        this.playerState = 'idle';
        this.playerImage = new Image();
        this.playerImage.src = './sprites/idle.png';
        this.dropdown = document.getElementById('animations');
        this.canvas = document.getElementById('canvas1');
        this.ctx = this.canvas.getContext('2d');
        this.CANVAS_WIDTH = this.canvas.width = 500;
        this.CANVAS_HEIGHT = this.canvas.height = 500;
        this.spriteWidth = 128;
        this.spriteHeight = 128;
        this.gameFrame = 0;
        this.staggerFrames = 5;
        this.spriteAnimations = [];

        this.animationStates = [
            { name: 'idle', frames: 5 },
            { name: 'run', frames: 8 },
            { name: 'hurt', frames: 2 },
            { name: 'dead', frames: 5 },
            { name: 'jump', frames: 8 },
            { name: 'attack1', frames: 6 },
            { name: 'attack2', frames: 3 },
            { name: 'attack3', frames: 3 },
            { name: 'attack4', frames: 10 },
            { name: 'walk', frames: 8 }
        ];

        this.dropdown.addEventListener('change', (e) => {
            this.playerState = e.target.value;
            this.playerImage.src = `./sprites/${this.playerState}.png`;
        });

        this.animationStates.forEach((state, index) => {
            let frames = { loc: [] };
            for (let j = 0; j < state.frames; j++) {
                let positionX = j * this.spriteWidth;
                let positionY = 0;
                frames.loc.push({ x: positionX, y: positionY });
            }
            this.spriteAnimations[state.name] = frames;
        });
    }

    animate() {
        this.ctx.clearRect(0, 0, this.CANVAS_WIDTH, this.CANVAS_HEIGHT);
        let position = Math.floor(this.gameFrame / this.staggerFrames) % this.spriteAnimations[this.playerState].loc.length;
        let frameX = this.spriteWidth * position;

        let frameY;
        if (this.spriteAnimations[this.playerState].loc[position]) {
            frameY = this.spriteAnimations[this.playerState].loc[position].y;
        } else {
            frameY = 0;
        }

        this.ctx.drawImage(this.playerImage, frameX, frameY, this.spriteWidth, this.spriteHeight, 185, 150, this.spriteWidth, this.spriteHeight);

        this.gameFrame++;
        requestAnimationFrame(() => this.animate());
    }
}

const player = new Player();
player.animate();