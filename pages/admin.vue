<template>
    <div class="admin">
        <div v-for="usuario of usuarios" v-bind:key="usuario._id">
            <v-card>
                <v-card-text>
                    nombreCompleto: {{ usuario.nombreCompleto }}
                    <v-spacer></v-spacer>
                    nombreUsuario: {{ usuario.nombreUsuario }}
                    <v-spacer></v-spacer>
                    correo: {{ usuario.correo }}
                    <v-spacer></v-spacer>
                    clave: {{ usuario.clave }}

                    

                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn @click="eliminarUsuario(usuario._id)">
                        eliminar</v-btn
                    >
                </v-card-actions>
            </v-card>
        </div>
    </div>
</template>

<script>
import env from '../config/env'
export default {
    data() {
        return {
            usuarios: []
        }
    },
    created() {
        this.obtenerUsuarios()
    },
    methods: {
        obtenerUsuarios() {
            fetch(env.endpoint + '/api/usuarios')
                .then(res => res.json())
                .catch(err => {
                    console.error(err)
                })
                .then(data => {
                    this.usuarios = data
                })
        },
        eliminarUsuario(id) {
            fetch(env.endpoint + '/api/usuarios/' + id, {
                method: 'DELETE',
                headers: {
                    Accept: 'application/json',
                    'Content-type': 'application/json'
                }
            })
                .then(res => res.json())
                .catch(err => {
                    console.error(err)
                })
                .then(data => {
                    this.obtenerUsuarios()
                })
        }
    }
}
</script>

<style>
.admin {
    padding-top: 50px;
}
</style>
