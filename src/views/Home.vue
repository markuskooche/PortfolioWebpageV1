<template>
    <div>
        <TheHeader />
        <TheAbout />
        <TheProjects />
        <TheContact />
    </div>
</template>

<!-- ----- ----- ----- ----- ----- ----- ----- VUE SCRIPT CONFIGURATION ----- ----- ----- ----- ----- ----- ----- -->

<script>
import TheHeader from '@/components/TheHeader';
import TheAbout from '@/components/TheAbout';
import TheProjects from '@/components/TheProjects';
import TheContact from '@/components/TheContact';

export default {
    name: 'Home',
    components: {
        TheHeader,
        TheAbout,
        TheProjects,
        TheContact
    },
}
</script>

<!-- ----- ----- ----- ----- ----- ----- ----- STYLESHEET CONFIGURATION ----- ----- ----- ----- ----- ----- ----- -->

<style lang="scss">
</style>