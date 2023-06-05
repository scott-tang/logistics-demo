import { Logger } from '@nestjs/common';
import * as dotenv from 'dotenv';
import { AppModule } from './app/app.module';

dotenv.config();

async function bootstrap() {
  const port = getPortForApi('USER_').toString();
  const app = await setupNestJSApp(AppModule, {
    envConfig: {
      environment: process.env.USER_ENVIRONMENT,
    },
    port,
    swaggerConfig: {
      prefix: 'users',
      tag: 'User Service APIs',
      title: 'User Service API',
    },
  });

  await app.listen(port);

  Logger.log(`User Service API is running on port ${port}`);
}

export const getPortForApi = (prefix: string): number => {
  return (process.env[`${prefix}PORT`] || process.env.PORT || 3000) as number;
};

