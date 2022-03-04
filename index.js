var current = 1
var total = parseInt($(".page-item").length)-2
$(`.page-item:eq(${current})`).addClass("active")
$(".prev").hide()
$(".page-item").click(function(){
  var n = $(this).text()
  if (!isNaN(parseInt(n))){
      $(".next").show()
      $(".prev").show()
      $(".page-item").removeClass("active")
      $(this).addClass("active")
      current = parseInt($(this).text())
      if(current == total){
        $(".next").hide()
      }
    if(current == 1){
      $(".prev").hide()
    }
    }
  else{
    if(n == "Next"){
      if(current < total-1){
        $(".prev").show()
        current++
        $(".page-item").removeClass("active")
        $(`.page-item:eq(${current})`).addClass("active")
      }
      else{
        current++
        $(".next").hide()
                $(".page-item").removeClass("active")
        $(`.page-item:eq(${current})`).addClass("active")
      }
    }
    else{
      if(current > 2){
        $(".next").show()
        current--
        $(".page-item").removeClass("active")
        $(`.page-item:eq(${current})`).addClass("active")
      }
      else{
        current--
         $(".prev").hide()
         $(".page-item").removeClass("active")
        $(`.page-item:eq(${current})`).addClass("active")
      }
    }
  }
})
