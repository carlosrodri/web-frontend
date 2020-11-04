import { VisitService } from './../../services/visit.service';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

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

  constructor(private visitService: VisitService,  private _sanitizer: DomSanitizer) {
    this.visitService.getDeviceInformation()
  }

  getVideoIframe(url) {
    var video, results;
 
    if (url === null) {
        return '';
    }
    results = url.match('[\\?&]v=([^&#]*)');
    video   = (results === null) ? url : results[1];
 
    return this._sanitizer.bypassSecurityTrustResourceUrl('https://connect.facebook.net/es_LA/sdk.js#xfbml=1&version=v8.0' + video);   
}

  ngOnInit() {
  }

}
