import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router, Routes } from '@angular/router';
import { AppService } from '../app.service';


@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  list:any

  constructor(private routes:ActivatedRoute,private router:Router,private appservice:AppService) {  }

  ngOnInit(): void {
    this.routes.params.subscribe(userData=>{
      console.log(userData);
    })

    this.appservice.getAllUsers().subscribe(data =>{
      console.log(data);
      this.list = data;  
    })
  }
  clickToNavigate(): void {
      this.router.navigate(['contactus']);
  }
}

