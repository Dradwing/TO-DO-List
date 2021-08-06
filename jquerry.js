$(document).ready(function() {
    if(localStorage.getItem('list')!="")
    {
        $('ol').html(localStorage.getItem('list'));
        $('.start').hide();
    }
    var date=new Date();
    document.querySelector('.date').innerText=date.toDateString();//jquery does not have date thing
    $('.refresh').click(function(){
        $('.list').empty();
        localStorage.setItem('list',$('ol').html());
        $('.start').show();
    });
    $(document).keypress(function(e){
        if(e.keyCode===13)
        {   
            if($('input').val().trim()!="")
            {   $('.start').hide();
                $('ol').append(`<li><i class="far fa-circle icons"></i><p>`+$('input').val()+`</p><i class="far fa-trash-alt deelete icons"></i></li>`);
                localStorage.setItem('list',$('ol').html());
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
        localStorage.setItem('list',$('ol').html());
    });
    $(document).on('click','.icons2',function(){
        $(this).removeClass();
        $(this).addClass("far fa-circle icons");
        $(this).siblings("p").removeClass("para"); 
        localStorage.setItem('list',$('ol').html());
    });
    $(document).on('click','.deelete',function(){
        $(this).parent().remove();
        localStorage.setItem('list',$('ol').html());
        if($('ol').text().trim()==="")
        {
            $('.start').show();
        }
    });
});
