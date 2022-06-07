<template>
  <div class="skill">
    <nav class="nav">
      <router-link to="/portfolio" class="nav__link"><i class="fa-solid fa-table-list"></i> All projects</router-link>
      <router-link to="/templates" class="nav__link"><i class="fa-solid fa-palette"></i> Templates</router-link>
      <router-link to="/copycat" class="nav__link"><i class="fa-solid fa-copy"></i> CopyCat Websites</router-link>
      <router-link to="/complete-projects" class="nav__link"><i class="fa-solid fa-laptop-code"></i> Complete projects</router-link>
      <router-link to="/skill" class="nav__link"><i class="fa-solid fa-book"></i> Skill</router-link>
    </nav>
    <div class="container-skill">
      <transition-group
          appear=""
          tag="ul"
          class="skill-list"
          @before-enter="beforeEnter"
          @enter="enter"
        >  
        <li class="skill-list__page" v-for="(skill, index) in skills" :key="skill.id" :data-index="index"  @mouseover="setIndex(index)" @mouseout="setIndex(false)">
          <img class="skill-list__img" :src="skill.image" alt="images of the technologies used" loading="lazy">
        </li>
      </transition-group>
    </div>
  </div>
</template>

<script>
import gsap from 'gsap'
  export default {
    name: "skill",
    data(){
      return{
        skills:[
          {
            id:1,
            title:"HTML",
            image:require("@/assets/skill/html.svg"),
          },
          {
            id:2,
            title:"CSS",
            image:require("@/assets/skill/css.svg"),
          },
          {
            id:3,
            title:"JAVASCRIPT",
            image:require("@/assets/skill/javascript.svg"),
          },
          {
            id:4,
            title:"PHP",
            image:require("@/assets/skill/php.svg"),
          },
          {
            id:5,
            title:"MYSQL",
            image:require("@/assets/skill/mysql.svg"),
          },
          {
            id:6,
            title:"VUE",
            image:require("@/assets/skill/vue.svg"),
          },
          {
            id:7,
            title:"BOOTSTRAP",
            image:require("@/assets/skill/bootstrap.svg"),
          },
          {
            id:8,
            title:"LIVEWIRE",
            image:require("@/assets/skill/livewire.svg"),
          },
          {
            id:9,
            title:"GIT",
            image:require("@/assets/skill/git.svg"),
          },
          {
            id:10,
            title:"ALPINEJS",
            image:require("@/assets/skill/alpinejs.svg"),
          },
          {
            id:11,
            title:"LARAVEL",
            image:require("@/assets/skill/laravel.svg"),
          },
          {
            id:12,
            title:"TAILWINDCSS",
            image:require("@/assets/skill/tailwind.svg"),
          },
        ],
        indexId:'0',
      }
    },
    methods:{
      setIndex(value){
        if (value === false) {
          this.indexId='0';
        }else{
          this.indexId= value + 1;
        }
      },
      beforeEnter(el) {
        el.style.opacity = 0;
        el.style.transform = 'translateY(60px)'
      },
      enter (el) {
        gsap.to(el,{
          opacity:1,
          y:0,
          duration: 1.5,
          delay: el.dataset.index * 0.7,
        })
      }
    }
  }
</script>

<style scoped>
/* NavBar of the projects */
  .skill {
    position: relative;
    display: flex;
    flex-direction: column;
    margin-top: 6.25rem;
    justify-content: center;
  }

  .nav {
    display: flex;
    background: var(--background-footer);
    border-radius: 1.25rem;
    padding: 1.25rem;
    justify-content: space-between;
    margin-left: auto;
    margin-right: auto;
    width: 80%;
  }
  .nav__link {
    font-weight: bold;
    color: var(--letter-gradient);
  }
  .router-link-exact-active {
    color: var(--letter-color);
  }

  .fa-solid {
    margin-right: 0.313rem;
  }

  /* All projects */
  .container-skill {
    margin-top: 1.25rem;
    margin-bottom: 7.5rem;
    margin-left: auto;
    margin-right: auto;
    width: 80%;
  }

  .skill-list {
    display: grid;
    gap: 3.125rem;
    grid-template-columns: repeat(auto-fill, minmax(min(100%, 8rem), 1fr));
    grid-auto-rows: minmax(3.125rem, 8rem);
  }

  .skill-list__page {
    background-color: var(--background-footer);
    box-shadow: 0.125rem 0.125rem 0.375rem 0 var(--background-footer);
    border-radius: 1.25rem;
    text-align: center;
    overflow: hidden;
  }

  .skill-list__img {
    width: 100%;
    height: 100%;
    border-radius: 1.25rem;
  }

  @media screen and (max-width:480px){
        .fa-solid{
          display: none;
        }
        .nav__link{
          margin-right: 0.313rem;
        }
    }
</style>
