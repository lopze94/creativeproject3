<template>
    <div class="hero">
	<h1>Cultura Bakery</h1>
    <br>
    <p>La historia detrás de cada platillo es la esencia de nuestra cocina, pasión por los sabores, por el arte, la creación y por la perfección absoluta</p>
    <br>
	<img v-bind:src="imagePath"/>
    </div>
</template>

<script>
 export default {
     name: 'HomePage',
     data () {
	 return {
	     imagePath: '/static/images/bread.jpg'
	 }
     }
 }
</script>

<style scoped>
 html, body {
     padding: 0px;
     margin: 0px;
 }
 .hero {
     text-align: center;
 }
 h1 {
     font-size: 2.5em;
     letter-spacing: .2rem;
     color: #999;
     margin-bottom: 2px;
 }
 img {
     width: 100%;
 }
</style>
