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

  feeling: string = "ok";

  searchTerm:string = "";

  memeCardArray: any = [];

  memeArray: any = [{'embedUrl':'https://media0.giphy.com/media/l2XbJoq24l4NW/giphy.gif'},
    {'embedUrl':'https://media1.giphy.com/media/3oD3YkwvI51bftIJqM/giphy.gif'},
    {'embedUrl':'https://media3.giphy.com/media/110gOs75GuUWyY/giphy.gif]'},
    {'embedUrl':'https://media0.giphy.com/media/qVXWm4kb6rRgA/giphy.gif'},
    {'embedUrl':'https://media2.giphy.com/media/F1jPC5d5uEpMY/giphy.gif'},
    {'embedUrl':'https://media1.giphy.com/media/po6VltkCaNCY8/giphy.gif'},
    {'embedUrl':'https://media0.giphy.com/media/NsEQomAun60km5QYU2/giphy.gif'},
    {'embedUrl':'https://media2.giphy.com/media/xUA7bgFa2U55vmQzfO/giphy.gif'},
    {'embedUrl':'https://media0.giphy.com/media/BwTRXeu6bl9Bu/giphy.gif'},
    {'embedUrl':'https://media0.giphy.com/media/DJ4BBsZNHy6Oc/giphy.gif'},
    {'embedUrl':'https://media1.giphy.com/media/vYWjvVl7E1YA0/giphy.gif'},
    {'embedUrl':'https://media3.giphy.com/media/najmtazy4OiiI/giphy.gif'},
    {'embedUrl':'https://media3.giphy.com/media/xsFjLwT7NPfH2/giphy.gif'},
    {'embedUrl':'https://media0.giphy.com/media/gecNxHaA7NbCU/giphy.gif'},
    {'embedUrl':'https://media3.giphy.com/media/6lPxj77sCcdJC/giphy.gif'},
    {'embedUrl':'https://media3.giphy.com/media/3oAt29sGSwFa016fbW/giphy.gif'},
    {'embedUrl':'https://media3.giphy.com/media/gdhK6yHuWY1dm/giphy.gif'},
    {'embedUrl':'https://media0.giphy.com/media/eenSnwDJOkhPjcOBL3/giphy.gif'},
    {'embedUrl':'https://media2.giphy.com/media/g6Xmo9j6U0IhO/giphy.gif'},
    {'embedUrl':'https://media0.giphy.com/media/3ohs862MINZz49hhcc/giphy.gif'},
    {'embedUrl':'https://media3.giphy.com/media/l41YxrkaxDLUQGoCY/giphy.gif'},
    {'embedUrl':'https://media2.giphy.com/media/3o6ZtrBoYokPJ7Mp2g/giphy.gif'},
    {'embedUrl':'https://media2.giphy.com/media/aAXXSKOxmmhzO/giphy.gif'},
    {'embedUrl':'https://media2.giphy.com/media/3o6gEeg80PqeJBtsdy/giphy.gif'},
    {'embedUrl':'https://media1.giphy.com/media/l0DAGmGPFaoEdeePe/giphy.gif'}];

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
      this.sharedService.setStoredFavouritesMeme(memeCardObj);
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
