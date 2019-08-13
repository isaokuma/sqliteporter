import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { DatabaseProvider } from './../../providers/database/database';
import { QrcodeProvider } from '../../providers/qrcode/qrcode';
import { Subscription } from 'rxjs/Subscription';



@Component({
  selector: 'page-info',
  templateUrl: 'info.html'
})
export class InfoPage {

  data: any = [];


  constructor(public navCtrl: NavController,
              private db: DatabaseProvider,
              public scan: QrcodeProvider) {
    let readySubscribe = this.db.getDatabaseState()
      .subscribe(readyDB => {
        console.log("passei aqui 3");

        if (readyDB) {
          console.log("passei aqui 4");
          this.data = db.data;
          console.log("passei aqui 5");
          readySubscribe.unsubscribe();
           console.log("passei aqui 6");

        }
      });


  }

}