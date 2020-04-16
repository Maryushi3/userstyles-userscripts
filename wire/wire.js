// disables right Alt (AltGr) hotkeys
document.addEventListener('keydown', function (e) {
    if (e.key === 'AltGraph') {
        e.stopImmediatePropagation();
    }
}, true);
