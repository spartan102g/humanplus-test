const express = require('express')
const consola = require('consola')
const mongoose = require('mongoose')
const { Nuxt, Builder } = require('nuxt')
const app = express()

mongoose
    .connect('mongodb://human:human264@ds263078.mlab.com:63078/huma', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(db => {
        consola.ready({
            message: 'La base de datos esta conectada',
            badge: true
        })
    })
    .catch(err => console.error(err))

app.use(express.json())
app.use('/api/usuarios', require('../src/rutas/usuarios'))

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = process.env.NODE_ENV !== 'production'

async function start() {
    // Init Nuxt.js
    const nuxt = new Nuxt(config)

    const { host, port } = nuxt.options.server

    await nuxt.ready()
    // Build only in dev mode
    if (config.dev) {
        const builder = new Builder(nuxt)
        await builder.build()
    }

    // Give nuxt middleware to express
    app.use(nuxt.render)

    // Listen the server
    app.listen(port, host)
    consola.ready({
        message: `Servidor abierto en http://${host}:${port}`,
        badge: true
    })
}
start()
