"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.renameColumn("usuarios", "rol", "cargo");
    await queryInterface.addColumn("usuarios", "rol", {
      type: Sequelize.STRING,
      allowNull: true, // Ajusta esto según tus necesidades
      validate: {
        is: {
          args: /^[\p{LC} ]+$/u,
          msg: "Role type can only contain letters and spaces",
        },
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.renameColumn("usuarios", "cargo", "rol");
    await queryInterface.removeColumn("usuarios", "rol");
  },
};
