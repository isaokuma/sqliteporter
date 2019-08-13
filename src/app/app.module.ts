import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, NavController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ComponentsModule } from '../components/components.module';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireDatabase } from '@angular/fire/database';

//Páginas

import { CadastroPage } from '../pages/cadastro/cadastro';
import { InicialBotoesPage } from '../pages/inicial-botoes/inicial-botoes';
import { FotosPage } from '../pages/fotos/fotos';
import { OcorrenciasPage } from '../pages/ocorrencias/ocorrencias';
import { DatasPage } from '../pages/datas/datas';
import { InfoPage } from '../pages/info/info';
import { InicialPage } from '../pages/inicial/inicial';
import { CodeReaderPage } from '../pages/code-reader/code-reader';


import { SQLite } from '@ionic-native/sqlite';
import { SQLitePorter } from '@ionic-native/sqlite-porter';

//Providers
import { QrcodeProvider } from '../providers/qrcode/qrcode';
import { DatabaseProvider } from '../providers/database/database';

@NgModule({
  declarations: [
    MyApp,
    CadastroPage,
    InicialBotoesPage,
    FotosPage,
    OcorrenciasPage,
    DatasPage,
    InfoPage,
    InicialPage,
    CodeReaderPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(environment.firebase),
    ComponentsModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CadastroPage,
    InicialBotoesPage,
    FotosPage,
    OcorrenciasPage,
    DatasPage,
    InfoPage,
    InicialPage,
    CodeReaderPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    BarcodeScanner,
    QrcodeProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    QrcodeProvider,
    DatabaseProvider,
    SQLite,
    SQLitePorter
    
  ]
})
export class AppModule {}
