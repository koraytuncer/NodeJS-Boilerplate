import express from "express";
import helmet from "helmet";
import cors from "cors";
import path from "path";
import {fileURLToPath} from "url";
import fileupload from "express-fileupload";
import * as config from "./configs/index.js";
import * as db from "./loaders/index.js";
import setupEventListener from "./events/index.js";
import "./scripts/CronJob.js";
import routeManager from "./routes/index.js";

// Server config
config.serverConfig();

const app = express();

// Database connection
db.connectDb();

setupEventListener();

//Url Çevirme
const currentFilePath = fileURLToPath(import.meta.url);
const currentDirectory = path.dirname(currentFilePath);

//Middleware
app.use("/uploads", express.static(path.join(currentDirectory, "./", "uploads")));
app.use(express.json({limit: "50mb"}));
app.use(express.urlencoded({extended: false, limit: "50mb"}));
app.use(helmet());
app.use(cors());
app.use(fileupload());

// Routes
app.use("/", routeManager);

//Server Start
app.listen(process.env.APP_PORT, () => {
   console.log(`Server running on port ${process.env.APP_PORT}`);
});
