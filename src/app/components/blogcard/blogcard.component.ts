import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-blogcard',
  templateUrl: './blogcard.component.html',
  styleUrls: ['./blogcard.component.css']
})
export class BlogcardComponent implements OnInit {
  
  @Input() id: number
  @Input() img: string 
  @Input() title: string
  @Input() description: string
  @Input() date: Date

  constructor() { 
  }

  ngOnInit() {
  }

}
