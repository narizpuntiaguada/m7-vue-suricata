<template>
  <div class="home">
  <h1 class="titulo">
    Vista Principal
  </h1>
  </div>
</template>

<script>


export default {
  data(){
    return{
      datosGlobales: this.datosContacto
    }
  },
  components: {
  
  },
  created(){
    console.log(this.datosGlobales)
  }
};
</script>

<style scoped>
.home{
  min-height: 80vh;
  
}

h1{
  text-align: center;
  font-size: 3.75rem;
  font-weight: 600;
  color: #5e1675;
  font-family: "Lato", sans-serif;
  font-weight: 900;
}
</style>
