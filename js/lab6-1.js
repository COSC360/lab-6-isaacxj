/* jQuery and JavaScript code here for lab6-1.html */
$(document).ready(function() {

    $("#pageTitle").html("Lab 6 - DOM Maniputation");

    var txt1 = $("#msgArea").attr("class");
    var txt2 = "My class is ";
    var res = txt2.concat(txt1);
    $("#msgArea").html(res); 

    $(".btn").css("background-color", "red");
    $("body").css("background-color", "ivory");

    $(".center-icons").addClass("selected");

    $(".panel")
        .on("click", function(){
            $("#message").html("You clicked this panel");
        })
        .on("mouseover", function(e){
            var coorX = e.pageX;
            var coorY = e.pageY;
            $("#message").html("x=" + coorX + " y=" + coorY);
        })
        .on("mouseleave", function(){
            $("#message").html("The mouse has left.");
        });

    var img = $("<img>");
    img.attr("src", "images/art/thumbs/13030.jpg");
    img.appendTo("#panel-2");

    $(".img-responsive")
        .on("mouseover", function(){
            var alt = $(this).attr('alt');
            var src = $(this).attr('src');
            var newsrc = src.replace("small","medium");

            var preview = $('<div id="preview"></div>'); 
            var image = $('<img src="' + newsrc + '" alt="' + alt + '">'); 
            

            $("#panel-2").html(image.wrap(preview));
            $(this).css("filter", "grayscale(100%)");
            $("#preview").fadeIn("1000");

        })
        .on("mouseleave", function(){
            $("#preview").remove();
            $(this).css("filter", "none");
        });

});
