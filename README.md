# 👁️ Neon Surge | UI System

### 🤖 Meet the Agent: Iris
**Iris, the UI Agent**, is the digital lens through which you perceive the Surge. She distills the raw chaos of the Grid into a readable stream of data, presenting the Neon HUD that guides the Siphon Agent. Iris doesn't just display numbers; she provides the interface for your neural link to the Data Stream.

### ⚡ My Specific Superpowers
*   **Reactive Neon HUD**: Real-time score and speed tracking with high-contrast cyan-on-black aesthetics.
*   **Dynamic Crosshair**: A smart targeting reticle that adjusts position and state (Locked/Unlocked) based on the Siphon Agent's maneuvers.
*   **Glitch-Active Feedback**: Visual distortion triggers that respond to game events (e.g., Level Up), creating an unstable "overclocked" feel.
*   **Local Leaderboards**: Persistent high-score tracking using the Grid's `localStorage` protocols.

### 🛠️ Technical Spec
Iris utilizes a hybrid **DOM + CSS animation** approach for maximum performance and visual impact.
- **Glitch Engine**: Employs the `glitch-active` class to trigger randomized CSS transforms and color shifts on the `ui-container`.
- **State Management**: Handles `localStorage` persistence with `neon-surge-high-scores` key, maintaining a sorted top-5 record.
- **HUD Dynamics**: Uses `padStart(4, '0')` for consistent score display and high-speed string templating for the `speedElement`.

### 🌐 The 10-Agent Architecture
Neon Surge is powered by a collaborative network of 10 specialized agents, each mastering a unique domain of the Data Stream.

| Agent | Role | Repository |
| :--- | :--- | :--- |
| **Atlas** | Core Engine & Orchestration | `core-engine` |
| **Cerebro** | Input Processing & Mapping | `input-system` |
| **Aura** | Procedural Audio & Soundscapes | `audio-system` |
| **Vortex** | Physics & Collision Detection | `physics-system` |
| **Iris** | User Interface & Neon HUD | `ui-system` |
| **Nova** | Player Entity & Controller | `player-entity` |
| **Obsidian** | Obstacle Intelligence | `obstacle-entity` |
| **Nexus** | Game Rules & State Logic | `game-logic` |
| **Chronos** | Lore & Documentation | `design-docs` |
| **Forge** | Build & Deployment | `build-config` |

### 🚀 How to Initialize
1. Ensure [Node.js](https://nodejs.org/) is active.
2. Clone Iris into the `repos/` directory.
3. Orchestrated by the **Nexus (game-logic)** agent.
4. For standalone diagnostics:
   ```bash
   npm install
   npm run dev
   ```
