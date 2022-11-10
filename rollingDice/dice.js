

document
.getElementById("roll")
.addEventListener('click', function (e) {

e.preventDefault();
e.stopPropagation();

let dicetab = document.getElementsByName('dices')
let valeur;
let number;

for (let i=0; i<dicetab.length; i++){
    if(dicetab[i].checked){
valeur = dicetab[i].value;
    }
}
switch (valeur){
    case '3' : number = 3;
    break;
    case '5' : number = 5;
    break;
    case '19' : number = 19;
    break;
    default : return 0;
}

let roll= 1+Math.round(Math.random()*number);
    document
    .getElementById("dicesResult")
    .innerText = (roll) + '' ;
});
