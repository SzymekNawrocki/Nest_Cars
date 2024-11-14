import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

export const pgConfig: PostgresConnectionOptions = {
  // should be in env
  url: 'postgresql://CarDB_owner:DukxCs7gj8SR@ep-holy-haze-a2lqyojp.eu-central-1.aws.neon.tech/CarDB?sslmode=require',
  type: 'postgres',
  port: 3306,
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: true,
};
