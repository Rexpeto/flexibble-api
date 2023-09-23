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
  tags: [
    {
      name: "Auth",
      description: "User authentication to the system",
    },
    {
      name: "User",
      description: "User actions in your account",
    },
    {
      name: "Project",
      description: "Project actions in your account",
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
      Project: {
        type: "object",
        required: ["title", "description", "image", "category"],
        properties: {
          title: {
            type: "string",
            exmaple: "landing page crypto",
            description: "The project's title",
          },
          description: {
            type: "string",
            exmaple: "crypto money landing page",
            description: "The project's description",
          },
          image: {
            type: "string",
            exmaple: "post.png",
            description: "The project's image",
          },
          liveSiteUrl: {
            type: "string",
            exmaple: "https://example.com",
            description: "The project's live site",
          },
          githubUrl: {
            type: "string",
            exmaple: "https://github.com",
            description: "The project's github url",
          },
          category: {
            type: "string",
            exmaple: "landing page",
            description: "The project's category",
          },
          createBy: {
            type: "string",
            exmaple: "5e1b7a0d3f9b2e1b7a0d3f9b",
            description: "The user ID",
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
