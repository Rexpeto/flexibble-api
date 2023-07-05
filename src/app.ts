import "dotenv/config";
import express from "express";
import cors from "cors";
import { router } from "./routes";
import dbConnect from "./config/mongodb";

const PORT = process.env.PORT ?? 4000;
const app = express();

app.use(express.json());
app.use(
    cors({
        origin: ["*"]
    })
);
app.use(router);
dbConnect()
    .then(() => console.log(`🔌Connect to mongo`))
    .catch(() => console.log(`❌Problem to connect mongoDB`));

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
