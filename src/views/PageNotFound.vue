<template>
    <section id="error">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <a href="/" class="retro-btn">Go Home</a>
    </section>
</template>

<!-- ----- ----- ----- ----- ----- ----- ----- VUE SCRIPT CONFIGURATION ----- ----- ----- ----- ----- ----- ----- -->

<script>
export default {
    name: 'PageNotFound',
}
</script>

<!-- ----- ----- ----- ----- ----- ----- ----- STYLESHEET CONFIGURATION ----- ----- ----- ----- ----- ----- ----- -->

<style lang="scss">
#error {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    h1 {
        font-family: var(--font-code);
        color: var(--accent-color);

        font-size: clamp(90px, 18vw, 180px);
    }

    h2 {
        font-family: var(--font-mark);
        color: var(--font-color-accent);

        font-size: clamp(40px, 8vw, 80px);
        padding-bottom: 30px;
    }
}
</style>