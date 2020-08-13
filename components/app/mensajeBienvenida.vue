<template>
  <div class="msj-b">Bienvenido {{usuario.nombreCompleto}}</div>
</template>

<script>
export default {
    data(){
        return{
            
        }
    },
    props:["usuario"]
}
</script>




<style scoped>
.msj-b{
    width: 80%;
    background: white;
    margin: 10px auto;
    text-align: center;
    border-radius: 10px;
    border: solid 2px black;
    font-size: 25px;
}
</style>

