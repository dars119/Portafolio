$(document).ready(function () {
  $("#imagen").click(function () {
    $(this).hide("slow");
  });
  $("#imagen").click(function () {
    $(this).show("slow");
  });
  $("form").on("submit", function (event) {
    event.preventDefault();
    alert("Gracias " + $("#inputName").val() + " Te contactaré pronto!!");
  });
});
