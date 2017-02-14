$( document ).ready(function() {
    view.view_all()
});

var model = {
  diceValue: function(){
    return Math.floor((Math.random()*6)+1);
  }
}

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

var controller = {
  add_dice:function(){
    $('.dice').append(`<div class="die">${model.diceValue()}</div>`)
  },
  roll_dice:function(){
    $('.die').each(function(k,die){
    $(die).text(model.diceValue)
  })
  }
}
