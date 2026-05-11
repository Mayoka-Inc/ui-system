export class UIManager {
    constructor() {
        this.scoreElement = document.getElementById('score');
        this.speedElement = document.getElementById('speed');
        this.gameOverElement = document.getElementById('game-over');
        this.finalScoreElement = document.getElementById('final-score');
    }

    updateScore(score) {
        if (this.scoreElement) {
            this.scoreElement.textContent = `SCORE: ${score.toString().padStart(4, '0')}`;
        }
    }

    updateSpeed(speed) {
        if (this.speedElement) {
            this.speedElement.textContent = `SPEED: ${speed.toFixed(1)}x`;
        }
    }

    showGameOver(finalScore) {
        if (this.gameOverElement && this.finalScoreElement) {
            this.finalScoreElement.textContent = `SCORE: ${finalScore}`;
            this.gameOverElement.style.display = 'block';
        }
    }
}
