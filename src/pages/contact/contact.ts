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

  // ngOnit() {
  //   this.sharedService.getStoredFavourites().subscribe(
  //      data => this.favourites);
  // }

}
