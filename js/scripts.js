$(document).ready(function() {
  $("form#insurance").submit(function(event) {
    var side1 = parseInt($("input#side1").val());
    var side2 = parseInt($("input#side2").val());
    var side3 = parseInt($("input#side3").val());

        if (side1 ===side2 && side2 === side3 && side3 === side1) {
          alert("Equilateral Triangle");
      }
        else if (side1 === side2 || side1 === side3 || side2 === side3 ) {
          alert("Isosceles Triangle");
      }
        else if ((side1+side2)<=side3 || (side1+side3)<=side2 || (side2+side3)<=side1) {
          alert("THIS IS NOT A Triangle");
      }
        else if (side1 !== side2 && side2 !== side3 ) {
          alert("Scalene Triangle");
      }
  });
});