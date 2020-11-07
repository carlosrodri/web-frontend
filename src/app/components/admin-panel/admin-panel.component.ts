import { ArticleService } from './../../services/article.service';
import { Article } from './../../models/article';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {

  title: string
  description: string
  articles: Article[];
  images: string[] = [];

  constructor(private articleService: ArticleService) {
    this.articleService.getAllArticles().subscribe(res => {
      this.articles = res['articles'];
    });
  }

  ngOnInit() {
  }

  publish() {
    let formatDescription = this.description.replace("\\n\\r", '<br>');
    let article = new Article(this.title, formatDescription);
    this.images.push('assets/portada.jpg');
    article.imgs = this.images;
    this.articleService.addArticle(article).subscribe(res => {
      console.log(res);
    });
    this.title = '';
    this.description = '';
  }

  uploadImage() {
    this.images.push('img');
  }

}
