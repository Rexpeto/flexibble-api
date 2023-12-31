import "dotenv/config";
import express from "express";
import cors from "cors";
import swaggerUI from "swagger-ui-express";
import { router } from "@/routes";
import dbConnect from "@/config/mongodb";
import swaggerSetup from "@/doc/swagger";

const PORT = process.env.PORT ?? 4000;
const app = express();

app.use(express.json());
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://192.168.1.107:5173",
      "http://localhost:5173",
      "http://192.168.1.107:4173",
      "http://localhost:4173",
    ],
    credentials: true,
  })
);
app.use(router);
dbConnect()
  .then(() => console.log(`🔌Connect to mongo`))
  .catch(() => console.log(`❌Problem to connect mongoDB`));

app.use("/documentation", swaggerUI.serve, swaggerUI.setup(swaggerSetup));

//* Access to files
app.use(
  "/public/img/profile",
  express.static(`${process.cwd()}${process.env.ROUTE_PROFILE}`)
);

app.use(
  "/public/img/project",
  express.static(`${process.cwd()}${process.env.ROUTE_PROJECT}`)
);

app.listen(PORT, () => console.log(`⚡Running through the port: ${PORT}`));
console.log(
  `📚Documentation: ${process.env.IP_PUBLIC_SERVER}:${PORT}/documentation`
);
