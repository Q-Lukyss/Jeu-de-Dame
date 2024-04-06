class Pion {
    constructor(player, position){
        this.player = player;
        this.position = position;
        this.setPion()
    }
    //selected = false;
    setPion(){
        if(this.player == 'playerOne'){
            this.html = '<div onclick="handleClickPion(event)" class="pion j1pion"></div>';
        }
        else this.html = '<div onclick="handleClickPion(event)" class="pion j2pion"></div>';
    }
    eat(whereToEat, prevousPos, posEnemy){
        if(this.player == 'playerOne'){
            this.html = `<div onclick="handleClickPion(event, '${prevousPos}', '${whereToEat}', '${posEnemy}', 'playerOne')" class="pion j1pion"></div>`;
        }
        else this.html = `<div onclick="handleClickPion(event, '${prevousPos}', '${whereToEat}', '${posEnemy}', 'playerTwo')" class="pion j2pion"></div>`;
    }
    unset(){
        if(this.player == 'playerOne'){
            this.html = '<div class="pion j1pion"></div>';
        }
        else this.html = '<div class="pion j2pion"></div>';
    }
}
class Queen {
    constructor(player, position){
        this.player = player;
        this.position = position;
        this.setPion()
    }
    //selected = false;
    setPion(){
        if(this.player == 'playerOne'){
            this.html = '<div onclick="handleClickQueen(event)" class="pion j1queen"><img class=\'crown1\'src="./img/couronne1.png" alt=""></div>';
        }
        else this.html = '<div onclick="handleClickQueen(event)" class="pion j2queen"><img class=\'crown2\'src="./img/couronne2.png" alt=""></div>';
    }
    unset(){
        if(this.player == 'playerOne'){
            this.html = '<div class="pion j1queen"><img class=\'crown1\'src="./img/couronne1.png" alt=""></div>';
        }
        else this.html = '<div class="pion j2queen"><img class=\'crown2\'src="./img/couronne2.png" alt=""></div>';
   
    }
}
let plateau = {}
let moveCount = 0;
let playerTurn = {
    playerOne: true,
    playerTwo: false
}
let canIEatStatus = false;
var listePlateau = 0;

    
//startGame Queen
const startGame = () => {
    document.body.innerHTML = '<header><h1>Jeu de Dame</h1><h2 class="playerTurn">Tour du Joueur 1</h2></header><main class="plateau"></main>';
    //4 Lignes Du haut
    for(let i = 0; i < 4; i++){
        if(i == 1){
            for(let j = 0; j < 10; j++){
                if(j%2 == 1){
                    document.querySelector('.plateau').innerHTML += `<div id="${i}/${j}" class="case blanc"></div>`;
                    plateau[`${i}/${j}`] = 'unplayable';
                }
                else {
                    document.querySelector('.plateau').innerHTML += `<div id="${i}/${j}" class="case noire"></div>`;
                    plateau[`${i}/${j}`] = new Pion('playerOne', `${i}/${j}`);
                } 
            }
        }
        else if(i%2 == 0){
            for(let j = 0; j < 10; j++){
                if(j%2 == 0){
                    document.querySelector('.plateau').innerHTML += `<div id="${i}/${j}" class="case blanc"></div>`;
                    plateau[`${i}/${j}`] = 'unplayable';
                }
                else {
                    document.querySelector('.plateau').innerHTML += `<div id="${i}/${j}" class="case noire"></div>`;
                    plateau[`${i}/${j}`] = 'empty';
                } 
                
                } 
            }
           else {
            for(let j = 0; j < 10; j++){
                
                if(j%2 == 0){
                    document.querySelector('.plateau').innerHTML += `<div id="${i}/${j}" class="case noire"></div>`; 
                    plateau[`${i}/${j}`] = 'empty'
                }
                else  {
                    document.querySelector('.plateau').innerHTML += `<div id="${i}/${j}" class="case blanc"></div>`;
                    plateau[`${i}/${j}`] = 'unplayable'; 
                }  
                }              
            }  
        }
    //2 Lignes du milieu
    for(let i = 4; i < 6; i++){
        if(i == 5){
            for(let j = 0; j < 10; j++){
                if(j%2 == 1){
                    document.querySelector('.plateau').innerHTML += `<div id="${i}/${j}" class="case blanc"></div>`;
                    plateau[`${i}/${j}`] = 'unplayable';
                }
                else {
                    document.querySelector('.plateau').innerHTML += `<div id="${i}/${j}" class="case noire"></div>`;
                    plateau[`${i}/${j}`] = new Pion('playerTwo', `${i}/${j}`);
                } 
            }
        }
        else if(i%2 == 0){
            for(let j = 0; j < 10; j++){
                if(j%2 == 0){
                    document.querySelector('.plateau').innerHTML += `<div id="${i}/${j}" class="case blanc"></div>`;
                    plateau[`${i}/${j}`] = 'unplayable';
                }
                else {
                    document.querySelector('.plateau').innerHTML += `<div id="${i}/${j}" class="case noire"></div>`;
                    plateau[`${i}/${j}`] = 'empty';
                } 
                } 
            }
           else {
            for(let j = 0; j < 10; j++){
                if(j%2 == 0){
                    document.querySelector('.plateau').innerHTML += `<div id="${i}/${j}" class="case noire"></div>`  
                    plateau[`${i}/${j}`] = 'empty';
                }
                else {
                    document.querySelector('.plateau').innerHTML += `<div id="${i}/${j}" class="case blanc"></div>`;
                    plateau[`${i}/${j}`] = 'unplayable';
                }  
                }              
            }  
        } 
    //4 Lignes du bas
    for(let i = 6; i < 10; i++){
       
        if(i%2 == 0){
            for(let j = 0; j < 10; j++){
                if(j%2 == 0){
                    document.querySelector('.plateau').innerHTML += `<div id="${i}/${j}" class="case blanc"></div>`;
                    plateau[`${i}/${j}`] = 'unplayable';
                }
                else {
                    document.querySelector('.plateau').innerHTML += `<div id="${i}/${j}" class="case noire"></div>`;
                    plateau[`${i}/${j}`] = 'empty';
                } 
                } 
            }
           else {
            for(let j = 0; j < 10; j++){
                if(j%2 == 0){
                    document.querySelector('.plateau').innerHTML += `<div id="${i}/${j}" class="case noire"></div>`;
                    plateau[`${i}/${j}`] = 'empty'
                }
                else {
                    document.querySelector('.plateau').innerHTML += `<div id="${i}/${j}" class="case blanc"></div>`; 
                    plateau[`${i}/${j}`] = 'unplayable';
                } 
                }              
            }  
    }  
// console.log(plateau[document.querySelector('.plateau').children[0].id]);
// console.log(document.querySelector('.plateau').children[1].id);
// console.log(document.querySelector('.plateau').children.length);
refreshDisplay()
removeEvents('playerTwo');
listePlateau = Object.keys(plateau);
}
const startGame = () => {
    document.body.innerHTML = '<header><h1>Jeu de Dame</h1><h2 class="playerTurn">Tour du Joueur 1</h2></header><main class="plateau"></main>';
    //4 Lignes Du haut
    for(let i = 0; i < 4; i++){
        if(i%2 == 0){
            for(let j = 0; j < 10; j++){
                if(j%2 == 0){
                    document.querySelector('.plateau').innerHTML += `<div id="${i}/${j}" class="case blanc"></div>`;
                    plateau[`${i}/${j}`] = 'unplayable';
                }
                else {
                    document.querySelector('.plateau').innerHTML += `<div id="${i}/${j}" class="case noire"></div>`;
                    plateau[`${i}/${j}`] = new Pion('playerTwo', `${i}/${j}`);
                } 
                
                } 
            }
           else {
            for(let j = 0; j < 10; j++){
                if(j%2 == 0){
                    document.querySelector('.plateau').innerHTML += `<div id="${i}/${j}" class="case noire"></div>`; 
                    plateau[`${i}/${j}`] = new Pion('playerTwo', `${i}/${j}`)
                }
                else  {
                    document.querySelector('.plateau').innerHTML += `<div id="${i}/${j}" class="case blanc"></div>`;
                    plateau[`${i}/${j}`] = 'unplayable'; 
                }  
                }              
            }  
        }
    //2 Lignes du milieu
    for(let i = 4; i < 6; i++){
        if(i%2 == 0){
            for(let j = 0; j < 10; j++){
                if(j%2 == 0){
                    document.querySelector('.plateau').innerHTML += `<div id="${i}/${j}" class="case blanc"></div>`;
                    plateau[`${i}/${j}`] = 'unplayable';
                }
                else {
                    document.querySelector('.plateau').innerHTML += `<div id="${i}/${j}" class="case noire"></div>`;
                    plateau[`${i}/${j}`] = 'empty';
                } 
                } 
            }
           else {
            for(let j = 0; j < 10; j++){
                if(j%2 == 0){
                    document.querySelector('.plateau').innerHTML += `<div id="${i}/${j}" class="case noire"></div>`  
                    plateau[`${i}/${j}`] = 'empty';
                }
                else {
                    document.querySelector('.plateau').innerHTML += `<div id="${i}/${j}" class="case blanc"></div>`;
                    plateau[`${i}/${j}`] = 'unplayable';
                }  
                }              
            }  
        } 
    //4 Lignes du bas
    for(let i = 6; i < 10; i++){
        if(i%2 == 0){
            for(let j = 0; j < 10; j++){
                if(j%2 == 0){
                    document.querySelector('.plateau').innerHTML += `<div id="${i}/${j}" class="case blanc"></div>`;
                    plateau[`${i}/${j}`] = 'unplayable';
                }
                else {
                    document.querySelector('.plateau').innerHTML += `<div id="${i}/${j}" class="case noire"></div>`;
                    plateau[`${i}/${j}`] = new Pion('playerOne', `${i}/${j}`);
                } 
                } 
            }
           else {
            for(let j = 0; j < 10; j++){
                if(j%2 == 0){
                    document.querySelector('.plateau').innerHTML += `<div id="${i}/${j}" class="case noire"></div>`;
                    plateau[`${i}/${j}`] = new Pion('playerOne', `${i}/${j}`);
                }
                else {
                    document.querySelector('.plateau').innerHTML += `<div id="${i}/${j}" class="case blanc"></div>`; 
                    plateau[`${i}/${j}`] = 'unplayable';
                } 
                }              
            }  
    }  
// console.log(plateau[document.querySelector('.plateau').children[0].id]);
// console.log(document.querySelector('.plateau').children[1].id);
// console.log(document.querySelector('.plateau').children.length);
refreshDisplay()
removeEvents('playerTwo');
listePlateau = Object.keys(plateau);
}

const removeEvents = (player) => {
    for (const key in plateau) {
     if (typeof(plateau[key]) == 'object' && plateau[key].player == player) {
         if(player == 'playerOne'){
             plateau[key].unset();
         }
         else {
             plateau[key].unset();
         }
          };
     }
     refreshDisplay();
 }
 const addEvents = (player) => {
     for (const key in plateau) {
      if (typeof(plateau[key]) == 'object' && plateau[key].player == player) {
          if(player == 'playerOne'){
             plateau[key].setPion();
          }
          else {
             plateau[key].setPion();
          }
           };
      }
      refreshDisplay();
  }
 const toggleTurn = () => {
     if(moveCount > 0 && canIEatStatus == false){
         if(playerTurn.playerTwo == true){
             document.querySelector('.playerTurn').textContent = 'Tour du Joueur 1';
             removeEvents('playerTwo');
             playerTurn.playerOne = !playerTurn.playerOne;
             playerTurn.playerTwo = !playerTurn.playerTwo; 
             moveCount = 0;
             canIEat(['playerOne', 'playerTwo']);
             
         } 
         else {
             document.querySelector('.playerTurn').textContent = 'Tour du Joueur 2';
             removeEvents('playerOne');
             playerTurn.playerOne = !playerTurn.playerOne;
             playerTurn.playerTwo = !playerTurn.playerTwo; 
             moveCount = 0;
             canIEat(['playerTwo', 'playerOne']); 
         }
     }
     }
const refreshDisplay = () => {
    // console.table(plateau);
    for(let i = 0; i < document.querySelector('.plateau').children.length; i++){
            if(plateau[document.querySelector('.plateau').children[i].id] !== 'empty' && plateau[document.querySelector('.plateau').children[i].id] !== 'unplayable'){
                document.querySelector('.plateau').children[i].innerHTML = plateau[document.querySelector('.plateau').children[i].id].html
                console.log(plateau[document.querySelector('.plateau').children[i].id].html)
            }
            else document.querySelector('.plateau').children[i].innerHTML = plateau[document.querySelector('.plateau').children[i].id].innerHTML = null
    }
        
} 
const clearPossibleMove = () => {
    for(let i = 0; i < document.querySelector('.plateau').children.length; i++){ // clear Toutes les cases qui ont 'empty' sur le plateau
        if(plateau[document.querySelector('.plateau').children[i].id] == 'empty'){
            document.querySelector('.plateau').children[i].style.backgroundColor = 'darkslateblue';
        }
    }
}
const handleMove = (previousPos, newPos, otherPossiblePos, player) => {
    clearPossibleMove()
    moveCount += 1;
    if(player == 'playerTwo' && newPos[0] == 9){
        console.log('queen')
        plateau[newPos] = new Queen(player, newPos);
    }
    else if(player == 'playerOne' && newPos[0] == 0){
        console.log('queen')
        plateau[newPos] = new Queen(player, newPos);
    }
    else {
        plateau[newPos] = new Pion(player, newPos);
    }
    plateau[previousPos] = 'empty';
    refreshDisplay();
    document.getElementById(previousPos).removeAttribute('onclick');
    if(document.getElementById(otherPossiblePos) != null){
        document.getElementById(otherPossiblePos).removeAttribute('onclick');
    }
    document.getElementById(newPos).removeAttribute('onclick');
    toggleTurn()

}

const handlePrise = (previousPos, posTarget, newPos, playerKiller) => {
    clearPossibleMove();
    moveCount += 1;
    if(playerKiller == 'playerTwo' && newPos[0] == 9){
        console.log('queen')
        plateau[newPos] = new Queen(playerKiller, newPos);
    }
    else if(playerKiller == 'playerOne' && newPos[0] == 0){
        console.log('queen')
        plateau[newPos] = new Queen(playerKiller, newPos);
    }
    else {
        plateau[newPos] = new Pion(playerKiller, newPos);
    }
    let enemy = '';
    if(playerKiller == 'playerOne') {
        enemy = 'playerTwo';
    }
    else {
        enemy = 'playerOne';
    }
    plateau[previousPos] = 'empty';
    plateau[posTarget] = 'empty';
    refreshDisplay();
    document.getElementById(previousPos).removeAttribute('onclick');
    document.getElementById(newPos).removeAttribute('onclick');
    canIEatAgain(playerKiller, newPos);
    toggleTurn();
}
const verifyPossibleMoveQueen = ([player, posQueen]) => {
    for(let i = 1; i < 9; i++){
        if(plateau[`${parseInt(posQueen[0]) + i}/${parseInt(posQueen[2]) + i}`] == 'empty'){
            document.getElementById(`${parseInt(posQueen[0]) + i}/${parseInt(posQueen[2]) + i}`).style.backgroundColor = 'lightpink';
        }
    }
    refreshDisplay();
}
const canIEat = ([player, enemy]) => {
    canIEatStatus = false;
    var position = ''
    removeEvents('playerTwo')
    removeEvents('playerOne');
    for(let i = 0; i < Object.keys(plateau).length; i++){
        if(plateau[listePlateau[i]] != 'empty' || plateau[listePlateau[i]] != undefined){
            if(plateau[listePlateau[i]].player == player){
                position = plateau[listePlateau[i]].position;
                if(player == 'playerTwo'){
                    devantDroite1 = `${parseInt(position[0]) + 1}/${parseInt(position[2]) + 1}`;
                    devantDroite2 = `${parseInt(position[0]) + 2}/${parseInt(position[2]) + 2}`;
                    devantGauche1 = `${parseInt(position[0]) + 1}/${parseInt(position[2]) - 1}`;
                    devantGauche2 = `${parseInt(position[0]) + 2}/${parseInt(position[2]) - 2}`;
                    arriereDroite1 = `${parseInt(position[0]) - 1}/${parseInt(position[2]) + 1}`;
                    arriereDroite2 = `${parseInt(position[0]) - 2}/${parseInt(position[2]) + 2}`;
                    arriereGauche1 = `${parseInt(position[0]) - 1}/${parseInt(position[2]) - 1}`;
                    arriereGauche2 = `${parseInt(position[0]) - 2}/${parseInt(position[2]) - 2}`;
                }
                else {
                    devantDroite1 = `${parseInt(position[0]) - 1}/${parseInt(position[2]) + 1}`;
                    devantDroite2 = `${parseInt(position[0]) - 2}/${parseInt(position[2]) + 2}`;
                    devantGauche1 = `${parseInt(position[0]) - 1}/${parseInt(position[2]) - 1}`;
                    devantGauche2 = `${parseInt(position[0]) - 2}/${parseInt(position[2]) - 2}`;
                    arriereDroite1 = `${parseInt(position[0]) + 1}/${parseInt(position[2]) + 1}`;
                    arriereDroite2 = `${parseInt(position[0]) + 2}/${parseInt(position[2]) + 2}`;
                    arriereGauche1 = `${parseInt(position[0]) + 1}/${parseInt(position[2]) - 1}`;
                    arriereGauche2 = `${parseInt(position[0]) + 2}/${parseInt(position[2]) - 2}`;
                }
                if(plateau[devantDroite1] != undefined){
                    if(plateau[devantDroite1].player == enemy && plateau[devantDroite2] == 'empty'){
                        console.log('le pion ' + position + ' peut manger en devantdroite2')
                        document.getElementById(`${devantDroite2}`).style.backgroundColor = 'lightgreen';
                        canIEatStatus = true;
                        plateau[position].eat(devantDroite2, position, devantDroite1);
                    }
                }
                if(plateau[devantGauche1] != undefined){
                    if(plateau[devantGauche1].player == enemy && plateau[devantGauche2] == 'empty'){
                        console.log('le pion ' + position + ' peut manger en devantgauche2')
                        document.getElementById(`${devantGauche2}`).style.backgroundColor = 'lightgreen';
                        canIEatStatus = true;
                        plateau[position].eat(devantGauche2, position, devantGauche1);
                    }
                }
                if(plateau[arriereDroite1] != undefined){
                    if(plateau[arriereDroite1].player == enemy && plateau[arriereDroite2] == 'empty'){
                        console.log('le pion ' + position + ' peut manger en arrieredroite2')
                        document.getElementById(`${arriereDroite2}`).style.backgroundColor = 'lightgreen';
                        canIEatStatus = true;
                        plateau[position].eat(arriereDroite2, position, arriereDroite1);
                    }
                }
                if(plateau[arriereGauche1] != undefined){
                    if(plateau[arriereGauche1].player == enemy && plateau[arriereGauche2] == 'empty'){
                        console.log('le pion ' + position + ' peut manger en arrieregauche2')
                        document.getElementById(`${arriereGauche2}`).style.backgroundColor = 'lightgreen';
                        canIEatStatus = true;
                        plateau[position].eat(arriereGauche2, position, arriereGauche1);
                    }
                }
            }
            
        } 
    }
    if(playerTurn[player] == true && canIEatStatus == false){
        console.log('on avance');
        player == 'playerOne' ? addEvents('playerOne') : addEvents('playerTwo')
    }
    
    //POUR CHAQUE PION ET CHAQUE REINE
    //SI UN PION ENNEMI EST PRESENT
    //ET
    //SI UN ESPACE POUR MANGER EST POSSIBLE,
    //ON ACTIVE L EVENT QUE POUR LES PIONS QUI PEUVENT MANGER
    //ON DOIT MANGER
    //TOUT AUTRE MOVE EST IMPOSSIBLE
    refreshDisplay();
    toggleTurn();
}
const canIEatAgain = (player, posEater) => {
    canIEatStatus = false;
    let enemy = '';
    let position = posEater;
    if(player == 'playerTwo'){
        devantDroite1 = `${parseInt(position[0]) + 1}/${parseInt(position[2]) + 1}`;
        devantDroite2 = `${parseInt(position[0]) + 2}/${parseInt(position[2]) + 2}`;
        devantGauche1 = `${parseInt(position[0]) + 1}/${parseInt(position[2]) - 1}`;
        devantGauche2 = `${parseInt(position[0]) + 2}/${parseInt(position[2]) - 2}`;
        arriereDroite1 = `${parseInt(position[0]) - 1}/${parseInt(position[2]) + 1}`;
        arriereDroite2 = `${parseInt(position[0]) - 2}/${parseInt(position[2]) + 2}`;
        arriereGauche1 = `${parseInt(position[0]) - 1}/${parseInt(position[2]) - 1}`;
        arriereGauche2 = `${parseInt(position[0]) - 2}/${parseInt(position[2]) - 2}`;
        enemy = 'playerOne';
    }
    else {
        devantDroite1 = `${parseInt(position[0]) - 1}/${parseInt(position[2]) + 1}`;
        devantDroite2 = `${parseInt(position[0]) - 2}/${parseInt(position[2]) + 2}`;
        devantGauche1 = `${parseInt(position[0]) - 1}/${parseInt(position[2]) - 1}`;
        devantGauche2 = `${parseInt(position[0]) - 2}/${parseInt(position[2]) - 2}`;
        arriereDroite1 = `${parseInt(position[0]) + 1}/${parseInt(position[2]) + 1}`;
        arriereDroite2 = `${parseInt(position[0]) + 2}/${parseInt(position[2]) + 2}`;
        arriereGauche1 = `${parseInt(position[0]) + 1}/${parseInt(position[2]) - 1}`;
        arriereGauche2 = `${parseInt(position[0]) + 2}/${parseInt(position[2]) - 2}`;
        enemy = 'playerTwo';
    }
    if(plateau[devantDroite1] != undefined){
        if(plateau[devantDroite1].player == enemy && plateau[devantDroite2] == 'empty'){
            console.log('le pion ' + position + ' peut manger en devantdroite2')
            document.getElementById(`${devantDroite2}`).style.backgroundColor = 'lightgreen';
            canIEatStatus = true;
            plateau[position].eat(devantDroite2, position, devantDroite1);
        }
    }
    if(plateau[devantGauche1] != undefined){
        if(plateau[devantGauche1].player == enemy && plateau[devantGauche2] == 'empty'){
            console.log('le pion ' + position + ' peut manger en devantgauche2')
            document.getElementById(`${devantGauche2}`).style.backgroundColor = 'lightgreen';
            canIEatStatus = true;
            plateau[position].eat(devantGauche2, position, devantGauche1);
        }
    }
    if(plateau[arriereDroite1] != undefined){
        if(plateau[arriereDroite1].player == enemy && plateau[arriereDroite2] == 'empty'){
            console.log('le pion ' + position + ' peut manger en arrieredroite2')
            document.getElementById(`${arriereDroite2}`).style.backgroundColor = 'lightgreen';
            canIEatStatus = true;
            plateau[position].eat(arriereDroite2, position, arriereDroite1);
        }
    }
    if(plateau[arriereGauche1] != undefined){
        if(plateau[arriereGauche1].player == enemy && plateau[arriereGauche2] == 'empty'){
            console.log('le pion ' + position + ' peut manger en arrieregauche2')
            document.getElementById(`${arriereGauche2}`).style.backgroundColor = 'lightgreen';
            canIEatStatus = true;
            plateau[position].eat(arriereGauche2, position, arriereGauche1);
        }
    }
    refreshDisplay()
}
const handlePossibleMove = ([player, position]) => {
    console.log(position)
    console.log(player)
    var enemy = ''
    if(player == 'playerTwo'){
        devantDroite1 = `${parseInt(position[0]) + 1}/${parseInt(position[2]) + 1}`;
        devantDroite2 = `${parseInt(position[0]) + 2}/${parseInt(position[2]) + 2}`;
        devantGauche1 = `${parseInt(position[0]) + 1}/${parseInt(position[2]) - 1}`;
        devantGauche2 = `${parseInt(position[0]) + 2}/${parseInt(position[2]) - 2}`;
        arriereDroite1 = `${parseInt(position[0]) - 1}/${parseInt(position[2]) + 1}`;
        arriereDroite2 = `${parseInt(position[0]) - 2}/${parseInt(position[2]) + 2}`;
        arriereGauche1 = `${parseInt(position[0]) - 1}/${parseInt(position[2]) - 1}`;
        arriereGauche2 = `${parseInt(position[0]) - 2}/${parseInt(position[2]) - 2}`;
        enemy = 'playerOne' 
    }
    else {
        devantDroite1 = `${parseInt(position[0]) - 1}/${parseInt(position[2]) + 1}`;
        devantDroite2 = `${parseInt(position[0]) - 2}/${parseInt(position[2]) + 2}`;
        devantGauche1 = `${parseInt(position[0]) - 1}/${parseInt(position[2]) - 1}`;
        devantGauche2 = `${parseInt(position[0]) - 2}/${parseInt(position[2]) - 2}`;
        arriereDroite1 = `${parseInt(position[0]) + 1}/${parseInt(position[2]) + 1}`;
        arriereDroite2 = `${parseInt(position[0]) + 2}/${parseInt(position[2]) + 2}`;
        arriereGauche1 = `${parseInt(position[0]) + 1}/${parseInt(position[2]) - 1}`;
        arriereGauche2 = `${parseInt(position[0]) + 2}/${parseInt(position[2]) - 2}`;
        enemy = 'playerTwo' 
    }
    let paire = [[devantDroite1, devantDroite2], [devantGauche1, devantGauche2], [arriereDroite1, arriereDroite2], [arriereGauche1, arriereGauche2]]
    for(let i = 0; i < paire.length; i++){
            if(plateau[paire[i][0]] != undefined){
                if(plateau[paire[0][0]] == 'empty'){
                    console.log(`${plateau[paire[0][0]]}`)
                    document.getElementById(`${paire[0][0]}`).style.backgroundColor = 'lightpink';
                    document.getElementById(`${paire[0][0]}`).setAttribute('onclick', `handleMove('${position}', '${paire[0][0]}', '${paire[1][0]}', '${player}')`)
                }
                if(plateau[paire[1][0]] == 'empty'){
                    console.log(`${plateau[paire[1][0]]}`)
                    document.getElementById(`${paire[1][0]}`).style.backgroundColor = 'lightpink';
                    document.getElementById(`${paire[1][0]}`).setAttribute('onclick', `handleMove('${position}', '${paire[1][0]}', '${paire[0][0]}', '${player}')`)
                }
            }
    };
}
const handleClickPion = (event, pos, whereToEat, posEnemy) =>{
    //console.log(event.target.parentElement.id)
    let posPion = `${event.target.parentElement.id}`
//POUR PIONS DU JOUEUR 2
    if(canIEatStatus == true){
        if(plateau[event.target.parentElement.id].player == 'playerTwo'){
            document.getElementById(`${whereToEat}`).style.backgroundColor = 'lightgreen';
            document.getElementById(`${whereToEat}`).setAttribute('onclick', `handlePrise('${pos}', '${posEnemy}', '${whereToEat}', 'playerTwo')`)
        }
        else{
            document.getElementById(`${whereToEat}`).style.backgroundColor = 'lightgreen';
            document.getElementById(`${whereToEat}`).setAttribute('onclick', `handlePrise('${pos}', '${posEnemy}', '${whereToEat}', 'playerOne')`)
        }
    }
    else{
     if(plateau[event.target.parentElement.id].player == 'playerTwo'){
        clearPossibleMove()
        handlePossibleMove(['playerTwo', posPion])
       
//POUR PIONS DU JOUEUR 1
    } else {
        clearPossibleMove()
        handlePossibleMove(['playerOne', posPion])
    }}
}



//Start Game
const startGame = () => {
    document.body.innerHTML = '<header><h1>Jeu de Dame</h1><h2 class="playerTurn">Tour du Joueur 1</h2></header><main class="plateau"></main>';
    //4 Lignes Du haut
    for(let i = 0; i < 4; i++){
        if(i%2 == 0){
            for(let j = 0; j < 10; j++){
                if(j%2 == 0){
                    document.querySelector('.plateau').innerHTML += `<div id="${i}/${j}" class="case blanc"></div>`;
                    plateau[`${i}/${j}`] = 'unplayable';
                }
                else {
                    document.querySelector('.plateau').innerHTML += `<div id="${i}/${j}" class="case noire"></div>`;
                    plateau[`${i}/${j}`] = new Pion('playerTwo', `${i}/${j}`);
                } 
                
                } 
            }
           else {
            for(let j = 0; j < 10; j++){
                if(j%2 == 0){
                    document.querySelector('.plateau').innerHTML += `<div id="${i}/${j}" class="case noire"></div>`; 
                    plateau[`${i}/${j}`] = new Pion('playerTwo', `${i}/${j}`)
                }
                else  {
                    document.querySelector('.plateau').innerHTML += `<div id="${i}/${j}" class="case blanc"></div>`;
                    plateau[`${i}/${j}`] = 'unplayable'; 
                }  
                }              
            }  
        }
    //2 Lignes du milieu
    for(let i = 4; i < 6; i++){
        if(i%2 == 0){
            for(let j = 0; j < 10; j++){
                if(j%2 == 0){
                    document.querySelector('.plateau').innerHTML += `<div id="${i}/${j}" class="case blanc"></div>`;
                    plateau[`${i}/${j}`] = 'unplayable';
                }
                else {
                    document.querySelector('.plateau').innerHTML += `<div id="${i}/${j}" class="case noire"></div>`;
                    plateau[`${i}/${j}`] = 'empty';
                } 
                } 
            }
           else {
            for(let j = 0; j < 10; j++){
                if(j%2 == 0){
                    document.querySelector('.plateau').innerHTML += `<div id="${i}/${j}" class="case noire"></div>`  
                    plateau[`${i}/${j}`] = 'empty';
                }
                else {
                    document.querySelector('.plateau').innerHTML += `<div id="${i}/${j}" class="case blanc"></div>`;
                    plateau[`${i}/${j}`] = 'unplayable';
                }  
                }              
            }  
        } 
    //4 Lignes du bas
    for(let i = 6; i < 10; i++){
        if(i%2 == 0){
            for(let j = 0; j < 10; j++){
                if(j%2 == 0){
                    document.querySelector('.plateau').innerHTML += `<div id="${i}/${j}" class="case blanc"></div>`;
                    plateau[`${i}/${j}`] = 'unplayable';
                }
                else {
                    document.querySelector('.plateau').innerHTML += `<div id="${i}/${j}" class="case noire"></div>`;
                    plateau[`${i}/${j}`] = new Pion('playerOne', `${i}/${j}`);
                } 
                } 
            }
           else {
            for(let j = 0; j < 10; j++){
                if(j%2 == 0){
                    document.querySelector('.plateau').innerHTML += `<div id="${i}/${j}" class="case noire"></div>`;
                    plateau[`${i}/${j}`] = new Pion('playerOne', `${i}/${j}`);
                }
                else {
                    document.querySelector('.plateau').innerHTML += `<div id="${i}/${j}" class="case blanc"></div>`; 
                    plateau[`${i}/${j}`] = 'unplayable';
                } 
                }              
            }  
    }  
// console.log(plateau[document.querySelector('.plateau').children[0].id]);
// console.log(document.querySelector('.plateau').children[1].id);
// console.log(document.querySelector('.plateau').children.length);
refreshDisplay()
removeEvents('playerTwo');
listePlateau = Object.keys(plateau);
}


//START GAME QUEEN TEST
const startGame = () => {
    document.body.innerHTML = '<header><h1>Jeu de Dame</h1><h2 class="playerTurn">Tour du Joueur 1</h2></header><main class="plateau"></main>';
    //4 Lignes Du haut
    for(let i = 0; i < 4; i++){
        if(i == 1){
            for(let j = 0; j < 10; j++){
                if(j%2 == 1){
                    document.querySelector('.plateau').innerHTML += `<div id="${i}/${j}" class="case blanc"></div>`;
                    plateau[`${i}/${j}`] = 'unplayable';
                }
                else {
                    document.querySelector('.plateau').innerHTML += `<div id="${i}/${j}" class="case noire"></div>`;
                    plateau[`${i}/${j}`] = new Pion('playerOne', `${i}/${j}`);
                } 
            }
        }
        else if(i%2 == 0){
            for(let j = 0; j < 10; j++){
                if(j%2 == 0){
                    document.querySelector('.plateau').innerHTML += `<div id="${i}/${j}" class="case blanc"></div>`;
                    plateau[`${i}/${j}`] = 'unplayable';
                }
                else {
                    document.querySelector('.plateau').innerHTML += `<div id="${i}/${j}" class="case noire"></div>`;
                    plateau[`${i}/${j}`] = 'empty';
                } 
                
                } 
            }
           else {
            for(let j = 0; j < 10; j++){
                
                if(j%2 == 0){
                    document.querySelector('.plateau').innerHTML += `<div id="${i}/${j}" class="case noire"></div>`; 
                    plateau[`${i}/${j}`] = 'empty'
                }
                else  {
                    document.querySelector('.plateau').innerHTML += `<div id="${i}/${j}" class="case blanc"></div>`;
                    plateau[`${i}/${j}`] = 'unplayable'; 
                }  
                }              
            }  
        }
    //2 Lignes du milieu
    for(let i = 4; i < 6; i++){
        if(i == 5){
            for(let j = 0; j < 10; j++){
                if(j%2 == 1){
                    document.querySelector('.plateau').innerHTML += `<div id="${i}/${j}" class="case blanc"></div>`;
                    plateau[`${i}/${j}`] = 'unplayable';
                }
                else {
                    document.querySelector('.plateau').innerHTML += `<div id="${i}/${j}" class="case noire"></div>`;
                    plateau[`${i}/${j}`] = new Pion('playerTwo', `${i}/${j}`);
                } 
            }
        }
        else if(i%2 == 0){
            for(let j = 0; j < 10; j++){
                if(j%2 == 0){
                    document.querySelector('.plateau').innerHTML += `<div id="${i}/${j}" class="case blanc"></div>`;
                    plateau[`${i}/${j}`] = 'unplayable';
                }
                else {
                    document.querySelector('.plateau').innerHTML += `<div id="${i}/${j}" class="case noire"></div>`;
                    plateau[`${i}/${j}`] = 'empty';
                } 
                } 
            }
           else {
            for(let j = 0; j < 10; j++){
                if(j%2 == 0){
                    document.querySelector('.plateau').innerHTML += `<div id="${i}/${j}" class="case noire"></div>`  
                    plateau[`${i}/${j}`] = 'empty';
                }
                else {
                    document.querySelector('.plateau').innerHTML += `<div id="${i}/${j}" class="case blanc"></div>`;
                    plateau[`${i}/${j}`] = 'unplayable';
                }  
                }              
            }  
        } 
    //4 Lignes du bas
    for(let i = 6; i < 10; i++){
       
        if(i%2 == 0){
            for(let j = 0; j < 10; j++){
                if(j%2 == 0){
                    document.querySelector('.plateau').innerHTML += `<div id="${i}/${j}" class="case blanc"></div>`;
                    plateau[`${i}/${j}`] = 'unplayable';
                }
                else {
                    document.querySelector('.plateau').innerHTML += `<div id="${i}/${j}" class="case noire"></div>`;
                    plateau[`${i}/${j}`] = 'empty';
                } 
                } 
            }
           else {
            for(let j = 0; j < 10; j++){
                if(j%2 == 0){
                    document.querySelector('.plateau').innerHTML += `<div id="${i}/${j}" class="case noire"></div>`;
                    plateau[`${i}/${j}`] = 'empty'
                }
                else {
                    document.querySelector('.plateau').innerHTML += `<div id="${i}/${j}" class="case blanc"></div>`; 
                    plateau[`${i}/${j}`] = 'unplayable';
                } 
                }              
            }  
    }  
// console.log(plateau[document.querySelector('.plateau').children[0].id]);
// console.log(document.querySelector('.plateau').children[1].id);
// console.log(document.querySelector('.plateau').children.length);
refreshDisplay()
removeEvents('playerTwo');
listePlateau = Object.keys(plateau);
}

//NEW SAVE QUEEN HIGHLIGHT POS POSSIBLES

//VARIABLES
let plateau = {}
let moveCount = 0;
let playerTurn = {
    playerOne: true,
    playerTwo: false
}
let canIEatStatus = false;
var listePlateau = 0;
//CLASSE
class Pion {
    constructor(player, position){
        this.player = player;
        this.position = position;
        this.type = 'pion'
        this.setPion()
    }
    //selected = false;
    promoteToQueen(){
        this.type = 'queen'
    }
    setPion(){
        if(this.type == 'pion'){
            if(this.player == 'playerOne'){
                this.html = '<div onclick="handleClickPion(event)" class="pion j1pion"></div>';
            }
            else this.html = '<div onclick="handleClickPion(event)" class="pion j2pion"></div>';
        }
        else {
            if(this.player == 'playerOne'){
                this.html = '<div onclick="handleClickPion(event)" class="pion j1queen"><img class=\'crown1\'src="./img/couronne1.png" alt=""></div>';
            }
            else this.html = '<div onclick="handleClickPion(event)" class="pion j2queen"><img class=\'crown2\'src="./img/couronne2.png" alt=""></div>';    
        }
       
    }
    eat(whereToEat, prevousPos, posEnemy){
        if(this.type == 'pion'){
            if(this.player == 'playerOne'){
                this.html = `<div onclick="handleClickPion(event, '${prevousPos}', '${whereToEat}', '${posEnemy}', 'playerOne')" class="pion j1pion"></div>`;
            }
            else this.html = `<div onclick="handleClickPion(event, '${prevousPos}', '${whereToEat}', '${posEnemy}', 'playerTwo')" class="pion j2pion"></div>`;    
        }
        else {
            alert('in progress');
        }
        }
    unset(){
        if(this.type == 'pion'){
            if(this.player == 'playerOne'){
                this.html = '<div class="pion j1pion"></div>';
            }
            else this.html = '<div class="pion j2pion"></div>';
        }
        else {
            if(this.player == 'playerOne'){
                this.html = '<div class="pion j1queen"><img class=\'crown1\'src="./img/couronne1.png" alt=""></div>';
            }
            else this.html = '<div class="pion j2queen"><img class=\'crown2\'src="./img/couronne2.png" alt=""></div>';
        }
    }
}
//FONCTIONS
const startGame = () => {
    document.body.innerHTML = '<header><h1>Jeu de Dame</h1><h2 class="playerTurn">Tour du Joueur 1</h2></header><main class="plateau"></main>';
    //4 Lignes Du haut
    for(let i = 0; i < 4; i++){
        if(i == 1){
            for(let j = 0; j < 10; j++){
                if(j%2 == 1){
                    document.querySelector('.plateau').innerHTML += `<div id="${i}/${j}" class="case blanc"></div>`;
                    plateau[`${i}/${j}`] = 'unplayable';
                }
                else {
                    document.querySelector('.plateau').innerHTML += `<div id="${i}/${j}" class="case noire"></div>`;
                    plateau[`${i}/${j}`] = new Pion('playerOne', `${i}/${j}`);
                } 
            }
        }
        else if(i%2 == 0){
            for(let j = 0; j < 10; j++){
                if(j%2 == 0){
                    document.querySelector('.plateau').innerHTML += `<div id="${i}/${j}" class="case blanc"></div>`;
                    plateau[`${i}/${j}`] = 'unplayable';
                }
                else {
                    document.querySelector('.plateau').innerHTML += `<div id="${i}/${j}" class="case noire"></div>`;
                    plateau[`${i}/${j}`] = 'empty';
                } 
                
                } 
            }
           else {
            for(let j = 0; j < 10; j++){
                
                if(j%2 == 0){
                    document.querySelector('.plateau').innerHTML += `<div id="${i}/${j}" class="case noire"></div>`; 
                    plateau[`${i}/${j}`] = 'empty'
                }
                else  {
                    document.querySelector('.plateau').innerHTML += `<div id="${i}/${j}" class="case blanc"></div>`;
                    plateau[`${i}/${j}`] = 'unplayable'; 
                }  
                }              
            }  
        }
    //2 Lignes du milieu
    for(let i = 4; i < 6; i++){
        if(i == 5){
            for(let j = 0; j < 10; j++){
                if(j%2 == 1){
                    document.querySelector('.plateau').innerHTML += `<div id="${i}/${j}" class="case blanc"></div>`;
                    plateau[`${i}/${j}`] = 'unplayable';
                }
                else {
                    document.querySelector('.plateau').innerHTML += `<div id="${i}/${j}" class="case noire"></div>`;
                    plateau[`${i}/${j}`] = new Pion('playerTwo', `${i}/${j}`);
                } 
            }
        }
        else if(i%2 == 0){
            for(let j = 0; j < 10; j++){
                if(j%2 == 0){
                    document.querySelector('.plateau').innerHTML += `<div id="${i}/${j}" class="case blanc"></div>`;
                    plateau[`${i}/${j}`] = 'unplayable';
                }
                else {
                    document.querySelector('.plateau').innerHTML += `<div id="${i}/${j}" class="case noire"></div>`;
                    plateau[`${i}/${j}`] = 'empty';
                } 
                } 
            }
           else {
            for(let j = 0; j < 10; j++){
                if(j%2 == 0){
                    document.querySelector('.plateau').innerHTML += `<div id="${i}/${j}" class="case noire"></div>`  
                    plateau[`${i}/${j}`] = 'empty';
                }
                else {
                    document.querySelector('.plateau').innerHTML += `<div id="${i}/${j}" class="case blanc"></div>`;
                    plateau[`${i}/${j}`] = 'unplayable';
                }  
                }              
            }  
        } 
    //4 Lignes du bas
    for(let i = 6; i < 10; i++){
       
        if(i%2 == 0){
            for(let j = 0; j < 10; j++){
                if(j%2 == 0){
                    document.querySelector('.plateau').innerHTML += `<div id="${i}/${j}" class="case blanc"></div>`;
                    plateau[`${i}/${j}`] = 'unplayable';
                }
                else {
                    document.querySelector('.plateau').innerHTML += `<div id="${i}/${j}" class="case noire"></div>`;
                    plateau[`${i}/${j}`] = 'empty';
                } 
                } 
            }
           else {
            for(let j = 0; j < 10; j++){
                if(j%2 == 0){
                    document.querySelector('.plateau').innerHTML += `<div id="${i}/${j}" class="case noire"></div>`;
                    plateau[`${i}/${j}`] = 'empty'
                }
                else {
                    document.querySelector('.plateau').innerHTML += `<div id="${i}/${j}" class="case blanc"></div>`; 
                    plateau[`${i}/${j}`] = 'unplayable';
                } 
                }              
            }  
    }  
// console.log(plateau[document.querySelector('.plateau').children[0].id]);
// console.log(document.querySelector('.plateau').children[1].id);
// console.log(document.querySelector('.plateau').children.length);
refreshDisplay()
removeEvents('playerTwo');
listePlateau = Object.keys(plateau);
}
const removeEvents = (player) => {
    for (const key in plateau) {
     if (typeof(plateau[key]) == 'object' && plateau[key].player == player) {
         if(player == 'playerOne'){
             plateau[key].unset();
         }
         else {
             plateau[key].unset();
         }
          };
     }
     refreshDisplay();
 }
 const addEvents = (player) => {
     for (const key in plateau) {
      if (typeof(plateau[key]) == 'object' && plateau[key].player == player) {
          if(player == 'playerOne'){
             plateau[key].setPion();
          }
          else {
             plateau[key].setPion();
          }
           };
      }
      refreshDisplay();
  }
 const toggleTurn = () => {
     if(moveCount > 0 && canIEatStatus == false){
         if(playerTurn.playerTwo == true){
             document.querySelector('.playerTurn').textContent = 'Tour du Joueur 1';
             removeEvents('playerTwo');
             playerTurn.playerOne = !playerTurn.playerOne;
             playerTurn.playerTwo = !playerTurn.playerTwo; 
             moveCount = 0;
             canIEat(['playerOne', 'playerTwo']);
             
         } 
         else {
             document.querySelector('.playerTurn').textContent = 'Tour du Joueur 2';
             removeEvents('playerOne');
             playerTurn.playerOne = !playerTurn.playerOne;
             playerTurn.playerTwo = !playerTurn.playerTwo; 
             moveCount = 0;
             canIEat(['playerTwo', 'playerOne']); 
         }
     }
     }
const refreshDisplay = () => {
    // console.table(plateau);
    for(let i = 0; i < document.querySelector('.plateau').children.length; i++){
            if(plateau[document.querySelector('.plateau').children[i].id] !== 'empty' && plateau[document.querySelector('.plateau').children[i].id] !== 'unplayable'){
                document.querySelector('.plateau').children[i].innerHTML = plateau[document.querySelector('.plateau').children[i].id].html
                // console.log(plateau[document.querySelector('.plateau').children[i].id].html)
            }
            else document.querySelector('.plateau').children[i].innerHTML = plateau[document.querySelector('.plateau').children[i].id].innerHTML = null
    }
        
} 
const clearPossibleMove = () => {
    for(let i = 0; i < document.querySelector('.plateau').children.length; i++){ // clear Toutes les cases qui ont 'empty' sur le plateau
        if(plateau[document.querySelector('.plateau').children[i].id] == 'empty'){
            document.querySelector('.plateau').children[i].style.backgroundColor = 'darkslateblue';
        }
    }
}
//FONCTIONS CLIQUE ET MOUVEMENT
const handleClickPion = (event, pos, whereToEat, posEnemy) =>{
    //console.log(event.target.parentElement.id)
    let posPion = `${event.target.parentElement.id}`
    //CAS ou on doit manger
    if(canIEatStatus == true){
        //cas ou le pion cliqué est un pion
        if(plateau[posPion].type == 'pion'){
            if(plateau[event.target.parentElement.id].player == 'playerTwo'){
                document.getElementById(`${whereToEat}`).style.backgroundColor = 'lightgreen';
                document.getElementById(`${whereToEat}`).setAttribute('onclick', `handlePrise('${pos}', '${posEnemy}', '${whereToEat}', 'playerTwo')`)
            }
            else{
                document.getElementById(`${whereToEat}`).style.backgroundColor = 'lightgreen';
                document.getElementById(`${whereToEat}`).setAttribute('onclick', `handlePrise('${pos}', '${posEnemy}', '${whereToEat}', 'playerOne')`)
            }
        }
        //cas ou le pion cliqué est une queen
        else if(plateau[posPion].type == 'queen'){

        }
       
    }
    //CAS ou on ne doit pas manger
    else{
        //cas ou le pion cliqué est un pion
        if(plateau[event.target.parentElement.id].type == 'pion'){
            if(plateau[event.target.parentElement.id].player == 'playerTwo'){
                clearPossibleMove()
                handlePossibleMove(['playerTwo', posPion])
            } else {
                clearPossibleMove()
                handlePossibleMove(['playerOne', posPion])
            }
        }
        //cas ou le pion cliqué est une queen
        else if(plateau[event.target.parentElement.id].type == 'queen'){
            if(plateau[event.target.parentElement.id].player == 'playerTwo'){
                clearPossibleMove()
                handlePossibleMoveQueen(['playerTwo', posPion])
            } else {
                clearPossibleMove()
                handlePossibleMoveQueen(['playerOne', posPion])
            }
        }
     }
}
const handleMove = (previousPos, newPos, otherPossiblePos, player) => {
    clearPossibleMove()
    moveCount += 1;
    isQueen([player, newPos]);
    
    plateau[previousPos] = 'empty';
    refreshDisplay();
    document.getElementById(previousPos).removeAttribute('onclick');
    if(document.getElementById(otherPossiblePos) != null){
        document.getElementById(otherPossiblePos).removeAttribute('onclick');
    }
    document.getElementById(newPos).removeAttribute('onclick');
    toggleTurn()

}

const handlePrise = (previousPos, posTarget, newPos, playerKiller) => {
    clearPossibleMove();
    moveCount += 1;
    isQueen([playerKiller, newPos]);
    let enemy = '';
    if(playerKiller == 'playerOne') {
        enemy = 'playerTwo';
    }
    else {
        enemy = 'playerOne';
    }
    plateau[previousPos] = 'empty';
    plateau[posTarget] = 'empty';
    refreshDisplay();
    document.getElementById(previousPos).removeAttribute('onclick');
    document.getElementById(newPos).removeAttribute('onclick');
    canIEatAgain(playerKiller, newPos);
    toggleTurn();
}
const handlePossibleMoveQueen = ([player, posQueen]) => {
    for(let i = 1; i < 9; i++){
        if(plateau[`${parseInt(posQueen[0]) + i}/${parseInt(posQueen[2]) + i}`] == 'empty'){
            document.getElementById(`${parseInt(posQueen[0]) + i}/${parseInt(posQueen[2]) + i}`).style.backgroundColor = 'lightpink';
        }
    }
    refreshDisplay();
}
const handlePossibleMove = ([player, position]) => {
    console.log(position)
    console.log(player)
    var enemy = ''
    if(player == 'playerTwo'){
        devantDroite1 = `${parseInt(position[0]) + 1}/${parseInt(position[2]) + 1}`;
        devantDroite2 = `${parseInt(position[0]) + 2}/${parseInt(position[2]) + 2}`;
        devantGauche1 = `${parseInt(position[0]) + 1}/${parseInt(position[2]) - 1}`;
        devantGauche2 = `${parseInt(position[0]) + 2}/${parseInt(position[2]) - 2}`;
        arriereDroite1 = `${parseInt(position[0]) - 1}/${parseInt(position[2]) + 1}`;
        arriereDroite2 = `${parseInt(position[0]) - 2}/${parseInt(position[2]) + 2}`;
        arriereGauche1 = `${parseInt(position[0]) - 1}/${parseInt(position[2]) - 1}`;
        arriereGauche2 = `${parseInt(position[0]) - 2}/${parseInt(position[2]) - 2}`;
        enemy = 'playerOne' 
    }
    else {
        devantDroite1 = `${parseInt(position[0]) - 1}/${parseInt(position[2]) + 1}`;
        devantDroite2 = `${parseInt(position[0]) - 2}/${parseInt(position[2]) + 2}`;
        devantGauche1 = `${parseInt(position[0]) - 1}/${parseInt(position[2]) - 1}`;
        devantGauche2 = `${parseInt(position[0]) - 2}/${parseInt(position[2]) - 2}`;
        arriereDroite1 = `${parseInt(position[0]) + 1}/${parseInt(position[2]) + 1}`;
        arriereDroite2 = `${parseInt(position[0]) + 2}/${parseInt(position[2]) + 2}`;
        arriereGauche1 = `${parseInt(position[0]) + 1}/${parseInt(position[2]) - 1}`;
        arriereGauche2 = `${parseInt(position[0]) + 2}/${parseInt(position[2]) - 2}`;
        enemy = 'playerTwo' 
    }
    let paire = [[devantDroite1, devantDroite2], [devantGauche1, devantGauche2], [arriereDroite1, arriereDroite2], [arriereGauche1, arriereGauche2]]
    for(let i = 0; i < paire.length; i++){
            if(plateau[paire[i][0]] != undefined){
                if(plateau[paire[0][0]] == 'empty'){
                    // console.log(`${plateau[paire[0][0]]}`)
                    document.getElementById(`${paire[0][0]}`).style.backgroundColor = 'lightpink';
                    document.getElementById(`${paire[0][0]}`).setAttribute('onclick', `handleMove('${position}', '${paire[0][0]}', '${paire[1][0]}', '${player}')`)
                }
                if(plateau[paire[1][0]] == 'empty'){
                    // console.log(`${plateau[paire[1][0]]}`)
                    document.getElementById(`${paire[1][0]}`).style.backgroundColor = 'lightpink';
                    document.getElementById(`${paire[1][0]}`).setAttribute('onclick', `handleMove('${position}', '${paire[1][0]}', '${paire[0][0]}', '${player}')`)
                }
            }
    };
}

//FONCTIONS DE VERIFICATION DE PRISE OBLIGATOIRE
const canIEat = ([player, enemy]) => {
    canIEatStatus = false;
    var position = ''
    removeEvents('playerTwo')
    removeEvents('playerOne');
    for(let i = 0; i < Object.keys(plateau).length; i++){
        if(plateau[listePlateau[i]] != 'empty' || plateau[listePlateau[i]] != undefined){
            if(plateau[listePlateau[i]].player == player){
                position = plateau[listePlateau[i]].position;
                //cas pion
                if(plateau[position].type == 'pion'){
                    console.log('can i eat pion');
                    if(player == 'playerTwo'){
                        devantDroite1 = `${parseInt(position[0]) + 1}/${parseInt(position[2]) + 1}`;
                        devantDroite2 = `${parseInt(position[0]) + 2}/${parseInt(position[2]) + 2}`;
                        devantGauche1 = `${parseInt(position[0]) + 1}/${parseInt(position[2]) - 1}`;
                        devantGauche2 = `${parseInt(position[0]) + 2}/${parseInt(position[2]) - 2}`;
                        arriereDroite1 = `${parseInt(position[0]) - 1}/${parseInt(position[2]) + 1}`;
                        arriereDroite2 = `${parseInt(position[0]) - 2}/${parseInt(position[2]) + 2}`;
                        arriereGauche1 = `${parseInt(position[0]) - 1}/${parseInt(position[2]) - 1}`;
                        arriereGauche2 = `${parseInt(position[0]) - 2}/${parseInt(position[2]) - 2}`;
                    }
                    else {
                        devantDroite1 = `${parseInt(position[0]) - 1}/${parseInt(position[2]) + 1}`;
                        devantDroite2 = `${parseInt(position[0]) - 2}/${parseInt(position[2]) + 2}`;
                        devantGauche1 = `${parseInt(position[0]) - 1}/${parseInt(position[2]) - 1}`;
                        devantGauche2 = `${parseInt(position[0]) - 2}/${parseInt(position[2]) - 2}`;
                        arriereDroite1 = `${parseInt(position[0]) + 1}/${parseInt(position[2]) + 1}`;
                        arriereDroite2 = `${parseInt(position[0]) + 2}/${parseInt(position[2]) + 2}`;
                        arriereGauche1 = `${parseInt(position[0]) + 1}/${parseInt(position[2]) - 1}`;
                        arriereGauche2 = `${parseInt(position[0]) + 2}/${parseInt(position[2]) - 2}`;
                    }
                    if(plateau[devantDroite1] != undefined){
                        if(plateau[devantDroite1].player == enemy && plateau[devantDroite2] == 'empty'){
                            console.log('le pion ' + position + ' peut manger en devantdroite2')
                            document.getElementById(`${devantDroite2}`).style.backgroundColor = 'lightgreen';
                            canIEatStatus = true;
                            plateau[position].eat(devantDroite2, position, devantDroite1);
                        }
                    }
                    if(plateau[devantGauche1] != undefined){
                        if(plateau[devantGauche1].player == enemy && plateau[devantGauche2] == 'empty'){
                            console.log('le pion ' + position + ' peut manger en devantgauche2')
                            document.getElementById(`${devantGauche2}`).style.backgroundColor = 'lightgreen';
                            canIEatStatus = true;
                            plateau[position].eat(devantGauche2, position, devantGauche1);
                        }
                    }
                    if(plateau[arriereDroite1] != undefined){
                        if(plateau[arriereDroite1].player == enemy && plateau[arriereDroite2] == 'empty'){
                            console.log('le pion ' + position + ' peut manger en arrieredroite2')
                            document.getElementById(`${arriereDroite2}`).style.backgroundColor = 'lightgreen';
                            canIEatStatus = true;
                            plateau[position].eat(arriereDroite2, position, arriereDroite1);
                        }
                    }
                    if(plateau[arriereGauche1] != undefined){
                        if(plateau[arriereGauche1].player == enemy && plateau[arriereGauche2] == 'empty'){
                            console.log('le pion ' + position + ' peut manger en arrieregauche2')
                            document.getElementById(`${arriereGauche2}`).style.backgroundColor = 'lightgreen';
                            canIEatStatus = true;
                            plateau[position].eat(arriereGauche2, position, arriereGauche1);
                        }
                    }
                }
                //cas queen
                else if(plateau[position].type == 'queen'){
                    console.log('can i eat queen');
                    for (let i = 1; i < 5; i++) {
                        let decalage = 0;
                        switch(i){
                            case 1:
                                console.log('case 1');
                                //haut gauche
                                if (parseInt(position[0]) != 0) {
                                    decalage = 1;
                                let posLibre = '';
                                for (let j = parseInt(position[0]) - 1; j < 10; j--) {
                                    if(parseInt(position[2]) == 0){
                                        console.log('break 4')
                                        break;
                                    }
                                    if(posLibre == ''){
                                        var posTestee = `${j}/${parseInt(position[2]) - decalage}`;
                                    }
                                    console.log(posTestee);
                                    if(plateau[posTestee] != undefined && plateau[posTestee].player == enemy){
                                        var posTarget = posTestee;
                                        console.log('Il y a un enemy en ' + posTarget)
                                        console.log(decalage)
                                        decalage = 1;
                                        posLibre = `${parseInt(posTarget[0]) - decalage}/${parseInt(posTarget[2]) - decalage}`;
                                        if (posLibre != undefined && posLibre == 'empty') {
                                            break;
                                        }
                                        else{
                                            canIEatStatus = true;
                                            do {
                                                console.log('do')
                                                console.log('La queen peut manger en ' + posLibre);
                                                document.getElementById(posLibre).style.backgroundColor = 'lightgreen';
                                                decalage += 1;
                                                posLibre = `${parseInt(posTarget[0]) - decalage}/${parseInt(posTarget[2]) - decalage}`;
                                                if(plateau[posLibre] == undefined){
                                                    break;
                                                }
                                                document.getElementById(posLibre).style.backgroundColor = 'lightgreen';
                                            } while (plateau[posLibre] == 'empty');
                                        }break;       
                                    }
                                    else if(plateau[posTestee].player == player){
                                        break;
                                    }
                                decalage += 1;
                                }
                            }
                            break; 
                            case 2:
                                console.log('case 2');
                                //haut droite
                                if (parseInt(position[0]) != 0) {
                                    decalage = 1;
                                let posLibre = '';
                                for (let j = parseInt(position[0]) - 1; j < 10; j--) {
                                    if(parseInt(position[2]) == 9){
                                        console.log('break 4')
                                        break;
                                    }
                                    if(posLibre == ''){
                                        var posTestee = `${j}/${parseInt(position[2]) + decalage}`;
                                    }
                                    console.log(posTestee);
                                    if(plateau[posTestee] != undefined && plateau[posTestee].player == enemy){
                                        var posTarget = posTestee;
                                        console.log('Il y a un enemy en ' + posTarget)
                                        console.log(decalage)
                                        decalage = 1;
                                        posLibre = `${parseInt(posTarget[0]) - decalage}/${parseInt(posTarget[2]) + decalage}`;
                                        if (posLibre != undefined && posLibre == 'empty') {
                                            break;
                                        }
                                        else{
                                            canIEatStatus = true;
                                            do {
                                                console.log('do')
                                                console.log('La queen peut manger en ' + posLibre);
                                                document.getElementById(posLibre).style.backgroundColor = 'lightgreen';
                                                decalage += 1;
                                                posLibre = `${parseInt(posTarget[0]) - decalage}/${parseInt(posTarget[2]) + decalage}`;
                                                if(plateau[posLibre] == undefined){
                                                    break;
                                                }
                                                document.getElementById(posLibre).style.backgroundColor = 'lightgreen';
                                            } while (plateau[posLibre] == 'empty');
                                        }break;         
                                    }
                                    else if(plateau[posTestee].player == player){
                                        break;
                                    }
                                decalage += 1;
                                }
                            }
                            break; 
                            case 3:
                                console.log('case 3');
                                //bas droite
                                if (parseInt(position[0]) != 9) {
                                    decalage = 1;
                                let posLibre = '';
                                for (let j = parseInt(position[0]) + 1; j < 10; j++) {
                                    if(parseInt(position[2]) == 9){
                                        console.log('break 4')
                                        break;
                                    }
                                    if(posLibre == ''){
                                        var posTestee = `${j}/${parseInt(position[2]) + decalage}`;
                                    }
                                    console.log(posTestee);
                                    if(plateau[posTestee] != undefined && plateau[posTestee].player == enemy){
                                        var posTarget = posTestee;
                                        console.log('Il y a un enemy en ' + posTarget)
                                        console.log(decalage)
                                        decalage = 1;
                                        posLibre = `${parseInt(posTarget[0]) + decalage}/${parseInt(posTarget[2]) + decalage}`;
                                        if (posLibre != undefined && posLibre == 'empty') {
                                            break;
                                        }
                                        else{
                                            canIEatStatus = true;
                                            do {
                                                console.log('do')
                                                console.log('La queen peut manger en ' + posLibre);
                                                document.getElementById(posLibre).style.backgroundColor = 'lightgreen';
                                                decalage += 1;
                                                posLibre = `${parseInt(posTarget[0]) + decalage}/${parseInt(posTarget[2]) + decalage}`;
                                                if(plateau[posLibre] == undefined){
                                                    break;
                                                }
                                                document.getElementById(posLibre).style.backgroundColor = 'lightgreen';
                                            } while (plateau[posLibre] == 'empty');
                                        }break;              
                                    }
                                    else if(plateau[posTestee].player == player){
                                        break;
                                    }
                                decalage += 1;
                                }
                            }
                            break; 
                            case 4:
                                console.log('case 4');
                                //bas gauche
                                if (parseInt(position[0]) != 9) {
                                    decalage = 1;
                                let posLibre = '';
                                for (let j = parseInt(position[0]) + 1; j < 10; j++) {
                                    if(parseInt(position[2]) == 0){
                                        console.log('break 4')
                                        break;
                                    }
                                    if(posLibre == ''){
                                        var posTestee = `${j}/${parseInt(position[2]) - decalage}`;
                                    }
                                    console.log(posTestee);
                                    if(plateau[posTestee] != undefined && plateau[posTestee].player == enemy){
                                        var posTarget = posTestee;
                                        console.log('Il y a un enemy en ' + posTarget)
                                        console.log(decalage)
                                        decalage = 1;
                                        posLibre = `${parseInt(posTarget[0]) + decalage}/${parseInt(posTarget[2]) - decalage}`;
                                        if (posLibre != undefined && posLibre == 'empty') {
                                            break;
                                        }
                                        else{
                                            canIEatStatus = true;
                                            do {
                                                console.log('do')
                                                console.log('La queen peut manger en ' + posLibre);
                                                document.getElementById(posLibre).style.backgroundColor = 'lightgreen';
                                                decalage += 1;
                                                posLibre = `${parseInt(posTarget[0]) + decalage}/${parseInt(posTarget[2]) - decalage}`;
                                                if(plateau[posLibre] == undefined){
                                                    break;
                                                }
                                                document.getElementById(posLibre).style.backgroundColor = 'lightgreen';
                                            } while (plateau[posLibre] == 'empty');
                                        }break; 
                                                        
                                    }
                                    else if(plateau[posTestee].player == player){
                                        break;
                                    }
                                decalage += 1;
                                }
                             
                            }
                            break;    
                        }
                    }
                }
            }
            
        } 
    }
    if(playerTurn[player] == true && canIEatStatus == false){
        player == 'playerOne' ? addEvents('playerOne') : addEvents('playerTwo')
    }
    
    //POUR CHAQUE PION ET CHAQUE REINE
    //SI UN PION ENNEMI EST PRESENT
    //ET
    //SI UN ESPACE POUR MANGER EST POSSIBLE,
    //ON ACTIVE L EVENT QUE POUR LES PIONS QUI PEUVENT MANGER
    //ON DOIT MANGER
    //TOUT AUTRE MOVE EST IMPOSSIBLE
    refreshDisplay();
    toggleTurn();
}
const canIEatAgain = (player, posEater) => {
    canIEatStatus = false;
    let enemy = '';
    let position = posEater;
    if(plateau[posEater].type == 'pion'){
        if(player == 'playerTwo'){
            devantDroite1 = `${parseInt(position[0]) + 1}/${parseInt(position[2]) + 1}`;
            devantDroite2 = `${parseInt(position[0]) + 2}/${parseInt(position[2]) + 2}`;
            devantGauche1 = `${parseInt(position[0]) + 1}/${parseInt(position[2]) - 1}`;
            devantGauche2 = `${parseInt(position[0]) + 2}/${parseInt(position[2]) - 2}`;
            arriereDroite1 = `${parseInt(position[0]) - 1}/${parseInt(position[2]) + 1}`;
            arriereDroite2 = `${parseInt(position[0]) - 2}/${parseInt(position[2]) + 2}`;
            arriereGauche1 = `${parseInt(position[0]) - 1}/${parseInt(position[2]) - 1}`;
            arriereGauche2 = `${parseInt(position[0]) - 2}/${parseInt(position[2]) - 2}`;
            enemy = 'playerOne';
        }
        else {
            devantDroite1 = `${parseInt(position[0]) - 1}/${parseInt(position[2]) + 1}`;
            devantDroite2 = `${parseInt(position[0]) - 2}/${parseInt(position[2]) + 2}`;
            devantGauche1 = `${parseInt(position[0]) - 1}/${parseInt(position[2]) - 1}`;
            devantGauche2 = `${parseInt(position[0]) - 2}/${parseInt(position[2]) - 2}`;
            arriereDroite1 = `${parseInt(position[0]) + 1}/${parseInt(position[2]) + 1}`;
            arriereDroite2 = `${parseInt(position[0]) + 2}/${parseInt(position[2]) + 2}`;
            arriereGauche1 = `${parseInt(position[0]) + 1}/${parseInt(position[2]) - 1}`;
            arriereGauche2 = `${parseInt(position[0]) + 2}/${parseInt(position[2]) - 2}`;
            enemy = 'playerTwo';
        }
        if(plateau[devantDroite1] != undefined){
            if(plateau[devantDroite1].player == enemy && plateau[devantDroite2] == 'empty'){
                console.log('le pion ' + position + ' peut manger en devantdroite2')
                document.getElementById(`${devantDroite2}`).style.backgroundColor = 'lightgreen';
                canIEatStatus = true;
                plateau[position].eat(devantDroite2, position, devantDroite1);
            }
        }
        if(plateau[devantGauche1] != undefined){
            if(plateau[devantGauche1].player == enemy && plateau[devantGauche2] == 'empty'){
                console.log('le pion ' + position + ' peut manger en devantgauche2')
                document.getElementById(`${devantGauche2}`).style.backgroundColor = 'lightgreen';
                canIEatStatus = true;
                plateau[position].eat(devantGauche2, position, devantGauche1);
            }
        }
        if(plateau[arriereDroite1] != undefined){
            if(plateau[arriereDroite1].player == enemy && plateau[arriereDroite2] == 'empty'){
                console.log('le pion ' + position + ' peut manger en arrieredroite2')
                document.getElementById(`${arriereDroite2}`).style.backgroundColor = 'lightgreen';
                canIEatStatus = true;
                plateau[position].eat(arriereDroite2, position, arriereDroite1);
            }
        }
        if(plateau[arriereGauche1] != undefined){
            if(plateau[arriereGauche1].player == enemy && plateau[arriereGauche2] == 'empty'){
                console.log('le pion ' + position + ' peut manger en arrieregauche2')
                document.getElementById(`${arriereGauche2}`).style.backgroundColor = 'lightgreen';
                canIEatStatus = true;
                plateau[position].eat(arriereGauche2, position, arriereGauche1);
            }
        }
    }
    else if(plateau[posEater].type == 'queen'){

    }
    
    refreshDisplay()
}
const isQueen = ([player, newPos]) => {
     //gere la promotion Queen
     if(player == 'playerTwo' && newPos[0] == 9){
        plateau[newPos] = new Pion(player, newPos);
        plateau[newPos].promoteToQueen();
    }
    else if(player == 'playerOne' && newPos[0] == 0){
        plateau[newPos] = new Pion(player, newPos);
        plateau[newPos].promoteToQueen();
    }
    else {
        if(plateau[newPos].type == 'queen'){
            plateau[newPos] = new Pion(player, newPos);
            plateau[newPos].promoteToQueen();
        }
        else
        plateau[newPos] = new Pion(player, newPos);
    }
}



