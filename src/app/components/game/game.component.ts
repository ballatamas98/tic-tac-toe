import { Component } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent {

  protected board: number[][] = this.getTwoDimensionArrayFilledZeros() ;

  constructor(){
    
   
  }

  private getTwoDimensionArrayFilledZeros(): number[][]{
    let arr = new Array<Array<number>>;
    for (let i = 0; i < 3; i++) {
      arr.push(new Array<number>(3).fill(0))
    }
    return arr;
  }
}
