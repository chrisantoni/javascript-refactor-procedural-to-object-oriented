const controller = require('../controller/controller')

var view ={
  view_add_dice:function(){
    $('#roller button.add').on('click',function(){
      controller.add_dice()
    })
  },
  view_roll_dice:function(){
    $('#roller button.roll').on('click',function(){
      controller.roll_dice()
    })
  },
  view_all:function(){
    view.view_add_dice()
    view.view_roll_dice()
  }
}


module.exports = view;
