<template>
    <header class="header">
        <ul class="social-networks" @mouseover="setMove(true)" @mouseout="setMove(false)">
            <li class="social-networks__link" :class="{'social-networks__link--active':(active ===1), 'social-networks__link--inactive':(active !== 1 && move === true)}" @mouseover="setActive(1)" ><a href="https://github.com/allencarlosdev" target="_blank"><i class="fa fa-github"></i></a></li>
            <li class="social-networks__link" :class="{'social-networks__link--active':(active ===2), 'social-networks__link--inactive':(active !== 2 && move === true)}" @mouseover="setActive(2)" ><a href="https://www.linkedin.com/in/allencarlosdev/" target="_blank"><i class="fa fa-linkedin"></i></a></li>
            <li class="social-networks__link" :class="{'social-networks__link--active':(active ===3), 'social-networks__link--inactive':(active !== 3 && move === true)}" @mouseover="setActive(3)" ><a href="https://stackoverflow.com/users/16209550/carlos-allen" target="_blank"><i class="fa fa-stack-overflow"></i></a></li>
            <li class="social-networks__link" :class="{'social-networks__link--active':(active ===4), 'social-networks__link--inactive':(active !== 4 && move === true)}" @mouseover="setActive(4)" ><a href="https://www.sololearn.com/profile/20725585" target="_blank"><i class="fab fa-stripe-s"></i></a></li>
        </ul>
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
        justify-content: end;
        align-items: center;

        width: 100%;
        height: 80px;
        position: absolute;
        z-index: var(--z-index90);
    }

    .social-networks {
        display: flex;
        position: absolute;
        top: 20px;
        bottom: 20px;
        margin-right: 60px;
    }

    .fa,.fab {
        color: var(--letter-color);
        font-size: 2rem;
        margin: 0 10px;
    }

    .social-networks__link {
        transition: all 0.8s;
    }

    .social-networks__link--active {
        opacity: 1;
    }

    .social-networks__link--inactive {
        opacity: 0.3;
    }
    
    @media screen and (max-width:1050px) {
        .header {
            justify-content: center;
        }

        .social-networks {
            margin-right: auto;
            margin-left: auto;
        }
    }
</style>