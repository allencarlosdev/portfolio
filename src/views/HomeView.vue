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
            <img src="../assets/carlosallen.svg" alt="">
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
        height: 820px;
        margin-top: 100px;
    }

    /* Title of the back */

    .name-title{
        position: absolute;
        z-index: var(--z-index60);
        top: 180px;
        line-height: 216px;
    }
    .name-title__carlos {
        font-size: 240px;
        font-weight: 600;
    }
    .name-title__dev {
        text-align: center;
        font-weight: 600;
        font-size: 180px;
    }

    /* Image of me (carlos xD) */

    .image-carlos {
        position: absolute;
        top:0px;
        width: 580px;
        z-index: var(--z-index60);
    }
    
    /* Title of the front */

    .name-title--front {
        position: absolute;
        z-index: var(--z-index70);
        line-height: 216px;
        top: 180px;
    }

    .name-title__carlos--front {
        font-size: 240px;
        font-weight: 600;
        -webkit-text-fill-color: transparent;
        -webkit-text-stroke: 1px;
    }
    .name-title__dev--front {
        text-align: center;
        font-weight: 600;
        font-size: 180px;
        -webkit-text-fill-color: transparent;
        -webkit-text-stroke: 1px;
    }

    /* Button Portfolio */

    .button {
        margin-bottom: 100px;
        position: absolute;
        bottom: 60px;
        z-index: var(--z-index80);
    }

    .button__portfolio {
        display: flex;
        position: relative;
        justify-content: center;
        width: 300px;
        font-size: 60px;
        border-radius: 10px;
        overflow: hidden;
        transition: 0.2s;
        animation: flicker 5s infinite;
        animation-timing-function: ease-in;
    }

    .button__line {
        position: absolute;
        bottom: 0;
        width: 80%;
        height: 3px;
        background-color: var(--letter-color);
        animation: lineMove 5s infinite;
        animation-timing-function: cubic-bezier(0,0,1,1);
    }

    .button__portfolio:hover{
        background-color: var(--letter-color);
        color: var(--background-body);
        box-shadow: 0 0 10px var(--letter-color), 0 0 40px var(--letter-color), 0 0 80px var(--letter-color);
        transition-delay: 1s;
    }

    .button__span {
        display: block;
        position: absolute;
    }

    .button__span--n1{
        top:0;
        left: -100%;
        width: 100%;
        height: 5px;
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
        margin-top: 100px;
        height: 690px;
    }

    .name-title{
        top: 120px;
        line-height: 140px;
    }
    .name-title__carlos {
        font-size: 160px;
    }

    .name-title__dev {
        font-weight: 500;
        font-size: 130px;
    }

    .image-carlos {
        width: 410px;
    }

    .name-title--front {
        line-height: 140px;
        top: 120px;
    }

    .name-title__carlos--front {
        font-size: 160px;
    }
    .name-title__dev--front {
        font-weight: 500;
        font-size: 130px;
    }

    .button {
        margin-bottom: 160px;
    }
    .button__portfolio {
        width: 200px;
        font-size: 50px;
    }
    }

    @media screen and (max-width:760px){
    .home {
        margin-top: 80px;
        height: 600px;
    }

    .name-title{
        top: 100px;
        line-height: 120px;
    }
    .name-title__carlos {
        font-size: 100px;
    }

    .name-title__dev {
        font-weight: 400;
        font-size: 90px;
    }

    .name-title--front {
        line-height: 120px;
        top: 100px;
    }

    .name-title__carlos--front {
        font-size: 100px;
    }
    .name-title__dev--front {
        font-weight: 400;
        font-size: 90px;
    }

    .button {
        margin-bottom: 50px;
    }
    .button__portfolio {
        width: 150px;
        font-size: 40px;
    }
    }

    @media screen and (max-width:440px){
    .home {
        height: 500px;
    }

    .name-title__carlos {
        font-size: 80px;
    }

    .name-title__dev {
        font-weight: 300;
        font-size: 70px;
    }

    .image-carlos {
        width: 350px;
    }


    .name-title__carlos--front {
        font-size: 80px;
    }
    .name-title__dev--front {
        font-weight: 300;
        font-size: 70px;
    }
    }
</style>