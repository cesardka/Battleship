import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ReplayComponent } from './pages/replay/replay.component';
import { ReplayBattleComponent } from './pages/replay-battle/replay-battle.component';

const routes: Routes = [
	{ path: '', component: HomeComponent },
	{	path: 'replay', component: ReplayComponent },
	{ path: 'replay-battle/:id', component: ReplayBattleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
