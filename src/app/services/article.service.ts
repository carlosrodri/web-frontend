import { Article } from './../models/article';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

url = 'http://localhost:3000/web/article/'

  constructor(private http: HttpClient) { }

  getAllArticles(): Observable<Article[]>{
    return this.http.get(this.url).pipe(
      map((res) => res as Article[])
    )
  }

  getAllArticleById(id: string): Observable<Article>{
    console.log('entra onea');
    
    return this.http.get(this.url+id).pipe(
      map((res) => res as Article)
    )
  }
}
