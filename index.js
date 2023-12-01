import express from 'express';
import bodyParser from 'body-parser';
import router from './routes/users.js';
import { errorHandler } from "./middlewares/errorHandler.js";
import config from './config/index.js';

const app = express();

app.use(bodyParser.json());

app.use(express.static("public"));

app.use('/', router);

app.use(errorHandler);

app.listen(config.port || 5600, () => {
    console.log(`Server running on port ${config.port}...`)
});
