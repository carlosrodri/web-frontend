import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title: string = 'Carlos Rodriguez'

  constructor() {}

  ngOnInit() {
    $(document).ready(main);

    var contador = 1;

    function main() {
      $('.menu_bar').click(function () {
        // $('nav').toggle(); 

        if (contador == 1) {
          $('nav').animate({
            left: '0'
          });
          contador = 0;
        } else {
          contador = 1;
          $('nav').animate({
            left: '-100%'
          });
        }

      });

    };
  }

}
