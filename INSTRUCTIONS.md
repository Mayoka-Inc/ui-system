# Iris | UI System Agent Instructions

## Overview
Iris is a reactive HUD and UI system built with custom signals and DOM-based rendering for high performance.

## Core Components
- `UIManager.js`: Main controller for HUD elements, score tracking, and leaderboards.
- `js/utils/Signal.js`: A lightweight reactivity system for surgical DOM updates.
- `styles.css`: Contains the neon aesthetic and glitch-effect animations.

## Coding Standards
- **Reactivity**: Use `Signal` objects for values that need to be reflected in the UI.
- **Surgical Updates**: Use `surgicalUpdate` to bind signals to DOM elements, avoiding full re-renders.
- **Performance**: Batch multiple signal updates using `batch(() => { ... })`.

## HUD Elements
- `score`: Padded 4-digit score.
- `speed`: Fixed-point speed multiplier.
- `multiplier`: Combo flash effect on change.
- `crosshair`: Dynamic reticle with `locked` state.

## Future Improvements
- [ ] Move overlay creation logic (Menu, Pause) into `UIManager.js`.
- [ ] Implement a full CSS-in-JS or theme variable system for easier palette swapping.
- [ ] Add unit tests for the `Signal` utility.
- [ ] Convert to TypeScript for better type safety of signal values.
