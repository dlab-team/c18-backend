"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "notas",
      [
        {
          texto: "Nulla nisl. Nunc nisl.",
          empleo_id: 21,
          createdAt: "2024-05-11",
          updatedAt: "2024-05-11",
        },
        {
          texto: "Etiam justo. Etiam pretium iaculis justo.",
          empleo_id: 29,
          createdAt: "2024-05-11",
          updatedAt: "2024-05-11",
        },
        {
          texto: "Aenean auctor gravida sem.",
          empleo_id: 13,
          createdAt: "2024-05-11",
          updatedAt: "2024-05-11",
        },
        {
          texto: "Integer tincidunt ante vel ipsum.",
          empleo_id: 1,
          createdAt: "2024-05-11",
          updatedAt: "2024-05-11",
        },
        {
          texto: "Nulla nisl. Nunc nisl.",
          empleo_id: 35,
          createdAt: "2024-05-11",
          updatedAt: "2024-05-11",
        },
        {
          texto:
            "Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.",
          empleo_id: 11,
          createdAt: "2024-05-11",
          updatedAt: "2024-05-11",
        },
        {
          texto:
            "Duis bibendum, felis sed interdum venenatis, turpis enim blanditetium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.",
          empleo_id: 1,
          createdAt: "2024-05-11",
          updatedAt: "2024-05-11",
        },
        {
          texto:
            "Donec ut dolor. Morbi vel lectus ioncus sed, vestibulum sit amet, cursus idt, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.",
          empleo_id: 28,
          createdAt: "2024-05-11",
          updatedAt: "2024-05-11",
        },
        {
          texto:
            "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus.",
          empleo_id: 33,
          createdAt: "2024-05-11",
          updatedAt: "2024-05-11",
        },
        {
          texto:
            "Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
          empleo_id: 38,
          createdAt: "2024-05-11",
          updatedAt: "2024-05-11",
        },
        {
          texto:
            "Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus.",
          empleo_id: 24,
          createdAt: "2024-05-11",
          updatedAt: "2024-05-11",
        },
        {
          texto: "Sed ante.",
          empleo_id: 32,
          createdAt: "2024-05-11",
          updatedAt: "2024-05-11",
        },
        {
          texto:
            "Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus.",
          empleo_id: 33,
          createdAt: "2024-05-11",
          updatedAt: "2024-05-11",
        },
        {
          texto:
            "Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo.",
          empleo_id: 26,
          createdAt: "2024-05-11",
          updatedAt: "2024-05-11",
        },
        {
          texto:
            "Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus.",
          empleo_id: 8,
          createdAt: "2024-05-11",
          updatedAt: "2024-05-11",
        },
        {
          texto: "Nullam porttitor lacus at turpis.",
          empleo_id: 21,
          createdAt: "2024-05-11",
          updatedAt: "2024-05-11",
        },
        {
          texto:
            "Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.",
          empleo_id: 5,
          createdAt: "2024-05-11",
          updatedAt: "2024-05-11",
        },
        {
          texto:
            "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam. Nam tristique tortor eu pede.",
          empleo_id: 9,
          createdAt: "2024-05-11",
          updatedAt: "2024-05-11",
        },
        {
          texto:
            "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
          empleo_id: 25,
          createdAt: "2024-05-11",
          updatedAt: "2024-05-11",
        },
        {
          texto:
            "Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis.",
          empleo_id: 6,
          createdAt: "2024-05-11",
          updatedAt: "2024-05-11",
        },
        {
          texto:
            "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
          empleo_id: 38,
          createdAt: "2024-05-11",
          updatedAt: "2024-05-11",
        },
        {
          texto:
            "Integer aliquet, massa id lobortia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
          empleo_id: 27,
          createdAt: "2024-05-11",
          updatedAt: "2024-05-11",
        },
        {
          texto:
            "Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam. Nam tristique tortor eu pede.",
          empleo_id: 13,
          createdAt: "2024-05-11",
          updatedAt: "2024-05-11",
        },
        {
          texto: "Integer ac leo.",
          empleo_id: 34,
          createdAt: "2024-05-11",
          updatedAt: "2024-05-11",
        },
        {
          texto:
            "Donec diam neque, vestibulum eget, vulputate ut,sollicitudin mi, sit amet lobortis sapien sapien non mi.",
          empleo_id: 37,
          createdAt: "2024-05-11",
          updatedAt: "2024-05-11",
        },
        {
          texto:
            "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.",
          empleo_id: 33,
          createdAt: "2024-05-11",
          updatedAt: "2024-05-11",
        },
        {
          texto: "Nulla tellus. In sagittis dui vel nisl.",
          empleo_id: 25,
          createdAt: "2024-05-11",
          updatedAt: "2024-05-11",
        },
        {
          texto: "Curabitur at ipsum ac tellus semper interdum.",
          empleo_id: 1,
          createdAt: "2024-05-11",
          updatedAt: "2024-05-11",
        },
        {
          texto:
            "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero.",
          empleo_id: 15,
          createdAt: "2024-05-11",
          updatedAt: "2024-05-11",
        },
        {
          texto:
            "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis.",
          empleo_id: 11,
          createdAt: "2024-05-11",
          updatedAt: "2024-05-11",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("notas", null, {});
  },
};
