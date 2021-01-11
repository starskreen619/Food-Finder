// hammer swipe stuff

var myElement = document.getElementById('myElement');

// create a simple instance
// by default, it only adds horizontal recognizers
var mc = new Hammer(myElement);

// listen to events...
mc.on("panleft panright", function(ev) {
  //if (ev.type == panleft) {
  // add recipe id to favorites list, 
  // remove recipe id from swipeable list,
  // load next recipe}
    //elif (ev.type == panright) {
    // load next recipe}
    console.log(ev.type +" gesture detected");
  myElement.textContent = ev.type +" gesture detected";
  
});
