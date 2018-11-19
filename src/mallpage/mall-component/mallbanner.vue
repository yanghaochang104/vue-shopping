<template>
        <div id="banner" class="d-flex justify-content-center align-item-center rounded">
            <div id="topic" class="d-flex flex-column align-self-center p-3 rounded">
                <h1 class="display-4 text-center">Welcome to S-Mart Shopping Mall</h1>
                <h1 class="text-center"><small>All You Can Buy - Enjoy Your Shopping</small></h1>
            </div>
        </div>
</template>

<script>
export default {

};
</script>

<style scoped>
    #banner {
        background-image: url("https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=29425be9dfb52e3646e955ea3ec6c115&auto=format&fit=crop&w=900&q=60");
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        height:60vh;
        width:100%;
        margin:0;
        border:0;
        padding:0;
    }
    #topic {
        font-size:2rem;
        color: white;
        margin:0;
        border:0;
        padding:0;
        background-color:rgba(0,0,0,0.6);
    }
</style>