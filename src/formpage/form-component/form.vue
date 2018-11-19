<template>
    <div id="form">
        <div class="my-3 shadow">
            <span class="display-4 p-2">Customer Detail</span>
    
            <form class="m-2 p-2">
                <div class="form-group">
                     <label for="fullName">Full Name</label>
                     <input class="form-control" type="text" placeholder="John Doe" v-model="fullName">
                </div>
                <div class="form-group">
                     <label for="email">E-mail</label>
                     <input class="form-control" type="email" placeholder="email @ email.com" v-model="email">
                </div>
                <div class="form-group">
                     <label for="address">Address</label>
                     <input class="form-control" type="text" placeholder="Taichung Train Station, Taichung County, Taiwan R.O.C." v-model="address">
                </div>
                <div class="form-group"> 
                     <label for="receipt">Need Receipt?</label>
                     <br>
                     <input type="radio" value="Yes" v-model="receipt">Yes
                     <input type="radio" value="No" v-model="receipt">No
                </div>
                <div class="form-group">
                    <label>Problems and Suggestions</label>
                    <textarea class="form-control" rows=4 col=50 v-model="ps"></textarea>
                </div>
            </form>
        </div>
        <div class="d-flex flex-column shadow my-3 p-2">
            <span class="display-4 p-2">Purchase Data</span>
            <div class="m-2 p-2">
                <span><h5>Name: {{fullName}}</h5></span>
                <span><h5>E-mail: {{email}}</h5></span>
                <span><h5>Address: {{address}}</h5></span>
                <span><h5>Receipt: {{receipt}}</h5></span>
                <span><h5>Problems & Suggestions:</h5></span>
                    <div class="m-2 p-2 shadow-sm ">
                        <span class="mx-2">{{ps}}</span>
                    </div>
                <span><h5>Your Purchase:</h5></span>
                    <div class="row m-2 p-2 shadow-sm">
                        <div class="col-sm-6 col-md-3 d-flex flex-row text-primary m-1 border border-primary" v-for="item in purchase.purchase">
                            <span class="mr-auto">{{item.header}}</span>
                            <span>${{item.price}}</span>
                        </div>
                    </div>
                <span><h5>total: <span class="text-primary">{{purchase.totalBill}}</span> USD</h5></span>
            </div>

            <div class="d-flex flex-row">
                <router-link tag="button" class="btn btn-warning ml-auto m-1 shadow-sm" :to="linkReturn">Return for More</router-link>
                <button class="btn btn-success m-1 shadow-sm" @click="confirmPurchase">Confirm Purchase</button>
            </div>
        </div>

    </div>
    
</template>

<script>
    
    export default{
        data(){
            return {
              fullName:'',
              email:'',
              address:'',
              receipt:'',
              ps:'No comments.',
              linkReturn:{
                  name:'mallpage',
                  hash:'#banner'
              },
              linkConfirm:{
                  name:'rendered',
                  hash:'#confirm'
              }
            };
        },
        computed:{
            purchase(){
                let purchase,
                    totalBill;
                    
                if(this.$store.state.purchase.length === 0){
                    
                    purchase = [{
                      header:"Nothing Purchased Yet",
                      price:0
                    }];
                    totalBill=0;
                    
                } else {
                    
                    let allPrice = [];
                    purchase = this.$store.state.purchase;
                    purchase.forEach((item)=>{
                        allPrice.push(item.price);
                    });
                    totalBill = allPrice.reduce((acc,cur)=>
                        acc+cur
                    );
                }
                return {
                   purchase,
                   totalBill
                };
            }
        },
        methods:{
            confirmPurchase(){
                let self=this;
                if (window.confirm("Are your sure to submit your order?")){
                    this.$router.push(self.linkConfirm);
                }
            }
        }
    };
</script>

<style scoped>
    
</style>