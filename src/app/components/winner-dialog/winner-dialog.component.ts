import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { GameComponent } from '../game/game.component';

@Component({
  selector: 'app-winner-dialog',
  templateUrl: './winner-dialog.component.html',
  styleUrls: ['./winner-dialog.component.scss']
})
export class WinnerDialogComponent {

  protected winnerIcon: string;

  constructor(
    public dialogRef: MatDialogRef<WinnerDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string,
  ) {
    this.winnerIcon = this.data;
  }

  closeDialog(): void {
    this.dialogRef.close();
  }


  onNoClick(): void {
    this.closeDialog
  }
}
