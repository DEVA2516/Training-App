import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-forms-adduser',
  templateUrl: './forms-adduser.component.html',
  styleUrls: ['./forms-adduser.component.scss']
})
export class FormsAdduserComponent implements OnInit {

  data: any;
  isUpdated: boolean = false;
  userId = 0;
  user: any;

  constructor(private appService: AppService, private routes: Router, private router: ActivatedRoute) { }

  ngOnInit(): void {

    if (!localStorage.getItem('token')) {
      this.routes.navigate(['aboutus']);
    }

    this.user = new FormGroup({
      name: new FormControl(null, [Validators.minLength(4)]),
      email: new FormControl(null, [Validators.required, Validators.minLength(6)]),
      message: new FormControl(null, null)
    })

    console.log(this.user);

    this.router.params.subscribe(data => {
      console.log(data['id'])
      this.userId = data['id'];
      this.isUpdated = data.hasOwnProperty("id") ? true : false;

      if (this.isUpdated) {
        this.getById()
      }
    })
  }

  get form() {
    return this.user.controls
  }

  get name() {
    return this.user.controls.name
  }

  getById() {
    this.appService.getUserById(this.userId).subscribe(data => {
      console.log(data);
      this.data = data;

      this.user.patchValue(this.data[0]);
    })
  }

  createUser() {
    console.log(this.user.value);
    if (this.user.invalid)
      return this.user.markAllAsTouched()

      this.appService.createUser(this.user.value)
        .subscribe(data => {
          this.routes.navigate(['forms-list']);
        });
    }


  updateUser() {
    this.user.value['id'] = this.userId;
    console.log(this.user.value)

    this.appService.updateUser(this.user.value).subscribe(data => {
      this.routes.navigate(['forms-list']);
    })
  }
}
