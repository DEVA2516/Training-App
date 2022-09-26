import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-forms-adduser',
  templateUrl: './forms-adduser.component.html',
  styleUrls: ['./forms-adduser.component.scss']
})
export class FormsAdduserComponent implements OnInit {

  userName: string = '';
  email: any = '';
  address: string = '';
  data: any;
  isUpdated: boolean = false;
  userId = 0;

  constructor(private appService: AppService, private routes: Router, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.params.subscribe(data => {
      console.log(data['id'])
      this.userId = data['id'];
      this.isUpdated = data.hasOwnProperty("id") ? true : false;

      if (this.isUpdated) {
        this.getById()
      }

    })
  }

  getById() {
    this.appService.getUserById(this.userId).subscribe(data => {
      this.data = data
      this.userName = this.data[0]['name'];
      this.email = this.data[0]['email'];
      this.address = this.data[0]['message'];
    })
  }



  createUser() {

    this.appService.createUser(
      {
        name: this.userName,
        email: this.email,
        message: this.address
      })
      .subscribe(data => {
        console.log(data);

        this.routes.navigate(['forms-list']);
      });
  }

  updateUser() {
    this.appService.updateUser(
      {
        name: this.userName,
        email: this.email,
        message: this.address,
        id: this.userId
      }).subscribe(data => { 
        console.log(data);
        this.routes.navigate(['forms-list']);
       })
  }
}
