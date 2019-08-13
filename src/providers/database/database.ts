import { Injectable } from '@angular/core';

import { Platform, AlertController } from 'ionic-angular';

import 'rxjs/add/operator/map';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { SQLitePorter } from '@ionic-native/sqlite-porter';
import { Http } from '@angular/http';
import { BehaviorSubject } from 'rxjs/Rx';
import { QrcodeProvider } from '../qrcode/qrcode';


@Injectable()
export class DatabaseProvider {

  data: any = []; 
  // Variável utilizada para verificar se o BD está pronto
  private databaseReady: BehaviorSubject<boolean>;

  constructor( public http: Http,
               private platform: Platform, 
               private sqlite: SQLite,
               private sqliteporter: SQLitePorter, 
               private alertCtrl: AlertController,
               public scan: QrcodeProvider) {
    //Indica que o banco está preparado
    this.databaseReady = new BehaviorSubject(false);
    this.openDB();
    
  }

  openDB() {
    // Make ready to platform
    this.platform.ready()
      .then(() => {
        // Criar ou abrir bd
        this.sqlite.create({
          name: 'b.db',
          location: 'default'
        })
          .then((db: SQLiteObject) => {
            // Consulta para verificar se existem dados no bd
            db.executeSql('SELECT * FROM plantas', [])
              .then(res => {
                console.log(db);
                
                console.log("Select funcionando");
                this.data = this.getData(db);
                // Informa que o bd está pronto
                this.databaseReady.next(true);
              }) 
              .catch(res => {
                console.log("Catch");
                
                // Obtém o arquivo que contém as tabelas do bd
                this.http.get('assets/db.sql')
                  .map(res => res.text())
                  .subscribe(sql => {
                    console.log("teste");
                    
                    // Executa os comandos SQL do arquivo 
                    this.sqliteporter.importSqlToDb(db, sql)
                      .then(() => {
                        // Obtém os dados 
                        this.data = this.getData(db);
                        console.log("teste1");
                        
                        // Informa que o bd está pronto
                        this.databaseReady.next(true);
                        console.log("teste2");
                        
                      }).catch(e => {
                        // alert("Erro na importação dos dados");
                        console.error("Erro na importação dos dados", e.message);
                      });
                  })
              });
          });
      }).catch(e => alert('Platform is not ready.'));    
  }

  getData(db) {
    let resultado = [];
    // Realiza a consulta no banco de dados para extrair os dados
    db.executeSql('SELECT * FROM plantas where qrcode = ?', [this.scan.barcodeData])
      .then(resSelect => {
        for (var i = 0; i < resSelect.rows.length; i++) { 
          // Salva as informações lidas nas "variáveis"
          resultado.push({ 
            familia: resSelect.rows.item(i).familia, 
            // grupo: resSelect.rows.item(i).grupo,
            qrcode : resSelect.rows.item(i).qrcode
          });
      } 
      console.log("passou aqui");
      
      }).catch(e => {
        alert("Não existe nenhuma informação cadastrada para esse QR Code.",);
        console.error("Erro na consulta de dados!", e.message);
      });
    return resultado;
  }

  
 // Método para obter o Observable que será utilizado com o susbcribe para detectar quando o banco de dados está pronto
  getDatabaseState() {
    console.log("passou aqui 2");
    
    return this.databaseReady.asObservable();
    
  }

}
