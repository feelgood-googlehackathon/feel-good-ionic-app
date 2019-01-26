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

  public storedFavouritesMeme: any[] = [];
  public storedFavouritesQuote: any[] = [];


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


  public setStoredFavouritesMeme(card: any): void {
    this.storedFavouritesMeme.push(card);
  };

  public getStoredFavouritesMeme(): any[] {
    return this.storedFavouritesMeme;
  };

  public setStoredFavouritesQuote(card: any): void {
    this.storedFavouritesQuote.push(card);
  }
  public getStoredFavouriteQuote(): any[] {
    return this.storedFavouritesQuote;
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
