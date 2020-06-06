<template>
    <div class="contenido-sub-navegacion">
        <div class="tarjeta">
            <div class="tarjeta-titulo">
                Bienvenido  {{nombre}}<br> solo un paso más
            </div>
            <div class="tarjeta-texto">
                Gracias por registrarse en human+: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, velit?
            </div>
            <div class="tarjeta-texto">
                Confirme su correo electrónico: Revise la bandeja de entrada y acceda al enlace que aparece en su interior.
            </div>
            <span class="texto-rojo letra-chica">
                *si no ha recibido ningun correo de click en el siguiente boton
            </span>
            <div  class="tarjeta-boton">
                Reenviar correo electrónico
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            nombre: "Por rellenar"
        }
    }
}
</script>

<style >

.contenido-sub-navegacion{
    padding-top: 40px;
    display: flex;
    justify-content: center;
    align-content: center;
    
}


@media (min-width: 600px) {
    .contenido-sub-navegacion{
        padding-top: 50px;
    }
}
</style>

<style scoped>
.tarjeta{
    margin-top: 40px;
    width: 100%;
    height: 80vh;
    background: #fff;
    box-shadow:1px 1px 5px 1px black ;
    padding: 20px 15px;
    text-align: center;
}
.tarjeta-titulo{
    font-size: 25px;
    padding-bottom: 40px;
    border-bottom: 2px solid black;
}
.tarjeta-texto{
    padding: 20px 20px;
    margin-bottom: 20px;
}
.tarjeta-boton{
    padding: 5px 10px ;
    margin: 20px;
    background: skyblue;   
    box-shadow:1px 1px 5px 1px black ;
}
.letra-chica{
    font-size: 10px;
}
@media (min-width: 600px) {
    .tarjeta{
        width: 80%;
    }
}
@media (min-width: 900px) {
    .tarjeta{
        width: 50%;
    }
    
}      
</style>