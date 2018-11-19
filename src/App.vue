<template>
  <div class="container container-fluid">
    <pagehead></pagehead>
    
    <transition name="slide" mode="out-in">    
      <router-view></router-view>
    </transition>

    <pagefoot></pagefoot>
  </div>
</template>

<script>
  import header from './components/header.vue';
  import footer from './components/footer.vue';
  
  export default{
    components:{
      'pagehead':header,
      'pagefoot':footer
    }
  };
</script>

<style scoped>
  .slide-enter-to, .slide-leave{
    opacity:1;
  }

  .slide-leave-active{
    transition: opacity 0.5s ease;
    animation: slide-out 0.5s ease-in forwards;
  }
  
  .slide-leave-to, .slide-enter{
    opacity:0;
  }
  
  .slide-enter-active{
    transition: opacity 0.5s ease;
    animation: slide-in 0.5s ease-out forwards;
    
  }

  
  @keyframes slide-out {
    from{
      transform:translateX(0px);
    }
    to{
      transform:translateX(-20px);
    }
  }
  
  @keyframes slide-in {
    from {
      transform:translateX(20px);
    }
    to {
      transform:translateX(0px);
    }
  }
  
</style>
