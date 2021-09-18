
jQuery(document).ready(function(){
var $ = jQuery

  $("#nbu_save").bind( "click", function() {
    function animation(){
      $('#nbu_save').html('Сохраняю..Ждите');
        $('#loadgif').css("display","block");

    }

		var dats = $("#nbu_save_form").serialize();
    console.log(dats);
			 $.ajax({
          		type: 'POST',
          		url: ajaxurl,
          		data:'action=nbu_seveseting&'+dats,
              beforeSend:animation,
          		success: function(data) {
                $('#nbu_save').html('Сохранено');
                $('#loadgif').css("display","none");


          },
          error:  function(xhr, str){

          }
        });
	});
/*

click на кнопку обновить
*/
$('#ubu_udpade').bind("click",function() {
  function animation(){
    $('#ubu_udpade').html('Обновляю');

  }
  var dats = $("#nbu_save_form").serialize();
  console.log(dats);
  $.ajax({
    type:'POST',
    url: ajaxurl,
    data:'action=nbu_updates&'+dats,
    beforeSend:animation,
    success:function(data){
        $('#nbu_text').val(data);
        // $('.eror').html(data);
            $('#ubu_udpade').html('Оновлено');
            $('#loadgif').css("display","none");
    },error:  function(xhr, str){
     // alert('Возникла ошибка: ' + xhr.responseCode);
    }

    });
  });

/*
изменения select
*/
  $( "#selectnbu" ).change(function () {
    function animation(){
      $('#ubu_udpade').html('Обновляю');

    }
    var dats = $("#nbu_save_form").serialize();
    console.log(dats);

    $.ajax({
      type:'POST',
      url: ajaxurl,
      data:'action=nbu_updates&'+dats,
      beforeSend:animation,
      success:function(data){
          $('#nbu_text').val(data);
          // $('.eror').html(data);
              $('#ubu_udpade').html('Обновлено');
              $('#loadgif').css("display","none");
      },error:  function(xhr, str){
       // alert('Возникла ошибка: ' + xhr.responseCode);
      }

      })


  });
//
$('#nbu_DB').bind("click",function() {
  function animation(){
    $('#nbu_DB').html('Обновляю');
        $('#loadgif').css("display","block");

  }
  $.ajax({
    type:'POST',
    url: ajaxurl,
    data:'action=nbu_updatesDB',
    beforeSend:animation,
    success:function(data){
        $('#nbu_text').val(data);
        // $('.eror').html(data);
            $('#nbu_DB').html('Оновлено');
            $('.alertoption').html('Данные загружены, установите валюту!');
            $('#loadgif').css("display","none");
            
    },error:  function(xhr, str){
     // alert('Возникла ошибка: ' + xhr.responseCode);
    }

    });
  });






});
