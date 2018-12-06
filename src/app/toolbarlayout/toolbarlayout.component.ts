import { Component, OnInit } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-toolbarlayout',
  templateUrl: './toolbarlayout.component.html',
  styleUrls: ['./toolbarlayout.component.scss']
})

export class ToolbarlayoutComponent implements OnInit {

  // tiles: Tile[] = [
  //   {text: 'one', cols: 1, rows: 2, color: 'lightgreen'},
  //   {text: 'two', cols: 3, rows: 2, color: 'lightblue'}
    
  // ];

  constructor() { }

  ngOnInit() {
  }

}


