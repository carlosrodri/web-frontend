import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  emotional: string = 'Si lo imaginas, se puede hacer'
  description: string = 'Emprendedor Digital, amante de la tecnología, producción audiovisual y desarrollo web, fan de conocer excelentes personas y vivir grandes experiencias, mi filosofia está marcada por la frase:'
  title = 'Hola, soy Carlos Rodríguez';

  youtube: string = 'https://www.youtube.com/channel/UCbhqI0mAhq2-RmHfn6XmVdw?view_as=subscriber'
  instagram: string = 'https://www.instagram.com/carlosrodri_s'
  twitter: string = 'https://twitter.com/carlosrodri_s'
  github: string = 'https://github.com/carlosrodri'
  facebook: string = 'https://www.facebook.com/carlosalberto.rodriguezsanchez.71/'

  constructor() { }

  ngOnInit() {
  }

}
