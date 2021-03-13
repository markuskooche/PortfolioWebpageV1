<template>
    <div class="language-box" v-tilt>
        <h2 class="name">{{ language }}</h2>
        <a :href="link" target="_blank" class="click">Visit Now</a>
        <div class="circle"></div>
        <img :src="file" class="logo" alt="logo icon">
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
    name: 'Language'
}
</script>

<!-- ----- ----- ----- ----- ----- ----- ----- STYLESHEET CONFIGURATION ----- ----- ----- ----- ----- ----- ----- -->

<style lang="scss">
.language-box {
    position: relative;
    transform-style: preserve-3d;

    height: 340px;
    width: 240px;
    margin: 20px;

    border-radius: 20px;
    border: solid 1px var(--background-shadow);
    background-color: var(--background-accent);

    .name {
        opacity: 0;
        position: absolute;

        top: 0;
        left: 0;

        width: 100%;
        text-align: center;
        color: var(--background-opposite);

        transition: 0.5s;
        transform-style: preserve-3d;
        transform: translate3d(0, 0, 50px);
    }

    .click {
        opacity: 0;
        position: absolute;

        bottom: 0;
        left: 50%;

        transition: 0.5s;
        transform-style: preserve-3d;
        transform: translate3d(-50%, 0, 75px);

        color: white;
        padding: 10px 20px;
        border-radius: 30px;
        text-decoration: none;
        background-color: var(--accent-color);
    }

    .circle {
        position: absolute;

        top: 50%;
        left: 50%;
        height: 180px;
        width: 180px;

        transition: 0.5s;
        transform-style: preserve-3d;
        transform: translate3d(-50%, -50%, 50px);

        border-radius: 50%;
        background-color: var(--background-opposite);
        box-shadow: inset 0 0 40px rgba(0, 0, 0, 0.2);
    }

    .logo {
        position: absolute;

        top: 50%;
        left: 50%;
        width: 120px;

        transition: 0.5s;
        transform-style: preserve-3d;
        transform: translate3d(-50%, -50%, 100px);
    }
}

.language-box:hover {
    .name {
        top: 40px;
        opacity: 1;
    }

    .click {
        bottom: 25px;
        opacity: 1;
    }

    .click:hover {
        filter: brightness(125%);

        @media (prefers-color-scheme: dark) {
            filter: brightness(75%);
        }
    }
}

.language-box::before,
.language-box::after {
    opacity: 0;
    position: absolute;

    left: 50%;
    transform-style: preserve-3d;
    transform: translate3d(-50%, 0, 20px);
    transition: 0.5s;

    color: var(--background-opposite);
    font-size: 70px;
    font-weight: 900;
    font-style: italic;
}

.language-box::before {
    content: 'VIEW';
    top: 15px;
}

.language-box::after {
    content: 'CODE';
    bottom: 10px;
}

.language-box:hover::before,
.language-box:hover::after {
    opacity: 0.05;
}
</style>