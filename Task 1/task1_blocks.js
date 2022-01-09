Blockly.defineBlocksWithJsonArray([
{
  "type": "start",
  "lastDummyAlign0": "CENTRE",
  "message0": "START",
  "nextStatement": null,
  "colour": 120,
  "tooltip": "",
  "helpUrl": ""
}
]);

Blockly.defineBlocksWithJsonArray([
  {
  "type": "end",
  "lastDummyAlign0": "CENTRE",
  "message0": "END",
  "colour": 120,
  "previousStatement": null,
  "tooltip": "",
  "helpUrl": ""
}
]);


Blockly.defineBlocksWithJsonArray([
{
  "type": "move_up",
  "lastDummyAlign0": "CENTRE",
  "message0": "Move Up By %1 Steps",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "Steps",
      "options": [
        ["1","0"],
        [ "2","1"],
        ["3","2"],
        ["4","3"]
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 300,
  "tooltip": "",
  "helpUrl": ""
}
]);

Blockly.defineBlocksWithJsonArray([
  {
    "type": "move_down",
    "lastDummyAlign0": "CENTRE",
    "message0": "Move Down By %1 Steps",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "Steps",
        "options": [
          ["1","0"],
          ["2","1"],
          ["3","2"],
          ["4","3"]
        ]
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 300,
    "tooltip": "",
    "helpUrl": ""
  }
]);

Blockly.defineBlocksWithJsonArray([
  {
  "type": "move_right",
  "message0": "Move Right By %1 Steps",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "Steps",
      "options": [
        ["1","0"],
        ["2","1"],
        ["3","2"],
        ["4","3"]
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 300,
  "tooltip": "",
  "helpUrl": ""
}
]);

Blockly.defineBlocksWithJsonArray([
{
  "type": "move_left",
  "lastDummyAlign0": "CENTRE",
  "message0": "Move Left By %1 Steps",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "Steps",
      "options": [
        ["1","0"],
        ["2","1"],
        ["3","2"],
        ["4","3"]
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 300,
  "tooltip": "",
  "helpUrl": ""
}
]);

Blockly.JavaScript['start'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'start,';
  return code;
};

Blockly.JavaScript['end'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'end';
  return code;
};

Blockly.JavaScript['move_up'] = function(block) {
  var dropdown_steps = block.getFieldValue('Steps');
  // TODO: Assemble JavaScript into code variable.
  dropdown_steps = parseInt(dropdown_steps);
  dropdown_steps+=1;
  var code = 'up='+dropdown_steps+",";
  return code;
};

Blockly.JavaScript['move_down'] = function(block) {
  var dropdown_steps = block.getFieldValue('Steps');
  // TODO: Assemble JavaScript into code variable.
  dropdown_steps = parseInt(dropdown_steps);
  dropdown_steps+=1;
  var code = 'down='+dropdown_steps+",";
  return code;
};

Blockly.JavaScript['move_right'] = function(block) {
  var dropdown_steps = block.getFieldValue('Steps');
  // TODO: Assemble JavaScript into code variable.
  dropdown_steps = parseInt(dropdown_steps);
  dropdown_steps+=1;
  var code = 'right='+dropdown_steps+",";
  return code;
};

Blockly.JavaScript['move_left'] = function(block) {
  var dropdown_steps = block.getFieldValue('Steps');
  // TODO: Assemble JavaScript into code variable.
  dropdown_steps = parseInt(dropdown_steps);
  dropdown_steps+=1;
  var code = 'left='+dropdown_steps+",";
  return code;
};
