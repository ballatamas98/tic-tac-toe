import { Component, DoCheck, Input, OnInit } from '@angular/core';
import { IconService } from 'src/app/service/icon.service';

@Component({
  selector: 'app-icon-chooser',
  templateUrl: './icon-chooser.component.html',
  styleUrls: ['./icon-chooser.component.scss']
})
export class IconChooserComponent implements OnInit, DoCheck {


  @Input() name: string = "Player";
  iconlist: string[] = [];
  playerIcon: string = "";
  otherPlayerIcon: string = "";

  constructor(private iconService: IconService) {

  }


  ngOnInit(): void {
    this.updateVariables();
  }

  ngDoCheck(): void {
    this.updateVariables();
  }

  protected changeIcon(value: string) {
    if (this.name === "Player 1") {
      this.iconService.playerOneIcon.next(value);
    } else if (this.name === "Player 2") {
      this.iconService.playerTwoIcon.next(value);
    }
  }

  private updateVariables(): void {
    this.refreshPlayerIcons();
    this.refreshIconList();
  }

  private refreshIconList(): void {
    this.iconlist = this.iconService.getIcons();
    this.iconlist = this.iconlist.filter(icon => icon !== this.otherPlayerIcon);
  }

  private refreshPlayerIcons(): void {
    if (this.name === "Player 1") {
      this.iconService.playerOneIcon.subscribe({ next: (value: string) => this.playerIcon = value });
      this.iconService.playerTwoIcon.subscribe({ next: (value: string) => this.otherPlayerIcon = value });
    } else if (this.name === "Player 2") {
      this.iconService.playerTwoIcon.subscribe({ next: (value: string) => this.playerIcon = value });
      this.iconService.playerOneIcon.subscribe({ next: (value: string) => this.otherPlayerIcon = value });
    }

  }
}
