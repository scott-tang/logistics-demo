/**
 * Nest JS Configurations Type for the App, Environment, and Swagger
 */
export type NestJSAppConfig = {
    envConfig?: Partial<{
      allowedHeaders: string;
      allowedMethods: string;
      allowedOrigins: string;
      environment: string;
      globalPrefix: string;
    }>;
    port: string;
  };
  