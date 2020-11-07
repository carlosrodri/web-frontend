import { Comment } from './../../models/comment';
import { CommentService } from './../../services/comment.service';
import { Component, Input, OnInit } from '@angular/core';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input() idArticle: string
  email: string;
  name: string;
  comment: string;

  comments: Comment[];

  constructor(private commentService: CommentService) {
    setTimeout(() => {
      this.getComments();
    }, 500);
  }

  ngOnInit() {
  }

  getComments() {
    this.commentService.getAllCommentsByArticle(this.idArticle).subscribe(comments => {
      if (comments['status'] == 'ok') {
        this.comments = comments['comments'];
      } else {
        this.comments = []
      }
    });
  }

  addComment() {
    if (this.comment === undefined || this.email === undefined || this.name === undefined) {
      this.showMessage('Todos los campos son requeridos', 'warning')
    } else {
      this.commentService.addComment(new Comment(this.idArticle, this.name, this.email, this.comment)).
        subscribe(res => {
          console.log(res);
        })
      this.showMessage('Gracias por tu comentario, es muy importante tu opinión para mi', 'succes');
      this.comment = ''
      this.email = ''
      this.name = ''
      this.getComments();
    }
  }

  showMessage(message: string, option: string) {
    if (option === 'succes') {
      Swal.fire({
        icon: 'success',
        title: message,
        showConfirmButton: false,
        timer: 2500
      });
    } else {
      Swal.fire({
        icon: 'warning',
        title: message,
        showConfirmButton: false,
        timer: 2500
      });
    }
  }

}
