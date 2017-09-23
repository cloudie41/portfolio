$('.hamburger').on('click', function(){
  console.log('button is clicked')
  $('.nav-links').addClass('active');
});

$('.close').on('click', function(){
  console.log('button is clicked')
  $('.nav-links').removeClass('active');
});
