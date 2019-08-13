import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { CadastroPage } from '../pages/cadastro/cadastro';
import { InicialBotoesPage } from '../pages/inicial-botoes/inicial-botoes';
import { InicialPage } from '../pages/inicial/inicial';
import { QrcodeProvider } from '../providers/qrcode/qrcode';
import { FotosPage } from '../pages/fotos/fotos';
import { CodeReaderPage } from '../pages/code-reader/code-reader';


@Component({
  templateUrl: 'app.html',
  // template: '<ion-nav #myNav [root]="rootPage"></ion-nav>'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  //rootPage: any = HomePage;
  rootPage: any = InicialPage;


  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      // { title: 'Home', component: HomePage },
      { title: 'Cadastro', component: CadastroPage },
      { title: 'Fotos', component: FotosPage} ,
      { title: 'Ler novo QR Code', component: CodeReaderPage} 
      // { title: 'Inicio', component: InicialBotoesPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.push(page.component);
  }

  
}
