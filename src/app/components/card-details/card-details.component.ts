import { ArticleService } from './../../services/article.service';
import { Article } from './../../models/article';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css']
})
export class CardDetailsComponent implements OnInit {

  currentBlog: Article

  constructor(private activatedRoute: ActivatedRoute, private articleService: ArticleService) {

    this.articleService.getAllArticleById(this.activatedRoute.snapshot.params.id).subscribe( res => {
      this.currentBlog = res['article']
    })

  }

  ngOnInit() {
  }

}
