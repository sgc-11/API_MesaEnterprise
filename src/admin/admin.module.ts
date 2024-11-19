import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { forwardRef } from '@nestjs/common';
//import { AuthModule } from 'src/auth/auth.module';
import { Admin } from 'src/entities/admin.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Admin]),
    //forwardRef(() => AuthModule), // Use forwardRef here
  ],
  controllers: [AdminController],
  providers: [AdminService],
  exports: [AdminService],
})
export class AdminModule {}
