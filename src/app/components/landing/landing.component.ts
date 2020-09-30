import { Landing } from './../../models/landing';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  title: string = '¿Quieres ser parte del más selecto grupo de jóvenes emprendedores?'
  patternMail: string = ''
  landing: Landing = new Landing()

  constructor() { }


  accept() {
    console.log(this.landing.name, this.landing.mail);
    this.landing.name = ''
    this.landing.mail = ''
  }
  ngOnInit() {
  }

}
