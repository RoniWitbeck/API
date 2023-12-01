import dotenv from "dotenv";

const env = dotenv.config();

if (!env) {
    throw new Error("Unable to find env.");
}

export default {
    mysql: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_SCHEMA
    },

    port: parseInt(process.env.PORT),
};