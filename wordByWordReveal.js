//------------------------------------------------------------------------------------------
//      Function that reveals a word letter by letter takes copy and printing speed in ms, 
//-----------------------------------------------------------------------------------------

function revealLetters(copy, printingSpeed){
  console.log('Testing');

  var str = copy.split('');
  console.log(str);

  var newArray = [];
  var currentPos = 0;

    var interval = setInterval(function(){

      if (currentPos < str.length){
        newArray.push(str[currentPos]);
        console.log(newArray);
        
        document.querySelector('.copy').innerHTML += newArray[currentPos];

        currentPos++;
      }

      else {
        clearInterval(interval);
      }
    
    }, printingSpeed);
  
}