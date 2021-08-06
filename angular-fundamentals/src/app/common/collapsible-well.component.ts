import { Component, Input } from '@angular/core';

@Component({
  selector: 'collapsible-well',
  templateUrl: './collapsible-well.component.html',
})
export class CollapsibleWellComponent {
  isVisible: boolean = false;

  toggleContent() {
    this.isVisible = !this.isVisible;
  }
}
