"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("usuarios", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      nombre: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          is: {
            args: /^[\p{LC} ]+$/u,
            msg: "Name can only contain letters and spaces",
          },
        },
      },
      correo_electronico: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: {
            msg: "Invalid email",
          },
        },
      },
      fecha_credenciales: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        allowNull: false,
      },
      contrasena: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          len: {
            args: [8, 255],
            msg: "Password must be at least 8 characters long",
          },
        },
      },
      pais: {
        type: Sequelize.STRING,
        allowNull: true,
        validate: {
          is: {
            args: /^[\p{LC} ]+$/u,
            msg: "Country can only contain letters and spaces",
          },
        },
      },
      experiencia: {
        type: Sequelize.INTEGER,
        allowNull: true,
        validate: {
          isInt: {
            msg: "Experience must be an integer",
          },
        },
      },
      educacion: {
        type: Sequelize.STRING,
        allowNull: true,
        validate: {
          is: {
            args: /^[\p{LC} ]+$/u,
            msg: "Education can only contain letters and spaces",
          },
        },
      },
      cargo: {
        type: Sequelize.STRING,
        allowNull: true,
        validate: {
          is: {
            args: /^[\p{LC} ]+$/u,
            msg: "Role can only contain letters and spaces",
          },
        },
      },
      rol: {
        type: Sequelize.ENUM("admin", "user", "inactivo"),
        allowNull: false,
        defaultValue: "inactivo",
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        allowNull: false,
      },
    });
    await queryInterface.createTable("metricas", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      total_postulaciones: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      total_entradas: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      ofertas: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      guardados: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      usuario_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "usuarios",
          key: "id",
        },
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        allowNull: false,
      },
    });
    await queryInterface.createTable("metas", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      semana: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
          isInt: {
            msg: "La semana debe ser un número entero.",
          },
        },
      },
      cantidad_meta: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
          isInt: {
            msg: "La cantidad meta debe ser un número entero.",
          },
        },
      },
      cantidad_cumplida: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
          isInt: {
            msg: "La cantidad cumplida debe ser un número entero.",
          },
        },
      },
      mes: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
          isInt: {
            msg: "El mes debe ser un número entero.",
          },
        },
      },
      usuario_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "usuarios",
          key: "id",
        },
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        allowNull: false,
      },
    });
    await queryInterface.createTable("registroEntrevistas", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        comment: "Clave primaria",
      },
      fecha_entrevista: {
        type: Sequelize.DATEONLY,
        allowNull: false,
        comment: "Fecha de la entrevista",
      },
      estado: {
        type: Sequelize.STRING(20),
        allowNull: false,
        comment: "Estado de la entrevista",
      },
      usuario_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "usuarios",
          key: "id",
        },
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        allowNull: false,
      },
    });
    await queryInterface.createTable("empleos", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      titulo: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          is: {
            args: /^[\p{LC} ]+$/u,
            msg: "Title can only contain letters and spaces",
          },
        },
      },
      empresa: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          is: {
            args: /^[\p{LC} ]+$/u,
            msg: "Enterprise contain letters and spaces",
          },
        },
      },
      cargo: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          is: {
            args: /^[\p{LC} ]+$/u,
            msg: "Vacancy contain letters and spaces",
          },
        },
      },
      url: {
        type: Sequelize.STRING,
        validate: {
          isUrl: {
            args: true,
            msg: "The URL is invalid",
          },
        },
      },
      descripcion: {
        type: Sequelize.TEXT,
        allowNull: false,
        validate: {
          notNull: {
            msg: "La descripción es obligatoria.",
          },
        },
      },
      ubicacion: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          is: {
            args: /^[\p{LC} ]+$/u,
            msg: "Location can only contain letters and spaces",
          },
        },
      },
      tipo_empleo: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          is: {
            args: /^[\p{LC} ]+$/u,
            msg: "Employment can only contain letters and spaces",
          },
        },
      },
      salario: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: true,
        validate: {
          isDecimal: {
            args: [10, 2],
            msg: "Salary must be decimals",
          },
        },
      },
      registroEntrevista_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "registroEntrevistas",
          key: "id",
        },
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        allowNull: false,
      },
    });
    await queryInterface.createTable("notas", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        comment: "Clave primaria",
      },
      texto: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      empleo_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "empleos",
          key: "id",
        },
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        allowNull: false,
      },
    });
    await queryInterface.createTable("tokensInvalidos", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      token: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        allowNull: false,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropAllTables();
  },
};
