<template>
  <v-app>  
    <AppBarVue/>
    <v-main class="v-main">
      <div ref="vantaRef" style="width: 100%;height: 100%;">
          <router-view style="position: relative;"/>
      </div>
      
    </v-main>
  </v-app>
</template>

<script>
import AppBarVue from './components/AppBar.vue';
import * as THREE from 'three'
import NET from 'vanta/src/vanta.net'

export default {
  name: 'App',
  components:{
    AppBarVue
  },
  data: () => ({
    route: 0
  }),
  mounted() {
    this.vantaEffect = NET({
      el: this.$refs.vantaRef,
      THREE: THREE
    })
  },
  beforeDestroy() {
    if (this.vantaEffect) {
      this.vantaEffect.destroy()
    }
  },
};
</script>
<style lang="scss" scoped>
.v-main{
  div{
    z-index: 1;
  }
  router-view{
    z-index: 6;
  }
}

</style>
