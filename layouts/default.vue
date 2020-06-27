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
        <nuxt v-bind:usuario_conectado="usuarioConectado"/>
    </div>
</template>

<script>
import BarraNavegacion from '../components/Barra-Navegacion'
import BarraLateral from '../components/Barra-Lateral'

class Usuario {}

export default {
    data() {
        return {
            BarraLateral: false,
            usuarioConectado: false
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
