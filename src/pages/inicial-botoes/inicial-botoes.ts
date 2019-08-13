import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FotosPage } from '../fotos/fotos';
import { DatasPage } from '../datas/datas';
import { OcorrenciasPage } from '../ocorrencias/ocorrencias';
import { InfoPage } from '../info/info';
import { Http } from '@angular/http';
import { QrcodeProvider } from '../../providers/qrcode/qrcode';

/**
 * Generated class for the InicialBotoesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inicial-botoes',
  templateUrl: 'inicial-botoes.html',
})
export class InicialBotoesPage {

  contatosDb2;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public http: Http,
              public scan: QrcodeProvider) {
  }


  
  ionViewDidLoad() {
    console.log('ionViewDidLoad InicialBotoesPage');
  }

  goToFotos(){
    this.navCtrl.push(FotosPage);

  }

  goToDatas(){
    this.navCtrl.push(DatasPage);
  }


  goToOcorrencias(){
    this.navCtrl.push(OcorrenciasPage);
  }

  goToInfo(){
    this.navCtrl.push(InfoPage);
  }

  public scanCode() {
    this.scan.scan();
    if (this.scan.executado = 1){
      this.navCtrl.push(InicialBotoesPage);

    }
  }

  

}
