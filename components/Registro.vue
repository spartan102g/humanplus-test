<template>
  <div class="registro">
    <div class="ventana">
      <NuxtLink to="/" class="icono">
        <span class="icon-cross"></span>
      </NuxtLink>
      <h1 class="ventana__titulo">Registro</h1>

      <div class="ventana__contenedor">
        <div class="ventana--center">
          <input
            class="ventana__input"
            v-model="usuario.nombreCompleto"
            type="text"
            placeholder="Nombre Completo"
          />
          <span
            class="texto-rojo"
            v-if="!this.nombreCompletoSinNumeros && !this.nombreCompletoVacio"
            >*El nombre solo debe contener letras</span
          >
          <span
            class="texto-rojo"
            v-if="!this.nombreCompletoLimiteMinimo && !this.nombreCompletoVacio"
            >*El nombre debe tener almenos 10 caracteres</span
          >
          <span
            class="texto-rojo"
            v-if="this.nombreCompletoLimiteMaximo && !this.nombreCompletoVacio"
            >*El nombre debe tener menos de 40 caracteres</span
          >
        </div>
        <div class="ventana--center">
          <input
            class="ventana__input"
            v-model="usuario.nombreUsuario"
            type="text"
            placeholder="Nombre de Usuario"
          />
          <span class="texto-rojo" v-if="this.nombreUsuarioEncontradoEnBD"
            >* Usuario ya existente</span
          >
          <span class="texto-rojo" v-if="this.nombreUsuarioConNumeroInicial"
            >*El caracter inical debe ser una letra</span
          >
        </div>
        <div class="ventana--center">
          <input
            class="ventana__input"
            v-model="usuario.correo"
            type="email"
            placeholder="Correo Electronico"
          />
          <span class="texto-rojo" v-if="this.correoEncontradoEnBD"
            >*El correo ya esta regitrado</span
          >
          <span
            class="texto-rojo"
            v-if="
              !this.correoConArroba &&
                this.usuario.correo != null &&
                this.usuario.correo.length != 0
            "
            >*El correo deve contener un caracter @</span
          >
        </div>
        <div class="ventana--center">
          <input
            class="ventana__input"
            v-model="usuario.clave"
            type="password"
            placeholder="Contraseña"
          />
          <span
            class="texto-rojo"
            v-if="!this.clavesAprovadas && this.clave.length != 0"
            >*No son iguales</span
          >
        </div>
        <div class="ventana--center">
          <input
            class="ventana__input"
            type="password"
            placeholder="Repetir contraseña"
            v-model="clave"
          />
        </div>
        <div class="ventana--center">
          <div v-if="datosConfirmados" @click="crearUsuario()">
            <NuxtLink class="ventana__boton" to="/confirmar"
              >Registrar</NuxtLink
            >
          </div>
          <div v-else>
            <div class="ventana__boton texto-gris">Registrar</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import env from "../config/env";
class Usuario {
  constructor(nombreCompleto, nombreUsuario, clave, correo) {
    this.nombreCompleto = nombreCompleto;
    this.nombreUsuario = nombreUsuario;
    this.clave = clave;
    this.correo = correo;
  }
}
export default {
  data() {
    return {
      usuario: new Usuario(),
      clave: "",
      // verificador de nombreCompleto
      nombreCompletoVacio: true,
      nombreCompletoLimiteMinimo: false,
      nombreCompletoLimiteMaximo: false,
      nombreCompletoSinNumeros: false,
      // verificador de la variable nombreUsuario
      nombreUsuarioVacio: true,
      nombreUsuarioEncontradoEnBD: false,
      nombreUsuarioConNumeroInicial: false,
      //verificador de correo
      correoVacio: true,
      correoConArroba: false,
      correoEncontradoEnBD: false,
      // verificador de que las contraseñas coinsidan
      clavesAprovadas: false,
      // verificador de formulario lleno
    };
  },
  computed: {
    comprovarNombreCompleto() {
      this.nombreCompletoVacio = !(
        this.usuario.nombreCompleto != null &&
        this.usuario.nombreCompleto.length != 0
      );

      this.nombreCompletoSinNumeros =
        !this.nombreCompletoVacio &&
        !this.comprovacionAlfanumerica(this.usuario.nombreCompleto);

      this.nombreCompletoLimiteMinimo =
        !this.nombreCompletoVacio && this.usuario.nombreCompleto.length > 10;

      this.nombreCompletoLimiteMaximo =
        !this.nombreCompletoVacio && this.usuario.nombreCompleto.length > 40;

      return (
        !this.nombreCompletoVacio &&
        this.nombreCompletoLimiteMinimo &&
        !this.nombreCompletoLimiteMaximo &&
        this.nombreCompletoSinNumeros
      );
    },
    comprovarNombreUsuario() {
      this.nombreUsuarioVacio = !(
        this.usuario.nombreUsuario != null &&
        this.usuario.nombreUsuario.length != 0
      );

      if (!this.nombreUsuarioVacio) {
        fetch(
          "/api/usuarios/comprovarNombreUsuario/" +
            this.usuario.nombreUsuario,
          {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-type": "application/json",
            },
          }
        )
          .then((res) => res.json())
          .then(
            (data) =>
              (this.nombreUsuarioEncontradoEnBD = data.status == "encontrado")
              
              
          );
      }

      this.nombreUsuarioConNumeroInicial =
        !this.nombreUsuarioVacio &&
        this.comprovacionAlfanumerica(this.usuario.nombreUsuario[0]);

      return (
        !this.nombreUsuarioEncontradoEnBD &&
        !this.nombreUsuarioConNumeroInicial &&
        !this.nombreUsuarioVacio
      );
    },
    comprovarCorreo() {
      this.correoVacio = !(
        this.usuario.correo != null && this.usuario.correo.length != 0
      );
      if (!this.correoVacio) {
        fetch(
          "/api/usuarios/comprovarCorreo/" + this.usuario.correo,
          {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-type": "application/json",
            },
          }
        )
          .then((res) => res.json())
          .then(
            (data) => (this.correoEncontradoEnBD = data.status == "encontrado")
          );
      }
      this.correoConArroba =
        !this.correoVacio && this.comprovacionArroba(this.usuario.correo);

      return (
        !this.correoVacio && this.correoConArroba && !this.correoEncontradoEnBD
      );
    },
    comprovarClaves() {
      this.clavesAprovadas =
        this.usuario.clave != null &&
        this.usuario.clave.length != 0 &&
        this.usuario.clave == this.clave;

      return this.clavesAprovadas;
    },
    datosConfirmados() {
      {
        this.comprovarNombreCompleto;
        this.comprovarNombreUsuario;
        this.comprovarClaves;
        this.comprovarCorreo;
      }
      return (
        this.comprovarNombreCompleto &&
        this.comprovarNombreUsuario &&
        this.comprovarClaves &&
        this.comprovarCorreo
      );
    },
  },
  methods: {
    crearUsuario() {
      fetch("/api/usuarios/", {
        method: "POST",
        body: JSON.stringify(this.usuario),
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          this.$emit("id", data);

          this.usuario = new Usuario();
          this.contraseña = "";
        })
        .catch((err) => console.log(err));
    },
    comprovacionAlfanumerica(texto) {
      var caracteresNoPermitidos = '1234567890@,.-;:_{}[]´+*¡?=)(/&%$#"!|¿';
      for (var j = 0; j < caracteresNoPermitidos.length; j++) {
        for (var i = 0; i < texto.length; i++) {
          if (caracteresNoPermitidos[j] == texto[i]) {
            return true;
          }
        }
      }
      return false;
    },
    comprovacionArroba(texto) {
      var arroba = "@";

      for (var i = 0; i < texto.length; i++) {
        if (arroba[0] == texto[i]) {
          return true;
        }
      }
      return false;
    },
  },
};
</script>

<style>
.texto-gris {
  color: gray;
}
.texto-rojo {
  color: red;
}

.registro {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 200;
  padding: 50px;

  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
