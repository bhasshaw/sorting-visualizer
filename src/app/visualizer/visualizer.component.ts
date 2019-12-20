import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-visualizer',
  templateUrl: './visualizer.component.html',
  styleUrls: ['./visualizer.component.scss']
})
export class VisualizerComponent implements OnInit {
  array
  arrayRandom
  arrayOrdered
  arrayReversed
  showBubble:boolean
  showMerge:boolean
  showQuick:boolean
  @Input() clickedEvent;

  constructor() {
    this.array = [3, 5, 1, 3, 2, 8, 9, 6, 7, 10]
    this.showBubble = false
    this.showMerge = false
    this.showQuick = false
    // this.arrayRandom = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
    // this.array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    // this.arrayReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
  }

  ngOnInit() {

  }

  whichSort(){
    if (this.clickedEvent === 'bubble'){
      this.bubbleSort()
    } else if (this.clickedEvent === 'quick'){
      console.log('quick selected')
    } else  if (this.clickedEvent === 'merge'){
      console.log('merge selected')
      this.mergeSort(this.array);
    } else {
      console.log('no sorting method chose')
    }
  }

  bubbleSort() {
    let swap
    let n = this.array.length - 1
    let unsortedArray = this.array;
    do {
      swap = false;
      for (let i = 0; i < n; i++) {
        if (unsortedArray[i] > unsortedArray[i + 1]) {
          let temp = unsortedArray[i]
          unsortedArray[i] = unsortedArray[i + 1]
          unsortedArray[i + 1] = temp
          swap = true
        }
      }
      n--
    } while (swap)
    this.showBubble = true;
    return unsortedArray
  }

  mergeSort(unsortedArray) {
    console.log(unsortedArray)
    if (unsortedArray.length <= 1) {
      return unsortedArray
    }
    const middle = Math.floor(unsortedArray.length / 2)
    const left = unsortedArray.slice(0, middle)
    const right = unsortedArray.slice(middle)
    return this.merge(this.mergeSort(left), this.mergeSort(right))
  }

  merge(left, right) {
    let resultArray = [], leftIndex = 0, rightIndex = 0

    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        resultArray.push(left[leftIndex])
        leftIndex++
      } else {
        resultArray.push(right[rightIndex])
        rightIndex++;
      }
    }
    console.log('result', resultArray.concat(left.slice(leftIndex)).concat(right.slice(rightIndex)))
    return resultArray.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
  }

  quickSort() {

  }

  revertOrder(){

  }

}
