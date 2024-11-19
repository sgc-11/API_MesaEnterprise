import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { ModelsModule } from './Mmodels/models.module';
import { MediaModule } from './media/media.module';
import { EventModule } from './MesaEvents/event.module';
import { MembershipModule } from './membership/membership.module';
import { AdminModule } from './admin/admin.module';
import { TypeOrmModule } from '@nestjs/typeorm';

require('dotenv').config()

const db_options = {
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.DATABASE_PORT || '5432'),
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
}
console.log(db_options);

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      ...db_options,
      autoLoadEntities: true,
      synchronize: true,
    }),
    AdminModule,
    ProductsModule,
    ModelsModule,
    MediaModule,
    EventModule,
    MembershipModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
