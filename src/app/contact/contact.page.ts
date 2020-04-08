import { Component, OnInit,NgModule} from '@angular/core';
import {NgForm} from '@angular/forms';
import { AlertController,NavController} from '@ionic/angular';

//import { Tab1Page } from '../tab1/tab1.page';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {
 
  name:string;
  age:number;
  nom:string;
  response:any;

  results: Observable<any>;

  pseudo:string
  //url = 'https://api.github.com/users/arthurus14';

  films: Observable<any>;

  constructor( private route: ActivatedRoute, public httpClient: HttpClient) { 

  


    this.films = this.httpClient.get('https://api.github.com/users/arthurus14');
    this.films
    .subscribe(data => {
      console.log('my data: ', data);
      console.log('pseudo: ', data['login']);
    })
  }
   
  ngOnInit() {
    this.response = this.route.params.subscribe(params => {
      this.nom = params['nom'];
      this.age = params['age']; 
      console.log("params "+this.nom+ " "+ this.age);
 });

 
   
 
  }

  detailParams(){
    console.log("tu as cliqué "+this.name);
    if(this.age > 17){
      console.log("tu es majeur, tu as "+this.age);
      
    }else{
      console.log("tu es mineur, tu as "+this.age);
    }
  }
  

  onSubmit(form: NgForm) {
    console.log(form.value);  // { first: '', last: '' }
    console.log(form.valid);  // false
  }

}
