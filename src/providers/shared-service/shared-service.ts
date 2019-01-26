import { Injectable } from '@angular/core';
/*
  Generated class for the SharedServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SharedServiceProvider {

  constructor(private http: HttpClient) {
  }

  loggedIn: boolean = false;

  //todo: put url in this for memes
  public getMemes(): Observable<Any>{
    return this.http.get<Any>('');
  }
  
   //todo: put url in this for memes
  public getQuotes(): Observable<Any>{
    return this.http.get<Any>('');
  }
