import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foot',
  templateUrl: './foot.component.html',
  styleUrls: ['./foot.component.css']
})
export class FootComponent implements OnInit {
  anio: number;

  constructor(){
    this.anio = new Date().getFullYear();
  }

  ngOnInit() {
  }

}
