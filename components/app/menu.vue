<template>
  <div class="fondo">
      <div class="con-botones" >
        <div class="botones" @click="ingreso()">Ingreso</div>
        <div class="botones" @click="registro()">Registro</div>

      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        ingreso(){
            this.$emit('ingreso')
        },
        registro(){
            this.$emit('registro')
        }
    }
}
</script>



<style scoped>
.con-botones{
    margin-top: 200px;
    
}
.botones{
    width: 40%;
    display: block;
    text-align: center;
    background: tomato;
    margin: 10px auto;
    padding: 5px 0;
    font-size: 20px;
    border-radius: 10px;
    box-shadow: 1px 1px 5px black;
    
}

</style>

