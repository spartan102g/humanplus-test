"use strict";

const express = require("express");

const router = express.Router();

const Usuario = require("../modelos/usuario.js");

const nodemailer = require("nodemailer");

router.get("/", async (req, res) => {
  const usuarios = await Usuario.find();

  let user = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 25,
    secure: true,
    auth: {
      user: "spartan102gamez@gmail.com",
      pass: "mishell264",
    },
  });

  let info = await user.sendMail({
    from: '" 👻" <humanplus@gmail.com>', // sender address
    to: "spartan.102.angel@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });
  console.log(info);
  console.log("ok");
  res.json(usuarios);
});

//Comprovar nombre de usuario en la BD
router.get("/comprovarNombreUsuario/:nombreUsuario", async (req, res) => {
  let id = 0;
  await Usuario.find(
    { nombreUsuario: req.params.nombreUsuario },
    "_id",
    (err, res) => {
      id = res;
    }
  );

  if (id != 0) {
    res.json({
      status: "encontrado",
    });
  } else {
    res.json({
      status: "none",
    });
  }
});
//Comprova correo en la BD
router.get("/comprovarCorreo/:correo", async (req, res) => {
  let id = 0;
  await Usuario.find({ correo: req.params.correo }, "_id", (err, res) => {
    id = res;
  });

  if (id != 0) {
    res.json({
      status: "encontrado",
    });
  } else {
    res.json({
      status: "none",
    });
  }
});

router.post("/confirmarCorreo/");

router.get("/eliminar/:id", async (req, res) => {
  await Usuario.findByIdAndRemove(req.params.id);
  res.json({
    status: "eliminado",
  });
});

//crear usuarios no activados y sin ningun paquete
router.post("/", async (req, res) => {
  const usuario = new Usuario(req.body);
  //guardado del usuario
  await usuario.save();
  res.json({
    id: usuario._id,
  });

  //Enviar mensaje
});

router.delete("/:id", async (req, res) => {
  await Usuario.findByIdAndRemove(req.params.id);
  res.json({
    status: "usuario eliminado",
  });
});

module.exports = router;
