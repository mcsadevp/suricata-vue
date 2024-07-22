<template>
  <!-- cartas -->
  <section class="container" id="productos">
    <h1 class=" text-center">Nuestros Productos</h1>
    <div class="row">
      <!-- primera -->
      <div class="col-sm-4 col-12 px-5 mb-4">

        <div class="card">
          <img src="../assets/img/colaciones.jpg" class="card-img-top" alt="colaciones" />
          <div class="card-body">
            <h5 class="card-title fw-bold">Colaciones</h5>
        
          </div>
          
          <div class="card-body">
            <router-link to="/productos" class="card-link text-primary">Ver más</router-link>
            <router-link to="/productos" class="card-link text-primary">Comprar</router-link>
            <!--<a href="#" class="card-link">Ver más</a>-->
            <!--<a href="#" class="card-link">Comprar</a>-->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  
}
</script>
<style>
.row {display: flex;
  justify-content: center;}
  
</style>