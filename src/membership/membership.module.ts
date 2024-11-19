import { Module } from '@nestjs/common';
import { MembershipService } from './membership.service';
import { MembershipController } from './membership.controller';
import { Membership } from 'src/entities/memberships.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([Membership])
  ],
  controllers: [MembershipController],
  providers: [MembershipService],
})
export class MembershipModule {}
