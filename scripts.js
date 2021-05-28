$(document).ready(function() {
    $('#mycarousel').carousel({interval:2000});
    $('#carouselbutton').click(function(){
        if($('#carouselbutton').children('span').hasClass('fa fa-pause'))
        {
            $('#mycarousel').carousel('pause');
            $('#carouselbutton').children('span').removeClass('fa-pause');
            $('#carouselbutton').children('span').addClass('fa-play')
        }
        else
        {
            $('#mycarousel').carousel('cycle');
            $('#carouselbutton').children('span').removeClass('fa-play');
            $('#carouselbutton').children('span').addClass('fa-pause')
        }
       

    })
    $('#loginbutton').click(function(){
          $('#loginmodal').modal('show')
    })
    $('#reservebutton').click(function(){
        $('#reservemodal').modal('show')
  })
})
