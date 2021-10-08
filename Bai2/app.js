let heightTeam = [60,40,55,75,64];
let team1 = 0;
let team2 = 0;
for (let i = 0; i<heightTeam.length; i++){
    if( i%2 == 0){
        team1 += heightTeam[i];
    }
    if( i%2 == 1){
        team2 += heightTeam[i];
    }
}
console.log(team1);
console.log(team2);