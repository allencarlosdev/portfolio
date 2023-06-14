<template>
    <div class="wordpress">
      <div class="wordpress__container">
        <projectList :filterProjects="filterProjects"></projectList>
        <pagination category="Wordpress" @projectPages="filterData"></pagination>
      </div>
    </div>
  </template>
  
  <script>
  import pagination from '@/components/pagination.vue'
  import projectList from '@/components/projectList.vue'
    export default {
      name: "wordpress",
      components:{
        pagination,
        projectList
      },
      data(){
        return{
          filterProjects: [],
        }
      },
      methods:{
        filterData(value){
          this.filterProjects = value;
        },
      }
    }
  </script>
  
  <style scoped>
    .wordpress {
      position: absolute;
      display: flex;
      justify-content: end;
      width: 100%;
  
      /* background: lightcoral; */
    }
  
    /* All projects */
    .wordpress__container {
      margin: 5rem 0;
      width: 90%;
      padding: 5rem;
  
      /* background: cyan; */
    }
  
    @media screen and (max-width:1000px) {
      .wordpress__container {
        width: 100%;
        padding: 5rem 2rem;
      }
    }
    @media screen and (max-width:500px) {
      .wordpress__container {
        padding: 5rem 1rem;
      }
    }
  </style>
  