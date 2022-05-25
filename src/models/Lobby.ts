export default class Lobby{
	public code: string;
	public players: any;
	public P1: number;
	public P2: number;
	public historic: any;
	public connections: number;
	public name;
	public table: any;
	public blockChoice: any;
	public pieces;
	public plays: number;
	public turn: any;
	public E:number;

	setplayer(player: any){
		if(this.connections < 0){
			this.players[player.id] = player;
			this.connections = this.connections + 1
			return 0
		} else {
			return 1
		} 
	}
	
	constructor(code: any,name: string){
		this.code = code
		this.connections = 0;
		this.P1 = 0;
		this.P2 = 0
		this.name = name
		this.players = {}
		this.table = [[1,2,3],[4,5,6],[7,8,9]]
		this.blockChoice = {
			"A1": null,
			"A2": null,
			"A3": null,
			
			"A4": null,
			"A5": null,
			"A6": null,
			
			"A7": null,
			"A8": null,
			"A9": null,
		}
		this.pieces = {
            "X":null,
            "O":null
        }
        this.plays = 0;
        this.turn = true;
        this.E = 0;
	}

}


