import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage { 
  constructor(private httpClient:HttpClient) {    
  }
   getProfileOn(){
     this.httpClient.get('http://192.168.4.1:80/H').subscribe(data=>{console.log(data)});//process the json data   
   }
   getProfileOff(){
     this.httpClient.get('http://192.168.4.1:80/L').subscribe(data=>{console.log(data)});
   }
}
