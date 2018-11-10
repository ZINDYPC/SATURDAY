
$(document).ready(function () {
    $(".event-image").fadeIn();
    $(".buy").fadeIn();

    //cambio de color en date area del header
    let originalColor = "#ffffff";
    $("#date h3").mouseleave(function () {
        $(this).css("color", originalColor);
        console.log('the div was pressed!');
    });

    $("#date h3 ").mouseenter(function () {
        originalColor = $(this).css("color");
        $(this).css("color", "#f1c40f");
        console.log('the div was hover overed!');
    });

    //cambio de color letras en concert title
    $("#concert-title").mouseleave(function () {
        $(this).css("color", originalColor);
        console.log('the div was pressed!');
    });

    $("#concert-title").mouseenter(function () {
        originalColor = $(this).css("color");
        $(this).css("color", "#f1c40f");
        console.log('the div was hover overed!');
    });

    //funcion de ticket sale

    function ticketSale() {
        let name = prompt("What is your name?");//definicion 
        let email = prompt("What is your email?");
        let quantity = prompt("How many tickets you want?");

        if (name !== "" || email !== "" || quantity !== "") { //validacion para que en todos los campos hay algo escrito
            $("#name").html(name);
            $("#email").html(email);
            $("#quantity").html(quantity);
            $(".buy h2").html("Congrats! Order Placed!");
        }
    }
    $(".buy").click(ticketSale);


    $(".daily-lineup").click(function () {
        let dataPictures = $(this).attr("data-pictures");
        $("." + dataPictures).slideDown();
    });

    $(".daily-lineup").dblclick(function () {
        let dataPictures = $(this).attr("data-pictures");
        $("." + dataPictures).slideUp();

    });
});
