var score1=8;
var socre2=8;
var pass1=6;
var pass2=6;

var minPass=(score1>=pass1) || (socre2>=pass2);

var msg='Resit Required:'+ !minPass;

var el=document.getElementById('answer');
el.innerHTML=msg;