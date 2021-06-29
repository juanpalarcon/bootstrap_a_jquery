$(document).ready(function () {
  let ocultar = $("#ocultar");
  let elemento = $("#elemento");

  ocultar.click(function () {
    $(elemento).hide(900);
  });
});
