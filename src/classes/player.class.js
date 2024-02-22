export class Player {
    constructor() {
        this.playerState = 'idle';
        this.playerImage = new Image();
        this.playerImage.src = './src/sprites/idle.png';
        this.spriteWidth = 128;
        this.spriteHeight = 128;
        this.gameFrame = 0;
        this.staggerFrames = 5;
        this.spriteAnimations = [];
    }

    setPlayerState(state) {
        this.playerState = state;
        this.playerImage.src = `./src/sprites/${this.playerState}.png`;
        this.staggerFrames = this.spriteAnimations[state].staggerFrames;

    }

    setupAnimations(animationStates) {
        animationStates.forEach((state, index) => {
            let frames = { loc: [] };
            for (let j = 0; j < state.frames; j++) {
                let positionX = j * this.spriteWidth;
                let positionY = 0;
                frames.loc.push({ x: positionX, y: positionY });
            }
            frames.staggerFrames = state.staggerFrames;
            this.spriteAnimations[state.name] = frames;  
        });
        this.staggerFrames = this.spriteAnimations[this.playerState].staggerFrames;
    }

    animate(ctx, CANVAS_WIDTH, CANVAS_HEIGHT) {
        ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        let position = Math.floor(this.gameFrame / this.staggerFrames) % this.spriteAnimations[this.playerState].loc.length;
        let frameX = this.spriteWidth * position;

        let frameY;
        if (this.spriteAnimations[this.playerState].loc[position]) {
            frameY = this.spriteAnimations[this.playerState].loc[position].y;
        } else {
            frameY = 0;
        }

        ctx.drawImage(this.playerImage, frameX, frameY, this.spriteWidth, this.spriteHeight, 185, 150, this.spriteWidth, this.spriteHeight);

        this.gameFrame++;
        requestAnimationFrame(() => this.animate(ctx, CANVAS_WIDTH, CANVAS_HEIGHT));
    }
}