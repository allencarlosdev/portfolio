<template>
  <div class="vanilla">
    <div class="vanilla__container">
      <transition-group
          appear=""
          tag="ul"
          class="vanilla__projects"
          @before-enter="beforeEnter"
          @enter="enter"
        >       
        <li class="vanilla__page" v-for="(project, index) in filterProjects" :key="project.id" :data-index="index"  @mouseover="setIndex(index)" @mouseout="setIndex(false)">
          <img :class="{'vanilla__img':(indexId != index+1),'vanilla__imghover':(indexId === index+1)}" :src="project.image" alt="image of complete projects list" loading="lazy">
            <div class="vanilla__card">
              <h3 class="vanilla__title">{{project.title}}</h3>
              <p class="vanilla__text">{{project.objective}}</p>
              <div class="vanilla__buttons">
                <a rel="noopener noreferrer" :title="project.links.titleCode" class="vanilla__btn" :href="project.links.hrefCode" target="_blank">Code</a>
                  <a rel="noopener noreferrer" :title="project.links.titlePage" class="vanilla__btn" :href="project.links.hrefPage" target="_blank">Website</a>
              </div>
            </div>
        </li>
      </transition-group>
      <pagination category="Vanilla" @projectPages="filterData"></pagination>
    </div>
  </div>
</template>

<script>
import gsap from 'gsap'
import pagination from '@/components/pagination.vue'
  export default {
    name: "vanilla",
    components:{
      pagination
    },
    data(){
      return{
        indexId:'0',
        indexId:'0',
        filterProjects: [],
      }
    },
    methods:{
      filterData(value){
        this.filterProjects = value;
      },
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
    }
  }
</script>

<style scoped>
  .vanilla {
    position: absolute;
    display: flex;
    justify-content: end;
    width: 100%;

    /* background: lightcoral; */
  }

  /* All projects */
  .vanilla__container {
    margin: 5rem 0;
    width: 90%;
    padding: 5rem;

    /* background: cyan; */
  }

  .vanilla__projects {
    display: grid;
    gap: 0.938rem;
    grid-template-columns: repeat(auto-fill, minmax(min(100%, 30rem), 1fr));
    grid-auto-rows: minmax(10rem, 18rem);

    /* background: lightgoldenrodyellow; */
  }

  .vanilla__page {
    background-color: var(--background-footer);
    box-shadow: 0.125rem 0.125rem 0.375rem 0 var(--background-footer);
    border-radius: 1.25rem;
    text-align: center;
    overflow: hidden;
  }

  .vanilla__img {
    width: 100%;
    height: 100%;
    border-radius: 1.25rem;
    transition: all 2s;
  }
  .vanilla__imghover {
    width: 100%;
    height: 50%;
    border-radius: 1.25rem;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    transition: all 2s;
  }

  .vanilla__card {
    display: block;
  }
  
  .vanilla__title {
    margin: 1rem 0;
    font-size: 1rem;
    z-index: 5;
  }

  .vanilla__text {
    font-size: 0.8rem;
    margin: 1rem;
  }

  .vanilla__buttons{
    display: flex;
    justify-content: space-around;
  }

  .vanilla__btn {
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

  .vanilla__btn:hover {
    background: var(--letter-color);
    color: var(--background-body);
  }
   @media screen and (min-width:2350px){
    .vanilla__projects {
      grid-template-columns: repeat(3, minmax(min(100%, 30rem), 1fr));
      grid-auto-rows: minmax(10rem, 25rem);
    }
  }
  
  @media screen and (max-width:1700px) {
    .vanilla__projects {
      grid-template-columns: repeat(3, minmax(min(100%, 25rem), 1fr));
      grid-auto-rows: minmax(10rem, 15rem);
    }
  }
  @media screen and (max-width:1500px) {
    .vanilla__projects {
      grid-template-columns: repeat(auto-fill, minmax(min(100%, 25rem), 1fr));
    }
  }

  @media screen and (max-width:1000px) {
    .vanilla__container {
      width: 100%;
      padding: 5rem 2rem;
    }
  }

  @media screen and (max-width:500px) {
    .vanilla__container {
      padding: 5rem 1rem;
    }
  }
</style>
