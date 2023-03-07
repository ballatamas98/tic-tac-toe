import { Component, DoCheck, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GameEngine } from 'src/app/game-engine';
import { IconService } from 'src/app/service/icon.service';
import { WinnerDialogComponent } from '../winner-dialog/winner-dialog.component';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit, DoCheck {

  protected board: string[][] = [];
  playerOneIcon: string = "";
  playerTwoIcon: string = "";
  protected nextIcon: string = "";
  private winnerDialog: any = null;

  constructor(private iconService: IconService,
    private dialog: MatDialog) {
  }


  ngOnInit() {
    this.initGame();
  }
  ngDoCheck(): void {
    if (this.nextIcon !== this.playerOneIcon && this.nextIcon !== this.playerTwoIcon) {
      this.initGame();
    }
  }

  ngAfterContentChecked() {
    this.lookingForWinner();
  }

  private initGame(): void {
    this.iconService.playerOneIcon.subscribe({ next: (value: string) => this.playerOneIcon = value });
    this.iconService.playerTwoIcon.subscribe({ next: (value: string) => this.playerTwoIcon = value });
    this.nextIcon = this.playerOneIcon;
    this.board = this.getTwoDimensionArrayFilledZeros()
    this.winnerDialog = null;
  }

  private getTwoDimensionArrayFilledZeros(): string[][] {
    let arr = new Array<Array<string>>;
    for (let i = 0; i < 3; i++) {
      arr.push(new Array<string>(3).fill(""))
    }
    return arr;
  }

  changeCell(i: number, j: number): void {
    if (this.board[i][j] === "") {
      this.board[i][j] = this.nextIcon;
      this.nextIcon = this.nextIcon === this.playerOneIcon ? this.playerTwoIcon : this.playerOneIcon;
    }
  }

  private lookingForWinner(): void {
    let winnerIcon: string = GameEngine.lookingForWinner(this.playerOneIcon, this.playerTwoIcon, this.board);
    if (winnerIcon !== "") {
      if (this.winnerDialog == null)
        this.openWinnerDialog(winnerIcon);
    }
  }


  private openWinnerDialog(winnerIcon: string) {
    this.winnerDialog = this.dialog.open(WinnerDialogComponent, { data: winnerIcon })
      .afterClosed().subscribe(() => { this.initGame(); });
  }
}
