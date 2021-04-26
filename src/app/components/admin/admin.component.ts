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

  /**
   * Verify your password and username to login into admin BLOG panel
   */
  accept() {
    if (this.user === 'myUser' && this.password === 'mypass') {
      this.user = ''
      this.password = ''
      this.router.navigate(['adminPanel']);
    } else {
     alert('Usuario o contraseña incorrectos')
    }
  }

}
