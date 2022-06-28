<template>
    <footer class="footer">
        <button class="footer-btn">
            <a rel="noopener noreferrer" href="https://drive.google.com/uc?export=download&id=1qRMUFfXmoLZ__oNNcQI5rZDIBNUW5Fue" download="Carlos-Allen-CV" class="footer__link"><i class="fa-solid fa-circle-down"></i>Download CV</a>
        </button>
        <div class="footer-email">
            <p class="footer-email__p"><i class="fa-solid fa-envelope"></i> contact@allencarlosdev.com </p>
        </div>

        <button class="footer-btn">
            <router-link to="/" class="footer__link"><i class="fa-solid fa-house-chimney"></i>Home</router-link>
        </button>

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
        z-index: 4;
        bottom: 0;
        height: 5rem;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 1.5rem;
    }
    
    .footer-btn {
        margin: 5rem;
        cursor: pointer;
        border: 0.25rem solid var(--letter-color);
        border-radius: 1rem;
    }

    .footer-btn:hover{
        transition: .5s;
        background:var(--letter-color);
    }

    .footer__link {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 12rem;
        height: 3rem;
        color: var(--letter-color);      
    }

    .footer__link:hover {
        color: var(--background-footer);      
    }

    .fa-circle-down, .fa-house-chimney {
        margin-right: 0.5rem;
    }

</style>