import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { BattleService } from '../../services/battle.service';

@Component({
  selector: 'app-replay-battle',
  templateUrl: './replay-battle.component.html',
  styleUrls: ['./replay-battle.component.css']
})
export class ReplayBattleComponent implements OnInit {
  id: string;
  dados: any;
  dadosTurno: any;
  turnoAtual = 0;

  constructor(
  	private route: ActivatedRoute,
  	private router: Router,
  	private data: BattleService
	) {}

  ngOnInit() {
	  this.id = this.route.snapshot.paramMap.get('id');
	  this.dados = this.data.getReplay(this.id);
  }

  proximo() {
  	this.dadosTurno = this.data.getTurn(this.turnoAtual)
  	this.turnoAtual = this.turnoAtual + 1
  }

  anterior() {
  	this.dadosTurno = this.data.getTurn(this.turnoAtual)
  	this.turnoAtual = this.turnoAtual - 1
  }
}