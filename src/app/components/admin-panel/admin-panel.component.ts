import { AngularFireStorage } from '@angular/fire/storage';
import { ArticleService } from './../../services/article.service';
import { Article } from './../../models/article';
import { Component, OnInit } from '@angular/core';
import { Comment } from '../../models/comment';
import { CommentService } from 'src/app/services/comment.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Tag } from 'src/app/models/tag';


@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {

  articles: Article;
  images: string[] = [];
  commentsList: Comment[];
  img: string;

  currentArticle: Article;
  tags: Tag[];

  form: FormGroup;

  constructor(private articleService: ArticleService, private storage: AngularFireStorage,
    private commentService: CommentService,
    private fb: FormBuilder) {
    this.tags = [];
    this.createForm();
    this.createListeners();
    this.currentArticle = { tags: this.tags, date: new Date() }
    this.articleService.getAllArticles().subscribe(res => {
      this.articles = res['articles'];
    });

    this.commentService.getAllComments().subscribe(comments => {
      this.commentsList = comments['comments']
    });
  }

  ngOnInit() {
  }

  createForm() {
    this.form = this.fb.group(
      {
        content: ['', []],
        preview: ['', []]
      }
    );
  }

  createListeners() {
  }

  /**
   * Add new article blog to backend
   */
  publish() {
    if (this.tags.length > 0) {
      this.articleService.addArticle(this.currentArticle).subscribe(res => {
        if (res['message'] != '') {
          alert(res['message']);
          this.form.reset
        }
      });
    } else alert('Por favor agrega contenido para publicar');
  }


  /**
   * add a new tag and their content to DB and admin panel to preview
   * @param tagType kind of html tag to add
   */
  addTagContent(tagType: string) {
    this.tags.push({ kindTag: tagType, content: this.form.get('content').value });
    let tag = document.createElement(tagType);

    if (tagType == 'img' || tagType == 'video') {
      tag.setAttribute('src', this.form.get('content').value);
      tag.setAttribute("style", "max-width:100%;");
      document.getElementById('preview').appendChild(tag)
    } else {
      tag.innerHTML = this.form.get('content').value;
      tag.setAttribute("style", "text-align:justify; font-size: 20px;");
      document.getElementById('preview').appendChild(tag)
    }
    this.form.get('content').setValue('');
  }

  // uploadImage(e) {
  //   const id = Math.random().toString(36).substring(2);
  //   const file = e.target.files[0];
  //   const filePath = 'uploads/' + id;
  //   const ref = this.storage.ref(filePath);
  //   const task = this.storage.upload(filePath, file)
  //   task.then(res => {
  //     ref.getDownloadURL().subscribe(res => {
  //       this.images.push(res);
  //       this.img = res;
  //     }),
  //       (error) => {
  //         console.log(error, 'An error has been ocurred');
  //       }
  //   });
  // }

  switchComments(option: string) {
    if (option === 'comments') {
      document.getElementById('article').style.display = 'none';
      document.getElementById('comments').style.display = 'block';
      document.getElementById('comments').hidden = true;
    } else {
      document.getElementById('article').style.display = 'block';
      document.getElementById('comments').style.display = 'none';
    }
  }

}