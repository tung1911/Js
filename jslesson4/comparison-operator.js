var pass=50;
var socre=90;

var hasPassed=socre>=pass;

var el=document.getElementById('answer');
el.textContent='Level passed'+ hasPassed;