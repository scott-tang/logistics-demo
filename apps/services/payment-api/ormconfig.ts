import { DataSource } from 'typeorm';
import { environment } from './src/environments/environment';
import { join } from 'path';

const { host, port, username, password, database } = environment.databaseConfig;

export const defaultOptions = {
  database,
  host,
  migrations: [join(__dirname, '/typeorm-res/migrations/*.js')],
  migrationsRun: true,
  password,
  port: Number.parseInt(port),
  username,
};

export default new DataSource({
  database: defaultOptions.database,
  entities: [join(__dirname, '**', '*.entity.{ts,js}')],
  host: defaultOptions.host,
  migrations: [__dirname, 'src/migrations/*.{ts,js}'],
  migrationsRun: defaultOptions.migrationsRun,
  password: defaultOptions.password,
  port: defaultOptions.port,
  type: 'postgres',
  username: defaultOptions.username,
});
