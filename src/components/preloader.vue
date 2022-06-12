<template>
    <transition name="fade">
        <div class="preloader">
            <img loading="lazy" src="../assets/FAVICON3.svg" alt="portfolio logo" class="logo-a">
            <p>Please wait!</p>
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
        name:'preloader'
    }
</script>
