import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
//import { ServiceService } from 'src/app/app.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  usersList:any = []

  constructor(private appService:AppService) { }

  ngOnInit(): void {
    this.appService.getAllUsers().subscribe( (response: any)=>{
      console.log(response);
       this.usersList = response.data;
       console.log('mmm',response, this.usersList);
       
    });
  }

}
