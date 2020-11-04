import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  user: string
  password: string

  constructor(private router: Router) { }

  ngOnInit() {
  }

  accept() {
    if (this.user === 'charly' && this.password === 'abc.521063') {
      console.log('entra ome');
      this.user = ''
      this.password = ''
      this.router.navigate(['adminPanel']);
    } else {
      console.log('nelson');
    }
  }

}
