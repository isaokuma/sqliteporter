import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QrcodeProvider } from '../../providers/qrcode/qrcode';
import { Injectable } from '@angular/core';

/**
 * Generated class for the FotosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fotos',
  templateUrl: 'fotos.html',
})
export class FotosPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public scan:QrcodeProvider
              ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FotosPage');

    
  }

}
