import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Routes } from '@angular/router';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  constructor(private routes:ActivatedRoute) {  }

  ngOnInit(): void {
    this.routes.params.subscribe(userData=>{
      console.log(userData);
      
    })
  }

}
