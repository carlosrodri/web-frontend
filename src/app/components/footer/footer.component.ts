import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  desarrollo: string = 'Desarrollo de software web y aplicaciones móviles, pertenezco a la comunidad de desarrollo de Boyacá';
  emprendimiento: string = 'Desde muy joven he emprendido, es algo que me apasiona también por el hecho de poder ayudar a las personas'
  marketing: string = 'Con el marketing digital ayudamos a demás empresas a lograr sus objetivos de alcance y ventas online'
  produccion: string = 'Muy de la mano con el marketing, otra de mis grandes pasiones es la producción de piezas audiovisuales únicas, hermosas, cinemáticas y con mi sello personal'

  constructor() { }

  ngOnInit() {
  }

}
