<template>
  <div class="contacto text-center">

    <h1 class="text-principal">Esta es una página acerca de...</h1>
    <button class="btn btn-dangerous my-2">
    <router-link to="/">Volver al Inicio</router-link>
</button>

  </div>
</template>

<script>
export default {
  name: "ContactoView",
}
</script>
<style scoped>
.contacto{
   min-height: 80vh;
}


button{
text-decoration:none,


}


</style>
