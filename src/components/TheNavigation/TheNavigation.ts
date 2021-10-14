export default {
    name: 'TheNavigationNew',

    methods: {
        activateLightMode() {
            console.log("ACTIVATE LIGHT MODE");
            //const LIGHT = window.matchMedia('(prefers-color-scheme: light)').matches;
            //const DARK = window.matchMedia('(prefers-color-scheme: dark)').matches;

            console.log(window);
            //window.matchMedia("(prefers-color-scheme: light)");
            //console.log(window.matchMedia("(prefers-color-scheme: dark)"));
        },

        activateDarkMode() {
            console.log("ACTIVATE DARK MODE");
            var element = document.body;
            element.classList.toggle("dark-mode");
        },
    }
};

/*
var theme="light";    //default to light

    //local storage is used to override OS theme settings
    if(localStorage.getItem("theme")){
        if(localStorage.getItem("theme") == "dark"){
            var theme = "dark";
        }
    } else if(!window.matchMedia) {
        //matchMedia method not supported
        return false;
    } else if(window.matchMedia("(prefers-color-scheme: dark)").matches) {
        //OS theme setting detected as dark
        var theme = "dark";
    }

    //dark theme preferred, set document with a `data-theme` attribute
    if (theme=="dark") {
         document.documentElement.setAttribute("data-theme", "dark");
    }
 */