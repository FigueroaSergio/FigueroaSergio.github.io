/*$(window).scroll(function() {
    if ($("#menu").offset().top > 56) {
        $("#menu").css({'background':'#25c768'});
        $("#menu").removeClass('navbar-dark');
        $("#menu").addClass('navbar-light');
    } else {
        $("#menu").css({'background':'transparent'});
        $("#menu").removeClass('navbar-light');
        $("#menu").addClass('navbar-dark');
    }
  });*/
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
};

function randomButton() {

    var boton = document.getElementById("randomButton")
    switch (generateRandomNumber(1, 4)) {
        case 1:
            boton.innerHTML = "3D models";
            boton.href = "/3DModels.html"
            break;
        case 2:
            boton.innerHTML = "Android";
            boton.href = "/android.html";
            break;
        case 3:
            boton.innerHTML = "Fotos";
            boton.href = "/fotos.html"
            break;
        case 4:
            boton.innerHTML = "Sobre mi";
            boton.href = "/sobreMi.html"
            break;

    }
}
//se ejecuta cuando se carga el html
onload = function () {
    randomButton();
    //se da un intervalo para ejecutar la funcion
    setInterval(randomButton, 2000);
}