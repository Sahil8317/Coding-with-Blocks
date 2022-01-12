Blockly.defineBlocksWithJsonArray([
  {
  "type": "loop",
  "message0": "Repeat %1 Times %2 Do %3",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "times",
      "options": [
        ["1","0"],
        ["2","1"],
        ["3","2"],
        ["4","3"],
        ["5","4"]
      ]
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "do"
    }
  ],
  "previousStatement": null,
  "colour": 300,
  "tooltip": "",
  "helpUrl": ""
}]);

Blockly.defineBlocksWithJsonArray([
{
  "type": "movement",
  "message0": "Move %1 By %2 Steps",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "direction",
      "options": [
        ["Forward","F"],
        ["Backward","B"]
      ]
    },
    {
      "type": "field_dropdown",
      "name": "steps",
      "options": [
        ["50","50"],
        ["100","100"],
        ["150","150"],
        ["180","180"]
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}]);

Blockly.defineBlocksWithJsonArray([
{
  "type": "angle",
  "message0": "Turn %1 90 Degree By",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "direction",
      "options": [
        ["Right","R"],
        ["Left","L"]
      ]
    }
  ],
  "previousStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}]);

Blockly.JavaScript['loop'] = function(block) {
  var dropdown_times = block.getFieldValue('times');
  var statements_do = Blockly.JavaScript.statementToCode(block, 'do');
  dropdown_times = parseInt(dropdown_times);
  dropdown_times+=1;
  if(statements_do.split(",").length!=2 || statements_do.split(",")[1]==""){
    alert("blocks are not connected!!");
    location.reload();
    return ;
  }
  var code = 'loop='+dropdown_times+","+statements_do;
  return code;
};

Blockly.JavaScript['movement'] = function(block) {
  var dropdown_direction = block.getFieldValue('direction');
  var dropdown_steps = block.getFieldValue('steps');
  var code ='movement='+dropdown_direction+"-"+dropdown_steps+",";
  return code;
};

Blockly.JavaScript['angle'] = function(block) {
  var dropdown_direction = block.getFieldValue('direction');
  var code = 'angle='+dropdown_direction;
  return code;
};
