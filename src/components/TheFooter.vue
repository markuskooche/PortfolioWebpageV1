<template>
    <footer>
        <a href="https://www.github.com/markuskooche/PortfolioWebpage" target="_blank">
            Designed & Built by Markus Koch
        </a>
        <a href="https://www.github.com/bchiang7/v4" target="_blank">
            Inspired by Brittany Chiang
        </a>
    </footer>
</template>

<!-- ----- ----- ----- ----- ----- ----- ----- VUE SCRIPT CONFIGURATION ----- ----- ----- ----- ----- ----- ----- -->

<script>
export default {
    name: 'TheFooter',
}
</script>

<!-- ----- ----- ----- ----- ----- ----- ----- STYLESHEET CONFIGURATION ----- ----- ----- ----- ----- ----- ----- -->

<style lang="scss">
footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: -70px;

    a {
        font-family: var(--font-code);
        font-size: var(--size-sm);

        transition: all 0.6s;
        color: var(--font-color-normal);

        margin-bottom: 8px;
    }

    a:hover {
        transition: all 0.6s;
        color: var(--accent-color);
    }
}
</style>
