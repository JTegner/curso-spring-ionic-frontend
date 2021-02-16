import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { SorteiosService } from 'src/app/services/sorteios.service';

@Component({
  selector: 'app-sorteios',
  templateUrl: './sorteios.page.html',
  styleUrls: ['./sorteios.page.scss'],
})
export class SorteiosPage implements OnInit {

  constructor(
    public navCtrl: NavController,
    public sorteiosService: SorteiosService) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.sorteiosService.findAll()
      .subscribe(response => {
        console.log(response);
      },
      error => {
        console.log(error);
      });
  }

}
