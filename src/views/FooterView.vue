<template>
    <footer class="footer">
        <div class="download-cv">
            <a href="https://drive.google.com/uc?export=download&id=1hGv2aHqnv5J6beAhBqJWP_tvx3Vk8szq" download="Carlos-Allen-CV" class="nav__link"><i class="fa-solid fa-circle-down"></i>Download CV</a>
        </div>
        <div class="contact-email">
            <p class="contact-email__p"><i class="fa-solid fa-envelope"></i> allencarlosdev@gmail.com </p>
        </div>

        <div class="button-home">
            <router-link to="/" class="nav__link"><i class="fa-solid fa-house-chimney"></i>Home</router-link>
        </div>

    </footer>
</template>

<script>
    export default {
        name:'FooterView',
        publicPath: process.env.BASE_URL,
    }
</script>

<style scoped>
    .footer {
        background: var(--background-footer);
        position: fixed;
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
        background:linear-gradient(var(--letter-color), var(--letter-gradient));
    }

    .nav__link {
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
        background:linear-gradient(var(--letter-color), var(--letter-gradient));
    }

</style>