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
          src: 'https://scontent.fpbc1-2.fna.fbcdn.net/v/t45.5328-4/c10.0.415.415a/95690121_2957695910978660_5370123585874558976_n.jpg?_nc_cat=104&_nc_sid=c48759&_nc_ohc=gHvjwpiavw4AX8Mmckc&_nc_ht=scontent.fpbc1-2.fna&oh=0d2c9abb730987b7fa3f3e5042fbd9c1&oe=5EF5BAB4'
        },
          paquete2: {
            id:  2,
          titulo: "Quincenal",
          descripcion: "Servicio terapéutico quinsenal con un psicólogo(a) calificado de nuestro equipo, contáctanos para agendar una cita y juntos estableceremos un plan de trabajo adecuado para ti",
          src:'https://scontent.fpbc1-1.fna.fbcdn.net/v/t45.5328-4/c0.6.565.565a/92801200_3281763421847704_8906731882264133632_n.jpg?_nc_cat=110&_nc_sid=c48759&_nc_ohc=AzUjSqTJjJIAX_uiFwx&_nc_ht=scontent.fpbc1-1.fna&oh=216e9f34e5d3196411743731c65cfc2b&oe=5EF459A9'
        },
          paquete3: {
            id: 3,
          titulo: "Mensual",
          descripcion: "Servicio terapéutico mensual con un psicólogo(a) calificado de nuestro equipo, contáctanos para agendar una cita y juntos estableceremos un plan de trabajo adecuado para ti",
          src:'https://scontent.fpbc1-1.fna.fbcdn.net/v/t45.5328-4/c3.0.400.400a/95596528_2865021810213717_5615016844361465856_n.jpg?_nc_cat=100&_nc_sid=c48759&_nc_ohc=oU9v7QlMPAoAX_8qjc-&_nc_ht=scontent.fpbc1-1.fna&oh=528db671794a4d43b15677435cfc78b9&oe=5EF53A52'
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