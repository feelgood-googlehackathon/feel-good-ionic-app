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

  public storedFavourites: any[] = [];

  constructor(private http: HttpClient) {
  }

  memeCardObjectsArray: any [];
  quoteCardObjectsArray: any [];

  loggedIn: boolean = false;

  //todo: put url in this for memes
  public getMemes(): Observable<any> {
    return this.http.get<any>('');
  }

  setMemeCardObjectsArray (array : any) {
    console.log("setting", "memeCardObjectsArray");
    this.memeCardObjectsArray = array;
  }

  getMemeCardObjectsArray () : any[] {
    console.log("getting", "memeCardObjectsArray");
    return this.memeCardObjectsArray;
  }


  public setStoredFavourites(card: any): void {
    this.storedFavourites.push(card);
  };

  public getStoredFavourites(): any[] {
    return this.storedFavourites;
  }

  setQuoteCardObjectsArray (array : any) {
    console.log("getting", "quoteCardObjectsArray");
    this.quoteCardObjectsArray = array;
  }

  getQuoteCardObjectsArray () : any[] {
    console.log("getting", "quoteCardObjectsArray");
    return this.quoteCardObjectsArray;
  }
}
