<template>
  <div class="portfolio">
    <nav class="nav">
      <router-link to="/portfolio" class="nav__link"><i class="fa-solid fa-table-list"></i> All projects</router-link>
          <router-link to="/templates" class="nav__link"><i class="fa-solid fa-palette"></i> Templates</router-link>
          <router-link to="/copycat" class="nav__link"><i class="fa-solid fa-copy"></i> CopyCat Websites</router-link>
          <router-link to="/complete-projects" class="nav__link"><i class="fa-solid fa-laptop-code"></i> Complete projects</router-link>
          <router-link to="/skill" class="nav__link"><i class="fa-solid fa-book"></i> Skill</router-link>
    </nav>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
  .portfolio {
    position: relative;
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    justify-content: center;
  }

  .nav {
    display: flex;
    justify-content: center;
  }
  .nav__link {
    margin-right: 20px;
    margin-left: 20px;
    font-weight: bold;
    color: var(--letter-gradient);
  }
  .router-link-exact-active {
    color: var(--letter-color);
  }

  .fa-solid {
    margin-right: 5px;
  }


</style>

