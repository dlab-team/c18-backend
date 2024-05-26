import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASSWORD
  }
})

transporter.verify(function (error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log("Servidor de correo listo para recibir nuestros mensajes");
  }
});

export default transporter;
