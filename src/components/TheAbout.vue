<template>
    <section id="about">
        <h1><span class="number">01.</span>About<span class="slogan"> - the perfectionist</span></h1>
        <div class="about-container">
            <img src="../assets/images/portrait.jpg" alt="personal portrait" class="portrait">
            <p class="about-text">Hey, I am Markus Koch, a backend developer from Bavaria, DE.</p>
            <p class="about-text about-space">I study computer science at the technical university of applied sciences Regensburg (dt. <a href="https://www.oth-regensburg.de/" target="_blank">OTH Regensburg</a>).</p>
            <p class="about-text">These are programming languages I like to work with:</p>
            <div v-if="!isMobile()" class="language-container">
                <Language language="Python" link="https://github.com/markuskooche/ChessGame" file="./logos/python.svg" />
                <Language language="Vue.js" link="https://github.com/markuskooche/PortfolioWebpage" file="./logos/vue.svg" />
                <Language language="Java" link="https://github.com/markuskooche/PokemonGame" file="./logos/java.svg" />
            </div>
            <div v-if="isMobile()" class="language-container-mobile">
                <LanguageMobile language="Python" link="https://github.com/markuskooche/ChessGame" file="./logos/python.svg" />
                <LanguageMobile language="Vue.js" link="https://github.com/markuskooche/PortfolioWebpage" file="./logos/vue.svg" />
                <LanguageMobile language="Java" link="https://github.com/markuskooche/PokemonGame" file="./logos/java.svg" />
            </div>
            <p>I am now available for you...</p>
        </div>
    </section>
</template>

<!-- ----- ----- ----- ----- ----- ----- ----- VUE SCRIPT CONFIGURATION ----- ----- ----- ----- ----- ----- ----- -->

<script>
import LanguageMobile from '@/components/LanguageMobile';
import Language from '@/components/Language';

export default {
    methods: {
        isMobile() {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        },
    },

    name: 'TheAbout',
    components: {
        LanguageMobile,
        Language
    }
}
</script>

<!-- ----- ----- ----- ----- ----- ----- ----- STYLESHEET CONFIGURATION ----- ----- ----- ----- ----- ----- ----- -->

<style lang="scss">
#about {
    h1 {
        font-family: var(--font-code);
        color: var(--font-color-accent);
        margin-bottom: 20px;
        font-size: 35px;

        .number {
            color: var(--accent-color);
            font-size: 30px;
            padding-right: 5px;
        }

        .slogan {
            color: var(--font-color-normal);
        }
    }

    .about-container {
        display: flex;
        flex-direction: column;
        align-items: center;

        .portrait {
            border: 5px solid var(--accent-hover);
            border-radius: 50%;
            margin: 20px 0;

            width: 160px;
            height: 160px;
        }

        .about-text {
            font-size: 18px;
            text-align: center;
            margin-bottom: 6px;

            a {
                transition: 0.3s;
                text-decoration: underline;
                color: var(--font-color-accent);
            }

            a:hover {
                transition: 0.3s;
                color: var(--accent-color);
            }
        }

        .about-space {
            margin-bottom: 16px;
        }

        .language-container-mobile,
        .language-container {
            display: flex;
            flex-direction: row;
            justify-content: center;
            flex-wrap: wrap;
        }
    }
}
</style>