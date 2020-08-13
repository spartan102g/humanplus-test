<template>
    <div>
        <index></index>
        <Ingreso @ingreso="id = $event;ingresar();"></Ingreso>
    </div>
</template>

<script>
import Ingreso from '../components/Ingreso'
import index from './index'

import uco from '../components/global'
export default {
    data(){
        return{
            id: 0
        }
    },
    components: {
        Ingreso,
        index
    },
    methods:{
        ingresar(){
            uco = true
            console.log(this.id);
        }
    },
    created() {}
}
</script>

<style></style>
