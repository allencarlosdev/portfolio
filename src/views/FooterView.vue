<template>
    <footer class="footer">
        <div class="download-cv">
            <a class="button-cv"><i class="fa-solid fa-circle-down"></i>Download CV</a>
        </div>
        <div class="contact-email">
            <p class="contact-email__p"><i class="fa-solid fa-envelope"></i> allencarlosdev@gmail.com </p>
        </div>

        <div class="button-home">
            <a class="button-cv"><i class="fa-solid fa-house-chimney"></i>Home</a>
        </div>

    </footer>
</template>

<script>
    export default {
        name:'FooterView',

    }
</script>

<style scoped>
    .footer {
        background: var(--background-footer);
        position: absolute;
        bottom: 0;
        height: 80px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    

    .download-cv {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 120px;
        height: 40px;
        background: var(--letter-color);
        margin-left: 100px;
        cursor: pointer;
        border-radius: 10px;
    }

    .download-cv:hover{
        transition: .5s;
        box-shadow: 0 0 5px var(--letter-color), 0 0 10px var(--letter-color), 0 0 20px var(--letter-color);
    }

    .button-cv {
        color: var(--background-body);      
    }

    .fa-circle-down, .fa-house-chimney {
        margin-right: 5px;
        color: var(--background-body);
    }

    .button-home{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 120px;
        height: 40px;
        background: var(--letter-color);
        cursor: pointer;
        border-radius: 10px;
        margin-right: 100px;
    }

    .button-home:hover {
        transition: .5s;
        box-shadow: 0 0 5px var(--letter-color), 0 0 10px var(--letter-color), 0 0 20px var(--letter-color);
    }

</style>