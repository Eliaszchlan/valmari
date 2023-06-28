$(".video-container").mouseover(function () {
    $('.courses_video_btn').show();
  }).mouseout(function () {
    $('.courses_video_btn').hide();
  })
  
  $(".courses_video_btn").mouseover(function () {
  $(this).show();
  }).mouseout(function () {
  $(this).hide();
  })


  //courses pagination
  $(".page_first").click(function () {
    $('.page_link_first').css("color", "#55A630");
    $('.page_link_first').css("border", "none");
    $('.page-item_follow').show();
    $('.first_page').show();
    $('.second_page').hide();
    $('.third_page').hide();
    $('.fourth_page').hide();
    $('.fifth_page').hide();
    $('.page-item_back').hide();
    $('.courses_mc').hide();
    $('.courses_onln').hide();
        });
     
    $(".page_second").click(function () {
    $('.page-item_back').show();
    $('.second_page').show();
    $('.first_page').hide();
    $('.third_page').hide();
    $('.fourth_page').hide();
    $('.fifth_page').hide();
    $('.page_link_second').css("color", "#55A630");
    $('.courses_mc').hide();
    $('.courses_onln').hide();
    })
  
    $(".page_third").click(function () {
    $('.page-item_back').show();
    $('.third_page').show();
    $('.first_page').hide();
    $('.second_page').hide();
    $('.fourth_page').hide();
    $('.fifth_page').hide();
    $('.page_link_third').css("color", "#55A630");
    $('.courses_mc').hide();
    $('.courses_onln').hide();
    })
  
    $(".page_fourth").click(function () {
    $('.page-item_back').show();
    $('.fourth_page').show();
    $('.first_page').hide();
    $('.third_page').hide();
    $('.second_page').hide();
    $('.fifth_page').hide();
    $('.page_link_fourth').css("color", "#55A630");
    $('.courses_mc').hide();
    $('.courses_onln').hide();
    })
  
    $(".page_fifth").click(function () {
    $('.page-item_back').show();
    $('.page-item_follow').hide();
    $('.first_page').hide();
    $('.third_page').hide();
    $('.fourth_page').hide();
    $('.second_page').hide();
    $('.page_link_fifth').css("color", "#55A630");
    $('.courses_mc').hide();
    $('.courses_onln').hide();
    $('.fifth_page').show();
    })


    $('.course_m_class').click(function() {   
      $('.courses_pag').hide();
      $('.courses_onln').hide();
      $('.courses_mc').show();
    })
    
    $('.course_online').click(function() {   
      $('.courses_pag').hide();
      $('.courses_mc').hide();
      $('.courses_onln').show();
      
    })

    
    $(".second_day_trigger").click(function(){
      $(".second_day_bottom").toggle();
    });

    // main_video
    $(".main_video_container").mouseover(function () {
      $('.main_video_btn').show();
    }).mouseout(function () {
      $('.main_video_btn').hide();
    })
    
    $(".main_video_btn").mouseover(function () {
    $(this).show();
    }).mouseout(function () {
    $(this).hide();
    })

    // other_video_1
    $(".other_video_container_1").mouseover(function () {
      $('.other_video_btn_1').show();
    }).mouseout(function () {
      $('.other_video_btn_1').hide();
    })
    
    $(".other_video_btn_1").mouseover(function () {
    $(this).show();
    }).mouseout(function () {
    $(this).hide();
    })

    // other_video_2
    $(".other_video_container_2").mouseover(function () {
      $('.other_video_btn_2').show();
    }).mouseout(function () {
      $('.other_video_btn_2').hide();
    })
    
    $(".other_video_btn_2").mouseover(function () {
    $(this).show();
    }).mouseout(function () {
    $(this).hide();
    })

    // other_video_3
    $(".other_video_container_3").mouseover(function () {
      $('.other_video_btn_3').show();
    }).mouseout(function () {
      $('.other_video_btn_3').hide();
    })
    
    $(".other_video_btn_3").mouseover(function () {
    $(this).show();
    }).mouseout(function () {
    $(this).hide();
    })



      //offers pagination
  $(".offers_pagination_1").click(function () {
    $('.offers_pagination_1').css("color", "#55A630");
    $('.offers_pagination_2').css("color", "#424242");
    $('.offers_pagination_3').css("color", "#424242");
    $('.offers_pagination_4').css("color", "#424242");
    $('.offers_pagination_5').css("color", "#424242");
    $('.offers_pagination_next').show();
    $('.offers_list_first').show();
    $('.offers_list_second').hide();
    $('.offers_list_third').hide();
    $('.offers_list_fourth').hide();
    $('.offers_list_fifth').hide();
    $('.offers_pagination_previous').hide();
    });

    $(".offers_pagination_2").click(function () {
      $('.offers_pagination_2').css("color", "#55A630");
      $('.offers_pagination_1').css("color", "#424242");
      $('.offers_pagination_3').css("color", "#424242");
      $('.offers_pagination_4').css("color", "#424242");
      $('.offers_pagination_5').css("color", "#424242");
      $('.offers_pagination_next').show();
      $('.offers_list_second').show();
      $('.offers_list_first').hide();
      $('.offers_list_third').hide();
      $('.offers_list_fourth').hide();
      $('.offers_list_fifth').hide();
      $('.offers_pagination_previous').show();
      });

      $(".offers_pagination_3").click(function () {
        $('.offers_pagination_3').css("color", "#55A630");
        $('.offers_pagination_1').css("color", "#424242");
        $('.offers_pagination_2').css("color", "#424242");
        $('.offers_pagination_4').css("color", "#424242");
        $('.offers_pagination_5').css("color", "#424242");
        $('.offers_pagination_next').show();
        $('.offers_list_third').show();
        $('.offers_list_first').hide();
        $('.offers_list_second').hide();
        $('.offers_list_fourth').hide();
        $('.offers_list_fifth').hide();
        $('.offers_pagination_previous').show();
        });

        $(".offers_pagination_4").click(function () {
          $('.offers_pagination_4').css("color", "#55A630");
          $('.offers_pagination_1').css("color", "#424242");
          $('.offers_pagination_2').css("color", "#424242");
          $('.offers_pagination_3').css("color", "#424242");
          $('.offers_pagination_5').css("color", "#424242");
          $('.offers_pagination_next').show();
          $('.offers_list_fourth').show();
          $('.offers_list_first').hide();
          $('.offers_list_second').hide();
          $('.offers_list_third').hide();
          $('.offers_list_fifth').hide();
          $('.offers_pagination_previous').show();
          });

          $(".offers_pagination_5").click(function () {
            $('.offers_pagination_5').css("color", "#55A630");
            $('.offers_pagination_1').css("color", "#424242");
            $('.offers_pagination_2').css("color", "#424242");
            $('.offers_pagination_3').css("color", "#424242");
            $('.offers_pagination_4').css("color", "#424242");
            $('.offers_pagination_next').hide();
            $('.offers_list_fifth').show();
            $('.offers_list_first').hide();
            $('.offers_list_second').hide();
            $('.offers_list_third').hide();
            $('.offers_list_fourth').hide();
            $('.offers_pagination_previous').show();
            });
  
















    const btn = document.querySelector(".courses_video_btn"),
 video = document.querySelector(".video-container");

     function showVideo() {

btn.addEventListener("click", function () {
  if (!btn.classList.contains("slide")) {
    btn.classList.add("slide");
    video.pause();
  } else {
    btn.classList.remove("slide");
    video.play();
  }
});

     }
 
showVideo()


