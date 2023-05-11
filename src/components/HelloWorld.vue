<template>
  <div class="nav">
    <Mobile v-if="isMobile"></Mobile>
    <Computer v-else></Computer>
  </div>
</template>
<script>
import Mobile from './Mobile/index.vue';
import Computer from './Computer/index.vue';
export default {
  name: 'HelloWorld',
  components: {
    Mobile,
    Computer
  },
  data() {
    return {
      isMobile: false,
      innerWidth: window.innerWidth
    }
  },
  mounted() {
    window.addEventListener('resize', this.handleResizeDebounced);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.handleResizeDebounced);
  },
  methods: {
    handleResize() {
      this.innerWidth = window.innerWidth;
      console.log(this.innerWidth);
      if(this.innerWidth < 768) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    },
    handleResizeDebounced() {
      clearTimeout(this.timeoutId);
      this.timeoutId = setTimeout(this.handleResize, 500);
    }
  },
}
</script>

<style scoped>
.nav {
  display: flex;
  justify-content: center;
  align-items: center;
}
.nav ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}
.nav li {
  margin: 0 10px;
}
.nav a {
  text-decoration: none;
  color: #333;
  font-weight: bold;
  font-size: 18px;
}

@media (max-width: 767px) {
  .nav ul {
    flex-direction: column;
  }
  .nav li {
    margin: 10px 0;
  }
}
</style>

