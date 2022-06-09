<template>
    <!-- <div>

        <h3> Voy a dejar este mensaje aqui hasta el 10 de junio (como prueba de que no me copie :)) - aqui probando mis variables para la animacion del title</h3>
        <h1> x: {{x}}</h1>
        <h1> width: {{halfScreen}}</h1>
        <h1> result: {{result}}</h1>
        <h1> translateX: {{translateX}}</h1>
    </div> -->
    <div class="home" @mousemove="mouseMove">
        <!-- <div class="name-title" :style="{transform:`translate(${x})`, transition:'all 3s'}"> -->
        <div class="name-title" :style="style">
            <h1 class="name-title__carlos">CARLOS ALLEN</h1>
            <P class="name-title__dev">FULLSTACK</P>
        </div>
        <div class="image-carlos">
            <img loading="lazy" src="../assets/carlosallen.svg" alt="Carlos Allen outline image">
        </div>

        <!-- <div class="name-title--front" :style="{transform:`translate(${x})`, transition:'all 3s'}"> -->
        <div class="name-title--front" :style="style">
            <h1 class="name-title__carlos--front">CARLOS ALLEN</h1>
            <P class="name-title__dev--front">FULLSTACK</P>
        </div>
        <div class="button">
            <router-link to="/portfolio" class="button__portfolio" @mouseover="setMove(true)" @mouseout="setMove(false)">
                <span v-if="move!=true" :class="{'button__line':(move ===false)}"></span>
                <span class="button__span button__span--n1"></span>
                    Portfolio
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name:'HomeView',
        data (){
            return {
                move:false,
                x:'',
                y:'',
                halfScreen:'',
                result:'',
                translateX:'',
                style:{
                    transform:'',
                    transition:'all 4s',
                }
            }
        },
        methods: {
            setMove(value){
                this.move = value;
            },
            mouseMove(e) {
                this.x =e.clientX/16;
                this.halfScreen= window.innerWidth/32;
                this.translateX =this.x-this.halfScreen+'px';

                if (this.x >= this.halfScreen) {
                    this.result = this.translateX;
                } else {
                    this.result = this.translateX;
                }
                this.style.transform = `translate(${this.translateX})`
            },
        }
    }
</script>

<style scoped>
    .home {
        display: flex;
        position: absolute;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 51.25rem;
        margin-top: 6.25rem;
    }

    /* Title of the back */

    .name-title{
        position: absolute;
        z-index: var(--z-index60);
        top: 11.25rem;
        line-height: 13.5rem;
    }
    .name-title__carlos {
        font-size: 15rem;
        font-weight: 600;
    }
    .name-title__dev {
        text-align: center;
        font-weight: 600;
        font-size: 11.25rem;
    }

    /* Image of me (carlos xD) */

    .image-carlos {
        position: absolute;
        top: 0;
        width: 36.25rem;
        height: 40rem;
        z-index: var(--z-index60);
    }
    
    /* Title of the front */

    .name-title--front {
        position: absolute;
        z-index: var(--z-index70);
        line-height: 13.5rem;
        top: 11.25rem;
    }

    .name-title__carlos--front {
        font-size: 15rem;
        font-weight: 600;
        -webkit-text-fill-color: transparent;
        -webkit-text-stroke: 0.063rem;
    }
    .name-title__dev--front {
        text-align: center;
        font-weight: 600;
        font-size: 11.25rem;
        -webkit-text-fill-color: transparent;
        -webkit-text-stroke: 0.063rem;
    }

    /* Button Portfolio */

    .button {
        margin-bottom: 6.25rem;
        position: absolute;
        bottom: 3.75rem;
        z-index: var(--z-index80);
    }

    .button__portfolio {
        display: flex;
        position: relative;
        justify-content: center;
        width: 18.75rem;
        font-size: 3.75rem;
        border-radius: 0.625rem;
        overflow: hidden;
        transition: 0.2s;
        animation: flicker 5s infinite;
        animation-timing-function: ease-in;
    }

    .button__line {
        position: absolute;
        bottom: 0;
        width: 80%;
        height: 0.188rem;
        background-color: var(--letter-color);
        animation: lineMove 5s infinite;
        animation-timing-function: cubic-bezier(0,0,1,1);
    }

    .button__portfolio:hover{
        background-color: var(--letter-color);
        color: var(--background-body);
        box-shadow: 0 0 0.625rem var(--letter-color), 0 0 2.5rem var(--letter-color), 0 0 5rem var(--letter-color);
        transition-delay: 1s;
    }

    .button__span {
        display: block;
        position: absolute;
    }

    .button__span--n1{
        top: 0;
        left: -100%;
        width: 100%;
        height: 0.313rem;
        background: linear-gradient(90deg, transparent,var(--letter-color));
    }

    .button__portfolio:hover .button__span--n1{
        left: 100%;
        transition: 1s;
    }

    @keyframes flicker {

        25%{
            color: var(--letter-gradient);
        }
        50%{
            color: var(--letter-color);
        }
        75%{
            color: var(--letter-gradient);
        }
    }

    @keyframes lineMove {
        10%{
            width: 30%;
        }
        40%{
            width: 50%;
        }
        75%{
            width: 30%;
        }
    }

    @media screen and (max-width:1280px){
    .home {
        margin-top: 6.25rem;
        height: 43.125rem;
    }

    .name-title{
        top: 7.5rem;
        line-height: 8.75rem;
    }
    .name-title__carlos {
        font-size: 10rem;
    }

    .name-title__dev {
        font-weight: 500;
        font-size: 8.125rem;
    }

    .image-carlos {
        width: 25.625rem;
        height: 30rem;
    }

    .name-title--front {
        line-height: 8.75rem;
        top: 7.5rem;
    }

    .name-title__carlos--front {
        font-size: 10rem;
    }
    .name-title__dev--front {
        font-weight: 500;
        font-size: 8.125rem;
    }

    .button {
        margin-bottom: 10rem;
    }
    .button__portfolio {
        width: 12.5rem;
        font-size: 3.125rem;
    }
    }

    @media screen and (max-width:760px){
    .home {
        margin-top: 5rem;
        height: 37.5rem;
    }

    .name-title{
        top: 6.25rem;
        line-height: 7.5rem;
    }
    .name-title__carlos {
        font-size: 6.25rem;
    }

    .name-title__dev {
        font-weight: 400;
        font-size: 5.625rem;
    }

    .name-title--front {
        line-height: 7.5rem;
        top: 6.25rem;
    }

    .name-title__carlos--front {
        font-size: 6.25rem;
    }
    .name-title__dev--front {
        font-weight: 400;
        font-size: 5.625rem;
    }

    .button {
        margin-bottom: 3.125rem;
    }
    .button__portfolio {
        width: 9.375rem;
        font-size: 2.5rem;
    }
    }

    @media screen and (max-width:440px){
    .home {
        height: 31.25rem;
    }

    .name-title__carlos {
        font-size: 4rem;
    }

    .name-title__dev {
        font-weight: 300;
        font-size: 4.375rem;
    }

    .image-carlos {
        width: 21.875rem;
        height: 25rem;
    }


    .name-title__carlos--front {
        font-size: 4rem;
    }
    .name-title__dev--front {
        font-weight: 300;
        font-size: 4.375rem;
    }
    }
</style>