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
  description: string

  constructor(private activatedRoute: ActivatedRoute, private articleService: ArticleService) {
  }

  ngOnInit() {
    this.articleService.getAllArticleById(this.activatedRoute.snapshot.params.id).subscribe(res => {
      this.currentBlog = res['article']
      this.addContent();
    });
  }

  /**
   * loop the article array and for each article get the tag and them content to push into html
   */
  addContent() {
    this.currentBlog.tags.forEach(tag => {
      let element;
      if (tag.content != '') {
        if (tag.kindTag == 'img' || tag.kindTag == 'video') {
          element = document.createElement(tag.kindTag);
          element.setAttribute('src', tag.content);
          element.setAttribute("style", "max-width:100%;");
          document.getElementById('content').appendChild(element)
        } else {
          element = document.createElement(tag.kindTag);
          element.innerHTML = tag.content;
          element.setAttribute("style", "text-align:justify; font-size: 20px;");
          document.getElementById('content').appendChild(element)
        }
      } else {
        document.getElementById('content').appendChild(document.createElement(tag.kindTag));
      }
    });
    let creator = document.createElement('h4');
    creator.innerHTML = 'Autor: Carlos Rodríguez'
    document.getElementById('content').appendChild(creator);
  }

}
