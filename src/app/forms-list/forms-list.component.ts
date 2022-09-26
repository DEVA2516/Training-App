import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-forms-list',
  templateUrl: './forms-list.component.html',
  styleUrls: ['./forms-list.component.scss']
})
export class FormsListComponent implements OnInit {

  list:any

  constructor(private appservice:AppService) {  }

  ngOnInit(): void {
    this.appservice.getAllUsers().subscribe(data =>{
      console.log(data);
      this.list = data;  
    })
  }
}
