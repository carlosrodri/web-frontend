import { ArticleService } from './../../services/article.service';
import { Article } from './../../models/article';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})

export class BlogComponent implements OnInit {

  blogList: Article[] = []
  constructor(private articleService: ArticleService) {

    this.articleService.getAllArticles().subscribe(res => {
      this.blogList = res['articles']
    })

  }

  ngOnInit() {
  }

}
