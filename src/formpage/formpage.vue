<template>
    <div class="container container-fluid">
        <form-banner></form-banner>
        <transition name="slide" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
    import formbanner from './form-component/formbanner.vue';

    export default{
        components:{
            'form-banner':formbanner,
        }
    };
</script>

<style scoped>
      .slid-enter-to, .slide-leave{
    opacity:1;
  }

  .slide-leave-active{
    transition: opacity 0.5s ease;
    animation: slide-out 0.5s ease-in forwards;
  }
  
  .slide-leave-to, .slide-enter{
    opacity:0;
  }
  
  .slide-enter-actvive{
    transition:opacity 0.5s ease;
    opacity:1;
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