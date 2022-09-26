import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  userName = '';
  email = '';
  address = '';

  constructor(private appService: AppService) { }

  ngOnInit(): void {
  }

  // clkToSubmit() {  
  //   console.log(this.userName,this.email);
    
  //   this.appService.createUser({ 'name': this.userName, 'email': this.email, 'address': this.address })
  // }

}
