<template>
    <transition name="hexagon">
        <div v-if="show" class="preloader">
            <!-- <img loading="lazy" src="../assets/logo.svg" alt="portfolio logo" class="logo-a"> -->

        <svg loading="lazy" alt="portfolio logo" class="logo-a" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 234 358">
            <!-- <defs>
                <style>
                    .cls-1 {
                        fill: #191919;
                    }
                </style>
            </defs> -->
            <g id="leftDown">
                <path class="cls-1" d="M80,423l4-19c7,9.37,20,15.3,37,19Z" transform="translate(-80 -65)" />
            </g>
            <g id="right">
                <path class="cls-1"
                    d="M205,185l13.82,82.41H264c6.13,1,9.74,4.37,10.24,10.59v69.88q-4.39,34-32.12,56.12l3.17,19H314L267.18,185Z"
                    transform="translate(-80 -65)" />
            </g>
            <g id="left">
                <path class="cls-2"
                    d="M131.65,164,87,392c15.3,14.92,35.18,22.45,58.76,24L155,365.53c-12.87-3.42-20.42-11.52-23-24Z"
                    transform="translate(-80 -65)"/>
            </g>
            <g id="center">
                <path class="cls-1" d="M195.18,190,177,293h12V278c.65-8,2.83-11.44,6.18-11.29H208Z"
                    transform="translate(-80 -65)" />
            </g>
            <g id="centerRight">
                <path class="cls-3"
                    d="M199.06,304v40a10.39,10.39,0,0,1-5.06,9.42h40L239.65,392c14.25-16.26,23.6-33.06,24.35-50.82V278H219.53l5.65,26Z"
                    transform="translate(-80 -65)" />
            </g>
            <g id="centerLeft">
                <path class="cls-1"
                    d="M189,164V126.59c-6.18-21.18-37.59-20.83-47,0V337.65c3.95,19.87,44.21,22.51,46.81,1.21L189,304H165.5Z"
                    transform="translate(-80 -65)" />
            </g>
            <g id="top">
                <path class="cls-4" d="M150.35,65,142,106.12c28.35-15.53,53.53-3.88,56.71,19.41v27.18L201.53,174H265L241.41,65Z"
                    transform="translate(-80 -65)" />
            </g>
        </svg>
            <div class="circles">
				<div class="circle"></div>
				<div class="circle"></div>
				<div class="circle"></div>
				<div class="circle"></div>
				<div class="circle"></div>
			</div>
        </div>
    </transition>
</template>

<script>
    export default {
        name:'preloader',
        
        data(){
            return{
                show:true
            }
        },
        mounted(){
            this.showToggle();
        },
        methods: {
            showToggle(){
                setTimeout(()=>{
                    this.show= false;
                }, 3000)
            }
        }
    }
</script>

<style scoped>
    .cls-1 {
        fill: var(--preload-logo);
        }
    .cls-2 {
        fill: var(--preload-logo);
        animation: preloadPosition 2s;
    }
    .cls-3 {
        fill: var(--preload-logo);
        animation: preloadPosition3 2s;
    }
    .cls-4 {
        fill: var(--preload-logo);
        animation: preloadPosition4 2s;
    }
    @keyframes preloadPosition {
        0%{
            transform: translate(-150px,-150px);
        }
    }
    @keyframes preloadPosition3 {
        0%{
            transform: translate(150px,150px);
        }
    }
    @keyframes preloadPosition4 {
        0%{
            transform: rotate(-20deg);
        }
    }
</style>
