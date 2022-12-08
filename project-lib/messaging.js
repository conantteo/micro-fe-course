export const listener = (window, callback) => {
    window.onmessage = callback;
}

export const broadcaster = (frame, message) => {
    frame.current.contentWindow.postMessage(message, "*");
}