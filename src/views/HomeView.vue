<template>
    <div class="home">
        <div class="name-title">
            <h1 class="name-title__carlos">CARLOS ALLEN</h1>
            <P class="name-title__dev">FULLSTACK</P>
        </div>
        <div class="image-carlos">
            <img src="../assets/carlosallen.svg" alt="">
        </div>

        <div class="name-title--front">
            <h1 class="name-title__carlos--front">CARLOS ALLEN</h1>
            <P class="name-title__dev--front">FULLSTACK</P>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .home {
        display: flex;
        position: relative;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        margin-bottom: 80px;
    }

    .name-title{
        position: absolute;
        z-index: var(--z-index60);
        line-height: 9vw;
    }
    .name-title__carlos {
        font-size: 20vh;
        font-weight: 600;
    }
    .name-title__dev {
        text-align: center;
        font-weight: 600;
        font-size: 15vh;
    }
    .image-carlos {
        position: absolute;
        width: 30vw;
        z-index: var(--z-index70);
    }
    
    .name-title--front {
        position: absolute;
        z-index: var(--z-index80);
        line-height: 9vw;
    }

    .name-title__carlos--front {
        font-size: 20vh;
        font-weight: 600;
        -webkit-text-fill-color: transparent;
        -webkit-text-stroke: 1px;
    }
    .name-title__dev--front {
        text-align: center;
        font-weight: 600;
        font-size: 15vh;
        -webkit-text-fill-color: transparent;
        -webkit-text-stroke: 1px;
    }
</style>