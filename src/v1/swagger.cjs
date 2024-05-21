const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");

require("dotenv").config();

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "c18 API",
      version: "1.0.0",
    },
    servers: [
      {
        url: `http://${process.env.PGHOST}:${process.env.PORT}`,
        description: "Development server",
      },
      {
        url: `${process.env.PRODUCTION_URL}`,
        description: "Production server (Render)",
      },
    ],
  },
  apis: ["./src/v1/docs/**/*.js"],
};

const swaggerSpec = swaggerJSDoc(options);

const swaggerDocs = (app, port) => {
  app.use(
    `${process.env.SWAGGER_URL}`,
    swaggerUI.serve,
    swaggerUI.setup(swaggerSpec)
  );
  app.get(`${process.env.SWAGGER_URL_JSON}`, (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.send(swaggerSpec);
  });
  console.log(
    `API Documentación http://${process.env.PGHOST}:${port}${process.env.SWAGGER_URL}`
  );
};

module.exports = swaggerDocs;
