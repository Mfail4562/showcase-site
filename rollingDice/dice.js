document
.getElementById("roll")
.addEventListener('click', function (e) {

e.preventDefault();
e.stopPropagation();
let roll= 1+Math.round(Math.random()*19);
    document
    .getElementById("dicesResult")
    .innerText = (roll) + '' ;
});
