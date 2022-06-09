<template>
    <footer class="footer">
        <div class="download-cv">
            <a rel="noopener noreferrer" href="https://drive.google.com/uc?export=download&id=1qRMUFfXmoLZ__oNNcQI5rZDIBNUW5Fue" download="Carlos-Allen-CV" class="nav__link"><i class="fa-solid fa-circle-down"></i>Download CV</a>
        </div>
        <div class="contact-email">
            <p class="contact-email__p"><i class="fa-solid fa-envelope"></i> contact@allencarlosdev.com </p>
        </div>

        <div class="button-home">
            <router-link to="/" class="nav__link"><i class="fa-solid fa-house-chimney"></i>Home</router-link>
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
        position: fixed;
        z-index: var(--z-index90);
        bottom: 0;
        height: 5rem;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    

    .download-cv {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 7.5rem;
        height: 2.5rem;
        background: var(--letter-color);
        margin-left: 6.25rem;
        cursor: pointer;
        border-radius: 0.625rem;
    }

    .download-cv:hover{
        transition: .5s;
        background:linear-gradient(var(--letter-color), var(--letter-gradient));
    }

    .nav__link {
        color: var(--background-body);      
    }

    .fa-circle-down, .fa-house-chimney {
        margin-right: 0.313rem;
        color: var(--background-body);
    }

    .button-home{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 7.5rem;
        height: 2.5rem;
        background: var(--letter-color);
        cursor: pointer;
        border-radius: 0.625rem;
        margin-right: 6.25rem;
    }

    .button-home:hover {
        transition: .5s;
        background:linear-gradient(var(--letter-color), var(--letter-gradient));
    }

    @media screen and (max-width:630px){
        .download-cv{
            margin-left: 0.625rem;
        }

        .button-home {
            margin-right: 0.625rem;
        }
    }

    @media screen and (max-width:450px){
        .download-cv{
            width: 6.25rem;
            margin-left: 0.313rem;
        }
        
        .button-home {
            width: 6.25rem;
            margin-right: 0.313rem;
        }
    }

    @media screen and (max-width:390px){
        .download-cv{
            width: 5rem;
            margin-left: 0.313rem;
        }
        
        .button-home {
            width: 5rem;
            margin-right: 0.313rem;
        }

        .fa-solid {
            display: none;
        }
    }
</style>