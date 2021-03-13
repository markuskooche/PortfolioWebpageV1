<template>
    <div class="language-box-mobile">
        <h2 class="mobile-name">{{ language }}</h2>
        <a :href="link" target="_blank" class="mobile-click">Visit Now</a>
        <div class="mobile-circle"></div>
        <img :src="file" class="mobile-logo" alt="logo icon">
    </div>
</template>

<!-- ----- ----- ----- ----- ----- ----- ----- VUE SCRIPT CONFIGURATION ----- ----- ----- ----- ----- ----- ----- -->

<script>
export default {
    props: {
        language: {
            type: String,
            required: true
        },
        file: {
            type: String,
            required: true
        },
        link: {
            type: String,
            required: true
        },
    },
    name: 'LanguageMobile'
}
</script>

<!-- ----- ----- ----- ----- ----- ----- ----- STYLESHEET CONFIGURATION ----- ----- ----- ----- ----- ----- ----- -->

<style lang="scss">
.language-box-mobile {
    position: relative;

    height: 340px;
    width: 240px;
    margin: 20px;

    border-radius: 20px;
    border: solid 1px var(--background-shadow);
    background-color: var(--background-accent);

    .mobile-name {
        position: absolute;

        top: 40px;
        left: 0;

        width: 100%;
        text-align: center;
        color: var(--background-opposite);
    }

    .mobile-click {
        position: absolute;
        z-index: 1;

        bottom: 25px;
        left: 50%;

        transform: translateX(-50%);

        color: white;
        padding: 10px 20px;
        border-radius: 30px;
        text-decoration: none;
        background-color: var(--accent-color);
    }

    .mobile-circle {
        position: absolute;

        top: 50%;
        left: 50%;
        height: 180px;
        width: 180px;

        transform: translate(-50%, -50%);

        border-radius: 50%;
        background-color: var(--background-opposite);
        box-shadow: inset 0 0 40px rgba(0, 0, 0, 0.2);
    }

    .mobile-logo {
        position: absolute;

        top: 50%;
        left: 50%;
        width: 120px;

        transform: translate(-50%, -50%);
    }
}

.language-box-mobile::before,
.language-box-mobile::after {
    opacity: 0.04;
    position: absolute;

    left: 50%;
    transform: translateX(-50%);
    transition: 0.5s;

    color: var(--background-opposite);
    font-size: 70px;
    font-weight: 900;
    font-style: italic;
}

.language-box-mobile::before {
    content: 'VIEW';
    top: 15px;
}

.language-box-mobile::after {
    content: 'CODE';
    bottom: 10px;
}
</style>