"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("usuariosmetas", [
      {
        usuario_id: 1,
        meta_id: 2,
      },
      {
        usuario_id: 1,
        meta_id: 6,
      },
      {
        usuario_id: 2,
        meta_id: 9,
      },
      {
        usuario_id: 14,
        meta_id: 2,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("usuariosmetas", null, {});
  },
};
