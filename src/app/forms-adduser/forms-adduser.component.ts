import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-forms-adduser',
  templateUrl: './forms-adduser.component.html',
  styleUrls: ['./forms-adduser.component.scss']
})
export class FormsAdduserComponent implements OnInit {

  userName:string='';
  email:string='';
  address:string='';
  id:number = 5;
  data:any;

  constructor(private appService:AppService,private routes:Router,private router:ActivatedRoute) { }

  ngOnInit(): void {
    // this.router.params.subscribe(data =>{
    //   console.log(data['id'])
    //   if(data['id'])
    // })
  }

  clkToSubmit(){
   
    console.log(this.userName,this.email);

    this.data = {
     // 'id':this.id++,
      'name':this.userName,
      'email':this.email,
      'message':this.address
    }
    
    this.appService.createUser(this.data).subscribe(data=>{
      console.log(data);
      this.routes.navigate(['forms-list']);
    });
  }
}
