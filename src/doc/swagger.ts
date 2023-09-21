import swaggerJSDoc, { OAS3Definition, OAS3Options } from "swagger-jsdoc";

const swaggerDefinition: OAS3Definition = {
  openapi: "3.0.3",
  info: {
    title: "Flexibble API",
    version: "1.0.0",
    description: "API de ejemplo para Flexibble",
  },
  host: process.env.IP_PUBLIC_SERVER ?? "http://localhost:3000",
  servers: [
    {
      url: `http://localhost:${process.env.PORT}`,
      description: "Development server",
    },
    {
      url:
        `${process.env.IP_PUBLIC_SERVER}:${process.env.PORT}` ??
        "http://localhost:3000",
      description: "Production server",
    },
  ],
  basePath: "/",
  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
      },
    },
    schemas: {
      User: {
        type: "object",
        required: ["name", "email", "password", "rol"],
        properties: {
          _id: {
            type: "string",
          },
          name: {
            type: "string",
          },
          email: {
            type: "string",
          },
          password: {
            type: "string",
          },
          avatarUrl: {
            type: "string",
          },
          description: {
            type: "string",
          },
          githubUrl: {
            type: "string",
          },
          linkedinUrl: {
            type: "string",
          },
          rol: {
            type: "string",
          },
          projects: {
            type: "array",
            items: {
              type: "string",
            },
          },
        },
      },
    },
  },
};

const swaggerOptions: OAS3Options = {
  swaggerDefinition,
  apis: ["./src/routes/*.ts"],
};

export default swaggerJSDoc(swaggerOptions);
