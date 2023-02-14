import { Module } from "@nestjs/common";
import { TestController } from "./TestController";
import { TestService } from "./TestService";
import { PrismaClient } from "@prisma/client";
import { TestRepository } from "./TestRepository";
import { ConfigModule, ConfigService } from "@nestjs/config";
import Configuration from "../Configuration";


@Module({
  controllers: [TestController],
  providers: [TestService, TestRepository, PrismaClient, ConfigService],
  exports: [TestService, TestRepository, PrismaClient],
  imports:[PrismaClient, ConfigModule.forRoot({
    isGlobal: true,
    load: [Configuration],
  })],
})
export class TestModule {}