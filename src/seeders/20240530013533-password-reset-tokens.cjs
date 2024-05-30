"use strict";

const { PasswordResetToken } = require("../models");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("PasswordResetTokens", [
      {
        usuario_id: 1,
        token: "1234567890", // Token de reseteo de contraseña
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    // Elimina todos los registros
    await queryInterface.bulkDelete("PasswordResetTokens", null, {});
  },
};
