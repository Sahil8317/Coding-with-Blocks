$('document').ready(function(){
  const canvas = document.querySelector('#canvas');
  const ctx = canvas.getContext('2d');
 ctx.beginPath();
 ctx.strokeStyle = 'white';
 ctx.lineWidth = 2;
 ctx.arc(200,200, 10, 0, 2 * Math.PI, false);
 ctx.stroke();
 ctx.lineWidth = 0.4;
ctx.moveTo(200,200);
ctx.lineTo(200,100);
ctx.lineTo(300,100);
ctx.lineTo(300,200);
ctx.lineTo(200,200);
ctx.stroke();
});

$('#run').click(function(){
 $('#run').prop('disabled',true);
  runSimulation();
});

async function runSimulation(){
  let Generatedcode = Blockly.JavaScript.workspaceToCode(Blockly.getMainWorkspace());
  if(Generatedcode===""){
    alert("Blocks are not selected Try Again!!");
    location.reload();
    return;
  }
  var codeArray = Generatedcode.split(",");
  if(codeArray.length!=3){
    alert("Blocks are not selected Properly Try Again!!");
    location.reload();
    return;
  }
  // add loop test case code
  let loop = codeArray[0].split("=");
  if(loop[0]!=='loop'){
    alert("Loop is not selected Try Again!!");
    location.reload();
  }
  let loopCount = loop[1];
  let movement = codeArray[1].split("=");
  let steps = parseInt(movement[1].split('-')[1]);
  let stepsDirection =  movement[1].split('-')[0];
  let angleDirection = codeArray[2].split("=")[1];
  // using vanila javascript
  if(angleDirection==null){
    for(let i=1;i<loopCount;i++){
      steps+=steps;
    }
  }
  var initX = 200;
  var initY = 200;

  var vertices = [];
  vertices.push({
    x:initX,
    y:initY
  });
  vertices.push({
    x:initX,
    y:(stepsDirection==='B')?initY+steps:initY-steps
  });
  vertices.push({
    x:(angleDirection==='R')?initX+steps:(angleDirection==='L')?initX-steps:initX,
    y:(stepsDirection==='B')?initY+steps:initY-steps
  });
  vertices.push({
    x:(angleDirection==='R')?initX+steps:(angleDirection==='L')?initX-steps:initX,
    y:initY
  });
  vertices.push({
    x:initX,
    y:initY
  });
  if(angleDirection==null){  // if angle block is not selected
  vertices.push({
    x:initX,
    y:initY
  });
}
  if(loopCount<4){
    for(let i=0;i<4-loopCount;i++)
       vertices.pop();
  }
  var points = calRoutePoints(vertices);
  animate(points,vertices);  // function for animation
}

function calRoutePoints(vertices){
  var routePoints = [];
  for(var i=1;i<vertices.length;i++){
    var point0 = vertices[i-1];
    var point1 = vertices[i];
    var dx = point1.x-point0.x;
    var dy = point1.y-point0.y;
    for(var j = 0;j<100;j++){
      var valx = point0.x+dx*j/100;  // calulating small point between 2 vertices
      var valy = point0.y+dy*j/100;
      routePoints.push({
        x:valx,
        y:valy
      });
    }
  }
  return routePoints;
}

async function animate(points,vertices){
  const canvas = document.querySelector('#canvas');
  const ctx = canvas.getContext("2d");
  const timer = ms => new Promise(res => setTimeout(res, ms));
  ctx.lineCap = "round";
  var t = 1;
  ctx.lineWidth=3;
  ctx.strokeStyle = "white";
  while(t<points.length){
  ctx.beginPath();
  ctx.moveTo(points[t-1].x,points[t-1].y);
  ctx.lineTo(points[t].x,points[t].y);
  ctx.stroke();
  t++;
  await timer(6);
}
if(vertices.length==5){
  alert("You have successfully completed the Task!!")
}else{
  alert("You Failed to completed the Task Try Again!!")
}
location.reload();
}

var toolbox = {
    "kind": "flyoutToolbox",
    "contents": [
      {
        "kind": "block",
        "type": "loop",
        "disabled":"false"
      },
      {
        "kind": "block",
        "type": "movement",
        "disabled":"false"
      },
      {
        "kind": "block",
        "type": "angle",
        "disabled":"false"
      }
    ]
  };
var workspace = Blockly.inject('blocklyDiv',{
  toolbox:toolbox,
  scrollbars: false,
  grid:{spacing: 20,
         length: 3,
         colour: '#ccc',
         snap: true},
        trashcan: true
});

var newToolBox = {
  "kind": "flyoutToolbox",
  "contents": [
    {
      "kind": "block",
      "type": "loop",
      "disabled":"false"
    },
    {
      "kind": "block",
      "type": "movement",
      "disabled":"false"
    },
    {
      "kind": "block",
      "type": "angle",
      "disabled":"false"
    }
  ]
};

workspace.addChangeListener(function(event){
  // for disabling a block after selection
  if(event.type==Blockly.Events.BLOCK_MOVE){
    var block = workspace.getBlockById(event.blockId);
    var index = 0;
    if(block!=null){
    if(block.type =="movement")
      index = 1;
    if(block.type =="angle")
      index = 2;
    newToolBox.contents[index].disabled = "true";
    newToolBox.contents[index].enabled =false;
    workspace.updateToolbox(newToolBox);
  }
  }
  if(event.type==Blockly.Events.BLOCK_DELETE){
    let block = event.oldJson;
    let index = 0;
    if(block.type =="movement")
      index = 1;
    if(block.type =="angle")
      index = 2;
    newToolBox.contents[index].disabled = "false";
    newToolBox.contents[index].enabled =true;
    workspace.updateToolbox(newToolBox);
  }
});

$('#view_solution').click(function(){
$('#updateModal').css('display','block');
});

$('#up-close-btn').click(function(){
  $('#updateModal').css('display','none');
});

$('#low-close-btn').click(function(){
  $('#updateModal').css('display','none');
});

$('#reload').click(function(){
  location.reload();
});
