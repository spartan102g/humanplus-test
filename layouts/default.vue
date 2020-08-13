<template>
    <div>
        <BarraNavegacion
            @alternarMenu="BarraLateral = !BarraLateral"
            @desactivarMenu="BarraLateral = false"
            @cerrarSesion="usuarioConectado = false"
            v-bind:usuario_conectado="usuarioConectado"
        ></BarraNavegacion>
        <BarraLateral
            v-bind:activado="BarraLateral"
            @desactivarBarra="BarraLateral = false"
            @cerrarSesion="usuarioConectado = false"
            v-bind:usuario_conectado="usuarioConectado"
        ></BarraLateral>
        <nuxt v-bind:usuario_conectado="usuarioConectado" v-on:ingreso="usuarioConectado = true"/>
    </div>
</template>

<script>
import BarraNavegacion from '../components/Barra-Navegacion'
import BarraLateral from '../components/Barra-Lateral'

import uconectado from '../components/global'
class Usuario {}

export default {
    data() {
        return {
            BarraLateral: false,
            usuarioConectado: uconectado
        }
    },
    components: {
        BarraNavegacion,
        BarraLateral
    }
}
</script>

<style>
body {
    background: lightgray;
    padding: 0;
}

* {
    margin: 0;
    padding: 0;
}

router-view {
    position: relative;
    width: 100vw;
    height: 100vh;
    background: orange;
}
a {
    text-decoration: none;
    color: black;
}
</style>
