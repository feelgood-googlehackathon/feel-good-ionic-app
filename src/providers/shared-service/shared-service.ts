import { Injectable } from '@angular/core';
/*
  Generated class for the SharedServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SharedServiceProvider {

  constructor() {
    console.log('Hello SharedServiceProvider Provider');
  }

  loggedIn: boolean = false;

  currentUserData: any = {carerID: '1'};

}
