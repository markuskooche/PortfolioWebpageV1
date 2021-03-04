<template>
    <header id="header">
        <h1>Hi, my name is</h1>
        <h2>Markus Koch</h2>
        <h3 id="description">I'm a software engineer.</h3>
        <div class="text-area">
            <p>I am a software engineer from Bavaria, DE. I live as minimalistic as possible and strive to transfer this simplicity to my software projects. That's why I try to make my programs as easy to use as possible and remove unnecessary design elements.<!-- I like to develop games, as well as programs to make everyday life easier. --></p>
        </div>
        <div>
            <a href="mailto:markuskoch.96@icloud.com?subject=Get%20in%20Touch" class="retro-btn">Get in Touch</a>
        </div>
    </header>
</template>

<!-- ----- ----- ----- ----- ----- ----- ----- VUE SCRIPT CONFIGURATION ----- ----- ----- ----- ----- ----- ----- -->

<script>
export default {
    name: "TheHeader"
}
</script>

<!-- ----- ----- ----- ----- ----- ----- ----- STYLESHEET CONFIGURATION ----- ----- ----- ----- ----- ----- ----- -->

<style lang="scss">
header {
    h1 {
        font-family: var(--font-code);
        font-size: var(--font-md);
        color: var(--accent-color);
        margin-bottom: 20px;
    }

    h2 {
        font-family: var(--font-mark);
        font-size: clamp(40px, 8vw, 80px);
        color: var(--font-color-accent);
    }

    h3 {
        font-family: var(--font-mark);
        font-size: clamp(40px, 8vw, 80px);
        margin-bottom: 20px;
    }

    .text-area {
        display: grid;
        grid-template-columns: 75% 25%;

        p {
            grid-column-start: 1;
            grid-column-end: 2;
            margin-bottom: 60px;
            text-align: justify;
        }
    }
}

@media (min-width: 765px) {
    header .text-area {
        grid-template-columns: 75% 25%;
    }
}

@media (max-width: 764px) {
    header .text-area {
        grid-template-columns: 100%;
    }
}

@media (max-height: 560px) {
    header {
        padding: 80px 0;
    }
}
</style>