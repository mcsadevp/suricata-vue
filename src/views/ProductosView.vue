<template>
  <section class="container" id="productos">
    <h1 class="text-center">Nuestros Productos</h1>
    <div class="row">
      <div class="col-sm-4 col-12 px-5 mb-4" v-for="producto in productos" :key="producto.id">
        <div class="card">
          <img :src="producto.imagen" :alt="producto.nombre" class="card-img-top">
          <div class="card-body">
            <h5 class="card-title fw-bold">{{ producto.nombre }}</h5>
            <p class="card-text">{{ producto.descripcion }}</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Precio: ${{ producto.precio }}</li>
            <li class="list-group-item">Cantidad disponible: {{ producto.cantidad }}</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="card-body text-center">
      <button class="button-index" @click="volverInicio">Volver al Inicio</button>
    </div>
  </section>
</template>

<script>
export default {
  name: "ProductosView",
  props: ["productos"],
  methods: {
    volverInicio() {
      this.$router.push('/');
    }
  },
  created() {
    console.log(this.productos);
  }
}
</script>

<style>
.button-index {
  margin-top: 10px;
  padding: 10px 20px;
  color: white;
  background-color: #e83e8c;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
.button-index:hover {
  background-color: #d82a7a;
}
</style>
