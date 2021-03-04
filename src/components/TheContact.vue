<template>
    <section id="contact">
        <h1>Contact</h1>
        <h2>You like what I do and want to get in touch with me now?</h2>
        <h2>Do not hesitate and write me an email.</h2>
        <a href="mailto:markuskoch.96@icloud.com" class="retro-btn">Write a Mail</a>
    </section>
</template>

<script>
export default {
    name: "TheContact"
}
</script>

<style lang="scss">
#contact {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    h1 {
        font-family: var(--font-code);
        font-size: clamp(40px, 8vw, 80px);
        color: var(--accent-color);
        padding-bottom: 25px;
    }

    h2 {
        font-family: var(--font-mark);
        color: var(--font-color-accent);
        font-size: var(--size-lg);
        margin-bottom: 20px;
    }
}
</style>