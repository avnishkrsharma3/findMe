let button = document.getElementById('button');
let cross = document.getElementById('cross');
function util(){
    //console.log('clicked');
    let hidden = document.getElementById('hidden');
    //console.log(hidden.innerHTML);
    hidden.style.display = "flex";
}
function util2(){
    hidden.style.display = "none";
}
console.log('button');
button.addEventListener('click', util);
cross.addEventListener('click', util2);
let main = document.getElementsByClassName('main');
window.addEventListener('click', function(e) {
    if(e.target != button)
    hidden.style.display = "none";
});