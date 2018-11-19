<template>
    <div>
        <div id="confirm" class="my-5 p-3 shadow w-100">
            <span class="text-center text-success"><h1>Your Purchase Has Been Confirmed!</h1></span>
            <span class="text-center"><p class="text-secondary"> Thank you for visitation, have a nice day! </p></span>
            <div class=" mt-5 text-center"><p>..Redirecting to mall page in {{second}}.</p></div>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                second:15,
            };
        },
        methods:{
            seconds(){
                let self = this;
                let count = setInterval(countdown, 1000);
                function countdown(){
                    if(self.second>0){
                        self.second--;
                        return self.second;
                    } else if(self.second===0){
                        self.$router.push('/mallpage');
                        clearInterval(count);
                    } else {
                        clearInterval(count);
                    }
                }
            }
        },
        created(){
            this.seconds();
            this.$store.commit('cleanUpPurchase');
            this.$store.commit('toggleCartMode');
        },
        destroyed(){
            this.second = false;
        }
    };
</script>