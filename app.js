'use strict'


var username = prompt ('what\'s your name');
            console.log ('username', username); 
            alert ('Hello' + ' ' + username); 
var study = prompt ('did you go to the colleg');
study = study.toUpperCase();
if (study === 'YES') {
    alert ( 'Congrats' + ' ' + username );
} else {
    alert ( 'you should to it' + ' ' + username)
}
var studyPlus = prompt ( 'Dou you like sciences')
studyPlus = studyPlus.toUpperCase();
if (studyPlus === 'YES'){
    alert ('amazing')
} else {
   alert('Oh' + '' + username + '' + 'science makes the word go around'); 
}var study2 = prompt ( 'Do you like biology');
study2 = study2.toUpperCase();
if (study2 === 'YES'){
    alert ( 'Welcome to my world')
} else {
    'Let me tell that you biology is life'
}