import { Subscriber } from '../../models/subscriber';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  title: string = '¿Quieres ser parte del más selecto grupo de jóvenes emprendedores?'
  patternMail: string = ''
  subscriber: Subscriber = new Subscriber()

  constructor() { }


  accept() {
    this.subscriber.name = ''
    this.subscriber.mail = ''
  }
  ngOnInit() {
  }

}
