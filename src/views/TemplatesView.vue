<template>
  <div class="templates">
    <div class="templates__container">
      <transition-group
          appear=""
          tag="ul"
          class="templates__projects"
          @before-enter="beforeEnter"
          @enter="enter"
        >       
        <li class="templates__page" v-for="(project, index) in filterProjects" :key="project.id" :data-index="index"  @mouseover="setIndex(index)" @mouseout="setIndex(false)">
          <img :class="{'templates__img':(indexId != index+1),'templates__imghover':(indexId === index+1)}" :src="project.image" alt="image of templates list">
            <div class="templates__card">
              <h3 class="templates__title">{{project.title}}</h3>
              <p class="templates__text">{{project.objective}}</p>
              <div class="templates__buttons">
                  <a rel="noopener noreferrer" :title="project.links.titleCode" class="templates__btn" :href="project.links.hrefCode" target="_blank">Code</a>
                  <a rel="noopener noreferrer" :title="project.links.titlePage" class="templates__btn" :href="project.links.hrefPage" target="_blank">Website</a>
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
    name: "templates",
    data(){
      return{
          projects:[
          {
            id:1,
            category:"Templates",
            title:"Allenpage1",
            image:require("@/assets/allenpage1.png"),
            objective:"My goal as a programmer for this static page was to make it as simple as possible without using methodologies, libraries etc.",
            links:{
              hrefCode:"https://github.com/allencarlosdev/Allenpage1", titleCode:"code on github page 1",
              hrefPage :"https://allencarlosdev.github.io/page1/", titlePage:"web page 1",
            }
          },
          {
            id:2,
            category:"CopyCat",
            title:"Allenpage2",
            image:require("@/assets/allenpage2.png"),
            objective:"the goal of this static page is to try to replicate the original page but with some subtle changes in addition to using BEM methodology.",
            links:{
              hrefCode:"https://github.com/allencarlosdev/Allenpage2", titleCode:"code on github page 2",
              hrefPage :"https://allencarlosdev.github.io/page2/", titlePage:"web page 2 - valorant",
            }
          },
          {
            id:3,
            category:"Websites",
            title:"Allenpage3",
            image:require("@/assets/allenpage3.svg"),
            objective:"The goal is to create a complete page for both the backend part (Laravel-MySQL) and the frontend part (Livewire) with its respective administration panel (AdminLTE).",
            links:{
              hrefCode:"https://github.com/allencarlosdev/Allenpage3", titleCode:"code on github page 3",
              hrefPage :"I don't have it yet", titlePage:"web page 3 - AllenBlog",
            }
          },
          {
            id:4,
            category:"Websites",
            title:"Portfolio",
            image:require("@/assets/allenpage4.png"),
            objective:"It shows all the own projects that I made to show to companies or clients, this page is made with Vuejs.",
            links:{
              hrefCode:"https://github.com/allencarlosdev/portfolio", titleCode:"code on github page portfolio",
              hrefPage :"https://allencarlosdev.com", titlePage:"Portfolio web of Carlos Allen",
            }
          },
        ],
        indexId:'0',
      }
    },
    methods:{
      setIndex(value){
        this.indexId = (value === false) ? '0' : value + 1;
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
            return this.projects.filter(project => project.category === 'Templates')
        }
    }
    
  }
</script>

<style scoped>
  .templates {
    position: absolute;
    display: flex;
    justify-content: end;
    width: 100%;

    /* background: lightcoral; */
  }

  /* All projects */
  .templates__container {
    margin: 5rem 0;
    width: 90%;
    padding: 5rem;

    /* background: cyan; */
  }

  .templates__projects {
    display: grid;
    gap: 0.938rem;
    grid-template-columns: repeat(auto-fill, minmax(min(100%, 30rem), 1fr));
    grid-auto-rows: minmax(10rem, 20rem);

    /* background: lightgoldenrodyellow; */
  }

  .templates__page {
    background-color: var(--background-footer);
    box-shadow: 0.125rem 0.125rem 0.375rem 0 var(--background-footer);
    border-radius: 1.25rem;
    text-align: center;
    overflow: hidden;
  }

  .templates__img {
    width: 100%;
    height: 100%;
    border-radius: 1.25rem;
    transition: all 2s;
  }
  .templates__imghover {
    width: 100%;
    height: 50%;
    border-radius: 1.25rem;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    transition: all 2s;
  }

  .templates__card {
    display: block;
  }
  
  .templates__title {
    margin: 1rem 0;
    font-size: 1rem;
    z-index: 5;
  }

  .templates__text {
    font-size: 0.8rem;
    margin: 1rem;
  }

  .templates__buttons {
    display: flex;
    justify-content: space-around;
  }

  .templates__btn {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 6.25rem;
    height: 1.875rem;
    cursor: pointer;
    color: var(--letter-color);
    border: 0.25rem solid var(--letter-color);
    border-radius: 0.5rem;
  }

  .templates__btn:hover {
    background: var(--letter-color);
    color: var(--background-body);
  }

  @media screen and (max-width:1000px) {
    .templates__container {
      width: 100%;
      padding: 5rem 2rem;
    }
  }

  @media screen and (max-width:500px) {
    .templates__container {
      padding: 5rem 1rem;
    }
  }

</style>
