<template>
    <nav class="nav">
        <router-link to="/" class="nav__link">Home</router-link> 
        <router-link to="/portfolio" class="nav__link">About</router-link>
    </nav>
    <router-view/>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

    .nav__link {
        display: none;
    }

</style>