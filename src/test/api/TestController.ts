import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { TestData } from "./DTO/TestData";
import { TestService } from "./TestService";

@Controller({
  path: '/test',
})
export class TestController{
  constructor(private testService: TestService) {}
@HttpCode(201)
  @Post('/register')
  async reg(
    @Query('Id') id: string,
    @Body() body : TestData
  ) {
    return this.testService.create(id, body);
  }

  @HttpCode(200)
  @Get('/:userId')
  async get(
    @Param('userId') id: string
  ){
    return this.testService.get(id);
    }
}