
var points = 0;

var yesBtn1 = $('.yes1');
var noBtn1 = $('.No1');

var yesBtn2 = $('.yes2');
var noBtn2 = $('.No2');

var yesBtn3 = $('.yes3');
var noBtn3 = $('.No3');

var yesBtn4 = $('.yes4');
var noBtn4 = $('.No4');

var yesBtn5 = $('.yes5');
var noBtn5 = $('.No5');

var submitBtn = $('.submitBtn');


submitBtn.on("click", addPoint);
function addPoint() {
  console.log("Hi");
  if(yesBtn1.val()==="yes"){
  points = points + 1;
  }
}

console.log(points);


// if (yes-btn.on("click")){
// points += 1;
// console.log(points);

// }
