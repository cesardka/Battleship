import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface replayJson {
	board_1: number[][]
	board_2: number[][]
	turns: 	 Array<replayTurns>
}

export interface replayTurns {
	player:   string
	position: string
	hit:      boolean
	x:        number
	y:        number
}

@Injectable({
  providedIn: 'root'
})

export class BattleService {
	replay: replayJson
	turnoAtual: number = 0

  constructor(
    private http: HttpClient,
  ) {}
  
  loadReplay(id) {
  	// Fazer requisição para pegar o replay
		this.http.get<replayJson>("http://192.168.103.4:16080/replay/" + id).subscribe(
			(data: replayJson) => {
				this.replay = data
				console.log("replay dentro?", this.replay)
				return
			}
		)
		return 
  }

  getBoard(player):number[][] {
  		await delay(1000)
  	if (this.replay == undefined){
  		this.getBoard(player)
  	}
  	console.log("----------------------"+this.replay.board_1)
  	switch (player) {
  		case "1":
  			return this.replay.board_1
  		case "2":
  			return this.replay.board_2
  	}
  }

  nextTurn() {
  	if (this.turnoAtual < this.replay.turns.length) {
	  	this.turnoAtual++
	  	return this.replay.turns[this.turnoAtual]
  	}
  }

  previousTurn() {
  	if (this.turnoAtual > 0) {
	  	this.turnoAtual--
	  	return this.replay.turns[this.turnoAtual]
  	}
  }

}
