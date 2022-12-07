export const listener = (window, callback) => {
    // console.log("child", window, callback);
    window.onmessage = callback;
}

export const broadcaster = (frame, message) => {
    // console.log("child", frame, message);
    frame.current.contentWindow.postMessage(message, "*");
}