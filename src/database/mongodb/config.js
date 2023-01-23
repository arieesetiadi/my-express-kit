import dotenv from 'dotenv';

// Config .env
dotenv.config();

// Set mongodb configuration
const config = {
    username: process.env.MONGODB_USERNAME,
    password: process.env.MONGODB_PASSWORD,
    name: process.env.MONGODB_NAME,
}

// Export mongodb configuration
export default config;
