class Match{
    players = [];
    winner = null;
    date = new Date();
    
    constructor(date){
        if(date instanceof Date) {
            this.date = date;
        }else{
            const [day, month, year] = date.split('/');
            this.date = new Date([year, month - 1, day].join('/'));
        } 
            
    }
    insertPlayer(player){
        if (this.players.length<2) {
            this.players.push(player);
            return false;
        }
        this.players.push(player);
        return true;
    }

    setWinner(player){
        if (this.players.includes(player)) {
            if (this.date < (new Date())) {
                this.winner = player;
                return true;
            }
        }
        
        return false;
    }
}
module.exports = Match;