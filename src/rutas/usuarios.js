const express = require('express')

const router = express.Router()

const Usuario = require('../modelos/usuario.js')

router.get('/', async (req, res) => {
    const usuarios = await Usuario.find()
    res.json(usuarios)
})

//Comprovar nombre de usuario en la BD
router.get('/comprovarNombreUsuario/:nombreUsuario', async (req, res) => {
    let id = 0
    await Usuario.find(
        { nombreUsuario: req.params.nombreUsuario },
        '_id',
        (err, res) => {
            id = res
        }
    )

    if (id != 0) {
        res.json({
            status: 'encontrado'
        })
    } else {
        res.json({
            status: 'none'
        })
    }
})
//Comprova correo en la BD
router.get('/comprovarCorreo/:correo', async (req, res) => {
    let id = 0
    await Usuario.find({ correo: req.params.correo }, '_id', (err, res) => {
        id = res
    })

    if (id != 0) {
        res.json({
            status: 'encontrado'
        })
    } else {
        res.json({
            status: 'none'
        })
    }
})

router.get('/eliminar/:id', async (req, res) => {
    await Usuario.findByIdAndRemove(req.params.id)
    res.json({
        status: 'eliminado'
    })
})

//crear usuarios no activados y sin ningun paquete
router.post('/', async (req, res) => {
    const usuario = new Usuario(req.body)

    usuario.activado = false
    usuario.permisos = 2

    await usuario.save()
    res.json({
        id: usuario._id
    })
})

router.delete('/:id', async (req, res) => {
    await Usuario.findByIdAndRemove(req.params.id)
    res.json({
        status: 'usuario eliminado'
    })
})

module.exports = router
