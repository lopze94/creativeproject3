<template>
  <v-footer height="auto" class="grey darken-3">
    <v-layout row wrap justify-center>
      <a href="https://github.com/lopze94/creativeproject3.git">
      <v-btn
        color="white"
        flat
        v-for="link in links"
        :key="link"
      >
        {{ link }}
      </v-btn>
      </a>
      <v-flex xs12 py-3 text-xs-center white--text>
        &copy;2018 — <strong>Cultura Bakery</strong>
      </v-flex>
    </v-layout>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
      links: ['Github']
    })
  }
</script>