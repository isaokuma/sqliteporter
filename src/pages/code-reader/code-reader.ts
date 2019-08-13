import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QrcodeProvider } from '../../providers/qrcode/qrcode';
import { InicialBotoesPage } from '../inicial-botoes/inicial-botoes';

/**
 * Generated class for the CodeReaderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-code-reader',
  templateUrl: 'code-reader.html',
})
export class CodeReaderPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public scan: QrcodeProvider) {
  }

  ionViewDidLoad() {
    this.scan.scan();
    if (this.scan.executado = 1){
      this.navCtrl.push(InicialBotoesPage);

    }
  }






}
