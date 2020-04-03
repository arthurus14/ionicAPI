import { Component, OnInit } from '@angular/core';
import { AlertController,NavController} from '@ionic/angular';
import { ContactPage } from '../contact/contact.page';
import { stringify } from 'querystring';

import { Push, PushObject, PushOptions } from '@ionic-native/push/ngx';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  nom:string;
  age:number;
  constructor(private navCtrl : NavController, private router: Router){

  }

  ngOnInit(){
    
  }

  onSubmit(form: NgForm){
    
   // console.log("envoi " +form.value.nom);
    this.router.navigate(['contact',{nom: form.value.nom, age:form.value.age}]);

    //this.router.navigateByUrl('/contact');
  }

}
