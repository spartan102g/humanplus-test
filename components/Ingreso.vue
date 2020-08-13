<template>
    <div class="ingreso">
        <div class="ventana">
            <div @click="cerrar()" class="icono">
                <span class="icon-cross"> </span>
            </div>
            <h1 class="ventana__titulo">Ingreso</h1>
            <div>
                <div class="ventana__contenedor">
                    <div class="ventana--center">
                        <input
                            class="ventana__input"
                            type="text"
                            placeholder="Usuario"
                            v-model="usuario"
                        />
                    </div>
                    <div class="ventana--center">
                        <input
                            class="ventana__input"
                            type="password"
                            placeholder="Contraseña"
                            v-model="clave"
                            
                        />
                    </div>
                    <div v-if="datos" class="rojo">Error al ingresar datos</div>
                    <div  class="ventana--center">
                        
                        <button class="ventana__boton desactivado" @click="comprovacion()">Entrar</button>
                    </div>
                    <div class="ventana--center">
                        ¿No tienes cuenta?
                        
                            <div  to="/registro" style="color: blue" @click="registro()">
                                Registrate</div
                            >
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            usuario: '',
            clave: '',
            datos: false
        }
    },
    methods:{
        cerrar(){
            this.$emit('cerrar')
        },
        registro(){
            this.$emit('registro')
        },
        comprovacion(){
            
            fetch(
          "/api/usuarios/ingreso/" +
            this.usuario +"@"+ this.clave,
          {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-type": "application/json",
            },
          }
        )
          .then((res) => res.json())
          .then((data)=> {
              
              if (data.id[0] != undefined) {
                  
                this.$emit('ingreso',data.id[0]._id)
                this.datos = false
                this.$router.push('app')               

                  
            }else{
                this.datos = true
            }

          });
              
              
        },
    }
}


</script>
<style>
.rojo{
    color: red;
}
.icono {
    position: relative;

    top: 0;
}
.ventana--center {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.ventana {
    background: white;

    border-radius: 5px;
    box-shadow: 0 0 5px 0 white;

    width: 400px;
}
.ventana__titulo {
    text-align: center;
    margin: 0 18px;
    padding: 10px 0;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    border-bottom: 1px solid gray;
}
.ventana__contenedor {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.ventana__input {
    box-sizing: border-box;
    font-size: 16px;
    width: 300px;
    padding: 5px 20px;
    text-align: center;
    margin: 20px 0;
    border-bottom: 1px solid black;
}
.ventana__input:focus {
    border: none;
}
.ventana__boton {
    display: block;
    font-size: 20px;
    
    margin: 0 auto;
    padding: 5px 40px;
    text-align: justify;
    margin: 20px 0;
    border: 1px solid black;
}
.desactivado{
    color: gray;
}

</style>

<style scoped>
.ingreso {
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
