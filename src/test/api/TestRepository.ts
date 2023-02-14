import { Injectable } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";
import { TestData } from "./DTO/TestData";

@Injectable()
export class TestRepository {
  constructor(private prisma: PrismaClient) {}

  async send(Id: string, body: TestData) {
    return this.prisma.user.create({
      data: {
        Id,
        ...body
      },
    });
  }
  async find(Id: string){
    return this.prisma.user.findUnique({
      where: {Id},
      select: {FirstName: true}
    });
  }
}