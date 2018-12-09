import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Storage} from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

     city: string;
     state:string;
  constructor(private storage: Storage, public navCtrl: NavController, public navParams: NavParams) {
     this.city = 'Miami';
     this.state = 'FL';

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

}
