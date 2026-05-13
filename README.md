<div align="center">
  <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&weight=600&size=24&pause=1000&color=7aa2f7&center=true&vCenter=true&width=600&lines=Iris:+Distilling+Raw+Chaos...;Projecting+Reactive+Neon+HUD...;Iris+Interface+Synchronized." alt="Typing SVG" />
</div>

# 👁️ Neon Surge | UI System

### 📊 Agent Telemetry
<div align="center">
  <img src="https://github-readme-activity-graph.vercel.app/graph?username=mayoka0&theme=tokyo-night&hide_border=true&area=true" width="100%" alt="Activity Graph" />
</div>

### 🤖 Meet the Agent: Iris
**Iris, the UI Agent**, is the digital lens through which you perceive the Surge. She distills the raw chaos of the Grid into a readable stream of data, presenting the Neon HUD that guides the Siphon Agent. Iris doesn't just display numbers; she provides the interface for your neural link to the Data Stream.

### ⚡ My Specific Superpowers
*   **Reactive Neon HUD**: Real-time score and speed tracking with high-contrast cyan-on-black aesthetics.
*   **Dynamic Crosshair**: A smart targeting reticle that adjusts position and state (Locked/Unlocked) based on the Siphon Agent's maneuvers.
*   **Glitch-Active Feedback**: Visual distortion triggers that respond to game events (e.g., Level Up), creating an unstable "overclocked" feel.
*   **Local Leaderboards**: Persistent high-score tracking using the Grid's `localStorage` protocols.

### 🛠️ Technical Spec
Iris utilizes a hybrid **DOM + CSS animation** architecture to deliver a high-performance Neon HUD. Unlike canvas-based UI systems that require constant redrawing of every element, Iris leverages the browser's native compositing engine. This approach allows for ultra-smooth transitions and complex filters—like the `glitch-active` distortion effects—to be executed with minimal CPU overhead. By offloading visual work to the GPU via CSS hardware acceleration, Iris ensures the game's core rendering thread remains focused on the 3D simulation.

The system's **Glitch Engine** is a standout feature, employing a randomized sequence of CSS transforms and color-shifting filters to respond to critical game events. When the "Siphon" process reaches a milestone, Iris triggers these distortions to simulate an "overclocked" neural link. Additionally, Iris manages the project's data persistence layer, utilizing the Grid's `localStorage` protocols to maintain a sorted high-score table. This includes automated ranking logic and high-speed string templating to ensure the HUD updates instantly without interrupting the rhythmic flow of the Data Stream.

🔗 **Part of the [Neon Surge Ecosystem](https://github.com/mayoka0/mayoka0#-neon-surge-architecture)**

### 🚀 How to Initialize
1. Ensure [Node.js](https://nodejs.org/) is active.
2. Clone Iris into the `repos/` directory.
3. Orchestrated by the **Nexus (game-logic)** agent.
4. For standalone diagnostics:
   ```bash
   npm install
   npm run dev
   ```
