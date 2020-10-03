import { Component, Input, OnInit } from '@angular/core';
import { Comment } from "../../models/comment";
import Swal from 'sweetalert2'

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input() idArticle: string
  comment: Comment = new Comment()

  constructor() { 
  }

  ngOnInit() {
  }

  addComment() {
    this.comment.description = ''
    this.comment.mail = ''
    this.comment.name = ''
    Swal.fire({
      icon: 'success',
      title: 'Tu comentario ha sido registrado, muchas gracias por tu opinión',
      showConfirmButton: false,
      timer: 2500
    })
  }

}
