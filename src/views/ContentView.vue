<template>
    <div class="content">
        <nav v-show="!isHome" class="nav">
            <router-link to="/portfolio" class="nav__link"><i class="fa-solid fa-table-list"></i> All projects</router-link>
            <router-link to="/templates" class="nav__link"><i class="fa-solid fa-palette"></i> Templates</router-link>
            <router-link to="/copycat" class="nav__link"><i class="fa-solid fa-copy"></i> CopyCat Websites</router-link>
            <router-link to="/complete-projects" class="nav__link"><i class="fa-solid fa-laptop-code"></i> Complete projects</router-link>
            <router-link to="/skill" class="nav__link"><i class="fa-solid fa-book"></i> Skill</router-link>
        </nav>
        <router-view v-slot="{ Component }">
            <transition name="fade">
                <component :is="Component"></component>
            </transition>
        </router-view>
    </div>
</template>

<script>
    export default {
        name: "content",
        computed: {
        isHome() {
            return this.$route.name === 'home'
        }
}
    }
</script>

<style scoped>
    .content {
        display: flex;
        position: relative;
        width: 100%;
        height: 100%;
        z-index: 3;
    }
    .nav {
        position: fixed;
        width: 10%;
        z-index: 4;
        display: flex;
        padding: 2rem;
        gap: 2rem;
        flex-direction: column;
        align-self: center;
        background: var(--background-body);
        border-radius: 0 1rem 1rem 0;
        border: 0.25rem solid var(--letter-color);
        border-left-color: var(--background-body);
    }
    .nav__link {
        font-weight: bold;
        color: var(--letter-gradient);
    }
    .router-link-exact-active {
        color: var(--letter-color);
    }

    .fa-solid {
        margin-right: 0.313rem;
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