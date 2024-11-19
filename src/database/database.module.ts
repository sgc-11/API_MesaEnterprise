/*
import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Client } from 'pg';
import config from '../config';
import { ConfigType, ConfigModule } from '@nestjs/config';

const retryAttempts = 5;
const retryDelay = 3000; // 3 seconds

@Global()
@Module({
  imports: [
    ConfigModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [config.KEY],
      useFactory: async (configService: ConfigType<typeof config>) => {
        const { user, host, dbName, password, port } = configService.postgres;
        return {
          type: 'postgres',
          host,
          port,
          username: user,
          password,
          database: dbName,
          synchronize: true, // Be careful with this in production
          autoLoadEntities: true,
          retryAttempts,
          retryDelay,
          logging: true, // Helpful for debugging
        };
      },
    }),
  ],
  providers: [
    {
      provide: 'PG',
      useFactory: async (configService: ConfigType<typeof config>) => {
        const { user, host, dbName, password, port } = configService.postgres;
        const client = new Client({
          user,
          host,
          database: dbName,
          password,
          port,
        });
        
        let retries = retryAttempts;
        while (retries > 0) {
          try {
            await client.connect();
            return client;
          } catch (error) {
            retries--;
            if (retries === 0) throw error;
            await new Promise(resolve => setTimeout(resolve, retryDelay));
          }
        }
      },
      inject: [config.KEY],
    },
  ],
  exports: ['PG', TypeOrmModule],
})
export class DatabaseModule {}
*/