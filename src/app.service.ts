import { Injectable } from '@nestjs/common';

@Injectable() //Provider 
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
