import { Usuarios } from "../models/Usuarios.js";
import transporter from "../config/mail.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function solicitarResetContrasena(req, res) {
  console.log("Entrando a solicitarResetContrasena");
  try {
    const { correo_electronico } = req.body;
    console.log("Correo electrónico recibido:", correo_electronico);
    const usuario = await Usuarios.findOne({ where: { correo_electronico } });

    if (!usuario) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    const token = jwt.sign(
      { sub: usuario.id, reset_pass: true },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_ACTIVATION_EXPIRES_IN }
    );

    console.log(`Token JWT generado: ${token}`);

    const correoReset = {
      from: `ADL Empleabilidad <${process.env.MAIL_USER}>`,
      to: correo_electronico,
      subject: "Recuperación de contraseña",
      text: `Utiliza este enlace para restablecer tu contraseña: ${process.env.FRONTEND_URL}resetear?token=${token}`,
      html: `
        <h1>Recuperación de contraseña</h1>
        <p>Puedes restablecer tu contraseña haciendo clic en este enlace: <a href='${process.env.FRONTEND_URL}resetear?token=${token}'>Restablecer contraseña</a></p>
      `,
    };

    transporter.sendMail(correoReset, (err, info) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: "Error enviando el correo" });
      }
      console.log(
        "Correo de recuperación enviado con éxito. ID Correo: %s",
        info.messageId
      );
    });

    res.status(200).json({ message: "Correo de recuperación enviado" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function resetearContrasena(req, res) {
  try {
    const { nuevaContrasena } = req.body;
    const token = req.headers.authorization.split(" ")[1];
    // formato token: 'Authorization: Bearer header.payload.signature'

    let payload;
    try {
      payload = jwt.verify(token, process.env.JWT_SECRET);
    } catch (error) {
      return res.status(400).json({ message: "Token inválido o expirado" });
    }

    if (!payload.reset_pass) {
      return res.status(400).json({ message: "Token inválido" });
    }

    const usuario = await Usuarios.findByPk(payload.sub);
    if (!usuario) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    usuario.contrasena = bcrypt.hashSync(nuevaContrasena, 12);
    await usuario.save();

    res.status(200).json({ message: "Contraseña actualizada exitosamente" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
