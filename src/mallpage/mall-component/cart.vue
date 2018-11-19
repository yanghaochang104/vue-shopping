<template>
  <transition name="slide">
    <div class="bg-warning fixed-bottom d-flex flex-row m-0 p-1" v-if="showCart()"> <!--use v-show would appear problem-->
    
      <div class= "m-1 my-auto d-flex flex-column align-item-center">
        <button class="btn btn-lg btn-warning align-self-center text-dark" title="hide your cart" @click="hideCart()">
          <i class="fas fa-cart-arrow-down display-4"></i> 
        </button>
      </div>
      
      <div class="m-0 p-0 w-100 view" title="scroll to check the item in your cart">
        <purchase-item></purchase-item>
      </div>
      
      <button class="btn btn-outline-danger m-1" @click="removeAll()">Remove</button>
      <router-link tag="button" class="btn btn-outline-primary m-1" :to="linkCheck">Check</router-link>
    </div>
  </transition>
</template>

<script>
  import purchaseItem from './purchaseItem.vue';
  
  export default {
    data(){
      return{
        purchase:[],
        linkCheck:{
          name:'form',
          hash:'#form'
        }
      };
    },
    components:{
      'purchase-item':purchaseItem,
    },
    methods:{
      showCart(){
        return this.$store.state.showCart;
      },
      hideCart(){
        this.$store.commit('toggleCartMode');
      },
      removeAll(){
        this.$store.commit('cleanUpPurchase');
      }
    },
    created(){
      this.purchase = this.$store.state.purchase;
    }

  };
</script>

<style scoped>
  .view {
    height:10vh;
    overflow-y: scroll;
  }

  .slide-enter{
    opacity:0;
  }
  .slide-enter-active{
    transition: opacity 1s;
    animation: slide-in 1s ease-out forwards;

  }
  .slide-leave{
    opacity:1;
    
  }
  .slide-leave-active{
    transition: opacity 1s;
    opacity:0;
    animation: slide-out 1s ease-out forwards;
  }
  
  @keyframes slide-in{
    from{
      transform:translateY(20px);
    }
    to{
      transform:translateY(0px);
    }
  }
  
  @keyframes slide-out{
    from{
      transform:translateY(0px);
    }
    to{
      transform:translateY(20px);
    }
  }
</style> 