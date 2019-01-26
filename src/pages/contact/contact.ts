import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {SharedServiceProvider} from "../../providers/shared-service/shared-service";
import * as data from "../../assets/inspirationalquotesjson.txt";
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  quotes: any[];
  
  constructor(public navCtrl: NavController, private sharedService: SharedServiceProvider) {
  }

  ionViewDidLoad() {
    // console.log("hi from quotes");
    this.quotes = this.sharedService.getQuotes();
  }
  
  processQuotes() {
    this.data.forEach((obj) => {
      let quoteCardObj = {'text' : obj.text, "liked": false, "bookmark":false};
      this.quotes.push(quoteCardObj);
    });
    this.sharedService.setQuoteCardObjectsArray(this.quotes);
  }
 
  toggleLike(quoteCard: any) {
    if (quoteCard['liked'] === true) {
      quoteCard['liked'] = false;
    } else {
      quoteCard['liked] = true;
      this.sharedService.setStoredFavourites(quoteCard);          
  }
    
}

                        
