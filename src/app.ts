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

app.listen(PORT, () => console.log(`⚡Running through the port: ${PORT}`));
