$(document).ready(function(){
    $("#design,#hocus2").click(function(){
        $("#design").slideToggle();
        $("#hocus2").slideToggle();
    });
 
    $("#dev,#hocus").click(function(){
        $("#dev").slideToggle();
        $("#hocus").slideToggle();
    });
    $("#product,#hocus3").click(function(){
        $("#product").slideToggle();
        $("#hocus3").slideToggle();
    });
    $("#workd").hover(function(){
        $(this).css("background-color", "red");
        }, function(){
        $(this).css("background-color", "white");
      });
        $("#workc").hover(function(){
          $(this).css("background-color", "red");
          }, function(){
          $(this).css("background-color", "white");
      });
        $("#workb").hover(function(){
          $(this).css("background-color", "red");
          }, function(){
          $(this).css("background-color", "white");
      });
      $("#worka").hover(function(){
        $(this).css("background-color", "red");
        }, function(){
        $(this).css("background-color", "white");
     });
     $("#worke").hover(function(){
      $(this).css("background-color", "red");
      }, function(){
      $(this).css("background-color", "white");
     });
     $("#workf").hover(function(){
      $(this).css("background-color", "red");
      }, function(){
      $(this).css("background-color", "white");
     });
     $("#workg").hover(function(){
      $(this).css("background-color", "red");
      }, function(){
      $(this).css("background-color", "white");
     });
     $("#workh").hover(function(){
      $(this).css("background-color", "red");
      }, function(){
      $(this).css("background-color", "white");
     });
     $('.button').click(function(){
        var me = $('#name').val();
        
        alert(name + " Your message has been received. Thank you for reaching out to us");
    })
 });
 