import { Injectable } from '@angular/core';

@Injectable()
export class Config {
  public mailgunAPI:string = 'api:key-3d45a6afc1f4cff0c3510755aa25f457';
  public mailgunURL:string = 'sandbox5382cd03b7b7464885dcb3c7e2a911e0.mailgun.org';

  constructor() {}
}