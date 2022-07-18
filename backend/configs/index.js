const dotenv = require('dotenv');

dotenv.config({path: '.env'});

module.exports = {
  port: process.env.PORT || 3000,
  host: process.env.HOST || 'localhost',
  env: process.env.NODE_ENV || 'development',
  secretKey: process.env.SECRET_KEY || 'MY_SECRET_KEY',
  mongoURL: process.env.DATABASE_URI || 'mongodb://localhost:27017/test',
};
