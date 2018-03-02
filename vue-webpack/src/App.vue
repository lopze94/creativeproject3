<template>
    <div id="app">
	<app-header></app-header>
	<router-view/>
  <app-footer></app-footer>
    </div>
</template>

<script>
 import AppHeader from './components/AppHeader.vue'
 import AppFooter from './components/AppFooter.vue'
 export default {
     name: 'App',
     components: { AppHeader, AppFooter }
 }
</script>

<style>
body {
    font-size: 16px;
    padding: 20px 100px 0px 100px;
    font-family: 'Arvo', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
</style>


