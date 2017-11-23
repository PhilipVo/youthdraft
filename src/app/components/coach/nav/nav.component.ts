import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  styleUrls: ['./nav.component.css'],
  templateUrl: './nav.component.html'
})
export class NavComponent {
  show = false;

  hide(event) {
    this.show = false;
    event.stopPropagation();
    return false;
  }
}
