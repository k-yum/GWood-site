function main(){
  $(".description").hide();
  $(".trigger").on("click", function(){
    $(this).next().toggle();
    $(this).toggleClass("active");
  });
}

$(document).ready(main);