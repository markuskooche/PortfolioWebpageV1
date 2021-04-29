<template>
    <section id="resume">
        <h1>Download Now!</h1>
        <div class="download-area">
            <a href="./resume/resume-de.pdf" download="lebenslauf.pdf" class="retro-btn">Download German Version</a>
            <!--a href="./resume/resume-en.pdf" download="resume.pdf" class="retro-btn">Download English Version</a-->
        </div>
    </section>
</template>

<!-- ----- ----- ----- ----- ----- ----- ----- VUE SCRIPT CONFIGURATION ----- ----- ----- ----- ----- ----- ----- -->

<script>
export default {
    data () {
        return {
            publicPath: process.env.BASE_URL
        }
    },

    name: "Resume"
}
</script>

<!-- ----- ----- ----- ----- ----- ----- ----- STYLESHEET CONFIGURATION ----- ----- ----- ----- ----- ----- ----- -->

<style lang="scss">
#resume {
    h1 {
        font-family: var(--font-mark);
        color: var(--font-color-accent);
        font-size: clamp(40px, 8vw, 80px);
        text-align: center;
    }

    .download-area {
        padding: 20px 0px;

        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        flex-wrap: wrap;

        a {
            margin: 10px;
        }
    }
}
</style>