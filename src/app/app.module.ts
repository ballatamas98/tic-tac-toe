import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GameComponent } from './components/game/game.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IconChooserComponent } from './components/icon-chooser/icon-chooser.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    IconChooserComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
