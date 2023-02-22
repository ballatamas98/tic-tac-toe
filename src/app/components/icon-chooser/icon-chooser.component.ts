import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-icon-chooser',
  templateUrl: './icon-chooser.component.html',
  styleUrls: ['./icon-chooser.component.scss']
})
export class IconChooserComponent {

    @Input() name: string = "Player";
    @Output() choosenIcon = new EventEmitter<string>();


   public iconChoosen(value: string) {
      this.choosenIcon.emit(value);
    }
}
