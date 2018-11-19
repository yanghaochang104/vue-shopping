<template>
  <div id="mall">
    <div class="d-flex justify-content-center m-auto p-3">
        <button class="btn btn-lg btn-warning font-weight-bold text-dark shadow-sm" @click="toggleCartMode()">To Start : Get Your Shopping Cart Here </button>
    </div>
  
    <div class="d-flex flex-column align-item-center mb-5 shadow p-1">
      <div class="d-flex flex-row align-items-center">
        <span class="display-4 rounded m-1"><h2> Household Appliences Section</h2></span>
        <div class="ml-auto m-1 d-flex flex-row">
          <span class="text-secondary align-self-center m-1"><i class="fas fa-search"></i></span>         
          <input class="form-control" type="text" placeholder="search" v-model="filterText1">
        </div>
      </div>
      
      <div>
        <div class="d-flex flex-row row m-0 p-0">
          <div class="col-sm-6 col-md-4 col-lg-3 card p-1" v-for="household in filterhouseholds">
            <h5 class="card-header bg-info text-white text-center">{{household.header}}</h5>
            <img :src="household.image" width="200px" heigh="200px" class="m-auto p-1">
            <p class="card-body">{{household.body}}</p>
            <span class="align-self-center"><h6>price:$ {{household.price}} USD</h6></span>
            <button class="btn btn-success" @click="newPurchase(household)">Add into MyCart</button>
          </div>
        </div>
      </div>
    </div>
    
    <div class="d-flex flex-column align-item-center shadow mb-5 p-1">
      <div class="d-flex flex-row align-items-center">
        <span class="display-4 rounded m-1"><h2> Food Section</h2></span>
        <div class="ml-auto m-1 d-flex flex-row">
          <span class="text-secondary align-self-center m-1"><i class="fas fa-search"></i></span>         
          <input class="form-control" type="text" placeholder="search" v-model="filterText2">
        </div>
      </div>
      
      <div>
        <div class="d-flex flex-row row m-0 p-0">
          <div class="col-sm-6 col-md-4 col-lg-3 card p-1" v-for="food in filterfoods">
            <h5 class="card-header bg-info text-white text-center">{{food.header}}</h5>
            <img :src="food.image" width="200px" heigh="200px" class="m-auto p-1">
            <p class="card-body">{{food.body}}</p>
            <span class="align-self-center"><h6>price:$ {{food.price}} USD</h6></span>
            <button class="btn btn-success" @click="newPurchase(food)">Add into MyCart</button>
          </div>
        </div>
      </div>
    </div>
    
    <div class="d-flex flex-column align-item-center shadow mb-3 p-1">
      <div class="d-flex flex-row align-items-center">
        <span class="display-4 rounded m-1"><h2>Electronics Section</h2></span>
        <div class="ml-auto m-1 d-flex flex-row">
          <span class="text-secondary align-self-center m-1"><i class="fas fa-search"></i></span>         
          <input class="form-control" type="text" placeholder="search" v-model="filterText3">
        </div>
      </div>
      
      <div>
        <div class="d-flex flex-row row m-0 p-0">
          <div class="col-sm-6 col-md-4 col-lg-3 card p-1" v-for="electron in filterelectronics">
            <h5 class="card-header bg-info text-white text-center">{{electron.header}}</h5>
            <img :src="electron.image" width="200px" heigh="200px" class="m-auto p-1">
            <p class="card-body">{{electron.body}}</p>
            <span class="align-self-center"><h6>price:$ {{electron.price}} USD</h6></span>
            <button class="btn btn-success" @click="newPurchase(electron)">Add into MyCart</button>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
  import {productList} from '../../mixins/product-list.js';
  
  export default {
    data: function(){
      return {
        filterText1:'',
        filterText2:'',
        filterText3:''
      };
    },
    mixins:[productList],
    methods:{
      newPurchase(item){
        this.$store.commit('addToPurchase', item);
      },
      toggleCartMode(){
        this.$store.commit('toggleCartMode');
      }
    },
    computed:{
      filterhouseholds(){
        return this.households.filter((element)=>{
          return element.header.toLowerCase().match(this.filterText1.toLowerCase());
        });
      },
      filterfoods(){
        return this.foods.filter((element)=>{
          return element.header.toLowerCase().match(this.filterText2.toLowerCase());
        });
      },
      filterelectronics(){
        return this.electronics.filter((element)=>{
          return element.header.toLowerCase().match(this.filterText3.toLowerCase());
        });
      }
    }
  };
</script>

<style scoped>

</style>