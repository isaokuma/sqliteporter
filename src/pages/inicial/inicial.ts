import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { QrcodeProvider } from '../../providers/qrcode/qrcode';
import { StatusBar } from '@ionic-native/status-bar';
import { InicialBotoesPage } from '../inicial-botoes/inicial-botoes';

/**
 * Generated class for the InicialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inicial',
  templateUrl: 'inicial.html'
})


export class InicialPage {


  public barcodeData;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public scan: QrcodeProvider,
    public statusBar: StatusBar
  ) {

    this.statusBar.overlaysWebView(false);
    this.statusBar.backgroundColorByHexString('#ffffff');
  }

  ionViewDidLoad() {
    console.log(this.scan.barcodeData);

  }

  public scanCode() {
    this.scan.scan();
    if (this.scan.executado = 1){
      this.navCtrl.push(InicialBotoesPage);

    }
  }



}
