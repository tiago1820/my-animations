import { Player } from './classes/player.class.js';
import { UIManager } from './classes/uiManager.class.js';
import { animationData } from './animationData.js';

const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 500;
const CANVAS_HEIGHT = canvas.height = 500;

const player = new Player();
const uiManager = new UIManager(player);

player.setupAnimations(animationData);

player.animate(ctx, CANVAS_WIDTH, CANVAS_HEIGHT);