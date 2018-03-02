<template>
  <div>
    <h1>Contact</h1>
    <h2>Email</h2>
    <p>{{ email }}</p>
    <h2>Phone</h2>
    <p>{{ phone }}</p>
    <h2>Address</h2>
    <p>{{ address }}</p>
    <p>{{ city }}</p>
    <p>{{ state }} {{ zipCode }}</p>
    <img v-bind:src="imagePath"/>
  </div>
</template>

<script>
 export default {
   name: 'Profile',
   data () {
     return {
       email: 'info@culturabakery.com',
       phone: '(801) 400-8794',
       address: '151 N University Ave',
       city: 'Provo',
       state: 'UT', 
       zipCode: '84601',
       imagePath: '/static/images/cultura.jpg'
     }
   }
 }
</script>

<style scoped>
 img {
     max-width: 500px;
 }
</style>
