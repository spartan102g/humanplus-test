const nodemailer = require("nodemailer");

nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 25,
  secure: true,
  auth: {
    user: "spartan102gamez@gmail.com",
    pass: "mishell264",
  },
});

exports.default = nodemailer;
