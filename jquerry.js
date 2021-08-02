$(document).ready(function() {
    var date=new Date();
    document.querySelector('.date').innerText=date.toDateString();
    $('.refresh').click(function(){
        $('.list').empty();
        $('.start').show();
    });
    $(document).keypress(function(e){
        if(e.keyCode===13)
        {   
            if($('input').val().trim()!="")
            {   $('.start').hide();
                $('ol').append(`<li><i class="far fa-circle icons"></i><p>`+$('input').val()+`</p><i class="far fa-trash-alt deelete icons"></i></li>`);
                $('input').val('');
            }
            else{
                alert("Enter some task TO-DO");
            }
        }
    });
    $(document).on('click','.icons',function(){
        $(this).removeClass();
        $(this).addClass("far fa-check-circle icons2");
        $(this).siblings("p").addClass("para"); 
    });
    $(document).on('click','.icons2',function(){
        $(this).removeClass();
        $(this).addClass("far fa-circle icons");
        $(this).siblings("p").removeClass("para"); 
    });
    $(document).on('click','.deelete',function(){
        $(this).parent().remove();
        if($('ol').text().trim()==="")
        {
            $('.start').show();
        }
    });
});