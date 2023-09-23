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
            example: "5e1b7a0d3f9b2e1b7a0d3f9b",
            description: "The user ID",
          },
          name: {
            type: "string",
            exmaple: "Leanne Graham",
            description: "The user's name",
          },
          email: {
            type: "string",
            exmaple: "leanne@example.com",
            description: "The user's email",
          },
          password: {
            type: "string",
            exmaple: "123456",
            description: "The user's password",
          },
          avatarUrl: {
            type: "string",
            exmaple:
              "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
            description: "The image url of the user",
          },
          description: {
            type: "string",
            exmaple:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            description: "The user's description",
          },
          githubUrl: {
            type: "string",
            exmaple: "https://github.com/leanndavidgraham",
            description: "The user's github url",
          },
          linkedinUrl: {
            type: "string",
            exmaple: "https://www.linkedin.com/in/leanndavidgraham",
            description: "The user's linkedin url",
          },
          rol: {
            type: "string",
            exmaple: "admin",
            description: "The user's role",
          },
          projects: {
            type: "array",
            items: {
              type: "string",
              example: "5e1b7a0d3f9b2e1b7a0dasdjhf",
              description: "The project id",
            },
          },
        },
      },
      Project: {
        type: "object",
        required: ["title", "description", "image", "category"],
        properties: {
          _id: {
            type: "string",
            example: "5e1b7a0d3f9b2e1b7a0dasdjhf",
            description: "The project ID",
          },
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
