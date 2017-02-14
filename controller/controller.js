var model = require('../model/model')

var controller = {
  add_dice:function(){
    $('.dice').append(`<div class="die">${model.diceValue}</div>`)
  },
  roll_dice:function(){
    $('.die').each(function(k,die){
    $(die).text(model.diceValue)
  }
  }
}

module.exports = controller;
