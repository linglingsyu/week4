$('#hamburger').on('click', function () {
  $('#mobile-menu').slideToggle('slow')
})

$(window).on('resize', function () {
  var width = $(window).width()
  if (width >= 768) {
    $('#mobile-menu').removeAttr('style')
  }
})
