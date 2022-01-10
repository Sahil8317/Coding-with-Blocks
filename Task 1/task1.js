$('#run').click(function(){
  $('#run').prop('disabled',true);
  let Generatedcode = Blockly.JavaScript.workspaceToCode(Blockly.getMainWorkspace());
  var genArray = Generatedcode.split(',');
  var len = genArray.length;
  if(genArray[0]!=='start' || genArray[len-1]!=='end'){
    alert('Start or End blocks are not selected Please Try Again!');
     location.reload();
  }else{
    var initPoint = 11;
    var resultArray = [];
    resultArray.push(initPoint);
    for(var i=1;i<len-1;i++){
      var steps = genArray[i].split('=');
      switch (steps[0]) {
        case 'up':
        for(let j=1;j<=steps[1];j++){
          resultArray.push(initPoint + (10*j));   // for 3 will produce 21 31 41
        }
        initPoint = resultArray[resultArray.length-1];
        break;

        case 'down':
        for(let j=1;j<=steps[1];j++){
          resultArray.push(initPoint - (10*j));
        }
        initPoint = resultArray[resultArray.length-1];
        break;

        case 'right':
        for(let j=1;j<=steps[1];j++){
          resultArray.push(initPoint+(1*j));
        }
        initPoint = resultArray[resultArray.length-1];
        break;

        case 'left':
        for(let j=1;j<=steps[1];j++){
          resultArray.push(initPoint-(1*j));
        }
        initPoint = resultArray[resultArray.length-1];
        break;
      }
    }
    simulate(resultArray);

  }
});
  // code for Game stimulation
 async function simulate(resultArray){
  const validcells = [11,12,13,14,15,21,22,23,24,25,31,32,33,34,35,41,42,43,44,45,51,52,53,54,55];
  var isWon = false;
  const timer = ms => new Promise(res => setTimeout(res, ms));
  var size = resultArray.length;
  for(var i=1;i<size;i++){
    if($.inArray(resultArray[i],validcells)===-1){   // if cell is out of bound
      isWon = false;
      break;
    }
    console.log($.inArray(resultArray[i],validcells)===-1);
    $('#'+resultArray[i-1]).addClass('hide');
    $('#'+resultArray[i]).removeClass('hide');
    if(resultArray[i]==55 && i==size-1){   // if the user wins
      $('#goal').addClass('hide'); // removing the end Tag
      isWon = true;
      await timer(500);
      break;
    }
    await timer(1000);
  }
  if(!isWon){
    alert("You Lost the Game!!");
 }else{
   alert("You Won the Game!!");
 }
 location.reload();
}


var workspace = Blockly.inject('blocklyDiv', {
  toolbox: document.getElementById('toolbox'),
  scrollbars: false,
  grid:{spacing: 20,
         length: 3,
         colour: '#ccc',
         snap: true},
        trashcan: true
});
