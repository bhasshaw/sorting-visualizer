import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-visualizer',
  templateUrl: './visualizer.component.html',
  styleUrls: ['./visualizer.component.scss']
})
export class VisualizerComponent implements OnInit {
  array
  arrayDummy
  showBubble:boolean
  showMerge:boolean
  showQuick:boolean
  @Input() clickedEvent

  constructor() {
    // this.array = Array.from({length: 15}, () => Math.floor(Math.random() * 15))
    this.array = [1, 7, 2, 5, 3, 9]
    this.arrayDummy = this.array
    this.showBubble = false
    this.showMerge = false
    this.showQuick = false
  }

  ngOnInit() {

  }

  whichSort(){
    if (this.clickedEvent === 'bubble'){
      console.log('bubble selected', this.array)
      this.bubbleSort()
    } else if (this.clickedEvent === 'quick'){
      console.log('quick selected', this.array)
      this.quickSort(this.array)
    } else  if (this.clickedEvent === 'merge'){
      console.log('merge selected', this.array)
      this.mergeSort(this.array);
    } else {
      console.log('no sorting method chose')
    }
  }

  bubbleSort() {
    let swap
    let n = this.array.length - 1
    let unsortedArray = this.array
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
    this.showBubble = true
    return unsortedArray
  }

  mergeSort(unsortedArray) {
    if (unsortedArray.length <= 1) {
      return unsortedArray
    }
    const middle = Math.floor(unsortedArray.length / 2)
    const left = unsortedArray.slice(0, middle)
    const right = unsortedArray.slice(middle)
    return this.merge(this.mergeSort(left), this.mergeSort(right))
  }

  merge(left, right) {
    let sortedArray = [], leftIndex = 0, rightIndex = 0

    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        sortedArray.push(left[leftIndex])
        leftIndex++
      } else {
        sortedArray.push(right[rightIndex])
        rightIndex++;
      }
    }
    this.showMerge = true
    return this.array = sortedArray.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
  }

  quickSort(unsortedArray) {
    console.log('unsorted', unsortedArray)
      if (unsortedArray.length <= 1) {
        return unsortedArray
      } else {

        let left = []
        let right = []
        let newArray = []
        let pivot = unsortedArray.pop()
        let length = unsortedArray.length

        for (let i = 0; i < length; i++) {
          if (unsortedArray[i] <= pivot) {
            left.push(unsortedArray[i])
          } else {
            right.push(unsortedArray[i])
          }
        }
        this.showQuick = true
        console.log(pivot)
        return this.array = newArray.concat(this.quickSort(left), pivot, this.quickSort(right))
      }
  }

  revertOrder(){
    this.array = this.arrayDummy
    this.showBubble = false
    this.showMerge = false
    this.showQuick = false
  }

}
