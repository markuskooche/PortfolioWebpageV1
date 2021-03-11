<template>
    <li class="language">
        <div class="card-title">
            <svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path :d="file"/>
            </svg>
            <h1>{{ language }}</h1>
        </div>
        <p>{{ text }}</p>
        <a :href="link" target="_blank">Visit a Project<span>&rarr;</span></a>
    </li>
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
        text: {
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
.language {
    transition: all 0.3s ease-in-out;
    background-color: var(--background-accent);
    border: 1px solid var(--background-shadow);
    border-radius: 20px;
    padding: 20px;
    margin: 20px 10px;
    width: 280px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    .card-title {
        display: flex;
        flex-direction: column;
        align-items: center;

        svg {
            fill: var(--accent-color);
            margin-bottom: 20px;
            height: 100px;
            width: 100px;
        }

        h1 {
            font-family: var(--font-code);
            font-size: var(--headline-sm);
        }
    }

    p {
        margin: 10px 0;
        text-align: justify;
    }

    a {
        transition: all 0.3s ease-in-out;
        background-color: var(--accent-color);
        font-family: var(--font-mark);
        border-radius: 20px;
        color: white;
        padding: 10px 16px;
        margin: 5px;

        span {
            padding-left: 5px;
            display: none;
        }
    }

    a:hover > span {
        display: inline-block;
    }
}

.language:hover {
    transition: all 0.3s ease-in-out;
    margin: 10px 10px 30px 10px;
    border: 1px solid var(--background-accent);
    box-shadow: 0 0 10px var(--timeline-color);
}
</style>