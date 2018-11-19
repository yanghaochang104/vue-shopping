<template>
  <div class="container container-fluid py-2">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">
        <i class="fas fa-shopping-bag"></i>
        <span class="ml-1">S-mart</span>
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link tag="a" class="nav-link" to="/mallpage">Mall</router-link>
          </li>
          <li class="nav-item">
            <router-link tag="a" class="nav-link" to="/formpage">Customer</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#footer" @click.prevent="scrollSmooth()">Contact Us</a>
          </li>
        </ul>
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link" href="#">Login</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Sign Up</a>
          </li>
        </ul>
        
      </div>
    </nav>
  </div>
</template>

<script>
export default{
  methods:{
    scrollSmooth(){
      let elem = document.getElementById("footer");
      elem.scrollIntoView({behavior:"smooth", block:"start"});
    }
  }
};
</script>

<style scoped>
  html {
     scroll-behavior:smooth;
  }
  
  navbg{
    background-color:#000080;
  }
</style>