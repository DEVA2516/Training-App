import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-component-two',
  templateUrl: './component-two.component.html',
  styleUrls: ['./component-two.component.scss']
})
export class ComponentTwoComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(paramsData => {
      console.log(paramsData);
    })
  }

}
