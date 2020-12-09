import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  youtube: string = 'https://www.youtube.com/channel/UCbhqI0mAhq2-RmHfn6XmVdw?view_as=subscriber';
  constructor() { }

  ngOnInit() {
  }

}
