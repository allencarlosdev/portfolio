<template>
    <header class="header">
        <div class="header__triangle">
            <svg class="header__logo" loading="lazy" alt="portfolio logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 234 358">
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
                    <path class="cls-1"
                        d="M131.65,164,87,392c15.3,14.92,35.18,22.45,58.76,24L155,365.53c-12.87-3.42-20.42-11.52-23-24Z"
                        transform="translate(-80 -65)"/>
                </g>
                <g id="center">
                    <path class="cls-1" d="M195.18,190,177,293h12V278c.65-8,2.83-11.44,6.18-11.29H208Z"
                        transform="translate(-80 -65)" />
                </g>
                <g id="centerRight">
                    <path class="cls-1"
                        d="M199.06,304v40a10.39,10.39,0,0,1-5.06,9.42h40L239.65,392c14.25-16.26,23.6-33.06,24.35-50.82V278H219.53l5.65,26Z"
                        transform="translate(-80 -65)" />
                </g>
                <g id="centerLeft">
                    <path class="cls-1"
                        d="M189,164V126.59c-6.18-21.18-37.59-20.83-47,0V337.65c3.95,19.87,44.21,22.51,46.81,1.21L189,304H165.5Z"
                        transform="translate(-80 -65)" />
                </g>
                <g id="top">
                    <path class="cls-1" d="M150.35,65,142,106.12c28.35-15.53,53.53-3.88,56.71,19.41v27.18L201.53,174H265L241.41,65Z"
                        transform="translate(-80 -65)" />
                </g>
            </svg>
        </div>
        <div>
            <ul class="social" @mouseover="setMove(true)" @mouseout="setMove(false)">
                <li class="social__link" :class="{'social__link--active':(active ===1), 'social__link--inactive':(active !== 1 && move === true)}" @mouseover="setActive(1)" ><a rel="noopener noreferrer" href="https://github.com/allencarlosdev" target="_blank"><i class="fa fa-github"></i></a></li>
                <li class="social__link" :class="{'social__link--active':(active ===2), 'social__link--inactive':(active !== 2 && move === true)}" @mouseover="setActive(2)" ><a rel="noopener noreferrer" href="https://www.linkedin.com/in/allencarlosdev/" target="_blank"><i class="fa fa-linkedin"></i></a></li>
                <li class="social__link" :class="{'social__link--active':(active ===3), 'social__link--inactive':(active !== 3 && move === true)}" @mouseover="setActive(3)" ><a rel="noopener noreferrer" href="https://stackoverflow.com/users/16209550/carlos-allen" target="_blank"><i class="fa fa-stack-overflow"></i></a></li>
                <li class="social__link" :class="{'social__link--active':(active ===4), 'social__link--inactive':(active !== 4 && move === true)}" @mouseover="setActive(4)" ><a rel="noopener noreferrer" href="https://www.sololearn.com/profile/20725585" target="_blank"><i class="fab fa-stripe-s"></i></a></li>
            </ul>
        </div>
    </header>
</template>

<script>
    export default {
        name: 'HeaderView',
        data (){
            return {
                active:'',
                move:'',
            }
        },
        methods:{
            setActive(value){
                this.active = value;
            },
            setMove(value){
                this.move = value;
            },

        }
    }
</script>

<style scoped>
    
    .header {
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 5rem;
        position: relative;
        top: 0;
        z-index: 4;
    }

    /* Logo */
    .header__triangle {
        display: flex;
        position: relative;
        background: var(--letter-color);
        width: 14rem;
        height: 14rem;
        clip-path: polygon(100% 0, 0 0, 0 100%);
        animation: triangle 7s;
    }

    @keyframes triangle {
        0%{
            clip-path: polygon(0 0, 0 0, 0 0);
        }
        80% {
            clip-path: polygon(0 0, 0 0, 0 0);
        }

        100% {
            clip-path: polygon(100% 0, 0 0, 0 100%);
        }
    }

    .header__logo {
        position: absolute;
        width: 4rem;
        top: 1rem;
        left:2rem;
        z-index: 5;
        animation: logo 10s infinite;
    }

    @keyframes logo{
        0% {
            transform: rotateY(-35deg);
        }
        50%{
            transform: rotatey(35deg);
        }
        100%{
            transform: rotateY(-35deg);
        }
    }
    .cls-1 {
        fill: var(--background-body);
    }

    /* social menu */
    .social {
        display: flex;
        margin-right: 4rem;
    }

    .fa,.fab {
        color: var(--letter-color);
        font-size: 2.5rem;
        margin: 1rem;
    }

    .social__link {
        transition: all 0.8s;
    }

    .social__link--active {
        opacity: 1;
    }

    .social__link--inactive {
        opacity: 0.3;
    }
    
    /* @media screen and (max-width:1050px) {
        .header {
            justify-content: center;
        }

        .social-networks {
            margin-right: auto;
            margin-left: auto;
        }
    } */
    
</style>