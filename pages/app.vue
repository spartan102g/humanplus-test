<template>
  <div class="contenido">

    <Menu v-if="menuActivo" @ingreso="ingresoActivo = true" @registro="registroActivo = true"></Menu>
    <MBienvenida v-if="mBienvenidaActivo" :usuario="usuario"></MBienvenida>
    <Ingreso v-if="ingresoActivo" @cerrar="ingresoActivo = false" @ingreso="ingresar($event)" @registro="cambiarARegistro()"></Ingreso>
    <Registro v-if="registroActivo" @cerrar="registroActivo = false"></Registro>
    <Calendario v-if="calendarioActivo" @diaActivo="diaActivo = $event" @mesActivo="mesActivo = $event"></Calendario>
    <Agenda v-bind:dia_Activo="this.diaActivo" v-bind:mes_Activo="mesActivo"></Agenda>
  </div>
</template>


<script>
import MBienvenida from '../components/app/mensajeBienvenida'

import Menu from '../components/app/menu'

import Ingreso from '../components/Ingreso'
import Registro from '../components/Registro'

import Calendario from '../components/app/calendario'
import Agenda from '../components/app/agenda'
export default {
  data(){
    return{
      diaActivo: -1,
      mesActivo: -1,
      usuarioActivo: false,
      id: 0,
      nombreUsuario: '',
      menuActivo: true,
      ingresoActivo: false,
      registroActivo: false,
      calendarioActivo: false,
      mBienvenidaActivo: false,
      usuario:{},
    }
  },

  
  components: {
    Calendario,
    Agenda,
    Menu,
    MBienvenida,
    Ingreso,
    Registro
  },
  methods:{
    ingresar(id){
      this.id = id
      this.usuarioActivo = true
      this.ingresoActivo = false
      this.menuActivo = false
      this.calendarioActivo = true
      this.mBienvenidaActivo = true
      this.obtenerNombreUsuario()
    },
    cambiarARegistro(){
      this.ingresoActivo = false
      this.registroActivo= true
    },
    
    obtenerNombreUsuario(){
      fetch(
        "/api/usuarios/obtener/"+this.id,
        {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-type": "application/json",
            },
          },
      ).then((res) => res.json())
      .then((data)=>{
        this.usuario = data
      })
    }
  }
}
</script>


<style scoped>
.contenido{
  padding-top: 40px;
  background: url('https://previews.123rf.com/images/sanyal/sanyal1006/sanyal100600013/7087812-fondo-transparente-de-una-ornamentaci%C3%B3n-floral-moda-de-papel-tapiz-moderno-o-textil.jpg');
  height: 100%;
  padding-bottom: 300px;
}
@media screen and (min-width: 600px) {
  .contenido{
    padding-top: 50px;
  }
}
</style>