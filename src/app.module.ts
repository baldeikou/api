import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './module/users/users.module';
import { DeviceModule } from './module/device/device.module';
import { CarteModule } from './module/carte/carte.module';
import { entyties } from './typeorm';
import { CompteModule } from './module/compte/compte.module';
import { TransactionModule } from './module/transaction/transaction.module';
import { ConfigModule } from '@nestjs/config';
import { TicketModule } from './module/ticket/module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3307,
      username: 'root',
      password: 'root',
      dateStrings: true,
      entities: entyties,
      database: 'bezagor',
      synchronize: false,
    }),
    UsersModule,
    DeviceModule,
    CarteModule,
    CompteModule,
    TicketModule,
    TransactionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
