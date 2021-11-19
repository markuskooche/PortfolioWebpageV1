<template>
    <div id="navbar">
        <nav :class="{ 'hide-navbar': !showNavbar, 'blur-effect': blurEffect }">
            <div class="navbar-container">
                <router-link to="/" class="navbar-logo">koch.</router-link>
                <div class="navbar-links">
                    <ul>
                        <li>
                            <a href="/#about"><span>01.</span>about</a>
                        </li>
                        <li>
                            <a href="/#projects"><span>02.</span>projects</a>
                        </li>
                        <li>
                            <a href="/#contact"><span>03.</span>contact</a>
                        </li>
                    </ul>
                    <router-link to="/resume" id="resume-btn">Resume</router-link>
                </div>
                <div id="navbar-sandwich" @click="sandwichToggle()">
                    <div id="sandwich-line-1"></div>
                    <div id="sandwich-line-2"></div>
                    <div id="sandwich-line-3"></div>
                </div>
            </div>
        </nav>
        <div id="navbar-popup-mobile"></div>
        <div id="navbar-links-mobile" class="navbar-mobile-close">
            <ul>
                <li>
                    <a href="/#about" @click="disableNavbar()">about</a>
                </li>
                <li>
                    <a href="/#projects" @click="disableNavbar()">projects</a>
                </li>
                <li>
                    <a href="/#contact" @click="disableNavbar()">contact</a>
                </li>
                <li>
                    <router-link to="/resume" @click="disableNavbar()">resume</router-link>
                </li>
            </ul>

        </div>
    </div>
</template>

<!-- ----- ----- ----- ----- ----- ----- ----- VUE SCRIPT CONFIGURATION ----- ----- ----- ----- ----- ----- ----- -->

<script>
export default {
    data: () => {
        return {
            showNavbar: true,
            blurEffect: false,
            lastScrollPosition: 0
        }
    },

    beforeCreate() {
        const setNavbarPopup = () => {
            const rWidth = Math.pow(window.innerWidth, 2);
            const rHeight = Math.pow(window.innerHeight, 2);
            let radius = Math.ceil(Math.sqrt(rWidth + rHeight) * 1.2);

            if (radius % 2 === 1) {
                radius += 1;
            }

            const diameter = (2 * radius) + 'px';
            const positionTop = (40 - radius) + 'px';
            const positionRight = (43 - radius) + 'px';

            const root = document.documentElement;
            root.style.setProperty('--popup-diameter', diameter);
            root.style.setProperty('--popup-position-top', positionTop);
            root.style.setProperty('--popup-position-right', positionRight);

            let reset = true;

            if (window.innerWidth > 640 && reset) {
                window.onscroll = function() {};

                const sandwich = document.getElementById('navbar-sandwich');
                if (sandwich !== null) {
                    sandwich.classList.remove('sandwich-close');
                    sandwich.classList.remove('sandwich-open');
                }

                const dropdown = document.getElementById('navbar-popup-mobile');
                if (dropdown !== null) {
                    dropdown.classList.remove('navbar-popup-disable');
                    dropdown.classList.remove('navbar-popup-close');
                    dropdown.classList.remove('navbar-popup-open');
                }

                const mobileNav = document.getElementById('navbar-links-mobile');
                if (mobileNav !== null) {
                    mobileNav.style.display = "none";
                    mobileNav.classList.remove('navbar-mobile-close');
                    mobileNav.classList.remove('navbar-mobile-open');
                }

                reset = false;
            } else {
                reset = true;
            }
        }
        setNavbarPopup();
        window.addEventListener('resize', setNavbarPopup);

    },

    mounted () {
        window.addEventListener('scroll', this.onScroll);
    },

    methods: {
        enableScroll() {
            window.onscroll = function() {};
        },

        disableScroll() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

            window.onscroll = function() {
                window.scrollTo(scrollLeft, scrollTop);
            };
        },

        onScroll () {
            const currentScrollPosition = window.pageYOffset;

            if (currentScrollPosition > 0) {
                if (currentScrollPosition > this.lastScrollPosition) {
                    this.showNavbar = false;
                    this.blurEffect = false;
                } else {
                    this.showNavbar = true;
                    this.blurEffect = true;
                }
            } else {
                this.showNavbar = true;
                this.blurEffect = false;
            }

            this.lastScrollPosition = currentScrollPosition;
        },

        sandwichToggle() {
            const sandwich = document.getElementById('navbar-sandwich');
            const dropdown = document.getElementById('navbar-popup-mobile');
            const mobileNav = document.getElementById('navbar-links-mobile');

            if (sandwich.className === 'sandwich-close') {
                //this.disableScroll();
                sandwich.classList.remove('sandwich-close');
                sandwich.classList.add('sandwich-open');
                dropdown.classList.remove('navbar-popup-close');
                dropdown.classList.add('navbar-popup-open');
                mobileNav.classList.remove('navbar-mobile-close');
                mobileNav.classList.add('navbar-mobile-open');
            } else if (sandwich.className === 'sandwich-open') {
                //this.enableScroll();
                sandwich.classList.remove('sandwich-open');
                sandwich.classList.add('sandwich-close');
                dropdown.classList.remove('navbar-popup-open');
                dropdown.classList.remove('navbar-popup-disable');
                dropdown.classList.add('navbar-popup-close');
                mobileNav.classList.remove('navbar-mobile-open');
                mobileNav.classList.add('navbar-mobile-close');
            } else {
                //this.disableScroll();
                sandwich.classList.add('sandwich-open');
                dropdown.classList.add('navbar-popup-open');
                mobileNav.classList.add('navbar-mobile-open');
            }
        },

        disableNavbar() {
            const sandwich = document.getElementById('navbar-sandwich');
            sandwich.classList.remove('sandwich-open');
            sandwich.classList.add('sandwich-close');

            const dropdown = document.getElementById('navbar-popup-mobile');
            dropdown.classList.remove('navbar-popup-open');
            dropdown.classList.add('navbar-popup-disable');

            const mobileNav = document.getElementById('navbar-links-mobile');
            mobileNav.classList.remove('navbar-mobile-open');
            mobileNav.classList.add('navbar-mobile-close');
        }
    },

    name: 'TheNavigation',
}
</script>

<!-- ----- ----- ----- ----- ----- ----- ----- STYLESHEET CONFIGURATION ----- ----- ----- ----- ----- ----- ----- -->

<style lang="scss">
$navbar-height: 80px;

.hide-navbar {
    transition: all 0.3s;
    transform-style: preserve-3d;
    transform: translate3d(0, -$navbar-height, 200px);
}

.blur-effect {
    backdrop-filter: blur(10px);
    background-color: var(--header-scroll-color);
    box-shadow: 0 10px 30px -10px var(--background-shadow);
}

nav {
    transition: all 0.3s ease-out;
    transform-style: preserve-3d;
    transform: translate3d(0, 0, 200px);
    z-index: 10;

    position: fixed;
    height: $navbar-height;
    width: 100%;

    display: flex;
    align-items: center;

    .navbar-container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        font-family: var(--font-code);
        width: 100%;

        .navbar-logo {
            transition: all 0.3s linear;
            font-size: var(--size-lg);
            color: var(--accent-color);
        }

        .navbar-logo:hover {
            transition: all 0.3s ease-out;
            transform: scale(1.1);
            text-shadow: 0 0 15px var(--accent-color);
        }
    }
}

@media (min-width: 957px) {
    .navbar-container {
        margin: 0 60px;
    }
}

@media (max-width: 956px) {
    .navbar-container {
        margin: 0 40px;
    }
}

@media (max-width: 764px) {
    .navbar-container {
        margin: 0 25px;
    }
}

@media (min-width: 641px) {
    .navbar-links {
        display: flex;
        flex-direction: row;
        align-items: center;
        font-size: var(--size-sm);

        ul {
            display: flex;
            flex-direction: row;
            list-style: none;

            li {
                margin-left: 16px;

                a {
                    position: relative;
                    padding: 0 2px;
                    color: var(--font-color-normal);

                    span {
                        color: var(--accent-color);
                        margin-right: 6px;
                    }
                }

                a:before {
                    content: '';
                    position: absolute;
                    width: 100%;
                    height: 1px;
                    bottom: -4px;
                    left: 0;
                    background-color: var(--accent-color);
                    visibility: hidden;
                    transform: scaleX(0);
                    transition: all 0.4s ease-in-out;
                }

                a:hover:before {
                    visibility: visible;
                    transform: scaleX(1);
                }
            }
        }

        #resume-btn {
            transition: all 0.4s;

            color: var(--accent-color);
            margin-left: 20px;
            padding: 12px 16px;

            border: 1px solid var(--accent-color);
            border-radius: 5px;
        }

        #resume-btn:hover {
            transition: all 0.4s;
            background-color: var(--accent-hover);
            box-shadow: inset 0 0 5px var(--accent-color), 2px 2px 5px var(--accent-color);
        }
    }

    #navbar-sandwich {
        display: none;
    }

    #navbar-links-mobile {
        display: none;
    }
}

@media (max-width: 640px) {
    .navbar-links {
        display: none;
    }

    #navbar-sandwich {
        width: 36px;
        height: 24px;

        div[id*="sandwich-line-"] {
            background-color: var(--accent-color);
            height: 2px;
            border-radius: 1px;
        }

        #sandwich-line-2 {
            margin: 9px 3px;
            width: 30px;
        }
    }

    .sandwich-close {
        #sandwich-line-1 {
            animation: line-1-close 0.5s forwards;
        }

        #sandwich-line-2 {
            animation: line-2-close 1.0s forwards;
        }

        #sandwich-line-3 {
            animation: line-3-close 0.5s forwards;
        }
    }

    @keyframes line-1-close {
        from {
            -webkit-transform: rotate(-45deg) translate(-7.5px, 8px);
            -moz-transform: rotate(-45deg) translate(-7.5px, 8px);
            -o-transform: rotate(-45deg) translate(-7.5px, 8px);
            transform: rotate(-45deg) translate(-7.5px, 8px);
        }
        to {}
    }

    @keyframes line-2-close {
        from {
            opacity: 0;
        }
        to {}
    }

    @keyframes line-3-close {
        from {
            -webkit-transform: rotate(45deg) translate(-7.5px, -8px);
            -moz-transform: rotate(45deg) translate(-7.5px, -8px);
            -o-transform: rotate(45deg) translate(-7.5px, -8px);
            transform: rotate(45deg) translate(-7.5px, -8px);
        }
        to {}
    }

    .sandwich-open {
        #sandwich-line-1 {
            animation: line-1-open 0.5s forwards;
        }

        #sandwich-line-2 {
            animation: line-2-open 0.2s forwards;
        }

        #sandwich-line-3 {
            animation: line-3-open 0.5s forwards;
        }
    }

    @keyframes line-1-open {
        from {}
        to {
            -webkit-transform: rotate(-45deg) translate(-7.5px, 8px);
            -moz-transform: rotate(-45deg) translate(-7.5px, 8px);
            -o-transform: rotate(-45deg) translate(-7.5px, 8px);
            transform: rotate(-45deg) translate(-7.5px, 8px);
        }
    }

    @keyframes line-2-open {
        from {}
        to {
            opacity: 0;
        }
    }

    @keyframes line-3-open {
        from {}
        to {
            -webkit-transform: rotate(45deg) translate(-7.5px, -8px);
            -moz-transform: rotate(45deg) translate(-7.5px, -8px);
            -o-transform: rotate(45deg) translate(-7.5px, -8px);
            transform: rotate(45deg) translate(-7.5px, -8px);
        }
    }

    #navbar-popup-mobile {
        border-radius: 50%;
        pointer-events: none;
        position: fixed;
        background-color: var(--background-accent);
        z-index: 1;
    }

    .navbar-popup-close {
        animation: popup-close 0.6s ease-out;
    }

    .navbar-popup-disable {
        animation: popup-close 0.0s ease-out;
    }

    @keyframes popup-close {
        from {
            width: var(--popup-diameter);
            height: var(--popup-diameter);
            top: var(--popup-position-top);
            right: var(--popup-position-right);
        }
        to {
            width: 0;
            height: 0;
            top: 40px;
            right: 43px;
        }
    }

    .navbar-popup-open {
        animation: popup-open 0.6s ease-in;
        animation-fill-mode: forwards;
    }

    @keyframes popup-open {
        from {
            width: 0;
            height: 0;
            top: 40px;
            right: 43px;
        }
        to {
            width: var(--popup-diameter);
            height: var(--popup-diameter);

            top: var(--popup-position-top);
            right: var(--popup-position-right);
        }
    }

    #navbar-links-mobile {
        position: fixed;
        top: $navbar-height;
        z-index: 10;
        height: var(--app-height);
        width: 100%;

        ul {
            display: flex;
            flex-direction: column-reverse;
            justify-content: center;
            align-items: center;

            width: 100%;
            height: 100%;

            list-style: none;

            li {
                margin-top: -$navbar-height;
                text-align: center;
                font-family: var(--font-mark);
                font-size: var(--size-xl);

                a {
                    padding: 15px 0 15px 0;
                    color: transparent;
                }
            }
        }
    }

    .navbar-mobile-close {
        display: none !important;
    }

    .navbar-mobile-open {
        display: block !important;

        li > a {
            animation: open-mobile-links 0.5s ease-in-out 0.4s forwards;
        }

    }

    @keyframes open-mobile-links {
        from {
            color: var(--background-accent);
        }
        to {
            color: var(--font-color-accent);
        }
    }
}
</style>