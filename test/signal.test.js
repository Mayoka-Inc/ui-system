import { expect, test, describe, vi } from 'vitest';
import { Signal, batch } from '../js/utils/Signal.js';

// Mock requestAnimationFrame
global.requestAnimationFrame = (callback) => setTimeout(callback, 0);

describe('Signal System', () => {
  test('updates signal value', () => {
    const s = new Signal(10);
    expect(s.value).toBe(10);
    s.value = 20;
    expect(s.value).toBe(20);
  });

  test('subscribes to changes', () => {
    const s = new Signal(0);
    let called = 0;
    s.subscribe(v => { called = v; });
    s.value = 5;
    expect(called).toBe(5);
  });

  test('batches updates', async () => {
    const s1 = new Signal(0);
    const s2 = new Signal(0);
    let s1Called = 0;
    let s2Called = 0;

    s1.subscribe(v => { s1Called++; });
    s2.subscribe(v => { s2Called++; });

    expect(s1Called).toBe(1); // Initial call upon subscription
    expect(s2Called).toBe(1);

    batch(() => {
      s1.value = 1;
      s1.value = 2;
      s2.value = 1;
    });

    // Before animation frame, no additional notifications should have happened
    expect(s1Called).toBe(1);
    expect(s2Called).toBe(1);

    // Wait for mock requestAnimationFrame (setTimeout 0)
    await new Promise(resolve => setTimeout(resolve, 10));

    expect(s1Called).toBe(2); // One more notification after batch
    expect(s2Called).toBe(2);
    expect(s1.value).toBe(2);
    expect(s2.value).toBe(1);
  });
});
