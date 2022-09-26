import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-forms-adduser',
  templateUrl: './forms-adduser.component.html',
  styleUrls: ['./forms-adduser.component.scss']
})
export class FormsAdduserComponent implements OnInit {

  userName:any='';
  email:string='';
  address:string='';

  constructor(private appService:AppService) { }

  ngOnInit(): void {
  }

  clkToSubmit(){
    console.log(this.userName,this.email);
    
    this.appService.createUser({ 'name': this.userName, 'email': this.email, 'address': this.address })
  }
}
