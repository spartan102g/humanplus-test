<template>
    <div>
        <header>
            <nav class="navegacion">
                <div class="navegacion__boton-menu" @click="alternarMenu()">
                    <span class="icon-menu"></span>
                </div>
                <NuxtLink to="/">
                    <div class="navegacion__boton">
                        <span class="icon-home3" /> Inicio
                    </div>
                </NuxtLink>
                <NuxtLink to="/servicios">
                    <div class="navegacion__boton">
                        <span class="icon-profile" />Servicios
                    </div>
                </NuxtLink>
                <div class="navegacion__logo">
                    <img src="../assets/humanplus-logo.png" />
                </div>
                <div style="display: inline" v-if="!usuario_conectado">
                    <NuxtLink to="/ingreso" class="navegacion__boton "
                        ><span class="icon-enter" /> Ingreso</NuxtLink
                    >
                    <NuxtLink to="/registro" class="navegacion__boton"
                        ><span class="icon-user-tie" /> Registro</NuxtLink
                    >
                    <div @click="desactivarMenu()">
                        <NuxtLink
                            to="/ingreso"
                            class="navegacion__boton-ingreso"
                            >Ingresar <span class="icon-user-tie"
                        /></NuxtLink>
                    </div>
                </div>
                <div style="display: inline" v-else>
                    <div @click="cerrarSesion()" class="navegacion__boton">
                        <span class="icon-enter" /> Cerrar sesion
                    </div>
                    <NuxtLink to="/cuenta" class="navegacion__boton"
                        ><span class="icon-user-tie" /> Cuenta</NuxtLink
                    >
                    <div @click="desactivarMenu()">
                        <NuxtLink to="/cuenta" class="navegacion__boton-ingreso"
                            >Cuenta <span class="icon-user-tie"
                        /></NuxtLink>
                    </div>
                </div>
            </nav>
        </header>
    </div>
</template>

<script>
export default {
    data() {
        return {}
    },
    props: ['usuario_conectado'],
    created() {
        console.log(this.id)
    },
    methods: {
        alternarMenu() {
            this.$emit('alternarMenu')
        },
        desactivarMenu() {
            this.$emit('desactivarMenu')
        },
        cerrarSesion() {
            this.$emit('cerrarSesion')
        }
    }
}
</script>

<style scoped>
.navegacion {
    position: relative;
    background: white;
    height: 40px;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    line-height: 46px;
    overflow: hidden;

    box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.34);
    z-index: 100;
}
.navegacion__boton {
    display: none;
    color: black;
    font-family: 'Source Sans Pro', sans-serif;
    transition: background 1s;
}
.navegacion__boton:hover {
    background: rgba(177, 210, 230, 0.5);
}
.navegacion__boton-menu {
    display: inline-block;
    padding: 0 5px;
    font-size: 25px;
    line-height: 40px;
}
.navegacion__boton-ingreso {
    position: absolute;
    display: inline-block;
    padding: 0 5px;
    color: grey;

    font-size: 17px;
    line-height: 40px;
    right: 5px;
    top: 0;
}
.navegacion__boton-ingreso:hover {
    color: black;
}
.navegacion__boton-ingreso span {
    color: black;
}
.navegacion__logo img {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%);
    width: auto;
    height: 40px;
    display: inline-block;
    text-align: center;
}

@media (min-width: 600px) {
    .navegacion {
        height: 50px;
    }
    .navegacion__boton-menu {
        display: none;
    }
    .navegacion__boton-ingreso {
        display: none;
    }
    .navegacion__boton {
        position: relative;
        display: inline-block;
        box-sizing: border-box;
        width: 19%;
        top: -20px;

        padding: 10px 0;
        text-align: center;
    }
    .navegacion__logo {
        width: 20%;
        display: inline-block;
        position: relative;
    }
    .navegacion__logo img {
        position: relative;
        width: 160px;
        height: 50px;
        left: 50%;
        background: white;
        z-index: 2;
    }
}

@media (min-width: 1100px) {
}
</style>
