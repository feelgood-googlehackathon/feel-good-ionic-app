import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
/*
  Generated class for the SharedServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SharedServiceProvider {
  
  public storedFavourites: any[];

  constructor(private http: HttpClient) {
  }

  loggedIn: boolean = false;

  //todo: put url in this for memes
  public getMemes(): Observable<any> {
    return this.http.get<any>('');
  }
  
  public setStoredFavourites(card: any): void {
    this.storedFavourites.push(card);
  };
  
  public getStoredFavourites(): any[] {
    return this.storedFavourites;
  }
}
