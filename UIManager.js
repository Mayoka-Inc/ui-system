import { Signal, surgicalUpdate, batch } from './js/utils/Signal.js';

export class UIManager {
    constructor() {
        this.scoreSignal = new Signal(0);
        this.speedSignal = new Signal(1.0);
        this.multiplierSignal = new Signal(1);

        this.scoreElement = document.getElementById('score');
        this.speedElement = document.getElementById('speed');
        this.gameOverElement = document.getElementById('game-over');
        this.finalScoreElement = document.getElementById('final-score');
        this.uiContainer = document.getElementById('ui');
        
        this.highScoreKey = 'neon-surge-high-scores';
        this.maxHighScores = 5;
        
        this.initCrosshair();
        this.initLeaderboard();
        this.initMultiplier();
        this.setupBindings();
    }

    setupBindings() {
        if (this.scoreElement) {
            surgicalUpdate(this.scoreSignal, this.scoreElement, (v) => `SCORE: ${v.toString().padStart(4, '0')}`);
        }
        if (this.speedElement) {
            surgicalUpdate(this.speedSignal, this.speedElement, (v) => `SPEED: ${v.toFixed(1)}x`);
        }
        if (this.multiplierElement) {
            surgicalUpdate(this.multiplierSignal, this.multiplierElement, (v) => `COMBO: x${v}`);
            
            // Add flash effect when multiplier changes
            this.multiplierSignal.subscribe(() => {
                this.multiplierElement.classList.remove('multiplier-flash');
                void this.multiplierElement.offsetWidth;
                this.multiplierElement.classList.add('multiplier-flash');
            });
        }
    }

    initCrosshair() {
        const existing = document.getElementById('crosshair');
        if (existing) {
            this.crosshair = existing;
            return;
        }
        this.crosshair = document.createElement('div');
        this.crosshair.id = 'crosshair';
        const inner = document.createElement('div');
        inner.className = 'crosshair-inner';
        this.crosshair.appendChild(inner);
        document.body.appendChild(this.crosshair);
    }

    updateCrosshair(x, y, isLocked) {
        if (!this.crosshair) return;
        // Assume x, y are pixel values
        this.crosshair.style.left = `${x}px`;
        this.crosshair.style.top = `${y}px`;
        
        if (isLocked) {
            this.crosshair.classList.add('locked');
        } else {
            this.crosshair.classList.remove('locked');
        }
    }

    triggerGlitch() {
        if (this.uiContainer) {
            this.uiContainer.classList.add('glitch-active');
            setTimeout(() => {
                this.uiContainer.classList.remove('glitch-active');
            }, 500);
        }
    }

    /**
     * Batches multiple UI updates into a single frame.
     * @param {Object} updates - Object containing values to update
     */
    batchUpdate(updates) {
        batch(() => {
            if (updates.score !== undefined) this.scoreSignal.value = updates.score;
            if (updates.speed !== undefined) this.speedSignal.value = updates.speed;
            if (updates.multiplier !== undefined) this.multiplierSignal.value = updates.multiplier;
        });
    }

    updateScore(score) {
        this.scoreSignal.value = score;
    }

    updateSpeed(speed) {
        this.speedSignal.value = speed;
    }

    initMultiplier() {
        const existing = document.getElementById('multiplier');
        if (existing) {
            this.multiplierElement = existing;
            return;
        }
        this.multiplierElement = document.createElement('div');
        this.multiplierElement.id = 'multiplier';
        this.multiplierElement.textContent = 'COMBO: x1';
        document.body.appendChild(this.multiplierElement);
    }

    updateMultiplier(multiplier) {
        this.multiplierSignal.value = multiplier;
    }

    saveHighScore(score) {
        let scores = this.getHighScores();
        scores.push({ score, date: new Date().toISOString() });
        scores.sort((a, b) => b.score - a.score);
        scores = scores.slice(0, this.maxHighScores);
        localStorage.setItem(this.highScoreKey, JSON.stringify(scores));
    }

    getHighScores() {
        const scores = localStorage.getItem(this.highScoreKey);
        return scores ? JSON.parse(scores) : [];
    }

    initLeaderboard() {
        const existing = document.getElementById('leaderboard');
        if (existing) {
            this.leaderboardElement = existing;
            return;
        }
        this.leaderboardElement = document.createElement('div');
        this.leaderboardElement.id = 'leaderboard';
        if (this.gameOverElement) {
            this.gameOverElement.appendChild(this.leaderboardElement);
        }
    }

    updateLeaderboardUI() {
        const scores = this.getHighScores();
        let html = '<h3>TOP SCORES</h3>';
        scores.forEach((s, i) => {
            html += `<div class="leaderboard-entry">#${i + 1} - ${s.score.toString().padStart(4, '0')}</div>`;
        });
        this.leaderboardElement.innerHTML = html;
    }

    showGameOver(finalScore) {
        if (this.gameOverElement && this.finalScoreElement) {
            this.finalScoreElement.textContent = `SCORE: ${finalScore}`;
            this.saveHighScore(finalScore);
            this.updateLeaderboardUI();
            this.gameOverElement.style.display = 'block';
        }
    }
}
