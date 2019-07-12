//Remove menu class on scroll down adding solid white bg

$(window).scroll(function () {
  $(this).scrollTop() > 40 ? $(".navbar").addClass("navbar-transform") : $(".navbar").removeClass("navbar-transform")
})
