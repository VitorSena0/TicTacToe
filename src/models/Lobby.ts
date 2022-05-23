export default class Lobby{
	public code: string;
	public players: any;
	public P1: number;
	public P2: number;
	public historic: any;
	public connections: number;
	public name;

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
	}

}


