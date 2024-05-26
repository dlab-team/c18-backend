import { Usuarios } from "../models/Usuarios.js";
import transporter from "../config/mail.js";

// Include
import { Metas } from "../models/Metas.js";
import { Metricas } from "../models/Metricas.js";
import { RegistroEntrevistas } from "../models/RegistroEntrevistas.js";

export async function getUsuarios(req, res) {
  try {
    const usuarios = await Usuarios.findAll({
      include: [
        { model: Metas },
        { model: Metricas },
        { model: RegistroEntrevistas },
      ],
    });
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function postUsuarios(req, res) {
  try {
    const nuevoUsuario = await Usuarios.create(req.body);

    const correo_activacion = {
      from: `ADL Empleabilidad <${process.env.MAIL_USER}>`,
      to: nuevoUsuario.correo_electronico,
      subject: '¡Bienvenido a ADL Empleabilidad! Activa tu cuenta',
      text: 'Accede a este link para activar tu cuenta: URL aquí',
      html: `
      <h1>¡Bienvenido a ADL Empleabilidad!</h1>
      <p>Puedes activar tu cuenta haciendo clic en este link: <a href='#'>Activa tu cuenta</a></p>
      `
    }

    transporter.sendMail(correo_activacion, (err, info) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log("Correo de activación enviado con éxito. ID Correo: %s", info.messageId);
    })

    res.status(201).json(nuevoUsuario);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

export async function getUsuariosPorId(req, res) {
  const id = req.params.id;
  try {
    const usuario = await Usuarios.findByPk(id, {
      include: [
        { model: Metas },
        { model: Metricas },
        { model: RegistroEntrevistas },
      ],
    });
    if (!usuario) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }
    res.json(usuario);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function putUsuariosPorId(req, res) {
  const id = req.params.id;
  try {
    const usuario = await Usuarios.findByPk(id);
    if (!usuario) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }
    await usuario.update(req.body);
    res.json(usuario);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

export async function deleteUsuariosPorId(req, res) {
  const id = req.params.id;
  try {
    const usuario = await Usuarios.findByPk(id);
    if (!usuario) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }
    await usuario.destroy();
    res.json({ message: "Usuario eliminado exitosamente" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
