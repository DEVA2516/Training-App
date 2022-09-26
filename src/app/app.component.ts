import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Training-App';

  constructor(private routes:Router){
  }
  addUser(){
    this.routes.navigate(['forms-adduser']);
  }
}
