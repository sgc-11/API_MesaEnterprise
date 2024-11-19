import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
  // Validate required environment variables
  const requiredEnvVars = [
    'POSTGRES_DB',
    'POSTGRES_USER',
    'POSTGRES_PASSWORD',
    'POSTGRES_PORT',
    'POSTGRES_HOST',
    'JWT_SECRET',
    'PORT'
  ];

  for (const envVar of requiredEnvVars) {
    if (!process.env[envVar]) {
      throw new Error(`Missing required environment variable: ${envVar}`);
    }
  }

  return {
    postgres: {
      dbName: process.env.POSTGRES_DB,
      port: parseInt(process.env.POSTGRES_PORT, 10),
      password: process.env.POSTGRES_PASSWORD,
      user: process.env.POSTGRES_USER,
      host: process.env.POSTGRES_HOST,
    },
    jwt: {
      secret: process.env.JWT_SECRET,
    },
    app: {
      port: parseInt(process.env.PORT, 10),
    }
  };
});