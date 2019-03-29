import { Component, OnInit } from '@angular/core'
import { Router, ActivatedRoute, ParamMap } from '@angular/router'
import { switchMap } from 'rxjs/operators'
import { BattleService } from '../../services/battle.service'
import { BoardComponent } from '../../components/board/board.component'

@Component({
  selector: 'app-replay-battle',
  templateUrl: './replay-battle.component.html',
  styleUrls: ['./replay-battle.component.css']
})
export class ReplayBattleComponent implements OnInit {
  id: string
  dados: any
  dadosTurno: any
  player: any
  turnoAtual = 0
  totalTurnos = 0

  constructor(
  	private route: ActivatedRoute,
  	private router: Router,
  	private data: BattleService,
	) {}

  ngOnInit() {
	  this.id = this.route.snapshot.paramMap.get('id')
	  this.dados = this.data.loadReplay(this.id)
    this.dadosTurno = this.data.getBoard("1")
  }
  

  proximo() {
  	this.dadosTurno = this.data.nextTurn()
  }

  anterior() {
  	this.dadosTurno = this.data.previousTurn()
  }
}