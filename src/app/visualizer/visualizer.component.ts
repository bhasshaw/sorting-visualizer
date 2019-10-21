import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-visualizer',
  templateUrl: './visualizer.component.html',
  styleUrls: ['./visualizer.component.scss']
})
export class VisualizerComponent implements OnInit {
  array
  show:boolean
  @Input() event;

  constructor() {
    this.array = [3, 5, 1, 3, 2, 8, 9, 6, 7, 10]
    // this.arrayRandom = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
    // this.arrayOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    // this.arrayReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
  }

  ngOnInit() {
    // this.bubbleSort()
  }

  bubbleSort() {
    console.log('bubblesort')
    let swapp
    let n = this.array.length - 1
    let x = this.array;
    this.show = false;
    do {
      swapp = false;
      for (let i = 0; i < n; i++) {
        if (x[i] > x[i + 1]) {
          let temp = x[i]
          x[i] = x[i + 1]
          x[i + 1] = temp
          swapp = true
        }
      }
      n--
    } while (swapp)
    this.show = true;
    console.log(this.array)
    return x
  }

}
