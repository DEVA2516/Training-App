import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  constructor(private router:Router,private routes:ActivatedRoute) { }

  ngOnInit(): void {
    setTimeout(() => {
     // this.router.navigate(['user'],{relativeTo:this.routes});
    }, 2000);
  }

}
