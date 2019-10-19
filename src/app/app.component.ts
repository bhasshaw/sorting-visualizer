import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sorting-visualizer';
  public clickedEvent;

  childEventClicked(event) {
    this.clickedEvent = event;
  }
}
