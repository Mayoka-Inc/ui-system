/**
 * Minimal Signal-based reactivity system for fine-grained DOM updates.
 */
export class Signal {
    constructor(value) {
        this._value = value;
        this._subscribers = new Set();
    }

    get value() {
        return this._value;
    }

    set value(newValue) {
        if (this._value !== newValue) {
            this._value = newValue;
            this.notify();
        }
    }

    /**
     * Subscribe to value changes.
     * @param {Function} fn - Callback function
     * @returns {Function} Unsubscribe function
     */
    subscribe(fn) {
        this._subscribers.add(fn);
        fn(this._value);
        return () => this._subscribers.delete(fn);
    }

    notify() {
        for (const fn of this._subscribers) {
            fn(this._value);
        }
    }
}

/**
 * Surgically binds a signal to a specific DOM text node.
 * Bypasses virtual DOM concepts by directly updating nodeValue.
 * 
 * @param {Signal} signal - The signal to watch
 * @param {HTMLElement} element - The parent element
 * @param {Function} formatter - Optional formatter for the value
 */
export function surgicalUpdate(signal, element, formatter = (v) => v) {
    // Ensure we have a single text node for surgical updates
    let textNode;
    if (element.childNodes.length === 1 && element.firstChild.nodeType === 3) {
        textNode = element.firstChild;
    } else {
        element.textContent = '';
        textNode = document.createTextNode('');
        element.appendChild(textNode);
    }

    return signal.subscribe(val => {
        textNode.nodeValue = formatter(val);
    });
}
