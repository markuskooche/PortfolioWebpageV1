<template>
    <li class="project">
        <h2>{{ date }}</h2>
        <h1>{{ project }}</h1>
        <p>{{ text }}</p>
        <div class="lg-container">
            <div>{{ tag }}</div>
            <a :href="link" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><path d="M15 3h6v6"/><path d="M10 14L21 3"/></g></svg>
            </a>
        </div>
    </li>
</template>

<!-- ----- ----- ----- ----- ----- ----- ----- VUE SCRIPT CONFIGURATION ----- ----- ----- ----- ----- ----- ----- -->

<script>
export default {
    props: {
        project: {
            type: String,
            required: true
        },
        date: {
            type: String,
            required: true
        },
        text: {
            type: String,
            required: true
        },
        tag: {
            type: String,
            required: true
        },
        link: {
            type: String,
            required: true
        },
    },
    name: 'Project',
}
</script>

<!-- ----- ----- ----- ----- ----- ----- ----- STYLESHEET CONFIGURATION ----- ----- ----- ----- ----- ----- ----- -->

<style lang="scss">
.project {
    background-color: var(--background-accent);
    border: 1px solid var(--background-shadow);
    border-radius: 20px;
    padding: 20px;

    h1 {
        font-family: var(--font-mark);
        font-size: var(--size-xl);
        margin-bottom: 10px;
    }

    h2 {
        font-size: var(--size-sm);
        letter-spacing: 2px;
        margin-bottom: 10px;
    }

    p {
        text-align: justify;
        font-size: var(--size-md);
        line-height: 24px;
        font-weight: 300;
        margin-bottom: 15px;
    }

    .lg-container {
        display: flex;
        flex-direction: row;
        align-items: flex-end;

        div {
            font-family: var(--font-code);
            font-size: var(--size-sm);
            color: var(--accent-color);
            margin: 10px 10px 0 0;
        }

        a {
            height: 18px;
            width: 18px;

            svg {
                transition: all 0.5s ease-in-out;
                stroke: var(--font-color-normal);
            }

            svg:hover {
                transition: all 0.5s ease-in-out;
                stroke: var(--accent-color);
            }
        }
    }
}

.project:not(:last-child) {
    margin-bottom: 20px;
}
</style>