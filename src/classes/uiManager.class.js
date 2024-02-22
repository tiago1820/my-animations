export class UIManager {
    constructor(player) {
        this.dropdown = document.getElementById('animations');
        this.player = player;

        this.dropdown.addEventListener('change', (e) => {
            this.player.setPlayerState(e.target.value);
        });
    }
}