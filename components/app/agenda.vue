<template>
  <div>
      <div v-if="dia_Activo != -1" class="contenedor">
          <div class="encabezado">{{meses[mes_Activo]}}/{{dia_Activo}}</div>
          <div class="horarios" v-for="i in 24">{{i}}:00</div>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            Mes: 'mes',
            Dia: 'dia',
            meses:["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],
        }
    },
    props:['dia_Activo','mes_Activo'],
    
    
}
</script>

<style scoped>
.contenedor{
    width: 360px;
    margin: 20px auto;
    background: #fff;
    border-radius: 10px;
}
.encabezado{
    display: block;
    background: tomato;
    border-radius: 10px;
    text-align: center;
}
.horarios{
    border-bottom: 1px solid red;
}
</style>