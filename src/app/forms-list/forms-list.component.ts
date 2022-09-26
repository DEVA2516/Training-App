import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-forms-list',
  templateUrl: './forms-list.component.html',
  styleUrls: ['./forms-list.component.scss']
})
export class FormsListComponent implements OnInit {

  list: any

  constructor(private appservice: AppService, private rotues: Router, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.appservice.getAllUsers().subscribe(data => {
      console.log(data);
      this.list = data;
    })
  }

  clkToEdit(id: number) {
    this.rotues.navigate(['/forms-edit', id]);
  }

  clkToDelete(id: number) {
    this.appservice.deleteUser(id).subscribe(data => {
      console.log(data);
      this.getUser();
    });

  }

}
