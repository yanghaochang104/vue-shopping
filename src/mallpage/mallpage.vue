<template>
    <div id="mallpage" class="container container-fluid">
        <mall-banner></mall-banner>
        <cart></cart>
        <mall></mall>
    </div>
</template>

<script>
    import mallbanner from './mall-component/mallbanner.vue';
    import cart from './mall-component/cart.vue';
    import mall from './mall-component/mall.vue';

    export default{
        components:{
            'mall-banner': mallbanner,
            'cart': cart,
            'mall': mall
        }
    };
</script>

<style scoped>
    
</style>