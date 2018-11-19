<template>

    <div class="row m-0 p-0">
        <div class="col-md-4 d-flex flex-row" v-for="(item,i) in purchase">
            
            <button type="button" class="close p-0" aria-label="Close" @click="removeItem(i)">
                <span aria-hidden="true">&times;</span>
            </button> 
            
            <div class="d-flex flex-row w-100">
                <span>{{item.header}}</span>
                <span class="ml-auto">${{item.price}}</span>
            </div>
        </div>
    </div>
        
</template>

<script>
    export default{
        computed:{
          purchase(){
              return this.$store.state.purchase;
          }  
        },
        methods:{
            removeItem(index){
                this.$store.commit('removePurchase',index);
            }
        }
    };
</script>

<style scoped>
    
</style>