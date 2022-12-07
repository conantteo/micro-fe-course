export const listener = (window, callback) => {
    // console.log("parent", window, callback);
    window.onmessage = callback;
}

export const broadcaster = (frame, message) => {
    console.log("parent", frame.current.contentWindow, message);
    frame.current.contentWindow.postMessage(message, "*");
}