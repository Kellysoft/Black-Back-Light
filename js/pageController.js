// fadeClick---function
$('.directionsButton').click(function(){
  $('.directionsContainer').addClass('not-showing');
  $('.allBlackButtonPulse').addClass('is-showing');
  $('.darkContolbar').addClass('is-showing');
  $('.darkContolbar2').addClass('is-showing');
  $('.blackLightLogo').addClass('darkened');
  $('.colorChangerBar').addClass('phantom');
  $('.smitty').addClass('darkened');
  $('#titlePC').addClass('darkened');
  $('#titleMAC').addClass('darkened');
  $('#strobeInstructions').addClass('darkened');
})

// unFadeClick---function
$('.darkContolbar').click(function(){
  $(this).removeClass('is-showing');
  $('.allBlackButtonPulse').removeClass('is-showing');
  $('.darkContolbar2').removeClass('is-showing');
  $('.blackLightLogo').removeClass('darkened');
  $('.directionsContainer').removeClass('not-showing');
  $('.colorChangerBar').removeClass('phantom');
  $('.smitty').removeClass('darkened');
  $('#titlePC').removeClass('darkened');
  $('#titleMAC').removeClass('darkened');
  $('.directionsText').removeClass('darkened');
  $('.allBlackText').removeClass('is-showing');
  $('#strobeInstructions').removeClass('darkened');
})

// allBlack---function 1
$('.darkContolbar2').click(function(){
  $(this).removeClass('is-showing');
  $('.allBlackButtonPulse').addClass('not-showing');
  $('.blackLightLogo').toggleClass('not-showing');
  $('.darkContolbar').toggleClass('not-showing');
  $('.colorChangerBar').toggleClass('not-showing');
  $('.smitty').toggleClass('not-showing');
  $('.directionsButton').toggleClass('not-showing');
  $('#titlePC').toggleClass('not-showing');
  $('#titleMAC').toggleClass('not-showing');
  $('.directionsText').toggleClass('darkened');
  $('#strobeInstructions').toggleClass('not-showing');
})

// allBlack---function 2
$('.opacityBar').click(function(){
  $('.darkContolbar2').toggleClass('is-showing');
  $('.blackLightLogo').toggleClass('not-showing');
  $('.darkContolbar').toggleClass('not-showing');
  $('.colorChangerBar').toggleClass('not-showing');
  $('.smitty').toggleClass('not-showing');
  $('.directionsButton').toggleClass('not-showing');
  $('#titlePC').toggleClass('not-showing');
  $('#titleMAC').toggleClass('not-showing');
  $('.directionsText').toggleClass('darkened');
  $('#strobeInstructions').toggleClass('not-showing');
})

// Body Color Click---function
$('#blackColor').click(function(){
  $('body').css('background-color', 'black');
  $('.darkControlText').css('color', 'black');
})
$('#blueColor').click(function(){
  $('body').css('background-color', 'blue');
  $('.darkControlText').css('color', 'blue');
})
$('#redColor').click(function(){
  $('body').css('background-color', 'red');
  $('.darkControlText').css('color', 'red');
})
$('#orangeColor').click(function(){
  $('body').css('background-color', 'orange');
  $('.darkControlText').css('color', 'orange');
})
$('#yellowColor').click(function(){
  $('body').css('background-color', 'yellow');
  $('.darkControlText').css('color', 'yellow');
})
$('#greenColor').click(function(){
  $('body').css('background-color', 'forestgreen');
  $('.darkControlText').css('color', 'forestgreen');
})
$('#strobeColor').click(function(){
  $('body').toggleClass('strobe');
})

// Wiggle---function
  $('.smitty.darkened').click(function(){

})
