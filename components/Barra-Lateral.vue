<template>
    <div>
        <div class="barra-lateral" :class="menu">
            <NuxtLink to="/" class="barra-lateral__boton">
                <div class="barra-lateral__boton" @click="desactivarBarra()">
                    Inicio
                </div>
            </NuxtLink>
            <NuxtLink to="/servicios" class="barra-lateral__boton">
                <div class="barra-lateral__boton" @click="desactivarBarra()">
                    Servicios
                </div>
            </NuxtLink>

            <div
                v-if="!usuario_conectado"
                class="barra-lateral__login"
                @click="desactivarBarra()"
            >
                <NuxtLink to="/ingreso" class="login__boton">Ingreso</NuxtLink>
                <NuxtLink to="/registro" class="login__boton"
                    >Registro</NuxtLink
                >
            </div>
            <div v-else class="barra-lateral__login" @click="desactivarBarra()">
                <div @click="cerrarSesion()" class="login__boton">
                    Cerrar sesion
                </div>
            </div>
            <div class="barra-lateral__pie">© 2020 Human+</div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {}
    },
    props: ['activado', 'usuario_conectado'],
    methods: {
        desactivarBarra() {
            this.$emit('desactivarBarra')
        },
        cerrarSesion() {
            this.$emit('cerrarSesion')
        }
    },
    computed: {
        menu() {
            if (this.activado) {
                return {
                    activada: true,
                    oculta: false
                }
            }

            return {
                oculta: true,
                activada: false
            }
        }
    }
}
</script>

<style>
.barra-lateral {
    position: fixed;
    top: 40px;
    left: -100%;
    width: 50%;
    height: calc(100vh - 40px);
    background: whitesmoke;
    box-shadow: 2px 5px 10px gray;
    transition: left 0.7s;

    z-index: 99;
}
.activada {
    left: 0;
}
.oculta {
    left: -100%s;
}
.barra-lateral__boton {
    padding-top: 10px;
    text-align: center;
    font-size: 18px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
    color: black;
    text-decoration: none;
    font-family: 'Source Sans Pro', sans-serif;
}
.barra-lateral__boton:hover {
    background: rgba(177, 210, 230, 0.5);
}
.barra-lateral__login {
    position: absolute;
    display: block;
    bottom: 0;
    width: 100%;
    padding-bottom: 10px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
    bottom: 25px;
}
.login__boton {
    display: inline-block;
    box-sizing: border-box;
    width: 98%;
    margin-top: 5px;
    margin-left: 2px;
    border-radius: 5px;
    text-align: center;
    background: #b0d0d3;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);
}
.login__boton:hover {
    background: rgba(177, 210, 230, 0.5);
}
.barra-lateral__pie {
    position: absolute;
    color: slategray;
    width: 80%;
    bottom: 0;
    left: 50%;
    transform: translate(-50%);
    text-align: center;
}
.barra-lateral__pie:hover {
    color: black;
}
@media (min-width: 600px) {
    .barra-lateral {
        display: none;
    }
}
</style>
