import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tic-tac-toe';
  @Input() playerOneIcon: string = "X";
  @Input() playerTwoIcon: string = "O";

  protected selectedPlayerIcon(icon: string, playerId: number): void {
    playerId === 1? this.playerOneIcon = icon : this.playerTwoIcon = icon;
  }


}
