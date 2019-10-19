import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-visualizer',
  templateUrl: './visualizer.component.html',
  styleUrls: ['./visualizer.component.scss']
})
export class VisualizerComponent implements OnInit {
  array;

  constructor() {
    this.array = [3, 5, 1, 3, 2, 8, 9, 6, 7, 10]
  }

  ngOnInit() {
    console.log(this.array)
  }



}
