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
      <ul class="project-list">        
        <li class="project-list__page" v-for="(project, index) in filterProjects" :key="project.id" :data-index="index"  @mouseover="setIndex(index)" @mouseout="setIndex(false)">
          <img :class="{'project-list__img':(indexId != index+1),'project-list__imghover':(indexId === index+1)}" :src="project.image" alt="">
            <div :class="{'card-on':(indexId === index+1), 'card-off':(indexId != index+1)}">
              <h3 class="card__title">{{project.title}}</h3>
              <p class="card__text">{{project.objective}}</p>
              <div class="card-buttons">
                <a class="card-buttons__project" :href="project.linkGithub" target="_blank">Code</a>
                <a class="card-buttons__project" :href="project.linkPage" target="_blank">Website</a>
              </div>
            </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import gsap from 'vue'
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
    margin-top: 100px;
    justify-content: center;
  }

  .nav {
    display: flex;
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
    margin-right: 5px;
  }

  /* All projects */
  .container-copycat {
    margin-top: 20px;
    margin-bottom: 120px;
    margin-left: auto;
    margin-right: auto;
    width: 80%;
  }

  .project-list {
    display: grid;
    gap: 15px;
    grid-template-columns: repeat(auto-fill, minmax(min(100%, 25rem), 1fr));
    grid-auto-rows: minmax(150px, 330px);
  }

  .project-list__page {
    background-color: var(--background-footer);
    box-shadow: 2px 2px 6px 0px var(--background-footer);
    border-radius: 20px;
    text-align: center;
    overflow: hidden;
  }

  .project-list__img {
    width: 100%;
    height: 100%;
    border-radius: 20px;
    transition: all 2s;
  }
  .project-list__imghover {
    width: 100%;
    height: 50%;
    border-radius: 20px;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
    transition: all 2s;
  }

  .card-on {
    display: block;
  }
  
  .card-off {
    display: none;
  }

  .card__title {
    margin: 5px 0px;
    font-size: 1.5em;
    z-index: 100;
  }

  .card__text {
    font-size: 1em;
    margin: 15px;
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
    width: 100px;
    height: 30px;
    cursor: pointer;
    border-radius: 10px;
    color: var(--background-body);
    
  }
</style>
