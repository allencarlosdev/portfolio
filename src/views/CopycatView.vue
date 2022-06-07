<template>
   <div class="copycat">
    <nav class="nav">
      <router-link to="/portfolio" class="nav__link"><i class="fa-solid fa-table-list"></i> All projects</router-link>
      <router-link to="/templates" class="nav__link"><i class="fa-solid fa-palette"></i> Templates</router-link>
      <router-link to="/copycat" class="nav__link"><i class="fa-solid fa-copy"></i> CopyCat Websites</router-link>
      <router-link to="/complete-projects" class="nav__link"><i class="fa-solid fa-laptop-code"></i> Complete projects</router-link>
      <router-link to="/skill" class="nav__link"><i class="fa-solid fa-book"></i> Skill</router-link>
    </nav>
    <div class="container-copycat">
      <transition-group
          appear=""
          tag="ul"
          class="project-list"
          @before-enter="beforeEnter"
          @enter="enter"
        >       
        <li class="project-list__page" v-for="(project, index) in filterProjects" :key="project.id" :data-index="index"  @mouseover="setIndex(index)" @mouseout="setIndex(false)">
          <img :class="{'project-list__img':(indexId != index+1),'project-list__imghover':(indexId === index+1)}" :src="project.image" alt="image of Copycat list" loading="lazy">
            <div :class="{'card-on':(indexId === index+1), 'card-off':(indexId != index+1)}">
              <h3 class="card__title">{{project.title}}</h3>
              <p class="card__text">{{project.objective}}</p>
              <div class="card-buttons">
                <a rel="noopener noreferrer" class="card-buttons__project" :href="project.linkGithub" target="_blank">Code</a>
                <a rel="noopener noreferrer" class="card-buttons__project" :href="project.linkPage" target="_blank">Website</a>
              </div>
            </div>
        </li>
      </transition-group>
    </div>
  </div>
</template>

<script>
import gsap from 'gsap'
  export default {
    name: "copycat",
    data(){
      return{
        projects:[
          {
            id:1,
            category:"Templates",
            title:"Allenpage1",
            image:require("@/assets/allenpage1.svg"),
            objective:"My goal as a programmer for this static page was to make it as simple as possible without using methodologies, libraries etc.",
            linkGithub:"https://github.com/allencarlosdev/Allenpage1",
            linkPage:"I don't have it yet",
          },
          {
            id:2,
            category:"CopyCat",
            title:"Allenpage2",
            image:require("@/assets/allenpage2.svg"),
            objective:"the goal of this static page is to try to replicate the original page but with some subtle changes in addition to using BEM methodology.",
            linkGithub:"https://github.com/allencarlosdev/Allenpage2",
            linkPage:"I don't have it yet",
          },
          {
            id:3,
            category:"Websites",
            title:"Allenpage3",
            image:require("@/assets/allenpage3.svg"),
            objective:"The goal is to create a complete page for both the backend part (Laravel-MySQL) and the frontend part (Livewire) with its respective administration panel (AdminLTE).",
            linkGithub:"https://github.com/allencarlosdev/Allenpage3",
            linkPage:"I don't have it yet",
          },
          {
            id:4,
            category:"Websites",
            title:"Portfolio",
            image:require("@/assets/portfolio.svg"),
            objective:"It shows all the own projects that I made to show to companies or clients, this page is made with Vuejs.",
            linkGithub:"https://github.com/allencarlosdev/portfolio",
            linkPage:"I don't have it yet",
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
    },
    computed: {
        filterProjects: function (){
            return this.projects.filter(project => project.category === 'CopyCat')
        }
    }
    
  }
</script>

<style scoped>
/* NavBar of the projects */
  .copycat{
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
  .container-copycat {
    margin-top: 1.25rem;
    margin-bottom: 7.5rem;
    margin-left: auto;
    margin-right: auto;
    width: 80%;
  }

  .project-list {
    display: grid;
    gap: 0.938rem;
    grid-template-columns: repeat(auto-fill, minmax(min(100%, 25rem), 1fr));
    grid-auto-rows: minmax(9.375rem, 18.75rem);
  }

  .project-list__page {
    background-color: var(--background-footer);
    box-shadow: 0.125rem 0.125rem 0.375rem 0 var(--background-footer);
    border-radius: 1.25rem;
    text-align: center;
    overflow: hidden;
  }

  .project-list__img {
    width: 100%;
    height: 100%;
    border-radius: 1.25rem;
    transition: all 2s;
  }
  .project-list__imghover {
    width: 100%;
    height: 50%;
    border-radius: 1.25rem;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    transition: all 2s;
  }

  .card-on {
    display: block;
  }
  
  .card-off {
    display: none;
  }

  .card__title {
    margin: 0.313rem 0;
    font-size: 1.5rem;
    z-index: var(--z-index90);
  }

  .card__text {
    font-size: 1rem;
    margin: 0.938rem;
  }

  .card-buttons{
    display: flex;
    justify-content: space-around;
  }

  .card-buttons__project {
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--letter-color);
    text-align: center;
    width: 6.25rem;
    height: 1.875rem;
    cursor: pointer;
    border-radius: 0.625rem;
    color: var(--background-body);
    
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
