<template>
    <nav class="nav">
        <router-link to="/portfolio" class="nav__link">All projects</router-link>
        <router-link to="/templates" class="nav__link">Templates</router-link>
        <router-link to="/copycat" class="nav__link">CopyCat Websites</router-link>
        <router-link to="/complete-projects" class="nav__link">Complete projects</router-link>
        <router-link to="/skill" class="nav__link">Skill</router-link>
    </nav>
    <router-view v-slot="{ Component }">
        <transition name="fade">
            <component :is="Component"></component>
        </transition>
    </router-view>

</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .nav__link {
        display: none;
    }

/* Route transition */
    .fade-enter-from {
        opacity: 0;

    }
    .fade-enter-active {
        opacity: 0;
        transition: all 1s ease-in;
    }
    .fade-leave-to {
        opacity: 0;
        transform: translateX(-6.25rem);
    }
    .fade-leave-active {
        transition: all 1s ease-in;
    }


</style>