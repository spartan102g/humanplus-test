<template>
    <div class="bordes">
        <div class="anno">2020</div>
        <div class="encabezado">
            
            <div class="btn inline left" @click="mesAnterior()">{{meses[mesActual -1]}}</div>
            <div class="inline center">{{meses[mesActual]}}</div>
            <div class="btn inline right" @click="mesSiguiente()">{{meses[mesActual+1]}}</div>
        </div>
        <div class="dias">
            <div class="dias-texto">Lunes</div>
            <div class="dias-texto">Martes</div>
            <div class="dias-texto">Miercoles</div>
            <div class="dias-texto">Jueves</div>
            <div class="dias-texto">Viernes</div>
            <div class="dias-texto">Sabado</div>
            <div class="dias-texto">Domingo</div>
        </div>
        <div class="dias divs" v-for="n in sem">
            <div v-for="i in diass">
                <div v-if="diaValido(diasActual[i + (n * 7)])" class="dias-texto margen-dias"  @click="seleccionarDia(diasActual[i + (n * 7)])">{{diasActual[i + (n * 7)]}}</div>
                <div v-else class="dias-texto margen-dias cancelado"  @click="seleccionarDia(diasActual[i + (n * 7)])">{{diasActual[i + (n * 7)]}}</div>

            </div>

        </div>
        <div>

        </div>

    </div>
</template>

<script>
export default {
    data(){
        return{
            meses:["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],
            indice: 0,
            sem: [0,1,2,3,4,5],
            diass: [0,1,2,3,4,5,6],
            mes: 0,
            dias: new Array(42)
            
            
        }
    },
    created(){
        var fecha = new Date()
        this.mes = fecha.getMonth()
        this.dia = fecha.getDay()
        this.dias = this.diasActual
        

        

        
        
    },
    methods:{
        calcularPrimerDia(mes){
            var fecha = new Date(2020,mes,1)
            var dia_mes = fecha.getDate()
            var dia_semana= fecha.getDay()

            while (dia_mes == 1) {
                dia_mes -= 1
                if (dia_semana == 0) {
                    dia_semana == 6
                }else{
                    dia_semana -= 1
                }
            }

            return dia_semana
        },
        calcularNumeroDias(mes){
            var fecha = new Date(2020,mes,1)
            var meses_con30 = [3,5,8,10]
            var meses_con31 = [0,2,4,6,7,9,11]
            var mes = fecha.getMonth()
            var anno = fecha.getFullYear()

            if (mes == 0) {
                return 31
            }
            if (mes == 2) {
                return 31
            }
            if (mes == 3){
                return 30
            }
            if (mes == 4) {
                return 31
            }
            if (mes == 5) {
                return 30
            }
            if (mes == 6) {
                return 31
            }
            if (mes == 7) {
                return 31
            }
            if (mes == 8) {
                return 30
            }
            if (mes == 9) {
                return 31
            }
            if (mes == 10) {
                return 30
            }
            if (mes == 11) {
                return 31
            }

            
            
            

            if (mes == 1) {
                if ((anno % 4 == 0 && anno % 100 != 0) || anno % 400 == 0) {
                    return 29
                }else{
                    return 28
                }
            }
        },
        seleccionarDia(dia){
            var hoy = new Date()
            var hoy_dia = hoy.getDate()
            var hoy_mes = hoy.getMonth()
            if (dia < hoy && (this.mes < hoy_mes)){
                
            }else{
                if (dia > 0) {
                    this.$emit('mesActivo',this.mes)
                    this.$emit('diaActivo',dia)
                    
                }
                
            }
        },
        diaValido(dia){
            var hoy = new Date()
            var hoy_dia = hoy.getDate()
            var hoy_mes = hoy.getMonth()
            if (dia < hoy && (this.mes < hoy_mes)){
                return false
            }else{
                return true
            }
        },
        mesAnterior(){
            if (this.mes >0){
                this.mes -= 1

            }
            
        },
        mesSiguiente(){
            if (this.mes < 11) {
                this.mes += 1
                
            }

            
        }
    },
    computed:{
        mesActual(){
            return this.mes
        },
        diasActual(){
            this.dias = new Array(42)
            var contador = 1
            for (let i = this.calcularPrimerDia(this.mes) ; i < this.calcularNumeroDias(this.mes) + this.calcularPrimerDia(this.mes); i++) {
            this.dias[i] = contador++;
            
            }
            return this.dias

            
        }
    }
}
</script>

<style scoped>
.anno{
    font-size: 20px;
    text-align: center;
}
.btn{
    background: tomato;
    margin: 5px;
    border-radius: 5px;
}
    .bordes{
        width: 360px;
        margin: 20px auto;
        /*background: #e25d5d;*/
        background: white;
        border-radius: 10px;
        border: black solid 2px;
        
    }
    .encabezado{
        display: inline-grid;
        width: 100%;
        grid-template-columns: 1fr 1fr 1fr;
        padding: 2px;
    }
    .inline{
        display: inline;
        padding: 5px 10px;
    }
    .center{
        text-align: center;
        font-size: 20px;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }
 
    .dias{
        width: 100%;
        background: white;
        display: inline-grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    }
    .dias-texto{
        text-align: center;
        font-size: 10px;
    }
    .margen-dias{
        border: red 1px solid;
        
    }
    .cancelado{
        background: tomato;
        
    }
    .divs{
        border-radius: 5px;
    }

    @media screen and (min-width: 600px) {
        .bordes{
            width: 600px;
        }
        .dias-texto{
            font-size: 15px;
        }
        .margen-dias{
            margin: 5px;
        }
           .left{
        margin-right: 50%;
    }
    .right{
        text-align: right;
        margin-left: 50%;
    }
    }
    @media screen and (min-width: 900px) {
        .bordes{
            width: 900px;
        }
        .dias-texto{
            font-size: 15px;
        }
        
    }
</style>
