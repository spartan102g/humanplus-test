<template>
    <div class="contenido">
        <div class="titulo">Bienvenido <br> {{ nombre }}</div>
        <div class="msg-bienvenida">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non in earum delectus sed pariatur inventore ratione. Culpa fugit nisi mollitia.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus commodi sit perspiciatis quasi magni dolores esse deleniti asperiores totam iusto! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit asperiores distinctio nobis itaque commodi blanditiis eos, odit atque beatae consequatur maxime dignissimos ab fuga nihil. Beatae provident, reprehenderit sint quasi facere eius eaque obcaecati tempora repellat quod, officiis consequuntur?
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi autem, aspernatur ut aliquid et deleniti obcaecati quia hic eum quis.   
        </div>
        <div class="btn-continuar">
            <NuxtLink to="/app" >Continuar</NuxtLink>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            nombre: "Nombre"
        }
    }
}
</script>

<style scoped>
.contenido{
    padding-top: 50px;
    
    
}
.titulo{
    font-size: 50px;
    text-align: center;
    background: #b0d0d3;
    
    margin: 30px 20px;
    box-shadow: 1px 1px 5px black;
    border-radius: 5px;
    color: #000;
    text-shadow: 2px 2px 10px white;
}
.msg-bienvenida{
    
    text-align: center;
    background: #b0d0d3;
    
    margin: 30px 20px;
    box-shadow: 1px 1px 5px black;
    border-radius: 5px;
    color: #000;
    text-shadow: 2px 2px 10px white;
}
.btn-continuar{
    
    text-align: center;
    background: #167fe2;
    
    margin: 30px 80px;
    box-shadow: 1px 1px 5px black;
    border-radius: 5px;
    color: #000;
    text-shadow: 2px 2px 10px white;
}
@media screen and (min-width: 450px){
    .btn-continuar{
        margin: 30px 150px;
    }
}
@media screen and (min-width: 600px){
    .contenido{
        padding-top: 60px;
    }
    .msg-bienvenida{
        margin: 30px 200px;
    }
    .btn-continuar{
        margin: 30px 200px;
    }
}
@media screen and (min-width: 900px){
    .btn-continuar{
        margin: 30px 300px;
    }
}
</style>

