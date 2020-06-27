<template>
	<div class="tarjeta">
		<div class="imagen">
            <img :src="this.paquete.src" alt=" " />
        </div>
        <div class="titulo">
            {{this.paquete.titulo}}
        </div>
        <div class="descripcion">
            {{this.paquete.descripcion}}
        </div>
        <div class="area_botones">
            <div v-on:click="contratar(paquete.id)" class="boton">
                Contratar
            </div>
        </div>
	</div>		
</template>

<script>
    export default {
        data() {
            return {
                
            }
        },
    props: ['paquete'],
    methods: {
        contratar(id) {
            this.$emit('emergente',id)            
        }
    }

}
</script>

<style scoped>
.tarjeta {
    display: inline-block;
    background: #fff;
    margin:20px 15px;
    box-shadow: gray 1px 1px 5px;
}
.imagen {
    height: 300px;
    
}
img{
    width: 100%;
    height: 100%;
}
.titulo{
    margin-top: 10px;
    text-align:center;
    font-size: 20px;
}
.descripcion{
    margin-top: 40px;
    font-size: 17px;
    text-align:center;
}
.boton{
    display:inline-block;
    padding: 5px;
    margin:5px 5px;
    position:relative;
    right:0;
    background: blue;
    color:white;
    border-radius: 5px;
    box-shadow: 1px 1px 5px black;
}


@media (min-width: 600px) {
    .tarjeta{
        background: #fff;
        width: 27%;
       }
}
</style>
