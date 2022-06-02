<template>
    <nav class="nav">
        <router-link to="/" class="nav__link">Home</router-link> 
        <router-link to="/portfolio" class="nav__link">Portfolio</router-link>
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
        transform: translateX(-100px);
    }
    .fade-leave-active {
        transition: all 1s ease-in;
    }


</style>