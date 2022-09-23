<template>
  <div class="portfolio">
      <div class="portfolio__container">
        <transition-group
          appear=""
          tag="ul"
          class="portfolio__projects"
          @before-enter="beforeEnter"
          @enter="enter"
        >
          <li class="portfolio__page" v-for="(project, index) in projects" :key="project.id" :data-index="index"  @mouseover="setIndex(index)" @mouseout="setIndex(false)">
            <img :class="{'portfolio__img':(indexId != index+1),'portfolio__imghover':(indexId === index+1)}" :src="project.image" alt="image of all projects list" loading="lazy">
              <div class="portfolio__card">
                <h3 class="portfolio__title">{{project.title}}</h3>
                <p class="portfolio__text">{{project.objective}}</p>
                <div class="portfolio__buttons">
                  <a rel="noopener noreferrer" :title="project.links.titleCode" class="portfolio__btn" :href="project.links.hrefCode" target="_blank">Code</a>
                  <a rel="noopener noreferrer" :title="project.links.titlePage" class="portfolio__btn" :href="project.links.hrefPage" target="_blank">Website</a>
                </div>
              </div>
          </li>       
        </transition-group>
        <div class="pagination-container">
          <ul class="pagination">
            <li class="pagination__item" @click="getPreviousPage()"><a class="pagination__a" href="#">Previous</a></li>
            <li class="pagination__item" v-for="page in totalPages()" :key="page.id" @click="getDataPage(page)"><a class="pagination__a" :class="isActive(page)" href="#">{{ page }}</a></li>
            <li class="pagination__item" @click="getNextPage()"><a class="pagination__a" href="#">Next</a></li>
          </ul>
      </div>
      </div>
  </div>
</template>

<script>
import gsap from 'gsap'
import { projectsData } from '../components/projectsData.js'
  export default {
    name: "portfolio",
    data(){
      return{
        projects : projectsData,
        indexId:'0',
        elementByPage: 6,
        dataPages:[],
        currentPage: 1
      }
    },
    mounted(){
      this.getDataPage(1);
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
      },
      totalPages(){
        return Math.ceil(this.projects.length/this.elementByPage)
      },
      getDataPage(numberPage){
        this.currentPage = numberPage;
        this.dataPages=[];
        let start = (numberPage * this.elementByPage) - this.elementByPage;
        let end = (numberPage * this.elementByPage);
        this.dataPages = this.projects.slice(start, end);
      },
      getPreviousPage(){
        if (this.currentPage > 1) {
          this.currentPage--;
        }
        this.getDataPage(this.currentPage)
      },
      getNextPage(){
        if (this.currentPage < this.totalPages()) {
          this.currentPage++;
        }
        this.getDataPage(this.currentPage)
      },
      isActive(numberPage){
        return numberPage == this.currentPage ? 'active': ''
      }
    }
  }
</script>

<style scoped>
  .portfolio {
    position: absolute;
    display: flex;
    justify-content: end;
    width: 100%;
    /* background: lightcoral; */
  }

  /* All projects */
  .portfolio__container {
    margin: 5rem 0;
    width: 90%;
    padding: 5rem;
    /* background: cyan; */
  }

  .portfolio__projects {
    display: grid;
    gap: 0.938rem;
    grid-template-columns: repeat(auto-fill, minmax(min(100%, 30rem), 1fr));
    grid-auto-rows: minmax(10rem, 18rem);
    /* background: lightgoldenrodyellow; */
  }

  .portfolio__page {
    background-color: var(--background-footer);
    box-shadow: 0.125rem 0.125rem 0.375rem 0 var(--background-footer);
    border-radius: 1.25rem;
    text-align: center;
    overflow: hidden;
  }

  .portfolio__img {
    width: 100%;
    height: 100%;
    border-radius: 1.25rem;
    transition: all 2s;
  }
  .portfolio__imghover {
    width: 100%;
    height: 50%;
    border-radius: 1.25rem;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    transition: all 2s;
  }

  .portfolio__card {
    display: block;
  }
  

  .portfolio__title {
    margin: 1rem 0;
    font-size: 1rem;
    z-index: 5;
  }

  .portfolio__text {
    font-size: 0.8rem;
    margin: 1rem;
  }

  .portfolio__buttons {
    display: flex;
    justify-content: space-around;
  }

  .portfolio__btn {
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

  .portfolio__btn:hover {
    background: var(--letter-color);
    color: var(--background-body);
  }

   @media screen and (min-width:2350px){
    .portfolio__projects {
      grid-template-columns: repeat(3, minmax(min(100%, 30rem), 1fr));
      grid-auto-rows: minmax(10rem, 25rem);
    }
  }
  
  @media screen and (max-width:1700px) {
    .portfolio__projects {
      grid-template-columns: repeat(3, minmax(min(100%, 25rem), 1fr));
      grid-auto-rows: minmax(10rem, 15rem);
    }
  }
  @media screen and (max-width:1500px) {
    .portfolio__projects {
      grid-template-columns: repeat(auto-fill, minmax(min(100%, 25rem), 1fr));
    }
  }

  @media screen and (max-width:1000px) {
    .portfolio__container {
      width: 100%;
      padding: 5rem 2rem;
    }
  }

  @media screen and (max-width:500px) {
    .portfolio__container{
      padding: 5rem 1rem;
    }
  }

</style>

