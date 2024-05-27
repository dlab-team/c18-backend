import jwt from "jsonwebtoken";
import { TokensInvalidos } from "../models/TokensInvalidos.js";
import { Usuarios } from "../models/Usuarios.js";

async function verificarToken(token) {
  const tokenVerificado = jwt.verify(token, process.env.JWT_SECRET);

  const tokenInvalido = await TokensInvalidos.findOne({
    where: {
      token,
    },
  });
  if (tokenInvalido) {
    return false;
  }

  return tokenVerificado.sub;
}

export async function requiereAuth(req, res, next) {
  const token = req.headers.authorization;
  if (token) {
    const tokenVerificado = await verificarToken(token);
    if (tokenVerificado) {
      req.usuario = await Usuarios.findByPk(tokenVerificado);
      next();
    } else {
      res.status(401).json({ error: "Token inválido" });
    }
  } else {
    res.status(401).json({ error: "Token faltante" });
  }
}

export function rolAccess(opciones = { roles: ["admin", "user", "inactivo"] }) {
  return async (req, res, next) => {
    const usuario = await Usuarios.findByPk(req.usuario.id, {
      attributes: ["id", "rol"],
    });
    if (opciones.roles.includes(usuario.rol)) {
      next();
    } else {
      res
        .status(403)
        .json({ error: "No tienes permisos para realizar esta acción" });
    }
  };
}
