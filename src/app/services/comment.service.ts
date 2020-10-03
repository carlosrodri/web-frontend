import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { EndPointsService } from './end-points.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Comment } from "../models/comment";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient, private endPoint: EndPointsService) { }

  getAllComments(): Observable<Comment[]> {
    return this.http.get(this.endPoint.COMMENTS_URL).pipe(
      map((res) => res as Comment[])
    )
  }

  getAllCommentsByArticle(articleId: string): Observable<Comment[]> {
    return this.http.get(this.endPoint.COMMENTS_URL + articleId).pipe(
      map((res) => res as Comment[])
    )
  }

  addComment(comment: Comment) {
    return this.http.post(this.endPoint.COMMENTS_URL, comment)
  }
}
