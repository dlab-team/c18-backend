import { Usuarios } from "../models/Usuarios.js";
import { PasswordResetToken } from "../models/PasswordResetToken.js";
import transporter from "../config/mail.js";
import crypto from "crypto";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function solicitarResetContrasena(req, res) {
  try {
    const { correo_electronico } = req.body;
    const usuario = await Usuarios.findOne({ where: { correo_electronico } });

    if (!usuario) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    const token = crypto.randomBytes(20).toString("hex");
    const expiracion = new Date(Date.now() + 3600000); // 1 hora

    await PasswordResetToken.create({
      token,
      usuario_id: usuario.id,
      expiracion,
    });

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
    const { token, nuevaContrasena } = req.body;

    const resetToken = await PasswordResetToken.findOne({ where: { token } });

    if (!resetToken || resetToken.expiracion < Date.now()) {
      return res.status(400).json({ message: "Token inválido o expirado" });
    }

    const usuario = await Usuarios.findByPk(resetToken.usuario_id);
    if (!usuario) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    usuario.contrasena = bcrypt.hashSync(nuevaContrasena, 12);
    await usuario.save();

    await PasswordResetToken.destroy({ where: { token } });

    res.status(200).json({ message: "Contraseña actualizada exitosamente" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
