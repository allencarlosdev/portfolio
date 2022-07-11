<template>
    <div class="content">

        <nav v-show="!isHome" :class="{'content__nav' : (isMenu === true) ,'content__nav--slide' : (isMenu === false)}">
            <button  @click="isMenu = !isMenu" class="content__button">
                <i v-show="!isMenu" class="fa-solid fa-angle-down"></i>
                <i v-show="isMenu" class="fa-solid fa-angle-left"></i>
            </button>
            <router-link to="/portfolio" class="content__link" :class="{'menu' :(isMenu === false)}"><i class="fa-solid fa-table-list"></i> All projects</router-link>
            <router-link to="/templates" class="content__link" :class="{'menu' :(isMenu === false)}"><i class="fa-solid fa-palette"></i> Templates</router-link>
            <router-link to="/copycat" class="content__link" :class="{'menu' :(isMenu === false)}"><i class="fa-solid fa-copy"></i> CopyCat Websites</router-link>
            <router-link to="/complete-projects" class="content__link" :class="{'menu' :(isMenu === false)}"><i class="fa-solid fa-laptop-code"></i> Complete projects</router-link>
            <router-link to="/skill" class="content__link" :class="{'menu' :(isMenu === false)}"><i class="fa-solid fa-book"></i> Skill</router-link>
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
        data(){
            return{
                isMenu:true,
            }
        },
        computed: {
            isHome() {
                return this.$route.name === 'home'
            },
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
    .content__nav {
        display: flex;
        position: fixed;
        width: 10%;
        z-index: 4;
        padding: 2rem;
        gap: 2rem;
        flex-direction: column;
        /* align-self: center; */
        top: 30%;
        background: var(--background-body);
        border-radius: 0 1rem 1rem 0;
        border: 0.25rem solid var(--letter-color);
        border-left-color: var(--background-body);

        transition: all 2s; 
    }

    .content__menu {
        position: relative;
        width: 500px;
        height: 100px;
    }
    
    .content__link {
        font-weight: bold;
        color: var(--letter-gradient);

    }
    
    .content__link:hover {
        color: var(--letter-color);
    }

    .router-link-exact-active {
        color: var(--letter-color);
    }

    .fa-solid {
        margin-right: 0.313rem;
    }
    /* responsive button */
    .content__button {
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
        transform: translateY(10rem);
    }
    .fade-leave-active {
        transition: all 1s ease-in;
    }


    @media screen and (max-width:1400px){
        .content__nav {
            gap: 1rem;
            padding: 1rem;
        }
    }

    @media screen and (max-width:1000px) {
    /* Responsive button */
    .content__button {
        display: flex;
        color: var(--letter-color);
        font-size: 2rem;
        position: relative;
        justify-content: end;
        align-items: center;
    }

    .fa-angle-down {
        right: 0;
        position: absolute;
        display: block;
        cursor: pointer;
        width: 30%;
    }
    .fa-angle-left {
        right: 0;
        position: absolute;
        display: block;
        cursor: pointer;
        width: 30%;
    }
    .menu {
        display: none;
    }

    .content__nav {
        width: 20%;
        padding: 1.5rem;
        gap: 2rem;
    }

    .content__nav--slide {
        display: flex;
        position: fixed;
        width: 20%;
        margin-left: -9%;
        z-index: 4;
        padding: 1.5rem;
        gap: 2rem;
        flex-direction: column;
        /* align-self: center; */
        top: 30%;
        background: var(--background-body);
        border-radius: 0 1rem 1rem 0;
        border: 0.25rem solid var(--letter-color);
        border-left-color: var(--background-body);
        transition: all 2s; 
    }
    }

    @media screen and (max-width:500px) {
        .content__nav {
            width: 40%;
            padding: 1rem;
            gap: 1rem;
        }

        .content__nav--slide {
            width: 40%;
            margin-left: -25%;
            padding: 1rem;
            gap: 1rem;

    }

        .content__button {
            font-size: 1rem;
        }

    }
</style>