<template>
    <footer class="footer">
        <button class="footer__btn footer__btn--cv">
            <a rel="noopener noreferrer" href="https://drive.google.com/uc?export=download&id=15hjoh5040s8LrurCtjp3WmWqm9rkeDT9" download="Carlos-Allen-CV" class="footer__link"><i class="fa-solid fa-circle-down"></i>Download CV</a>
        </button>
        <div class="footer__email">
            <p class="footer__p"><i class="fa-solid fa-envelope"></i> allencarlosdev@gmail.com </p>
        </div>

        <button class="footer__btn footer__btn--home">
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
    
    .footer__btn {
        margin: 5rem;
        cursor: pointer;
        border: 0.25rem solid var(--letter-color);
        border-radius: 1rem;
    }

    .footer__btn:hover{
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

    @media screen and (max-width:1000px) {
        .footer__btn {
            margin: 0.5rem;
        }
    }

    @media screen and (max-width:710px) {
        .footer {
            height: 7.5rem;
        }

        .footer__email {
            position: absolute;
            text-align: center;
            top:1rem;
            left: 0;
            right: 0;
            order: 1;
        }
        .footer__btn {
            order: 2;
            margin-top: 3.5rem;
        }
    }
    @media screen and (max-width:575px) {
        .footer__btn--cv {
            display: none;
        }
        .footer {
            justify-content: center;
        }
    }

</style>