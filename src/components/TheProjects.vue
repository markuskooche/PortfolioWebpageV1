<template>
    <section id="projects">
        <h1 class="headline"><span class="number">02.</span>Projects<span class="slogan"></span></h1>
        <div class="timeline">
            <ul>
                <Project project="SpacePlace" date="October, 2021" text="A platform to play games with colleagues, track each other's scores and compare each other through statistics." tag="Laravel" link="https://spaceplace.pangoon.de" />
                <Project project="LightSwitch" date="April, 2021" text="A module for the ESP8266 to use Apple HomeKit and Siri to control the lights and adjust the colors if necessary." tag="MicroPython" link="https://github.com/markuskooche/LightSwitch" />
                <Project project="PortfolioWebpage" date="February, 2021" text="First version of my personal portfolio website built with Vue.js. This project was for learning Vue.js." tag="Vue.js" link="https://github.com/markuskooche/PortfolioWebpage" />
                <Project project="ChessGame" date="January, 2021" text="A chess engine with a GUI and different algorithms of computer-based opponents. Built completely object-oriented with Python." tag="Python" link="https://github.com/markuskooche/ChessGame" />
                <Project project="CryptoCurrency" date="October, 2020" text="A simple implementation of a blockchain. This version also includes account details to better track transactions." tag="Python" link="https://github.com/markuskooche/CryptoCurrency" />
            </ul>
        </div>
    </section>
</template>

<!-- ----- ----- ----- ----- ----- ----- ----- VUE SCRIPT CONFIGURATION ----- ----- ----- ----- ----- ----- ----- -->

<script>
import Project from '@/components/Project';

export default {
    name: 'TheProjects',
    components: {
        Project
    },
}
</script>

<!-- ----- ----- ----- ----- ----- ----- ----- STYLESHEET CONFIGURATION ----- ----- ----- ----- ----- ----- ----- -->

<style lang="scss">
#projects {
    display: flex;
    align-items: center;
    justify-content: center;

    .headline {
        font-family: var(--font-code);
        color: var(--font-color-accent);
        margin-bottom: 30px;
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

    .timeline {
        height: auto;
        max-width: 800px;
        margin: 0 auto;
        position: relative;

        ul {
            list-style: none;
        }
    }
}

@media (min-width: 769px) {
    .timeline {
        padding: 0 30px;
    }

    .timeline ul {
        padding: 35px 0;

        li {
            width: 50%;
            position: relative;

            h2 {
                transition: all 0.5s ease-in-out;
                position: absolute;
                top: -30px;
            }
        }

        li:not(:last-child){
            margin-bottom: 50px;
        }

        li::after {
            transition: all 0.5s ease-in-out;
            content: '';
            position: absolute;
            height: 18px;
            width: 18px;
            background-color: var(--background-accent);
            border: solid 2px var(--timeline-color);
            border-radius: 50%;
            top: 50%;
        }

        li:hover h2 {
            transition: all 0.5s ease-in-out;
            color: var(--accent-color);
        }

        li:hover:after {
            transition: all 0.5s ease-in-out;
            background-color: var(--accent-hover);
            border: solid 2px var(--accent-color);
        }

        li:nth-child(odd) {
            float: left;
            clear: right;
            transform: translateX(-30px);
        }

        li:nth-child(odd)::after {
            transform: translateX(50%);
            right: -30px;
        }

        li:nth-child(even) {
            float: right;
            clear: left;
            transform: translateX(30px);
        }

        li:nth-child(even)::after {
            transform: translateX(-50%);
            left: -30px;
        }
    }

    .timeline::before {
        content: '';
        position: absolute;
        height: 100%;
        width: 2px;
        left: 50%;
        transform: translateX(-50%);
        background-color: var(--timeline-color);
    }
}

@media (max-width: 768px) {
    .timeline ul li {
        max-width: 450px;
    }
}
</style>