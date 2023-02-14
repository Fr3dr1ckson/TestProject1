import { Injectable } from "@nestjs/common";
import { TestRepository } from "./TestRepository";
import { TestData } from "./DTO/TestData";
import { DoesNotExistException } from "./exceptions/DoesNotExistException";

@Injectable()
export class TestService {
  constructor(
    private testRepository: TestRepository
  ) {}

  
  async create(id: string, body: TestData) {
    let user = await this.testRepository.find(id);
    if(!user) {
      user = await this.testRepository.send(id, body);
    }
    return user;
  }

  async get(userId: string) {
   let user = await this.testRepository.find(userId)
    if(!user) {
      throw new DoesNotExistException();
    }
    return user;
  }
}