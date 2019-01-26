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

  memeCardArray: any = [];

  memeArray: any = [
    {'embedUrl':"../../assets/imgs/feel-good-black.png"},
    {'embedUrl':"../../assets/imgs/feel-good-black.png"},
    {'embedUrl':"../../assets/imgs/feel-good-black.png"}
  ];

  ionViewDidLoad() {
    this.getMemes();
  }

  getMemes() {
    this.sharedService.getMemes().subscribe(response => {
      // this.memeArray = response;
      console.log(response);
    });
    this.processMemes();
  }

  //create new memeCardObject
  processMemes () {
    console.log("iuuigi");
   this.memeArray.forEach((obj) => {
     console.log(obj);
     let memeCardObj = {'embedUrl': obj.embedUrl, "liked": false, "bookmark": false};
     this.memeCardArray.push(memeCardObj);
   });

   this.sharedService.setMemeCardObjectsArray(this.memeCardArray);
  }

  toggleLike (memeCardObj: any){
    // console.log(memeCardObj);
    if (memeCardObj['liked'] === true) {
      memeCardObj['liked'] = false;
      //remove from faves

    }else {
      memeCardObj['liked'] = true;
      this.sharedService.setStoredFavourites(memeCardObj);
      //add to faves
    }
    console.log(memeCardObj);

  }

  toggleBookmark (memeCardObj: any){
    // if (memeCardObj['bookmarked'] === true) {
    //   memeCardObj['bookmarked'] = false;
    //   //remove from bookmarks
    //
    // }else {
    //   memeCardObj['bookmarked'] = true;
    //   //add to bookmarks
    // }
    // console.log(memeCardObj);
  }
}
