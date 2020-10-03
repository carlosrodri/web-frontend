import { EndPointsService } from './end-points.service';
import { Article } from './../models/article';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient, private endPoint: EndPointsService) { }

  getAllArticles(): Observable<Article[]> {
    return this.http.get(this.endPoint.ARTICLES_URL).pipe(
      map((res) => res as Article[])
    )
  }

  getAllArticleById(id: string): Observable<Article> {
    return this.http.get(this.endPoint.ARTICLES_URL + id).pipe(
      map((res) => res as Article)
    )
  }

  addArticle(article: Article) {
    return this.http.post(this.endPoint.ARTICLES_URL, article)
  }

  addImageToArticle(id: string, article: Article) {
    return this.http.put(this.endPoint.ARTICLES_URL+id, article)
  }
}
