# 🖥️ Neon Surge | UI System

### 🤖 Meet the Agent: Vivid
**Vivid, the UI Agent**, is the flashy, energetic face of the simulation. Obsessed with aesthetics and clarity, Vivid ensures the player is never lost in the neon void. She bridges the gap between raw data and human perception with style and precision, turning cold numbers into a pulsing, interactive HUD.

### ⚡ Superpowers
*   **Neon HUD**: Dynamic, semi-transparent overlays with real-time stat tracking and high-contrast visuals.
*   **Glitch Effects**: Aesthetic visual disruptions that react to player damage or high-speed maneuvers for immersive feedback.
*   **Leaderboard Integration**: Real-time Data-Stream rankings to track the fastest runners across the grid.
*   **Reactive Scoreboard**: Instantaneous feedback loops for score multipliers, distance tracking, and combo streaks.

### 🌐 The 10-Agent Architecture
Neon Surge is powered by a collaborative network of 10 specialized agents, each mastering a unique domain of the Data Stream.

| Agent | Role | Repository |
| :--- | :--- | :--- |
| **The Heart** | Core Engine & Orchestration | `core-engine` |
| **The Senses** | Input Processing & Mapping | `input-system` |
| **The Voice** | Procedural Audio & Soundscapes | `audio-system` |
| **The Laws** | Physics & Collision Detection | `physics-system` |
| **The Face** | User Interface & Neon HUD | `ui-system` |
| **The Hero** | Player Entity & Controller | `player-entity` |
| **The Hazard** | Obstacle Intelligence | `obstacle-entity` |
| **The Mastermind** | Game Rules & State Logic | `game-logic` |
| **The Blueprint** | Lore & Documentation | `design-docs` |
| **The Architect** | Build & Deployment | `build-config` |

### 🛠️ How to Run
1. Ensure you have [Node.js](https://nodejs.org/) installed.
2. Clone this agent into the `repos/` directory.
3. This agent is typically orchestrated by the [build-config](https://github.com/mayoka0/build-config) agent.
4. To run standalone tests:
   ```bash
   npm install
   npm run dev
   ```
