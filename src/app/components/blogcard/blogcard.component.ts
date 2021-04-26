import { Article } from './../../models/article';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-blogcard',
  templateUrl: './blogcard.component.html',
  styleUrls: ['./blogcard.component.css']
})
export class BlogcardComponent implements OnInit {

  @Input() blog: Article;

  constructor() {
  }

  ngOnInit() {

  }

}
