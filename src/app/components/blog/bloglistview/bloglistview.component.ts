import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blogview',
  templateUrl: './bloglistview.component.html',
  styleUrls: ['./bloglistview.component.css']
})
export class BloglistviewComponent implements OnInit {

  itemList : [number]=[1,2,3,4,5];
  constructor() { }

  ngOnInit() {
  }

}
