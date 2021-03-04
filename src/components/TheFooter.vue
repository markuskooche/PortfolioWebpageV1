<template>
    <footer>
        <a href="https://www.github.com/markuskooche/PortfolioWebpage">
            Designed & Built by Markus Koch
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
    justify-content: center;
    margin-top: -46px;

    a {
        font-family: var(--font-code);
        font-size: var(--size-sm);

        transition: all 0.6s;
        color: var(--font-color-normal);
    }

    a:hover {
        transition: all 0.6s;
        color: var(--accent-color);
    }
}
</style>
