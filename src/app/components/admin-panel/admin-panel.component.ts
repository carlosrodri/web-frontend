import { AngularFireStorage } from '@angular/fire/storage';
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

  constructor(private articleService: ArticleService, private storage: AngularFireStorage) {
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

  uploadImage(e) {
    const id = Math.random().toString(36).substring(2);
    const file = e.target.files[0];
    const filePath = 'uploads/' + id;
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file)
    task.then(res => {
      console.log(res, 'algo');
      ref.getDownloadURL().subscribe(res => {
        this.images.push(res);
        console.log(res, 'url');
      }),
        (error) => {
          console.log(error, 'An error has been ocurred');
        }
    });
  }

}
