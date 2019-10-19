import { Component, OnInit, EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  @Output() eventClicked = new EventEmitter<Event>()

  constructor() { }

  ngOnInit() {
  }

  onClick(event): void{
    this.eventClicked.emit(event)
  }

}
