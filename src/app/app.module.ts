import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ReplayComponent } from './pages/replay/replay.component';
import { ReplayBattleComponent } from './pages/replay-battle/replay-battle.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ReplayComponent,
    ReplayBattleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
