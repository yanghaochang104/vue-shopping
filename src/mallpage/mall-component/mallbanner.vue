<template>
			<div id="demo" class="carousel slide" data-ride="carousel">
				<div class="carousel-indicators">
					<li data-target="#demo" data-slide-to="0" class="active"></li>
					<li data-target="#demo" data-slide-to="1"></li>
					<li data-target="#demo" data-slide-to="2"></li>
					<li data-target="#demo" data-slide-to="3"></li>
				</div>

				<!--carousel image part-->
				<div class="carousel-inner w-100">
					<div class="carousel-item active">
					    <img class="rounded w-100" src="https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=29425be9dfb52e3646e955ea3ec6c115&auto=format&fit=crop&w=900&q=60" alt="shopping1">
                        <div class="carousel-caption d-flex flex-column rounded m-md-5 m-sm-0 p-md-3 p-sm-0 p-lg-0 topic">
                           <div class="my-5"><span class="display-4 text-center">Welcome to S-Mart Shopping Mall </span></div>
                           <div class="mb-5"><span class="text-center"><small>Enjoy Your Shopping</small></span></div>
                        </div>
					</div>
					
					<div class="carousel-item">
					    <img class="rounded w-100"
					    src="https://images.unsplash.com/photo-1491616599759-2f0134c97da8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0ef8c805488718d0d26be0d90284a242&auto=format&fit=crop&w=900&q=60" alt="shopping2">
                        <div class="carousel-caption d-flex flex-column rounded m-md-5 m-sm-0 p-md-3 p-sm-0 p-lg-0 topic">
                           <div class="my-5"><span class="display-4 text-center">Welcome to S-Mart Shopping Mall </span></div>
                           <div class="mb-5"><span class="text-center"><small>Enjoy Your Shopping</small></span></div>
                        </div>
					</div>
					
					<div class="carousel-item">
					    <img class="rounded w-100"
					    src="https://images.unsplash.com/photo-1512192798277-33b2a3b99d5c?ixlib=rb-0.3.5&s=171a83ef5e68f76dbc546e611dd7c9f6&auto=format&fit=crop&w=1950&q=80" alt="shopping3">
                        <div class="carousel-caption d-flex flex-column rounded m-md-5 m-sm-0 p-md-3 p-sm-0 p-lg-0 topic">
                           <div class="my-5"><span class="display-4 text-center">Welcome to S-Mart Shopping Mall </span></div>
                           <div class="mb-5"><span class="text-center"><small>Enjoy Your Shopping</small></span></div>
                        </div>
					</div>
					
					<div class="carousel-item">
					    <img class="rounded w-100" src="https://images.unsplash.com/photo-1512722898403-c53d17d7d347?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d5c17b57264f9acb08e066f12cf38df2&auto=format&fit=crop&w=1950&q=80"
					    alt="shopping4">
                        <div class="carousel-caption d-flex flex-column rounded m-md-5 m-sm-0 p-md-3 p-sm-0 p-lg-0 topic">
                           <div class="my-5"><span class="display-4 text-center">Welcome to S-Mart Shopping Mall </span></div>
                           <div class="mb-5"><span class="text-center"><small>Enjoy Your Shopping</small></span></div>
                        </div>
					</div>
				</div>

				<!-- Left and right controls -->
				<a class="carousel-control-prev" href="#demo" data-slide="prev">
					<span class="carousel-control-prev-icon"></span>
				</a>
				<a class="carousel-control-next" href="#demo" data-slide="next">
					<span class="carousel-control-next-icon"></span>
				</a>
			</div>

</template>

<script>
export default {

};
</script>

<style scoped>
    .carousel-item img{
        width:100%;
        height:70vh;
        max-height:70vh;
    }
    .topic {
        font-size:2rem;
        color: white;
        margin:0;
        border:0;
        padding:0;
        background-color:rgba(0,0,0,0.4);
    }
</style>