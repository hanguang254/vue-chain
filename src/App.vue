<template>
  <v-app>  
    <AppBarVue/>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import AppBarVue from './components/AppBar.vue';

export default {
  name: 'App',
  components:{
    AppBarVue
  },
  data: () => ({
    route: 0
  }),
};
</script>
