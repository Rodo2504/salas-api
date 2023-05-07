// settings
const settings = {
    PORT: process.env.PORT || 3000,
    DB_HOST: process.env.DB_HOST || 'localhost',
    DB_USER: process.env.DB_USER || 'root',
    DB_PASSWORD: process.env.DB_PASSWORD || 'passsword',
    DB_NAME: process.env.DB_NAME || 'salasdb',
    DB_PORT: process.env.DB_PORT || 3306
}

module.exports = settings;
//export const PORT = process.env.PORT || 3000;
