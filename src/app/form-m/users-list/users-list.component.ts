import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
//import { ServiceService } from 'src/app/app.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  usersList:any = [{'id':1,'name':'hello'},{'id':2,'name':"hi"}]

  constructor(private appService:AppService) { }

  ngOnInit(): void {
    this.appService.getAllUsers().subscribe( (data)=>{
      console.log(data);
       this.usersList = data;
       console.log(this.usersList);
       
    });
  }

}
