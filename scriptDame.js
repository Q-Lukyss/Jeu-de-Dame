
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
            console.log(whereToEat)
            console.log(typeof(whereToEat))
            if(this.player == 'playerOne'){
                this.html = `<div onclick="handleClickPion(event, '${prevousPos}', '${whereToEat}', '${posEnemy}', 'playerOne')" class="pion j1queen"><img class=\'crown1\'src="./img/couronne1.png" alt=""></div>`;
            }
            else this.html = `<div onclick="handleClickPion(event, '${prevousPos}', '${whereToEat}', '${posEnemy}', 'playerTwo')" class="pion j2queen"><img class=\'crown2\'src="./img/couronne2.png" alt=""></div>`;    
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
            document.querySelector('.plateau').children[i].removeAttribute('onclick')
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
        if(plateau[pos].type == 'pion'){
            clearPossibleMove()
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
        else if(plateau[pos].type == 'queen'){
            clearPossibleMove()
            whereToEat = whereToEat.split(',') //obligé de passer l'array en string pour ne pas executer les calculs de postion type 6/7, on repasse ici en array
            // console.log(whereToEat)
            // console.table(whereToEat)
            // console.log(typeof(whereToEat))
            whereToEat.forEach(element => {
                if(plateau[pos].player == 'playerTwo'){
                    document.getElementById(`${element}`).style.backgroundColor = 'lightgreen';
                    document.getElementById(`${element}`).setAttribute('onclick', `handlePrise('${pos}', '${posEnemy}', '${element}', 'playerTwo')`)
                }
                else{
                    document.getElementById(`${element}`).style.backgroundColor = 'lightgreen';
                    document.getElementById(`${element}`).setAttribute('onclick', `handlePrise('${pos}', '${posEnemy}', '${element}', 'playerOne')`)
                }
            });
        }
       
    }
    //CAS ou on ne doit pas manger
    else{
        //cas ou le pion cliqué est un pion
        console.log(posPion)
        console.log(event.target.parentElement.id)
        console.log(event.target.parentElement.parentElement.id)
        //cas ou le pion cliqué est une queen
        if(plateau[event.target.parentElement.id] == undefined){
            if(plateau[event.target.parentElement.parentElement.id].type == 'queen'){
                posPion = `${event.target.parentElement.parentElement.id}`
                if(plateau[event.target.parentElement.parentElement.id].player == 'playerTwo'){
                    clearPossibleMove()
                    handlePossibleMoveQueen(['playerTwo', posPion])
                } else {
                    clearPossibleMove()
                    handlePossibleMoveQueen(['playerOne', posPion])
                }
            }
        }
        else if(plateau[event.target.parentElement.id].type == 'queen'){
            posPion = `${event.target.parentElement.id}`
            if(plateau[event.target.parentElement.id].player == 'playerTwo'){
                clearPossibleMove()
                handlePossibleMoveQueen(['playerTwo', posPion])
            } else {
                clearPossibleMove()
                handlePossibleMoveQueen(['playerOne', posPion])
            }
        }
        else if(plateau[event.target.parentElement.id].type == 'pion'){
            console.log('pion')
            if(plateau[event.target.parentElement.id].player == 'playerTwo'){
                clearPossibleMove()
                handlePossibleMove(['playerTwo', posPion])
            } else {
                clearPossibleMove()
                handlePossibleMove(['playerOne', posPion])
            }
        }
     }
}
const handleMove = (previousPos, newPos, otherPossiblePos, player) => {
    clearPossibleMove()
    moveCount += 1;
    isQueen([player, newPos, previousPos]);
    
    plateau[previousPos] = 'empty';
    refreshDisplay();
    toggleTurn()

}

const handlePrise = (previousPos, posTarget, newPos, playerKiller) => {
    clearPossibleMove();
    moveCount += 1;
    isQueen([playerKiller, newPos, previousPos]);
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
    console.log('queen moves')
    for (let i = 1; i < 5; i++) {
        let decalage = 0;
        let nextPos = '';
        movePositions = [];
        switch(i){
            
            case 1:
                console.log('case 1');
                //haut gauche
                decalage  = 1;
                nextPos = `${parseInt(posQueen[0]) - decalage}/${parseInt(posQueen[2]) - decalage}`;
                console.log(nextPos);
                if(plateau[nextPos] != undefined && plateau[nextPos] == 'empty'){
                    do{
                        document.getElementById(nextPos).style.backgroundColor ='lightpink';
                        document.getElementById(nextPos).setAttribute('onclick', `handleMove('${posQueen}', '${nextPos}',' otherPossiblePos', '${player}')`);
                        decalage += 1;
                        nextPos = `${parseInt(posQueen[0]) - decalage}/${parseInt(posQueen[2]) - decalage}`;
                        if(plateau[nextPos] == undefined){
                            break;
                        }
                    }
                    while(plateau[nextPos] == 'empty');
                }
               
            break; 
            case 2:
                console.log('case 2');
                //haut droite
                decalage  = 1;
                nextPos = `${parseInt(posQueen[0]) - decalage}/${parseInt(posQueen[2]) + decalage}`
                console.log(nextPos);
                if(plateau[nextPos] != undefined && plateau[nextPos] == 'empty'){
                    do{
                        document.getElementById(nextPos).style.backgroundColor ='lightpink';
                        document.getElementById(nextPos).setAttribute('onclick', `handleMove('${posQueen}', '${nextPos}',' otherPossiblePos', '${player}')`);
                        decalage += 1;
                        nextPos = `${parseInt(posQueen[0]) - decalage}/${parseInt(posQueen[2]) + decalage}`
                        if(plateau[nextPos] == undefined){
                            break;
                        }
                    }
                    while(plateau[nextPos] == 'empty');
                }
               
            break; 
            case 3:
                console.log('case 3');
                //bas droite
                decalage  = 1;
                nextPos = `${parseInt(posQueen[0]) + decalage}/${parseInt(posQueen[2]) + decalage}`;
                console.log(nextPos);
                if(plateau[nextPos] != undefined && plateau[nextPos] == 'empty'){
                    do{
                        document.getElementById(nextPos).style.backgroundColor ='lightpink';
                        document.getElementById(nextPos).setAttribute('onclick', `handleMove('${posQueen}', '${nextPos}', 'otherPossiblePos', '${player}')`);
                        decalage += 1;
                        nextPos = `${parseInt(posQueen[0]) + decalage}/${parseInt(posQueen[2]) + decalage}`;
                        if(plateau[nextPos] == undefined){
                            break;
                        }
                    }
                    while(plateau[nextPos] == 'empty');
                }
               
              
            break; 
            case 4:
                console.log('case 4');
                //bas gauche
                decalage  = 1;
                nextPos = `${parseInt(posQueen[0]) + decalage}/${parseInt(posQueen[2]) - decalage}`;
                console.log(nextPos);
                if(plateau[nextPos] != undefined && plateau[nextPos] == 'empty'){
                    do{
                        document.getElementById(nextPos).style.backgroundColor ='lightpink';
                        document.getElementById(nextPos).setAttribute('onclick', `handleMove('${posQueen}', '${nextPos}',' otherPossiblePos', '${player}')`);
                        decalage += 1;
                        nextPos = `${parseInt(posQueen[0]) + decalage}/${parseInt(posQueen[2]) - decalage}`;
                        if(plateau[nextPos] == undefined){
                            break;
                        }
                    }
                    while(plateau[nextPos] == 'empty');
                }
               
            break;    
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
    let eatPositions = []// pour transmettre plusieurs positions possibles au pion
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
                    eatPositions = [];
                    for (let i = 1; i < 5; i++) {
                        let decalage = 0;
                        switch(i){
                            case 1:
                                console.log('case 1');
                                //haut gauche
                                if (parseInt(position[0]) != 0) {
                                    decalage = 1;
                                let posLibre = '';
                                for (let j = parseInt(position[0]) - 1; j > -1; j--) {
                                    if(parseInt(position[2]) <= 0){
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
                                        if (plateau[posLibre] != undefined && plateau[posLibre] == 'empty') {
                                             canIEatStatus = true;
                                            do {
                                                console.log('do')
                                                console.log('La queen peut manger en ' + posLibre);
                                                document.getElementById(posLibre).style.backgroundColor = 'lightgreen';
                                                eatPositions.push(`${posLibre}`);
                                                console.log(eatPositions)
                                                decalage += 1;
                                                posLibre = `${parseInt(posTarget[0]) - decalage}/${parseInt(posTarget[2]) - decalage}`;
                                                if(plateau[posLibre] == undefined){
                                                    break;
                                                }
                                            } while (plateau[posLibre] == 'empty');
                                            
                                        }
                                        break;   
                                            
                                    }
                                    else if(plateau[posTestee] == undefined || plateau[posTestee].player == player){
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
                                    if(parseInt(position[2]) >= 9){
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
                                        if (plateau[posLibre] != undefined && plateau[posLibre] == 'empty') {
                                            canIEatStatus = true;
                                            do {
                                                console.log('do')
                                                console.log('La queen peut manger en ' + posLibre);
                                                document.getElementById(posLibre).style.backgroundColor = 'lightgreen';
                                                eatPositions.push(`${posLibre}`);
                                                console.log(eatPositions)
                                                decalage += 1;
                                                posLibre = `${parseInt(posTarget[0]) - decalage}/${parseInt(posTarget[2]) + decalage}`;
                                                if(plateau[posLibre] == undefined){
                                                    break;
                                                }
                                            } while (plateau[posLibre] == 'empty');
                                            
                                        }
                                        break;         
                                    }
                                    else if(plateau[posTestee] == undefined || plateau[posTestee].player == player){
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
                                    if(parseInt(position[2]) >= 9){
                                        console.log('break 3')
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
                                        if (plateau[posLibre] != undefined && plateau[posLibre] == 'empty') {
                                            canIEatStatus = true;
                                            do {
                                                console.log('do')
                                                console.log('La queen peut manger en ' + posLibre);
                                                document.getElementById(posLibre).style.backgroundColor = 'lightgreen';
                                                eatPositions.push(`${posLibre}`);
                                                console.log(eatPositions)
                                                decalage += 1;
                                                posLibre = `${parseInt(posTarget[0]) + decalage}/${parseInt(posTarget[2]) + decalage}`;
                                                if(plateau[posLibre] == undefined){
                                                    break;
                                                }
                                            } while (plateau[posLibre] == 'empty');
                                            
                                        }
                                        break;
                                    }
                                    else if(plateau[posTestee] == undefined || plateau[posTestee].player == player){
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
                                    if(parseInt(position[2]) <= 0){
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
                                        if (plateau[posLibre]!= undefined && plateau[posLibre] == 'empty') {
                                             canIEatStatus = true;
                                            do {
                                                console.log('do')
                                                console.log('La queen peut manger en ' + posLibre);
                                                document.getElementById(posLibre).style.backgroundColor = 'lightgreen';
                                                eatPositions.push(`${posLibre}`);
                                                console.log(eatPositions)
                                                decalage += 1;
                                                posLibre = `${parseInt(posTarget[0]) + decalage}/${parseInt(posTarget[2]) - decalage}`;
                                                if(plateau[posLibre] == undefined){
                                                    break;
                                                }
                                            } while (plateau[posLibre] == 'empty');
                                        }
                                        break; 
                                        
                                    }
                                    else if(plateau[posTestee] == undefined || plateau[posTestee].player == player){
                                        break;
                                    }
                                    decalage += 1;
                                }
                                
                            }
                            break;    
                        }
                        
                    }
                    plateau[position].eat(eatPositions.toString(), position, posTarget)
                }
            }
            
        } 
    }
    console.table(eatPositions) // recap toutes les positions que la reine peu manger
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
        if(player == 'playerOne'){
            enemy = 'playerTwo';
        }else enemy = 'playerOne';
        for (let i = 1; i < 5; i++) {
            let decalage = 0;
            let eatPositions = [];
            switch(i){
                case 1:
                    console.log('case 1');
                    //haut gauche
                    if (parseInt(position[0]) != 0) {
                        decalage = 1;
                    let posLibre = '';
                    for (let j = parseInt(position[0]) - 1; j > -1; j--) {
                        if(parseInt(position[2]) <= 0){
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
                            if (plateau[posLibre] != undefined && plateau[posLibre] == 'empty') {
                                 canIEatStatus = true;
                                do {
                                    console.log('do')
                                    console.log('La queen peut manger en ' + posLibre);
                                    document.getElementById(posLibre).style.backgroundColor = 'lightgreen';
                                    eatPositions.push(`${posLibre}`);
                                    
                                    decalage += 1;
                                    posLibre = `${parseInt(posTarget[0]) - decalage}/${parseInt(posTarget[2]) - decalage}`;
                                    if(plateau[posLibre] == undefined){
                                        break;
                                    }
                                } while (plateau[posLibre] == 'empty');
                                plateau[position].eat(eatPositions.toString(), position, posTarget);
                            }
                            break;   
                                
                        }
                        else if(plateau[posTestee] == undefined || plateau[posTestee].player == player){
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
                        if(parseInt(position[2]) >= 9){
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
                            if (plateau[posLibre] != undefined && plateau[posLibre] == 'empty') {
                                canIEatStatus = true;
                                do {
                                    console.log('do')
                                    console.log('La queen peut manger en ' + posLibre);
                                    document.getElementById(posLibre).style.backgroundColor = 'lightgreen';
                                    eatPositions.push(`${posLibre}`);
                                    plateau[position].eat(eatPositions, position, posTarget)
                                    decalage += 1;
                                    posLibre = `${parseInt(posTarget[0]) - decalage}/${parseInt(posTarget[2]) + decalage}`;
                                    if(plateau[posLibre] == undefined){
                                        break;
                                    }
                                } while (plateau[posLibre] == 'empty');
                                plateau[position].eat(eatPositions.toString(), position, posTarget)
                            }
                            break;         
                        }
                        else if(plateau[posTestee] == undefined || plateau[posTestee].player == player){
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
                        if(parseInt(position[2]) >= 9){
                            console.log('break 3')
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
                            if (plateau[posLibre] != undefined && plateau[posLibre] == 'empty') {
                                canIEatStatus = true;
                                do {
                                    console.log('do')
                                    console.log('La queen peut manger en ' + posLibre);
                                    document.getElementById(posLibre).style.backgroundColor = 'lightgreen';
                                    eatPositions.push(`${posLibre}`);
                                    plateau[position].eat(eatPositions, position, posTarget)
                                    decalage += 1;
                                    posLibre = `${parseInt(posTarget[0]) + decalage}/${parseInt(posTarget[2]) + decalage}`;
                                    if(plateau[posLibre] == undefined){
                                        break;
                                    }
                                } while (plateau[posLibre] == 'empty');
                                plateau[position].eat(eatPositions.toString(), position, posTarget)
                            }
                            break;
                        }
                        else if(plateau[posTestee] == undefined || plateau[posTestee].player == player){
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
                        if(parseInt(position[2]) <= 0){
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
                            if (plateau[posLibre]!= undefined && plateau[posLibre] == 'empty') {
                                 canIEatStatus = true;
                                do {
                                    console.log('do')
                                    console.log('La queen peut manger en ' + posLibre);
                                    document.getElementById(posLibre).style.backgroundColor = 'lightgreen';
                                    eatPositions.push(`${posLibre}`);
                                    plateau[position].eat(eatPositions, position, posTarget)
                                    decalage += 1;
                                    posLibre = `${parseInt(posTarget[0]) + decalage}/${parseInt(posTarget[2]) - decalage}`;
                                    if(plateau[posLibre] == undefined){
                                        break;
                                    }
                                } while (plateau[posLibre] == 'empty');
                                plateau[position].eat(eatPositions.toString(), position, posTarget)
                            }
                            break; 
                                            
                        }
                        else if(plateau[posTestee] == undefined || plateau[posTestee].player == player){
                            break;
                        }
                    decalage += 1;
                    }
                 
                }
                break;    
            }
        }
    }
    
    refreshDisplay()
}
const isQueen = ([player, newPos, previousPos]) => {
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
        if(plateau[previousPos].type == 'queen'){
            plateau[newPos] = new Pion(player, newPos);
            plateau[newPos].promoteToQueen();
        }
        else
        plateau[newPos] = new Pion(player, newPos);
    }
}
const handleWin = () => {
    let countP1 = 0;
    let countP2 = 0;
    for (const key in plateau) {
        if (key != undefined) {
            if(key[player] == 'playerOne'){
                countP1 += 1;
            }
            else if(key[player] == 'playerTwo'){
                countP2 += 1;
            }   
        }
    }
    console.log(countP1);
    console.log(countP2);
    if(countP1 == 0){
        document.body.innerHTML = '<header><h1>Jeu de Dame</h1><h2 class="playerTurn">Victoire du Joueur 2</h2><button onclick="startGame();">Nouvelle Partie</button></header><main class="plateau"></main>';
    }
    else if(countP2 == 0){
        document.body.innerHTML = '<header><h1>Jeu de Dame</h1><h2 class="playerTurn">Victoire du Joueur 1</h2><button onclick="startGame();">Nouvelle Partie</button></header><main class="plateau"></main>';
  
    }
}


