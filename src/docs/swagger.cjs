const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");

require("dotenv").config();

servers = [
  {
    url: `http://localhost:${process.env.PORT}`,
    description: "Development server",
  },
];

if (process.env.NODE_ENV === "production") {
  servers = [];
  servers.push({
    url: `${process.env.PRODUCTION_URL}`,
    description: "Production server (Render)",
  });
}

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "c18 API",
      version: "1.0.0",
    },
    servers: servers,
  },
  apis: [`./src${process.env.SWAGGER_DOCS}/**/*.js`],
};

const swaggerSpec = swaggerJSDoc(options);

const swaggerDocs = (app, port) => {
  app.use(
    `${process.env.SWAGGER_DOCS}`,
    swaggerUI.serve,
    swaggerUI.setup(swaggerSpec)
  );
  app.get(`${process.env.SWAGGER_DOCS_JSON}`, (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.send(swaggerSpec);
  });
  console.log(
    `API Documentación http://localhost:${port}${process.env.SWAGGER_DOCS}`
  );
};

module.exports = swaggerDocs;
