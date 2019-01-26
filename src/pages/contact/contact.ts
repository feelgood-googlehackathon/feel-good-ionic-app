import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  public favourites: any[];
    
  constructor(public navCtrl: NavController, private sharedService: SharedServiceProvider) {
  }

  NgOnit() {
    this.sharedService.getFavorites.subscribe(
      data => this.favourites);
  }
 
}
