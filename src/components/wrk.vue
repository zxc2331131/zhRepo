<template>
    <div class="sidebar-sticky">
        hello
        <ul class="nav flex-column" >
            <div class="nav-item">
                {{userData}}
            </div>
        </ul>
    </div>
</template>
<script>
export default {
  
  data(){
      return{
          userData:0,
      }
  },
  methods: {
      
  },
  mounted() {
      this.userData = this.$route.params
      console.log(this.$route.params)
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
