<template>
    <div class="servicios">
        <div v-if="emergente" class="sombra">
            <div  class="emergente">
                emergente
            </div>

        </div>
        <Tarjeta v-for="paquete in paquetes" v-bind:key="paquete.titulo" v-bind:paquete="paquete" @emergente="activarEmergente($event)"></Tarjeta>
    </div>
</template>
<script>

import Tarjeta from '../components/servicios/tarjetas';



    export default {
    props:["usuario_conectado"],
  data(){
      return {
          emergente: false,
          activo: 0,
      paquetes: {
          paquete1: {
            id: 1,
          titulo:"Semanal",
          descripcion: "Servicio terapéutico semanal con un psicólogo(a) calificado de nuestro equipo, contáctanos para agendar una cita y juntos estableceremos un plan de trabajo adecuado para ti",
          src: 'https://i.pinimg.com/564x/85/69/5a/85695a379fe933765f5497bdf0fe6f9c.jpg'
        },
          paquete2: {
            id:  2,
          titulo: "Quincenal",
          descripcion: "Servicio terapéutico quinsenal con un psicólogo(a) calificado de nuestro equipo, contáctanos para agendar una cita y juntos estableceremos un plan de trabajo adecuado para ti",
          src:'https://image.freepik.com/foto-gratis/mujer-sentada-cafe-tomando-cafe-trabajando-computadora_1303-14722.jpg'
        },
          paquete3: {
            id: 3,
          titulo: "Mensual",
          descripcion: "Servicio terapéutico mensual con un psicólogo(a) calificado de nuestro equipo, contáctanos para agendar una cita y juntos estableceremos un plan de trabajo adecuado para ti",
          src:'https://i.pinimg.com/564x/8e/5a/59/8e5a5957b4b36387019b90860efb6a49.jpg'
        }
      }
    }
  },
  components:{
    Tarjeta
        },
        methods: {
            activarEmergente(id) {
                this.emergente = true;
                this.activo = id;
            }
        }
}
</script>

<style scoped>
.servicios{
  position: relative;
  top: 40px;
  
}
.sombra{
    position: absolute;
    height: 100vh;
    width: 100vw;
    background: rgba(0,0,0,0.3);
    display: flex;
    align-content: center;
    justify-content:center;
}
.emergente{
    position: absolute;
    background: red;
    top: 100px;
    width: 100%;
}
@media (min-width: 600px) {
    .servicios {
        top: 50px;
        display: flex;
        justify-content: center;
        align-content:center;
    }
    .emergente{
        width: 40%;
    }
}
</style>