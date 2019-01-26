import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {SharedServiceProvider} from "../../providers/shared-service/shared-service";

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  public favourites: any[];

  constructor(public navCtrl: NavController, private sharedService: SharedServiceProvider) {
  }

  ionViewDidLoad() {
    // console.log("hi from quotes");
    // this.favourites = this.sharedService.getQuotes();
  }

}
