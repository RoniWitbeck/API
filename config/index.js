import dotenv from "dotenv";

const env = dotenv.config();

if (!env) {
    throw new Error("Unable to find env.");
}

export default {
    mysql: {
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DB
    },

    port: parseInt(process.env.PORT),
};