import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {SharedServiceProvider} from "../../providers/shared-service/shared-service";

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController, private sharedService: SharedServiceProvider) {
  }

  feeling: string = "sad";

  searchTerm:string = "";


  memeArray: any = [
    {'embedUrl':"../../assets/imgs/feel-good-black.png"},
    {'embedUrl':"../../assets/imgs/feel-good-black.png"},
    {'embedUrl':"../../assets/imgs/feel-good-black.png"}
  ];

  getMemes() {
    this.sharedService.getMemes().subscribe(response => {
      // this.memeArray = response;
      console.log(response);
    });
  }

}
