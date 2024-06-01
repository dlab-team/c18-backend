import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { TokensInvalidos } from "../models/TokensInvalidos.js";
import { Usuarios } from "../models/Usuarios.js";

export async function login(req, res) {
  try {
    const usuario = await Usuarios.findOne({
      where: { correo_electronico: req.body.correo_electronico },
      attributes: ["id", "correo_electronico", "contrasena"],
    });

    if (!usuario) {
      return res
        .status(401)
        .json({ message: "Error 401: Error en autenticación" });
    }

    const login = bcrypt.compareSync(req.body.contrasena, usuario.contrasena);
    if (login) {
      const token = jwt.sign({ sub: usuario.id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN,
      });
      res.status(201).json({
        token,
      });
    } else {
      res.status(401).json({ message: "Error 401: Error en autenticación" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

export async function activar(req, res) {
  try {
    const usuario = await Usuarios.findByPk(req.usuario.id);
    if (usuario.rol === "inactivo") {
      usuario.rol = "user";
      await usuario.save();
      res.status(200).json(usuario);
    } else {
      res.status(400).json({ message: "Error 400: Usuario ya activado" });
    }
    res.status(204).end();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

export async function logout(req, res) {
  try {
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, process.env.JWT_SECRET);
    TokensInvalidos.create({ token: token });
    res.status(204).end();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}
