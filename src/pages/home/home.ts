import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  CommandNoImageClass(n) {
    var element = document.getElementById("image" + n);
    if(element.className.indexOf("noImage") > -1) {
      element.className = element.className.replace(/\bnoImage\b/g, "");
    } else {
      element.className += element.className ? ' noImage' : 'noImage';
    }
  }
}
