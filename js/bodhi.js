/*! Bodhi5  | (c) 2014 Bodhi5, Inc.
 */


jQuery(window).load(function() {
  jQuery("#loaderInner").fadeOut();
  jQuery("#loader").delay(400).fadeOut("slow");
  $(".teaserTitle ").stop().animate({
    marginTop: "330px",
    opacity: "1"
  }, 1000, "easeOutQuint");
  $(".shortcat a ").stop().animate({
    marginTop: "65px",
    opacity: "1"
  }, 600, "easeOutQuint");
  equalheight(".service .inner");
  var scrollPos = 0;
  var windowHeight = $(window).height();
  var windowWidth = $(window).width();
  var homeHeight = windowHeight - 100;
  $(".home, .home .video, .home .text").css("height", windowHeight);
  var videoHeight = $(".home video").height();
  videoHeight = (videoHeight - windowHeight) / 2;
  $(".home video").css("top", ("-" + videoHeight + "px"));
  $(".home .video, .home video").css("width", windowWidth);
  var midHeight = windowHeight / 2;
  $(".flex-direction-nav a").css("top", (midHeight + "px"));
  scrollPos = $(this).scrollTop();
  if (scrollPos > 20) {
    $("header").stop().animate({
      backgroundColor: "#111111"
    }, 300)
  } else {
    $("header").stop().animate({
      backgroundColor: "transparent"
    }, 300)
  }
});
$(document).ready(function() {
  $(".home button").click(function(e) {
    var target_offset = $(".about").offset();
    var target_top = target_offset.top;
    $("html,body").animate({
      scrollTop: target_top - 70
    }, 800);
    return false
  });
  $("#navigation ul a, .logo a, .arrow a").click(function(e) {
    var full_url = this.href;
    var parts = full_url.split("#");
    var trgt = parts[1];
    var target_offset = $("#" + trgt).offset();
    var target_top = target_offset.top;
    $("html,body").animate({
      scrollTop: target_top - 70
    }, 800);
    return false
  });
  $("div.presentation, .social li").click(function() {
    var url = $(this).attr("data-url");
    window.location = url
  });
  var scrollPos = 0;
  var windowHeight = $(window).height();
  var homeHeight = windowHeight - 100;
  $(".home").css("height", homeHeight);
  $(".home .overlay").css("height", windowHeight);
  $(document).scroll(function() {
    scrollPos = $(this).scrollTop();
    if (scrollPos > 20) {
      $("header").stop().animate({
        backgroundColor: "#111111"
      }, 300)
    } else {
      $("header").stop().animate({
        backgroundColor: "transparent"
      }, 300)
    }
  });
  var sections = $("section");
  var navigation_links = $("#navigation a");
  var offs = "15%";
  sections.waypoint({
    handler: function(event, direction) {
      var active_section;
      active_section = $(this);
      if (direction === "up") {
        active_section = active_section.prev()
      }
      if (direction === "up") {
        offs = "30%"
      }
      var active_link = $('#navigation a[href="#' + active_section.attr("id") + '"]');
      navigation_links.removeClass("active");
      active_link.addClass("active")
    },
    offset: offs
  });
  $(".logo").click(function(e) {
    var target_offset = $("#home").offset();
    var target_top = target_offset.top;
    $("html,body").animate({
      scrollTop: target_top - 70
    }, 800, "easeOutQuint");
    return false
  });

  $("#submit").click(function() {
    $("input#name").removeClass("form-error");
    $("textarea#message").removeClass("form-error");
    $("input#email").removeClass("form-error");
    var error = false;
    var name = $("input#name").val();
    if (name == "" || name == " ") {
      error = true;
      $("input#name").addClass("form-error")
    }
    var msg = $("textarea#message").val();
    if (msg == "" || msg == " ") {
      error = true;
      $("textarea#message").addClass("form-error")
    }
    var email_compare = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
    var email = $("input#email").val();
    if (email == "" || email == " ") {
      $("input#email").addClass("form-error");
      error = true
    } else {
      if (!email_compare.test(email)) {
        $("input#email").addClass("form-error");
        error = true
      }
    } if (error == true) {
      return false
    }
    var data_string = $(".form form").serialize();
    $.ajax({
      type: "POST",
      url: $(".form form").attr("action"),
      data: data_string,
      success: function(message) {
        if (message === "ok") {
          $("#success").fadeIn("slow")
        } else {
          $("#error").fadeIn("slow")
        }
      }
    });
    return false
  });
  var fade = false;
  $(".mobile-navigation").click(function() {
    if (fade == false) {
      $("#navigation ul").slideDown("fast");
      $("header").stop().animate({
        backgroundColor: "#111111"
      }, 300);
      fade = true;
      return false
    } else {
      $("#navigation ul").slideUp("fast");
      scrollPos = $(window).scrollTop();
      if (scrollPos > 20) {
        $("header").stop().animate({
          backgroundColor: "#111111"
        }, 300)
      } else {
        $("header").stop().animate({
          backgroundColor: "transparent"
        }, 300)
      }
      fade = false;
      return false
    }
  });
  $(".home").parallax("300%", 0.3);
  $(".quotes").parallax("300%", 0.3);
  $(".contact").parallax("300%", 0.3);
  $(".main-slider").flexslider({
    animation: "fade",
    slideshow: true,
    controlNav: false,
    animationSpeed: 1500
  });
  $(".work-preview-slider").flexslider({
    animation: "slide",
    slideshow: true,
    directionNav: false,
    controlNav: true,
    animationSpeed: 600
  });
  $(".quotes-slider").flexslider({
    animation: "slide",
    slideshow: true,
    directionNav: false,
    controlNav: true
  });
  var team = $("div.team");
  $("div.team").hover(function() {
    team.stop().animate({
      opacity: 0.5
    }, "fast");
    $(this).stop().animate({
      opacity: 1
    }, "fast")
  }, function() {
    team.stop().animate({
      opacity: 1
    }, "fast")
  });
  var presentation = $("div.presentation");
  $("div.presentation").hover(function() {
    presentation.stop().animate({
      opacity: 0.5
    }, "fast");
    $(this).stop().animate({
      opacity: 1
    }, "fast")
  }, function() {
    presentation.stop().animate({
      opacity: 1
    }, "fast")
  });
  var services = $("div.service");
  $("div.service").hover(function() {
    services.stop().animate({
      opacity: 0.3
    }, "fast");
    $(this).stop().animate({
      opacity: 1
    }, "fast")
  }, function() {
    services.stop().animate({
      opacity: 1
    }, "fast")
  });
  $(".about button").click(function(e) {
    var target_offset = $("#works").offset();
    var target_top = target_offset.top;
    $("html,body").animate({
      scrollTop: target_top - 70
    }, 800);
    return false
  });
  $(".work .info").css({
    opacity: 0
  });
  $(".work a").hover(function() {
    $(this).children(".info ").stop().animate({
      opacity: 1
    }, "fast")
  }, function() {
    $(this).children(".info ").stop().animate({
      opacity: 0
    }, "slow")
  });
  $(".work").hover(function() {
    var work = $(this).height();
    var offset = ($(this).height() / 2) - ($(this).find(".inner").height() / 2);
    $(this).find(".inner").css("margin-top", offset + 1)
  });
  $(".work a").click(function() {
    var url = $(this).attr("data-url");
    $("#work-preview").load(url, function(response, status, xhr) {
      if (status == "error") {
        var msg = "Sorry but there was an error: ";
        alert(msg + xhr.status + " " + xhr.statusText + " " + url)
      } else {
        $(".work-preview-close").fadeIn("slow");
        $("div.work-preview").fadeIn("slow");
        var target_offset = $(".work-preview-close").offset();
        var target_top = target_offset.top;
        $("html,body").scrollTop(target_top - 70);
        return false
      }
    })
  });
  $("#work-preview-close").click(function() {
    $("section.work-preview").remove();
    $(".work-preview-close").fadeOut();
    $("div.work-preview").fadeOut();
    var target_offset = $(".works").offset();
    var target_top = target_offset.top;
    $("html,body").scrollTop(target_top - 70);
    return false
  })
});
$(window).resize(function() {
  equalheight(".service .inner")
});
equalheight = function(container) {
  var currentTallest = 0,
    currentRowStart = 0,
    rowDivs = new Array(),
    $el, topPosition = 0;
  $(container).each(function() {
    $el = $(this);
    $($el).height("auto");
    topPostion = $el.position().top;
    if (currentRowStart != topPostion) {
      for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
        rowDivs[currentDiv].height(currentTallest)
      }
      rowDivs.length = 0;
      currentRowStart = topPostion;
      currentTallest = $el.height();
      rowDivs.push($el)
    } else {
      rowDivs.push($el);
      currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest)
    }
    for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
      rowDivs[currentDiv].height(currentTallest)
    }
  })
};