"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "registroEntrevistas",
      [
        {
          fecha_entrevista: "2024-05-11",
          estado: "contratado",
          usuario_id: 9,
          createdAt: "2024-05-11",
          updatedAt: "2024-05-11",
        },
        {
          fecha_entrevista: "2024-05-11",
          estado: "oferta",
          usuario_id: 12,
          createdAt: "2024-05-11",
          updatedAt: "2024-05-11",
        },
        {
          fecha_entrevista: "2024-05-11",
          estado: "contratado",
          usuario_id: 8,
          createdAt: "2024-05-11",
          updatedAt: "2024-05-11",
        },
        {
          fecha_entrevista: "2024-05-11",
          estado: "contratado",
          usuario_id: 13,
          createdAt: "2024-05-11",
          updatedAt: "2024-05-11",
        },
        {
          fecha_entrevista: "2024-05-11",
          estado: "oferta",
          usuario_id: 2,
          createdAt: "2024-05-11",
          updatedAt: "2024-05-11",
        },
        {
          fecha_entrevista: "2024-05-11",
          estado: "oferta",
          usuario_id: 3,
          createdAt: "2024-05-11",
          updatedAt: "2024-05-11",
        },
        {
          fecha_entrevista: "2024-05-11",
          estado: "entrevista",
          usuario_id: 13,
          createdAt: "2024-05-11",
          updatedAt: "2024-05-11",
        },
        {
          fecha_entrevista: "2024-05-11",
          estado: "contratado",
          usuario_id: 6,
          createdAt: "2024-05-11",
          updatedAt: "2024-05-11",
        },
        {
          fecha_entrevista: "2024-05-11",
          estado: "entrevista",
          usuario_id: 8,
          createdAt: "2024-05-11",
          updatedAt: "2024-05-11",
        },
        {
          fecha_entrevista: "2024-05-11",
          estado: "contratado",
          usuario_id: 8,
          createdAt: "2024-05-11",
          updatedAt: "2024-05-11",
        },
        {
          fecha_entrevista: "2024-05-11",
          estado: "postulado",
          usuario_id: 13,
          createdAt: "2024-05-11",
          updatedAt: "2024-05-11",
        },
        {
          fecha_entrevista: "2024-05-11",
          estado: "contratado",
          usuario_id: 3,
          createdAt: "2024-05-11",
          updatedAt: "2024-05-11",
        },
        {
          fecha_entrevista: "2024-05-11",
          estado: "postulado",
          usuario_id: 14,
          createdAt: "2024-05-11",
          updatedAt: "2024-05-11",
        },
        {
          fecha_entrevista: "2024-05-11",
          estado: "oferta",
          usuario_id: 15,
          createdAt: "2024-05-11",
          updatedAt: "2024-05-11",
        },
        {
          fecha_entrevista: "2024-05-11",
          estado: "contratado",
          usuario_id: 6,
          createdAt: "2024-05-11",
          updatedAt: "2024-05-11",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("registroEntrevistas", null, {});
  },
};
