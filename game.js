//var process = require('process');
var readline = require('readline');

var n = 2; n++;
var fName;
var randomNumber = Math.round(Math.random() * n);
var points = 0;


var terminal = readline.createInterface(
{
  input : process.stdin,
  output : process.stdout
});
    
  
terminal.setPrompt('What is your name ? : ');
terminal.prompt();
           
terminal.setPrompt(randomNumber);
terminal.setPrompt('Guess the number! (0-' + (n) + '):  ');
terminal.prompt();
terminal.on('line', function(answer)
{
  var answerNum = parseInt(answer);
   n = 2;
  if (answerNum === randomNumber)
  {
    console.log('YOU GOT IT ! ! !');
    console.log('You now have '+ (1+points) + ' points');
    console.log('Stage '+ (n) + ' Cheers!!!!');
     
  }

  else if (answerNum > randomNumber)
  {
    console.log('Too high!');
    console.log('You have '+points+' point');
    console.log('G A M E O V E R ! ! !');
    process.exit(0);
  }

  else if (answerNum < randomNumber)
  {
    console.log('Too low!');
    console.log('You have '+points+' point');
    console.log('G A M E O V E R ! ! !');
	process.exit(0);
  }

    else
  {
    console.log("That wasn't a number I recognise");
    console.log('You have '+points+' point');
    console.log('G A M E O V E R ! ! !');
	process.exit(0);
  }

points++;
n++;

  if (points == 10)
  {
    console.log('W I N N E R ! ! !');
    console.log('You have a total of  '+ (points) + ' points');
    process.exit(0);
  }

  terminal.prompt();
});

terminal.on('close', function()
{
  console.log('A J I S A F E :P')
  process.exit(1);
});
