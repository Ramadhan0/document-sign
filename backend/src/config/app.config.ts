import { config } from 'dotenv';

config();

export const {
    NODE_ENV,
    PORT,
    DB_HOST,
    DB_USER,
    DB_NAME,
    DB_DIALECT,
    DB_PASSWORD,
} = process.env;
