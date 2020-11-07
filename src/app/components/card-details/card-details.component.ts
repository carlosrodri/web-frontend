import { element } from 'protractor';
import { ArticleService } from './../../services/article.service';
import { Article } from './../../models/article';
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import { window } from 'rxjs/operators';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css']
})
export class CardDetailsComponent implements OnInit {

  currentBlog: Article
  autor: string
  description: string

  constructor(private activatedRoute: ActivatedRoute, private articleService: ArticleService) {
    this.autor = 'Autor: Carlos Rodríguez'

    this.articleService.getAllArticleById(this.activatedRoute.snapshot.params.id).subscribe(res => {
      this.currentBlog = res['article']
      if (this.currentBlog.imgs != undefined) {
        let img = document.createElement('img');
        img.src = this.currentBlog.imgs[0];
        img.style.width = '90%'
        document.getElementById('container').appendChild(img);
      }
      this.getDescription(this.currentBlog.description);
    });
  }

  ngOnInit() {
  }

  getDescription(description: string) {
    let split = description.split('<br>');
    split.forEach(element => {
      let text = document.createElement('p');
      text.innerHTML = element;
      text.style.textAlign = 'left';
      text.style.marginLeft = '20%';
      text.style.marginRight = '20%';
      text.style.fontFamily = 'Ubuntu'
      text.style.lineHeight = '4vh'
      text.style.fontWeight = 'lighter'
      text.style.fontSize = '1.1rem'

      document.getElementById('container').appendChild(text);
      document.getElementById('container').appendChild(document.createElement('br'));
      document.getElementById('container').appendChild(document.createElement('br'));


      if (screen.width <= 580) {
        text.style.marginLeft = '6%';
        text.style.marginRight = '6%';
      }

      // document.getElementById('container').appendChild(document.create)
    });
    let creator = document.createElement('h4');
    creator.innerHTML = 'Autor: Carlos Rodríguez'
    document.getElementById('container').appendChild(creator);
  }

}
