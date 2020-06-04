<template>
    <div>
        <section class="banner">
            <div class="banner__contenido">
                <h1 class="banner__texto">SE LA MEJOR VERSIÓN DE TI</h1>
                <NuxtLink to="/ingreso" class="banner__boton"
                    >Ingresar</NuxtLink
                >
            </div>
        </section>
    </div>
</template>

<script>
export default {}
</script>

<style scoped>
.banner {
    position: relative;
    top: 40px;
    width: 100%;
    height: calc(50vh - 40px);
    background: #f5f5f5;
    background-size: cover;
    background-position: center;
    transition: all 1s ease-in-out;

    background-image: url('../../assets/img1.jpg');
    animation: banner 15s infinite linear;
}
.banner__contenido {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.2);
    font-family: 'Source Sans Pro', sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.banner__texto {
    margin: 0;
    padding: 0;
    padding-bottom: 30px;
    font-size: 25px;
    text-shadow: 1px 1px 5px black;
    text-align: center;
}
.banner__boton {
    text-decoration: none;
    color: #fff;
    padding: 9px 20px;
    border: 1px solid #fff;
    box-shadow: 1px 1px 5px black;
    transition: all 0.3s ease-in-out;
}
.banner__boton:hover {
    background: #fff;
    color: black;
}
@keyframes banner {
    0% {
        background-image: url('../../assets/img1.jpg');
    }
    33% {
        background-image: url('../../assets/img1.jpg');
    }
    34% {
        background-image: url('../../assets/img2.jpg');
    }
    66% {
        background-image: url('../../assets/img2.jpg');
    }
    67% {
        background-image: url('../../assets/img3.jpg');
    }
    100% {
        background-image: url('../../assets/img3.jpg');
    }
}

@media (min-width: 600px) {
    .banner {
        top: 50px;
        height: calc(60vh - 50px);
    }
    .banner__texto {
        font-size: 40px;
    }
}
</style>
