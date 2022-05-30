<template>
    <nav class="nav">
        <router-link to="/" class="nav__link">Home</router-link> |
        <router-link to="/portfolio" class="nav__link">About</router-link>
    </nav>
    <router-view/>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .nav {
        display: flex;
        justify-content: center;
        position: relative;
    }

    .nav__link {
        font-weight: bold;
        color: blue;
    }

    .nav__link.router-link-exact-active {
        color: #ff0000;
    }

</style>