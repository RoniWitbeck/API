import express from 'express';
import bodyParser from 'body-parser';
import router from './routes/users.js';
import { errorHandler } from "./middlewares/errorHandler.js";

const app = express();
const PORT = 5600;

app.use(bodyParser.json());

app.use(express.static("public"));

app.use('/users', router);

app.use(errorHandler);

app.listen(PORT || 5600, () => {
    console.log(`Server running on port ${PORT}...`)
});
