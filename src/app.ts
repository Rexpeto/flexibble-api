import "dotenv/config";
import express from "express";
import cors from "cors";

const PORT = process.env.PORT ?? 4000;
const app = express();

app.use(express.json());
app.use(
    cors({
        origin: ["*"]
    })
);

app.listen(PORT, () => console.log(`Running through the port: ${PORT} ⚡`));
