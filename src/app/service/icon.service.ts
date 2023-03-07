import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IconService {

  private iconList: Array<string> = ["❌", "⭕", "💩", "🐺", "💀", "🔥", "😊"];
  public playerOneIcon: BehaviorSubject<string> = new BehaviorSubject<string>(this.iconList[0]);
  public playerTwoIcon: BehaviorSubject<string> = new BehaviorSubject<string>(this.iconList[1]);

  constructor() { }

  getIcons(): Array<string> {
    return this.iconList;
  }
}
