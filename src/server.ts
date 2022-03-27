import dotenv from "dotenv";
import express from "express";
import { router } from "./router";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "../swagger.json";

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use("/api/v1", router);
app.use("/api-docs", swaggerUi.serve);
app.get("/api-docs", swaggerUi.setup(swaggerDocument));

app.listen(PORT, () => console.log(`Server running at ${PORT}`));
