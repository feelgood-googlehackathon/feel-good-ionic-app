import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { AboutPage} from "../about/about";

@Component({
  selector: 'login-page',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController) {

  }

  loaderIsShown: boolean = false;


  showLoader () {
    setTimeout(() => {
      this.loaderIsShown = false;//<<<---    using ()=> syntax
      this.navCtrl.push(AboutPage);
      console.log("hi")
    }, 9000);

  }
  goToFeed () {
    this.loaderIsShown = true;
    this.showLoader();
  }

}
