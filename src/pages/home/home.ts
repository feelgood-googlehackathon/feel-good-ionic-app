import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {SharedServiceProvider} from "../../providers/shared-service/shared-service";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public favourites: any[];

  constructor(public navCtrl: NavController, private sharedService: SharedServiceProvider) {
  }

  ionViewDidLoad() {
    console.log("hi from contact");
    this.favourites = this.sharedService.getStoredFavourites();
  }
}
