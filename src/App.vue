<template>
    <div id="app">
        <TheNavigation />
        <TheSliders />
        <router-view />
        <TheFooter />
    </div>
</template>

<!-- ----- ----- ----- ----- ----- ----- ----- VUE SCRIPT CONFIGURATION ----- ----- ----- ----- ----- ----- ----- -->

<script>
import TheNavigation from '@/components/TheNavigation';
import TheSliders from '@/components/TheSliders';
import TheFooter from '@/components/TheFooter';

export default {
    beforeCreate() {
        const appHeight = () => {
            const root = document.documentElement;
            root.style.setProperty('--app-height', `${window.innerHeight}px`);
        }
        window.addEventListener('resize', appHeight);
        appHeight();
    },

    name: 'App',
    components: {
        TheNavigation,
        TheSliders,
        TheFooter,
    },
}
</script>

<!-- ----- ----- ----- ----- ----- ----- ----- STYLESHEET CONFIGURATION ----- ----- ----- ----- ----- ----- ----- -->

<style lang="scss">
@font-face {
    font-family: 'Averta Bold';
    src: url('./assets/fonts/Averta/Averta-Bold.ttf') format('truetype');
}

@font-face {
    font-family: 'Averta Light';
    src: url('./assets/fonts/Averta/Averta-Light.ttf') format('truetype');
}

@font-face {
    font-family: 'SFMono Regular';
    src: url('./assets/fonts/SFMono/SFMono-Regular.ttf') format('truetype');
}

:root {
    --app-height: 100%;

    --font-mark: 'Averta Bold';
    --font-text: 'Averta Light';
    --font-code: 'SFMono Regular';

    --size-sm: 14px;
    --size-md: 16px;
    --size-lg: 20px;
    --size-xl: 24px;

    --headline-sm: 30px;
    --headline-md: 40px;
    --headline-lg: 80px;

    --header-scroll-color: rgba(250, 250, 250, 0.85);
    --background-shadow: #EBECED;
    --background-normal: #FAFAFA;
    --background-accent: #F1F4FA;
    --background-opposite: #283446;

    --timeline-color: #B7BEC6;
    --timeline-opposite-color: #616A77;

    --font-color-normal: #515D6E;
    --font-color-accent: #2D3845;

    --accent-color: #009B8D;
    --accent-hover: #E3F1F0;
}

@media (prefers-color-scheme: dark) {
    :root {
        --header-scroll-color: rgba(21, 30, 44, 0.85);
        --background-shadow: #131B28;
        --background-normal: #151E2C;
        --background-accent: #283446;
        --background-opposite: #F1F4FA;

        --timeline-color: #616A77;
        --timeline-opposite-color: #B7BEC6;

        --font-color-normal: #C6C8CD;
        --font-color-accent: #F7F7F7;

        --accent-color: #70E8D2;
        --accent-hover: #1D303B;
    }
}

* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}

body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    background-color: var(--background-normal);
    color: var(--font-color-normal);
    font-family: var(--font-text);
}

a {
    text-decoration: none;
}

header, section {
    min-height: var(--app-height);
    width: 1000px;
    margin: auto;

    display: flex;
    flex-direction: column;
    justify-content: center;
}

@media (max-width: 1260px) {
    header, section {
        width: auto;
        margin: 0 120px;
    }
}

@media (max-width: 1080px) {
    header, section {
        width: auto;
        margin: 0 90px;
    }
}

@media (max-width: 956px) {
    header, section {
        width: auto;
        margin: 0 80px;
    }
}

//768 alles abschalten
@media (max-width: 768px) {
    header, section {
        width: auto;
        margin: 0 40px;
    }
}

@media (max-width: 546px) {
    header, section {
        width: auto;
        margin: 0 20px;
    }
}

.retro-btn {
    transition: all 0.5s;
    padding: 18px 30px;
    font-family: var(--font-code);
    font-size: var(--font-lg);
    color: var(--accent-color);
    border: 1px solid var(--accent-color);
    border-radius: 6px;
}

.retro-btn:hover {
    transition: all 0.5s;
    background-color: var(--accent-hover);
    box-shadow: inset 0 0 5px var(--accent-color), 2px 2px 8px var(--accent-color);
}
</style>