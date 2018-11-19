<template>
        
    <div id="form-banner" class="d-flex justify-content-center align-item-center rounded">
        <div id="form-topic" class="d-flex flex-column align-self-center p-3 rounded">
            <h1 class="display-4 text-center">Customer Detail</h1>
            <h1 class="text-center"><small>Confirm Your Purchase</small></h1>
        </div>
    </div>
    
</template>

<script>
    export default {
    
    };
</script>

<style scoped>
    #form-banner {
        background-image: url("https://images.unsplash.com/photo-1538368433647-508a4ebade0f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=56a9f3289daf2d666fb2881033a2d0cb&auto=format&fit=crop&w=1950&q=80");
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        height:60vh;
        width:100%;
        margin:0;
        border:0;
        padding:0;
    }
    #form-topic {
        font-size:2rem;
        color: white;
        margin:0;
        border:0;
        padding:0;
        background-color:rgba(0,0,0,0.5);
    }
</style>