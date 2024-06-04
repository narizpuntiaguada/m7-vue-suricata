<template>
  <main class="container text-center">
    <h2 class="">Productos</h2>
    <button class="btn my-2">
      <router-link to="/">Volver al Inicio</router-link>
    </button>
    <div class="row g-4">
      <div
        class="col-12 col-md-6 col-lg-3"
        v-for="(plato, index) in platos"
        :key="index"
      >
        <Card :plato="plato" />
      </div>
    </div>
  </main>
</template>

<script>
import Card from "@/components/Card.vue";

export default {
  name: "ProductosView",
  props: ["platos"],
  components: { Card },
  created() {
    console.log(this.platos);
  },
};
</script>

<style scoped>
.container {
  font-size: 15px;
}
h2 {
  font-size: 3.75rem;
  font-weight: 600;
  color: #5e1675;
  font-family: "Lato", sans-serif;
  font-weight: 900;
 
}
</style>
