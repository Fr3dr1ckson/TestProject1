import { HttpException, HttpStatus } from "@nestjs/common";

export class DoesNotExistException extends HttpException {
  constructor() {
    super(`User with this ID doesn't exist`, HttpStatus.BAD_REQUEST);
  }
}