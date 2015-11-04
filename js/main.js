$(document).ready(function() {

  var elevator = new Elevator({
    mainAudio: '/sound/elevator.mp3',
    endAudio: '/sound/ding.mp3',
    duration: 7000
  });

  // Gradient
  var startPos = 0,
      endPos = 3*$(window).height(),
      startColor = [29,29,29],
      endColor = [32,78,160],
      diffColor = [endColor[0] - startColor[0], endColor[1] - startColor[1], endColor[2] - startColor[2]];

  $(document).scroll(function() {
    var pos = ($(this).scrollTop() - startPos) / (endPos - startPos);
    pos = Math.min(1, Math.max(0, pos));
    var bgColor = [Math.round(startColor[0] + diffColor[0] * pos), Math.round(startColor[1] + diffColor[1] * pos), Math.round(startColor[2] + diffColor[2] * pos)];
    $('body').css('background-color', 'rgb(' + bgColor.join(',') +')');
    // $('nav.navbar.navbar-inverse').css('background-color', 'rgb(' + bgColor.join(',') +')');
  });

  // Navbar
  var $bodytag = $('html, body');
  var $gotoTags = $('#goto-who, #goto-what, #goto-committees');
  $gotoTags.click(function(e) {
    var elementName = e.target.id.substr(5);
    $bodytag.animate({
      scrollTop: $('#'+elementName).offset().top
    }, 400);
  });

  $('#elevator').click(function(e){
    elevator.elevate();
  });

  // Arrow
  $('#down').click(function() {
    $('html, body').animate({
      scrollTop: $('#who').offset().top
    }, 400);
  });

  // Committees
  var currentCommittee = 'default';
  var $committeeTags = $('#show-exec, #show-hack, #show-xfair, #show-make, #show-projx, #show-think, #show-devops, #show-mkt, #show-fin');
  $committeeTags.click(function(e) {
    var elementName = e.target.id.substr(5);
    if (currentCommittee !== elementName) {
      $('#show-'+currentCommittee).css('color', 'rgba(242,246,249,1)');
      $('#show-'+elementName).css('color', 'rgba(80,131,191,1)');
      $('#'+currentCommittee).fadeOut('fast', function() {
        $('#'+elementName).fadeIn('fast');
        currentCommittee = elementName;
      });
    }
  });

  // Preload images
  var people = ["andreea", "archis", "ben", "daniel", "elizabeth", "jack", "jason", "jenn", "jenny", "kimberli", "larry", "margaret", "sina"];
  for (var i = 0; i < people.length; i++) {
    var person = people[i];
    var image = new Image();
    var sillyImage = new Image();
    image.src = "/img/team/"+person+".png";
    sillyImage.src = "/img/team/"+person+"-silly.png";
  }

});
