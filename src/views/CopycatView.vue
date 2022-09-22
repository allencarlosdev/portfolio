<template>
  <div class="copycat">
    <div class="copycat__container">
      <transition-group
          appear=""
          tag="ul"
          class="copycat__projects"
          @before-enter="beforeEnter"
          @enter="enter"
        >       
        <li class="copycat__page" v-for="(project, index) in filterProjects" :key="project.id" :data-index="index"  @mouseover="setIndex(index)" @mouseout="setIndex(false)">
          <img :class="{'copycat__img':(indexId != index+1),'copycat__imghover':(indexId === index+1)}" :src="project.image" alt="image of Copycat list" loading="lazy">
            <div class="copycat__card">
              <h3 class="copycat__title">{{project.title}}</h3>
              <p class="copycat__text">{{project.objective}}</p>
              <div class="copycat__buttons">
                <a rel="noopener noreferrer" :title="project.links.titleCode" class="copycat__btn" :href="project.links.hrefCode" target="_blank">Code</a>
                  <a rel="noopener noreferrer" :title="project.links.titlePage" class="copycat__btn" :href="project.links.hrefPage" target="_blank">Website</a>
              </div>
            </div>
        </li>
      </transition-group>
    </div>
  </div>
</template>

<script>
import gsap from 'gsap'
import { projectsData } from '../components/projectsData.js'
  export default {
    name: "copycat",
    data(){
      return{
        projects: projectsData,
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
            return this.projects.filter(project => project.category === 'CopyCat')
        }
    }
    
  }
</script>

<style scoped>
  .copycat {
    position: absolute;
    display: flex;
    justify-content: end;
    width: 100%;

    /* background: lightcoral; */
  }

  /* All projects */
  .copycat__container {
    margin: 5rem 0;
    width: 90%;
    padding: 5rem;

    /* background: cyan; */
  }

  .copycat__projects {
    display: grid;
    gap: 0.938rem;
    grid-template-columns: repeat(auto-fill, minmax(min(100%, 30rem), 1fr));
    grid-auto-rows: minmax(10rem, 20rem);

    /* background: lightgoldenrodyellow; */
  }

  .copycat__page {
    background-color: var(--background-footer);
    box-shadow: 0.125rem 0.125rem 0.375rem 0 var(--background-footer);
    border-radius: 1.25rem;
    text-align: center;
    overflow: hidden;
  }

  .copycat__img {
    width: 100%;
    height: 100%;
    border-radius: 1.25rem;
    transition: all 2s;
  }
  .copycat__imghover {
    width: 100%;
    height: 50%;
    border-radius: 1.25rem;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    transition: all 2s;
  }

  .copycat__card {
    display: block;
  }
  
  .copycat__title {
    margin: 1rem 0;
    font-size: 1rem;
    z-index: 5;
  }

  .copycat__text {
    font-size: 0.8rem;
    margin: 1rem;
  }

  .copycat__buttons{
    display: flex;
    justify-content: space-around;
  }

  .copycat__btn {
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

  .copycat__btn:hover {
    background: var(--letter-color);
    color: var(--background-body);
  }

  @media screen and (max-width:1000px) {
    .copycat__container {
      width: 100%;
      padding: 5rem 2rem;
    }
  }
  @media screen and (max-width:500px) {
    .copycat__container {
      padding: 5rem 1rem;
    }
  }
</style>
