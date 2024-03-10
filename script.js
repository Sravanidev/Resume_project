var navMenuTags = document.querySelectorAll('.nav-menu a');

for(var i=0; i<navMenuTags.length; i++){
  navMenuTags[i].addEventListener('click', function(event){
    event.preventDefault();

    var targetSectionId = this.textContent.trim().toLowerCase();
    var targetSection = document.getElementById(targetSectionId);

    var interval = setInterval(function(){
        var targetSectionCoordinates = targetSection.getBoundingClientRect();

        if(targetSectionCoordinates.top <= 0){
        clearInterval(interval);
        return;
        }
        window.scrollBy(0, 50);
    }, 50);
  });
}

//Smooth Scroll//
//Handle window scroll event.
//Check if the section is visible or not.
//Make sure that the colored div's width values are initialised to Zero.
//Start animation when in that section.
//Store skill level -> using data attribute.

var progressBars = document.querySelectorAll('.skill-progress>div');
var skillsContainer = document.getElementById('skillContainer');

window.addEventListener('scroll', checkScroll);
var animationDone = false;

function initialiseBars(){
  for(let bars of progressBars){
    bars.style.width = 0 +'%';
  }
}

initialiseBars();

function fillBars(){
  for(let bars of progressBars){
    let targetWidth = bars.getAttribute('data-bar-width');
    let currentWidth = 0;
    let interval = setInterval(function(){
      if(currentWidth > targetWidth){
        clearInterval(interval);
        return;
      }
      currentWidth++;
      bars.style.width = currentWidth + '%';
    }, 10);
  }
}

function checkScroll(){
  var coordinates = skillsContainer.getBoundingClientRect();
  if(!animationDone && coordinates.top <= window.innerHeight){
    animationDone = true;
    fillBars();
  }else if(coordinates.top >window.innerHeight){
    animationDone = false;
    initialiseBars();
  }
}