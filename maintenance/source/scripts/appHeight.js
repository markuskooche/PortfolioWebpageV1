const appHeight = () => {
    const root = document.documentElement;
    root.style.setProperty('--app-height', `${window.innerHeight}px`);
}

window.addEventListener('resize', appHeight);
appHeight();