import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent {

  protected board: string[][] = [];
  @Input() playerOneIcon: string = "";
  @Input() playerTwoIcon: string = "";
  protected nextIcon: string = "";

  constructor() {


  }
  ngOnInit() {
    this.initGame();
  }

  private initGame(): void {
    this.nextIcon = this.playerOneIcon;
    this.board = this.getTwoDimensionArrayFilledZeros()
  }

  private getTwoDimensionArrayFilledZeros(): string[][] {
    let arr = new Array<Array<string>>;
    for (let i = 0; i < 3; i++) {
      arr.push(new Array<string>(3).fill(""))
    }
    return arr;
  }

  public changeCell(i: number, j: number): void {
    this.board[i][j] = this.nextIcon;
    this.nextIcon = this.nextIcon === this.playerOneIcon ? this.playerTwoIcon : this.playerOneIcon;
  }

}
